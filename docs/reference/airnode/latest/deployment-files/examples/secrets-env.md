---
title: secrets.env
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Deployment Files → Examples
path: /reference/airnode/latest/deployment-files/examples/secrets-env.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

- Variable names cannot contain dashes (-) or start with a number.

<Tabs>

@tab:Cloud Chain

```sh
AIRNODE_WALLET_MNEMONIC=""
SEPOLIA_PROVIDER_URL=""
SS_COINGECKO_REQUESTS_API_KEY=""

HEARTBEAT_API_KEY=""
HEARTBEAT_URL=""

# Used for GCP only
GCP_PROJECT_ID=""
```

@tab:Local Chain

```sh
AIRNODE_WALLET_MNEMONIC=""
LOCAL_PROVIDER_URL=""
SS_CURRENCY_CONVERTER_API_KEY=""
```

</Tabs>
