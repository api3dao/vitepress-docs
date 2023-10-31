---
title: secrets.env
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.13 → Deployment Files → Examples
path: /reference/airnode/latest/deployment-files/examples/secrets-env.html
version: v0.13
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Variable names cannot contain dashes (-) or start with a number.

::: code-group

```sh [Cloud Providers]
AIRNODE_WALLET_MNEMONIC=""
CLOUD_PROVIDER_URL=""
SS_COINGECKO_REQUESTS_API_KEY=""

HEARTBEAT_API_KEY=""
HEARTBEAT_URL=""

# Used for GCP only
GCP_PROJECT_ID=""
```

```sh [Docker Container]
AIRNODE_WALLET_MNEMONIC=""
LOCAL_PROVIDER_URL=""
SS_CURRENCY_CONVERTER_API_KEY=""
```

:::

<FlexEndTag/>
