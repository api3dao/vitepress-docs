---
title: dAPI Names
pageHeader: dAPIs → Reference
outline: deep
---

<PageHeader/>

# dAPI Names

A dAPI is a live data point associated with human readable `dapiName`. dAPI
definitions simplify access and can return aggregated data feed (beacon) values
or a single data feed (beacon) value. This is suitable where the more recent
data point (meaning its set of beacons could change as needed) is always more
favorable, e.g., in the context of an asset price data feed.

## API3 Market proxy contracts and IProxy

When using a API3 Market proxy contract, a dApp smart contract does not use a
`dapiName`. The `dapiName` is integrated into the proxy contract when it is
deployed by the API3 Market UI. Access to the dAPI is done using the
[IProxy](/dapis/reference/understand/proxy-contracts.md#iproxy-interface-contracts)
interface and the address of the
[proxy contract](/dapis/reference/understand/proxy-contracts.md). There are
hundreds of dAPIs available across many chains. Use the API3 Market to find a
desired dAPI and acquire the address to its proxy contract.

<!--
## With DapiServer functions

::: info Best practice

Consider using dAPIs with
[API3 Market](https:///market.api3.org) proxy contracts. The
API3 Market UI provides a simple experience to set up proxy contract allowing
fast access to any dAPI on many networks.

:::

To use functions directly on the `DapiServer.sol` contract that accept the
`_dapiName` parameter, pass the `_dapiName` as an encoded bytes32 value. This is
done to save gas when a smart contracts calls a "readByName" function on
`DapiServer.sol`.

- [readDataFeedWithDapiName(\_dapiName)](/dapis/reference/functions/read-data-feed-with-dapi-name.md) -
  returns a value and timestamp
- [readDataFeedValueWithDapiName(\_dapiName)](/dapis/reference/functions/read-data-feed-value-with-dapi-name.md) -
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

### Optionally, use Beacon and Beacon set IDs

It is possible to use a Beacon or Beacon set ID by calling
[readDataFeedId()](/dapis/reference/functions/read-data-feed-with-id.md) and
[readDataFeedValueById()](/dapis/reference/functions/read-data-feed-value-with-id.md).
Doing so is considered an advanced user flow. In practice reading with a name
and reading with an ID are very different things. When you read with a name, you
benefit from what the name maps to and how its value is aggregated from sourced
Beacons. API3 manages dAPI name mappings to provide the best possible responses.
When you read with an ID, you will always read a value directly from a Beacon or
Beacon set. Learn more about
[dAPI Composition](/dapis/introduction/what-are-dapis.md).
 -->
