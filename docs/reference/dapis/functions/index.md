---
title: Overview
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → DapServer Contract
path: /reference/dapis/functions/
version:
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

The primary purpose of
[DapiServer.sol](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.1/contracts/dapis/DapiServer.sol)<ExternalLinkImage/>
is to return dAPI values to requesters (smart contracts) with a subscription to
a particular dAPI. dAPIs are an abstraction layer over Beacons and Beacon sets.
A Beacon is a live data feed addressed by an ID, which is derived from an
Airnode address and a template ID. This is suitable where the more recent data
point is always more favorable, e.g., in the context of an asset price data
feed. Beacons can also be seen as one-Airnode data feeds that can be used
individually or combined to build Beacon sets.

## Implementation

`DapiServer.sol` is a PSP requester contract. Unlike RRP, which is implemented
as a central contract, PSP implementation is built into the requester for
optimization.

All the related contracts (including `@api3/airnode-protocol-v1`) can be
imported from the
[@api3/airnode-protocol-v1<ExternalLinkImage/>](https://www.npmjs.com/package/@api3/airnode-protocol-v1)
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

<TodoLink comment="/guides/dapis/call-dapi-dapiserver/"/>

Visit the [Guides](/guides/) section to learn how to use `DapiServer.sol`. Also
visit the function calls of `DapiServer.sol` shown below.

- [readDataFeedWithDapiName()](/reference/dapis/functions/read-data-feed-with-dapi-name.md) -
  Returns a value and timestamp using the dAPI name.
- [readDataFeedValueWithDapiName()](/reference/dapis/functions/read-data-feed-value-with-dapi-name.md) -
  Returns a value using the dAPI name.
- [readDataFeedWithId()](/reference/dapis/functions/read-data-feed-with-id.md) -
  Returns a value and timestamp using a Beacon or Beacon set ID.
- [readDataFeedValueWithId()](/reference/dapis/functions/read-data-feed-value-with-id.md) -
  Returns a value using a Beacon or Beacon set ID.
- [readerCanReadDataFeed()](/reference/dapis/functions/reader-can-read-datafeed.md) -
  Whether a reader can read a dAPI, Beacon, or Beacon set.
- [dataFeedIdToReaderToWhitelistStatus()](/reference/dapis/functions/data-feed-id-to-reader-to-whitelist-status.md)
  Details about the coverage policy status of a reader address for a dAPI,
  Beacon, or Beacon set.

## Read Access

`DapiServer.sol` will check that the requester has read access for each dAPI it
may attempt to read. See available dAPIs on the
[API3 Market<ExternalLinkImage/>](https://market.api3.org) which can be used to
gain access to a dAPI. During the preview period, all dAPIs on production
networks have free access (limited time offer). See
[Chains and Contracts](/reference/dapis/chains.md), which lists supported
networks.
