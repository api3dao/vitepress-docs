---
title: Migration Guide
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.11
path: /reference/airnode/latest/migration.html
version: v0.11
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

The following guide assumes a valid v0.10.x `config.json` file. All changes
listed below will need to be implemented in order to migrate to Airnode v0.11.x.
This document is written in a way that will preserve existing behavior with
earlier Airnode versions.

The document also mentions changes to user facing services related to Airnode,
such as airnode-deployer, airnode-admin, etc., and new features.

## Summary

1. `ois[n].oisFormat` updated to "2.0.0".

2. `nodeSettings.nodeVersion` updated to "0.11.0".

3. `ois[n].endpoints[n].preProcessingSpecifications` and
   `ois[n].endpoints[n].postProcessingSpecifications` have an updated allowed
   Node environment value.

4. `chains[n].authorizers.requesterAuthorizersWithErc721` and
   `chains[n].authorizers.crossChainRequesterAuthorizersWithErc721` added.

## Details

1. `ois[n].oisFormat`

Updated to "2.0.0"

```diff
{
- "oisFormat": "1.4.0"
+ "oisFormat": "2.0.0"
}
```

2. `nodeSettings.nodeVersion`

Updated to "0.11.0"

```diff
{
- "nodeVersion": "0.10.0"
+ "nodeVersion": "0.11.0"
}
```

3. `ois[n].endpoints[n].preProcessingSpecifications` and
   `ois[n].endpoints[n].postProcessingSpecifications`

Removes `14` from the `Node 14` environment value to represent that the Node
version of the pre- and post-processing environments is dictated by the Node.js
version of Airnode. As of v0.11, the Node.js version of Airnode was upgraded
from 14 to 18.

```diff
{
  "preProcessingSpecifications": [
    {
-     "environment": "Node 14",
+     "environment": "Node",
      "timeoutMs": 5000,
      "value": ""
    }
  ]
}
```

```diff
{
  "postProcessingSpecifications": [
    {
-     "environment": "Node 14",
+     "environment": "Node",
      "timeoutMs": 5000,
      "value": ""
    }
  ]
}
```

4. `chains[n].authorizers.requesterAuthorizersWithErc721` and
   `chains[n].authorizers.crossChainRequesterAuthorizersWithErc721`

Adds two new authorizers, `requesterAuthorizersWithErc721` and
`crossChainRequesterAuthorizersWithErc721`, that enable request authorization
using ERC721 tokens. These new fields are required, but their values may be
empty arrays if this feature is not required. For further details, see the
[Authorizers](/reference/airnode/latest/concepts/authorizers.md#how-are-authorizers-implemented)
page.

```diff
  "chains": [
    {
      "authorizers": {
        "requesterEndpointAuthorizers": [],
-       "crossChainRequesterAuthorizers": []
+       "crossChainRequesterAuthorizers": [],
+       "requesterAuthorizersWithErc721": [],
+       "crossChainRequesterAuthorizersWithErc721": []
      },
    }
  ]
```

## New features

- The Node.js version of Airnode was upgraded from 14 to 18.
- The `coingecko-signed-data` and `coingecko-testable` HTTP gateway
  `airnode-examples` integrations have been combined into a single
  `coingecko-http-gateways` integration.
