---
title: ID and Name Schemes
pageHeader: dAPIs → Reference
outline: deep
---

<PageHeader/>

# ID and Name Schemes

An Airnode places the value of a data feed on-chain into a beacon. Therefore
beacons are the on-chain persistent state of a data feed value.

What is the difference between a dAPI name and a beacon or beacon set ID? dAPI
names are the principle means used to get API provider data held by beacons. Any
one beacon, identified by an ID, has a single value. A dAPI may in fact get
values from several beacons and average the values, and/or apply other logic,
before returning a single value to the reader.

dAPIs can be fluid because they use a publicly known set of beacons to source
values from. The list of beacons could be altered for best-in-time results (e.g.
beacon availability) without a dApp owner needing to change the code of its
smart contract. Beacons could come and go but dAPIs are durable. Because of this
flexibility it is always best to use a dAPI, identified by its name, rather than
beacon IDs which are fixed.

- dAPI name: A human readable name that represents a beacon or beacon set. The
  name is assigned when the dAPI is created and never changes.
- Beacon ID: The hash of a beacon's parameters.
- Beacon set ID: The hash of the beacon IDs in the beacon set.

<!--
## dAPI Names

A dAPI's name is identical across all chains. When accessing a dAPI value with a
function such as
[readDataFeedWithName()](/dapis/reference/functions/read-data-feed-with-dapi-name.md),
the `dapiName` is passed as an encoded bytes32 value. Try the code sample below
in the [ethers playground](https://playground.ethers.org/). Also see
[Encode the dapiName](/dapis/reference/).

```solidity
ethers.utils.formatBytes32String("AVAX/USD");
```

## Beacon IDs

A Beacon's ID and its template are identical across chains. When accessing a
Beacon's value with a function such as
[readDataFeedWithId()](/dapis/reference/functions/read-data-feed-with-id.md),
the `beaconId` is needed.
-->
