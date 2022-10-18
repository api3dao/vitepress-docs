---
title: DapiServer.sol
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /dapis/dapi-server-sol.html
version:
outline: deep
tags:
  - dapiserver
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

The
[DapiServer.sol](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.1/contracts/dapis/DapiServer.sol)<ExternalLinkImage/>
contract serves data feeds to contracts with read access. All the related
contracts can be imported from the
[@api3/airnode-protocol-v1](https://www.npmjs.com/package/@api3/airnode-protocol-v1)<ExternalLinkImage/>
npm package.

```
npm i @api3/airnode-protocol-v1
```

```solidity
import "@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol";
contract mySmartContract {
  ...
}
```

`DapiServer.sol` is a PSP requester contract. Unlike RRP, which is implemented
as a central contract, PSP implementation is built into the requester for
optimization.

The primary purpose of `DapiServer.sol` is to return dAPI values to requesters.
dAPIs are an abstraction layer over Beacons and Beacon sets. A Beacon is a live
data feed addressed by an ID, which is derived from an Airnode address and a
template ID. This is suitable where the more recent data point is always more
favorable, e.g., in the context of an asset price data feed. Beacons can also be
seen as one-Airnode data feeds that can be used individually or combined to
build Beacon sets.

Visit the [Guides](/guides/dapis/) section to learn how to use `DapiServer.sol`.
Also visit the function calls of `DapiServer.sol` shown below.

- [readDataFeedWithDapiName()](./functions/read-data-feed-with-dapi-name.md) -
  Returns a value and timestamp using the dAPI name.
- [readDataFeedValueWithDapiName()](./functions/read-data-feed-value-with-dapi-name.md) -
  Returns a value using the dAPI name.
- [readDataFeedWithId()](./functions/read-data-feed-with-id.md) - Returns a
  value and timestamp using a Beacon or Beacon set ID.
- [readDataFeedValueWithId()](./functions/read-data-feed-value-with-id.md) -
  Returns a value using a Beacon or Beacon set ID.
- [readerCanReadDataFeed()](./functions/reader-can-read-datafeed.md) - Whether a
  reader can read a dAPI, Beacon, or Beacon set.
- [dataFeedIdToReaderToWhitelistStatus()](./functions/data-feed-id-to-reader-to-whitelist-status.md)
  Details about the coverage policy status of a reader address for a dAPI,
  Beacon, or Beacon set.
