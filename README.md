# Sudo Decentralized Identity Cloud Agent SDK

## Overview

The Decentralized Identity Cloud Agent SDK provides a set of Typescript
APIs enabling applications to implement decentralized identity functionality.
Decentralized Identity Cloud Agent SDK is based around [Anonyomes fork](https://github.com/anonyome/aries-cloudagent-python)
of Hyperledger Aries Cloud Agent Python.

## Key Features

- Typescript SDK wrappers to access all the functionality provided by
  [Anonyomes fork](https://github.com/anonyome/aries-cloudagent-python) of Hyperledger Aries Cloud Agent Python.

  - Ability to create Decentralized Identifiers, Schemas and Credential Definitions on the Local
    Ledger
  - Ability to Issue, Hold and Verify Credentials based on Credential Definitions
  - Ability to revoke issued credentials

- Quickly setup and takedown a local Decentralized Identity development
  environment using docker-compose (currently only MacOS). There are currently two playground modes supported :

  ### Standalone Endorser Mode (Legacy and Default mode)

  This mode creates the following local docker environment

  - A running 4 Node Indy Decentralized Ledger
  - A Decentralized Identity Cloud Agent with write permissions to the Indy Ledger
  - A configured and running Tails File Server to support revocable credentials
  - A mockserver agent to display webhook callbacks and provide configurable forwarding of callbacks as the controller is developed

  ### Author Automatic, Endorser Automatic Mode (playgroundMode=author_auto_endorser_auto)

  This mode is intended to allow local controller development of more complex scenarios. In this scenario, ledger transactions are created by an Author agent which are automatically forwarded to an Endorser for signing before being written to a Ledger (ie. Authors and Endorsers have different Ledger [permissions](https://github.com/anonyome/aries-cloudagent-python/blob/main/Endorser.md) through their DID). This playground mode allows development of both Author and Endorser controllers by creating the following local docker environment

  - A running 4 Node Indy Decentralized Ledger
  - A configured and running Tails File Server to support revocable credentials
  - A Decentralized Identity Cloud Agent with **endorser** permissions on the Indy Ledger, configured to automatically action **ALL** Endorsement signing requests received over DIDComm connections.
  - An Endorser mockserver agent to display webhook callbacks and provide configurable forwarding of callbacks as the Endorser controller is developed
  - A Decentralized Identity Cloud Agent with **user** permissions on the Indy Ledger, configured to create a DIDComm connection to the Endorser and use that Endorser agent for signing Ledger transactions
  - An Author mockserver agent to display webhook callbacks and provide configurable forwarding of callbacks as the Author controller is developed

## Version Support

| Technology     | Supported version |
| -------------- | ----------------- |
| docker desktop | 4.11.0            |
| docker compose | 2.7.0             |
| yarn           | 4+                |

## Integration Instructions

To use the Decentralized Identity Cloud Agent SDK in a Web or Node.js project you
must add `@sudoplatform-labs/sudo-di-cloud-agent` as a dependency to your project.

```
yarn add '@sudoplatform-labs/sudo-di-cloud-agent'
# or
npm install --save '@sudoplatform-labs/sudo-di-cloud-agent'
```

You will need to have [docker desktop](https://hub.docker.com/editions/community/docker-ce-desktop-mac) installed on your machine to run the ledger,
agent, mockserver and tails file server, images.

**NOTE:** Make sure `Use Docker Compose V2` is set in the Docker Desktop preferences since the container naming scheme is different between Docker Compose V1 and V2.

## Public Interfaces

### Local Development Environment Overview

To create and destroy a local standalone agent development environment (currently MacOS only), run the di-env utility.

```
yarn di-env up -s <your 32 character standalone agent secret wallet seed>
yarn di-env down
```

Other options can be seen with `yarn di-env`
You must specify the 32 byte secret seed used to create the wallet on the `up` command or in a `acapy.conf` configuration file. Since the seed should never be exposed to the public, a default is never provided by `di-env`.

### Standalone endorser mode, detailed usage examples

#### Setup for a new React Controller App

1. `yarn global add create-react-app`
2. `create-react-app <app-name>`
3. `cd <app-name>`
4. `yarn add @sudoplatform-labs/sudo-di-cloud-agent`
5. `cp node_modules/@sudoplatform-labs/sudo-di-cloud-agent/bin/acapy.json <your apps root location>`
6. Edit acapy.json and add element `"endorserSeed": “<32 byte seed>”,`
7. `yarn di-env up -c <absolute path to acapy.json>`

#### Accessing the local Cloud Agent and VON Development Ledger Directly

After the `yarn di-env up` command has completed :

- The Cloud Agent swagger interface can be accessed at the `endorserAcapyAdminUri` field location specified in the `acapy.json` config file (e.g. http://localhost:8201)
- The VON Ledger web UI can be accessed on http://localhost:9000

#### Seeing container log output

- To see the logs for Cloud Agent, Tails File Server and MockServer webhook handler run `yarn di-env logs`
- The level of logging defaults to INFO but can be set using the `-v` switch to `di-env up`

#### Using MockServer to develop webhook handlers

After the `yarn di-env up` command has completed :

- The mockserver dashboard can be accessed at http://localhost:1080/mockserver/dashboard. This dashboard will display all the webhook callback information received from the running Cloud Agent.
- The configuration for mockserver is initialised from a file during the `di-env up` command. The absolute path for a custom initialisation file can be specifed either using the `endorserMockServerConfigFile` field in `acapy.json` or via the `-m` switch to the `di-env up` command. If neither is specified a default initialisation is used.
- The [mockserver](https://mock-server.com/#what-is-mockserver) website contains details on how to write configuration to forward specific routes on to your controller as development progresses.

#### Providing a Public Cloud Agent Endpoint via ngrok to interact with Mobile/External Agents

1. Download and unpack the [ngrok free version](https://ngrok.com/download)
2. In a terminal where you unpacked ngrok run
   - `ngrok http <acapy.json "endorserAcapyInboundPort" value >`
   - Save the URL printed out by ngrok (i.e. it will be something like `http://0e51393f5372.ngrok.io`)
3. Start the environment specifying the -e switch and the URL from ngrok along with the -c config file path
   - `yarn di-env up -e <ngrok provided public endpoint> -c <absolute path to acapy.json>`

#### Using a Public Ledger for testing (e.g Sovrin BuilderNet)

**IMPORTANT** : When using a public test ledger, information written is persistent and immutable. Personally Identifiable Information (PII) **MUST NOT** be written and is a major reason why the Transaction Authors Agreement (TAA) must be signed in the acceptance/setup process.
It is recommended that as much development activity as possible is performed with the local VON Ledger before using a Public ledger.

1. `di-env up -l -c <absolute path to acapy.json> -g <url to genesis file for ledger>`
   - As an example you could use the [Sovrin BuilderNet Genesis URL](https://raw.githubusercontent.com/sovrin-foundation/sovrin/stable/sovrin/pool_transactions_builder_genesis) or [Sovrin StagingNet Genesis URL](https://raw.githubusercontent.com/sovrin-foundation/sovrin/stable/sovrin/pool_transactions_sandbox_genesis)
   - The genesis file URL can also be placed in the acapy.json config file using the `ledgerGenesisURL` key.
2. Obtain the did created from the seed at startup via the swagger interface at http://localhost:8201/api/doc#/wallet/get_wallet_did
3. Use the did and verkey returned to create an endorser DID on the appropriate public test ledger (e.g for Sovrin test networks go [here](https://selfserve.sovrin.org))
4. Extract the ledger taa `text` field from the output returned by the following command
   - `curl -X GET "http://localhost:8201/ledger/taa" -H "accept: application/json"`
5. Use the taa accept swagger interface at `http://localhost:8201/api/doc#/ledger/post_ledger_taa_accept`
   - Choose an appropriate `mechanism` value returned from step 4 in the `aml_record->aml` object (e.g `for_session`)
   - Use the `taa_record-> text` field **EXACTLY** as returned in step 4 (i.e. this will have a `\ufeff` value at the beginning which is not captured if you use the swagger ui in step 4 and will fail later when you try and write something to the ledger)
   - Use the `taa_record->version` field returned in step 4 (e.g. currently 2.0)
6. Once this has been done it is possible to write new DIDs and Schemas/Credential Definitions to the Public Ledger using the relevant Swagger APIs or Typescript library provided by the SDK.

### SDK Class and Method Documentation

The Decentralized Identity Cloud Agent SDK installs local typedoc
generated, HTML documentation. This will be located in the
`@sudoplatform-labs/sudo-di-cloud-agent/docs` directory under the
relevent `node_modules` install location. The latest version of
documentation can also be found online at [Github](https://sudoplatform-labs.github.io/sudo-di-cloud-agent-js/)

## Questions and Support

File any issues you find on the project's GitHub repository. Be careful not to share any Personally Identifiable Information (PII) or sensitive account information (API keys, credentials, etc.) when reporting an issue.

For general inquiries related to the Sudo Platform, please contact [partners@sudoplatform.com](mailto:partners@sudoplatform.com)
