# Sudo Decentralized Identity Cloud Agent SDK

## Overview

The Decentralized Identity Cloud Agent SDK provides a set of Typescript
APIs enabling applications to implement decentralized identity functionality.
Decentralized Identity Cloud Agent SDK is based around
[Hyperledger Aries Cloud Agent Python](https://github.com/hyperledger/aries-cloudagent-python).

## Key Features

- Quickly setup and takedown a local Decentralized Identity development
  environment using docker containers (currently only MacOS)
  - A running 4 Node Indy Decentralized Ledger
  - A configured and running Decentralized Identity Cloud Agent based on the
    [Hyperledger Aries Cloud Agent Python](https://github.com/hyperledger/aries-cloudagent-python)
- Typescript SDK wrappers to access all the functionality provided by
  [Hyperledger Aries Cloud Agent Python](https://github.com/hyperledger/aries-cloudagent-python)
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

### Local Development Environment

To start and stop a local development environment (currently MacOS only), run the di-env utility.

```
yarn di-env start
yarn di-env down
```

Other options can be seen with `yarn di-env`

### SDK Class and Method Documentation

The Decentralized Identity Cloud Agent SDK installs local typedoc
generated, HTML documentation. This will be located in the
`@sudoplatform/sudo-di-cloud-agent/doc` directory under the
relevent node_modules install location.

## Questions and Support

File any issues you find on the project's GitHub repository. Be careful not to share any Personally Identifiable Information (PII) or sensitive account information (API keys, credentials, etc.) when reporting an issue.

For general inquiries related to the Sudo Platform, please contact [partners@sudoplatform.com](mailto:partners@sudoplatform.com)
