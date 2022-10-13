---
title: secrets.env
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Deployment Files
basePath: /airnode/latest/deployment-files/
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

The `secrets.env` file is bundled with a [config.json](config-json.md) file and
contains the secrets that the respective Airnode deployments will need. All
variables defined in a `secrets.env` file will be available in the `config.json`
file via variable interpolation (e.g. `${VARIABLE_NAME}`).

There are few pieces of data that are **highly recommend** to be provided via
variables. The variable names shown can be adjusted to anything desired. Just be
sure to change the correlating interpolation value in `config.json`.

| Variable name             | `config.json` field name               | Description                                           |
| ------------------------- | -------------------------------------- | ----------------------------------------------------- |
| AIRNODE_WALLET_MNEMONIC   | `nodeSettings.airnodeWalletMnemonic`   | The wallet mnemonic that will be used by the Airnode  |
| CHAIN_PROVIDER_URL        | `chains[].providers.<name>.url`        | The blockchain provider url                           |
| SS_MY_API_KEY             | `apiCredentials[].securitySchemeValue` | A security scheme value                               |
| HEARTBEAT_URL             | `nodeSettings.heartbeat.url`           | The URL to make the heartbeat request to              |
| HEARTBEAT_API_KEY         | `nodeSettings.heartbeat.apiKey`        | The API key to authenticate against the heartbeat URL |
| HEARTBEAT_ID              | `nodeSettings.heartbeat.id`            | The Airnode heartbeat ID for accounting purposes      |
| GCP_PROJECT_ID            | `nodeSettings.cloudProvider.projectId` | (GCP only) The GCP                                    |
| project ID for deployment |

Below is an example of `secrets.env`.

- Variable names cannot contain dashes (-) or start with a number.

<!-- TODO: Reference a file from Airnode examples instead -->

```
AIRNODE_WALLET_MNEMONIC="achieve climb couple wait accident symbol spy blouse reduce foil echo label"
CHAIN_PROVIDER_URL="https://mainnet.infura.io/v3/5122f3ff104f30f21412aa38fd143d53"

SS_MY_API_KEY="FRACZKMH4F32BZ8X5uTd"

HEARTBEAT_API_KEY="d714a900-3b9e-4e4d-8eae-756ef06a8836"
HEARTBEAT_URL="https://your.heartbeat.service.io/airnode"

# GCP only
GCP_PROJECT_ID="my-gcp-airnode-project-01"
```
