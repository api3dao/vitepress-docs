---
title: Using dAPI Names
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /reference/dapis/dapi-name.html
version:
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

A dAPI is a live data point associated with human readable `dapiName`. dAPI
definitions simplify access and can return aggregated Beacon values or a single
Beacon value. This is suitable where the more recent data point (meaning its set
of Beacons could change as needed) is always more favorable, e.g., in the
context of an asset price data feed.

## When using a proxy contract

When using a API3 Market proxy contract your smart contract does not need to use
a `dapiName` as a parameter to the `read()` function inside the proxy contract.
The `dapiName` is integrated for you when the proxy contract is deployed by the
API3 Marker UI. You can create more than one proxy contract where each is tied
to a single dAPI. If you want to use a different dAPI just update the proxy
address you'll be reading from inside you smart contract.

::: danger TODO

Need an image here of the proxy contract flow to `read()`,

:::

## Encode the `dapiName`

To use functions on the `DapiServer.sol` contract that accept the `_dapiName`
parameter, pass the `_dapiName` as an encoded bytes32 value. This is done to
save gas when a smart contract calls a "readByName" function on
`DapiServer.sol`.

- [readDataFeedWithDapiName(\_dapiName)](./functions/read-data-feed-with-dapi-name.md) -
  returns a value and timestamp
- [readDataFeedValueWithDapiName(\_dapiName)](./functions/read-data-feed-value-with-dapi-name.md) -
  returns a value

The example below generates the encoded bytes32 value of AVAX/USD. Try encoding
AVAX/USD in the [ethers playground](https://playground.ethers.org/).

```solidity
// Encode the dapiName (such as AVAX/USD) to bytes32
ethers.utils.formatBytes32String("AVAX/USD");
// Yields: 0x415641582f555344000000000000000000000000000000000000000000000000
```

Then pass the encoded value to either `readDataFeedWithDapiName()` or
`readDataFeedValueWithDapiName()`.

```solidity
// Calling readDataFeedWithDapiName() using the DapiServer contract
(value, timestamp) =
  IDapiServer(_dapiServerContractAddress).readDataFeedWithDapiName("0x415641582f555344000000000000000000000000000000000000000000000000");
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
[dAPI Composition](/explore/dapis/what-are-dapis.html#dapi-composition).
