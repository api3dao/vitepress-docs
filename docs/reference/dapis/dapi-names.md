---
title: dAPI Names
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /dapis/dapi-names.html
version:
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

A dAPI is a live data point associated with human readable `name`. dAPI
definitions simplify access and can return aggregated Beacon values or a single
Beacon value. This is suitable where the more recent data point (meaning its set
of Beacons could change as needed) is always more favorable, e.g., in the
context of an asset price data feed.

Pass a dAPI `name` to the appropriate `DapiServer.sol` reader function.

- [readDataFeedWithDapiName(\_dapiName)](./functions/read-data-feed-with-dapi-name.md) -
  returns a value and timestamp
- [readDataFeedValueWithDapiName(\_dapiName)](./functions/read-data-feed-value-with-dapi-name.md) -
  returns a value

```solidity
// Calling the ETH/USD dAPI using the DapiServer contract
(value, timestamp) =
  IDapiServer(_dapiServerContractAddress).readDataFeedWithDapiName("ETH/USD");
```

## Optionally, use Beacon and Beacon set IDs

It is possible to use a Beacon or Beacon set ID by calling
[readDataFeedId()](./functions/read-data-feed-with-id.md) and
[readDataFeedValueById()](./functions/read-data-feed-value-with-id.md). Doing so
is considered an advanced user flow. In practice reading with a name and reading
with an ID are very different things. When you read with a name, you benefit
from what the name maps to and how its value is aggregated from sourced Beacons.
API3 manages dAPI name mappings to provide the best possible responses. When you
read with an ID, you will always read a value directly from a Beacon or Beacon
set. Also see
[dAPI Composition](/explore/dapis/what-are-dapis.md#dapi-composition).
