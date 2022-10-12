---
title: secrets.env
sidebarHeader: Reference
sidebarSubHeader: Airnode
version: v1.0
basePath: /airnode/latest/templates/
outline: deep
tags:
---

<VersionWarning/>

<PageHeader>v1.0 → Templates </PageHeader>

# {{$frontmatter.title}}

The `secrets.env` contains the secrets that the respective Airnode deployments
will need. All variables defined in a `secrets.env` can be interpolated inside
`config.json`. For more details, see the full description of the
[secrets.env](../deployment-files/secrets-env.md) file.

- Variable names cannot contain dashes (-) or start with a number.

```sh
AIRNODE_WALLET_MNEMONIC="<FILL_*>"
CHAIN_PROVIDER_URL="<FILL_*>"
SS_API_KEY="<FILL_*>"

HEARTBEAT_API_KEY="<FILL_*>"
HEARTBEAT_URL="<FILL_*>"

# Used for GCP only
GCP_PROJECT_ID="<FILL_*>"
```
