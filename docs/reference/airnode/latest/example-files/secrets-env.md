---
title: secrets.env
sidebarHeader: Reference
sidebarSubHeader: Airnode
basePath: /airnode/latest/example-files/
outline: deep
tags:
---

<VersionWarning/>

<PageHeader>v1.0 → Example Files </PageHeader>

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
