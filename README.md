# Sudo Decentralized Identity Cloud Agent SDK

## Overview

The Decentralized Identity Cloud Agent SDK provides a set of Typescript
APIs enabling applications to implement decentralized identity functionality.
Decentralized Identity Cloud Agent SDK is based around [Anonyomes fork](https://github.com/anonyome/aries-cloudagent-python)
of Hyperledger Aries Cloud Agent Python.

## Key Features

- Quickly setup and takedown a local Decentralized Identity development
  environment using docker containers (currently only MacOS)
  - A running 4 Node Indy Decentralized Ledger
  - A configured and running Decentralized Identity Cloud Agent
- Typescript SDK wrappers to access all the functionality provided by
  [Anonyomes fork](https://github.com/anonyome/aries-cloudagent-python) of Hyperledger Aries Cloud Agent Python.
  - Ability to create Decentralized Identifiers, Schemas and Credential Definitions on the Local
    Ledger
  - Ability to Issue, Hold and Verify Credentials based on Credential Definitions

## Version Support

| Technology | Supported version |
| ---------- | ----------------- |


## Integration Instructions

To use the Decentralized Identity Cloud Agent SDK in a Web or Node.js project you
must add `@sudoplatform/sudo-di-cloud-agent` as a dependency to your project.

```
yarn add '@sudoplatform/sudo-di-cloud-agent'
# or
npm install --save '@sudoplatform/sudo-di-cloud-agent'
```

## Public Interfaces

### Local Development Environment Overview

To start and stop a local development environment (currently MacOS only), run the di-env utility.

```
yarn di-env start -s <your 32 character secret wallet seed>
yarn di-env down
```

Other options can be seen with `yarn di-env`
You must specify the 32 byte secret seed used to create the wallet on the `start` command or in a `acapy.conf` configuration file. Since
the seed should never be exposed to the public, a default is never provided by `di-env`.

### Detailed Usage Examples

#### Setup for a new React App

1. `yarn global add create-react-app`
2. `create-react-app <app-name>`
3. `cd <app-name>`
4. `yarn add @sudoplatform-labs/sudo-di-cloud-agent`
5. `cp node_modules/@sudoplatform-labs/sudo-di-cloud-agent/bin/acapy.json <your apps root location>`
6. Edit public/acapy.json and add element `"endorserSeed": “<32 byte seed>”,`
7. `yarn di-env start -c <absolute path to acapy.json>`

#### Accessing the local Cloud Agent and VON Development Ledger Directly

After the `di-env start` command has completed :

- The Cloud Agent swagger interface can be accessed at the `acapyAdminUri` field location specified in the `acapy.json` config file (e.g. http://localhost:8201)
- The VON Ledger web UI can be accessed on http://localhost:9000

#### Providing a Public Cloud Agent Endpoint via ngrok to interact with Mobile/External Agents

1. Download and unpack the [ngrok free version](https://ngrok.com/download)
2. In a terminal where you unpacked ngrok run
   - `ngrok http <acapy.json "acapyInboundPort" value >`
   - Save the URL printed out by ngrok (i.e. it will be something like `http://0e51393f5372.ngrok.io`)
3. Start the environment specifying the -e switch and the URL from ngrok along with the -c config file path
   - `yarn di-env start -e <ngrok provided public endpoint> -c <absolute path to acapy.json>`

#### Using a Public Ledger for testing (e.g Sovrin BuilderNet)

**IMPORTANT** : When using a public test ledger, information written is persistent and immutable. Personally Identifiable Information (PII) **MUST NOT** be written and is a major reason why the Transaction Authorisation Agreement must be signed in the acceptance/setup process.
It is recommended that as much development activity as possible is performed with the local VON Ledger before using a Public ledger.

1. `di-env start -l -c <absolute path to acapy.json> -g <url to genesis file for ledger>`
   - As an example you could use the [Sovrin BuilderNet Genesis URL](https://raw.githubusercontent.com/sovrin-foundation/sovrin/stable/sovrin/pool_transactions_builder_genesis) or [Sovrin StagingNet Genesis URL](https://raw.githubusercontent.com/sovrin-foundation/sovrin/stable/sovrin/pool_transactions_sandbox_genesis)
   - The genesis file URL can also be placed in the acapy.json config file using the `ledgerGenesisURL` key.
2. Obtain the did created from the seed at startup via the swagger interface at http://localhost:8201/api/doc#/wallet/get_wallet_did
3. Use the did and verkey returned to create an endorser DID on the appropriate public test ledger (e.g for Sovrin test networks go [here](https://selfserve.sovrin.org)
4. Extract the ledger taa `text` field from the output returned by the following command
   - `curl -X GET "http://localhost:8201/ledger/taa" -H "accept: application/json”`
5. Use the taa accept swagger interface at `http://localhost:8201/api/doc#/ledger/post_ledger_taa_accept`
   - Choose an appropriate `mechanism` value returned from step 4 in the `aml_record->aml` object (e.g `for_session`)
   - Use the `taa_record-> text` field **EXACTLY** as returned in step 4 (i.e. this will have a `\ufeff` value at the beginning which is not capture if you use the swagger ui in step 4 and will fail later when you try and write something to the ledger)
   - Use the `taa_record->version` field returned in step 4 (e.g. currently 2.0)
6. Once this has been done it is possible to write new DIDs and Schemas/Credential Definitions to the Public Ledger using the relevant Swagger APIs or Typescript library provided by the SDK.

### SDK Class and Method Documentation

The Decentralized Identity Cloud Agent SDK installs local typedoc
generated, HTML documentation. This will be located in the
`@sudoplatform/sudo-di-cloud-agent/docs` directory under the
relevent node_modules install location. The latest version of
documentation can also be found online at [Github](https://sudoplatform-labs.github.io/sudo-di-cloud-agent-js/)

## Questions and Support

File any issues you find on the project's GitHub repository. Be careful not to share any Personally Identifiable Information (PII) or sensitive account information (API keys, credentials, etc.) when reporting an issue.

For general inquiries related to the Sudo Platform, please contact [partners@sudoplatform.com](mailto:partners@sudoplatform.com)
