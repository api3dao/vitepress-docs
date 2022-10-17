---
title: dAPIs
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /dapis/index.html
version:
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

The
[DapiServer.sol](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.1/contracts/dapis/DapiServer.sol)
contract serves data feeds to contracts with read access. All the related
contracts can be imported from the
[@api3/airnode-protocol-v1](https://www.npmjs.com/package/@api3/airnode-protocol-v1)
npm package.

## Learn to use dAPIs

### Starter Project

The
[data-feed-reader-example](https://github.com/api3dao/data-feed-reader-example)
starter is an example project for reading from dAPI a on the Polygon Mumbai
testnet. Be sure to read through the
[README.md](https://github.com/api3dao/data-feed-reader-example/blob/main/README.md)
and some of the example code such as the
[DataFeedReaderExample.sol](https://github.com/api3dao/data-feed-reader-example/blob/main/contracts/DataFeedReaderExample.sol)
contract. Read through this entire page before running the starter project to
better understand some of the terms and concepts mentioned. Finally follow the
instruction in the README to get acquainted with reading data feeds.

## Coverage Policies

`DapiServer.sol` will check that the requester has a coverage policy for each
dAPI it may attempt to read. See available dAPIs on the
[API3 Market](https://market.api3.org). During the _preview period_, all dAPIs
on production networks have free access (limited time offer). Please go to the
[Request Data](https://forms.monday.com/forms/embed/f44d0ed9dfd0154885f48fdb3b87a489?r=use1)
page to request dAPI access on production networks. See
[Chains and Contracts](../reference/chains.md), which includes supported
networks.

On the Polygon Mumbai testnet, developers can _self-enable_ the use of any dAPI.
During the deployment flow of your smart contract that reads a data feed, add
code that self-enables the desired dAPI. The following scripts from the
[Starter Project](./#starter-project) detail how this is done. Please be sure to
explore the starter project in its entirety.

- [allow-to-read-with-name.js](https://github.com/api3dao/data-feed-reader-example/blob/main/scripts/allow-to-read-with-name.js)
- [allow-to-read-with-id.js](https://github.com/api3dao/data-feed-reader-example/blob/main/scripts/allow-to-read-with-id.js)

## dAPI Names

A dAPI is a live data point associated with human readable `name`. dAPI
definitions simplify access and can return aggregated Beacon values or a single
Beacon value. This is suitable where the more recent data point (meaning its set
of Beacons could change as needed) is always more favorable, e.g., in the
context of an asset price data feed.

Pass a dAPI `name` to the appropriate `DapiServer.sol` reader function.

- [readDataFeedWithDapiName(\_dapiName)](./read-data-feed-with-dapi-name.md) -
  returns a value and timestamp
- [readDataFeedValueWithDapiName(\_dapiName)](./read-data-feed-value-with-dapi-name.md) -
  returns a value

```solidity
// Calling the ETH/USD dAPI using the DapiServer contract
(value, timestamp) =
  IDapiServer(_dapiServerContractAddress).readDataFeedWithDapiName("ETH/USD");
```

::: tip Optionally, use Beacon and Beacon set IDs

It is possible to use a Beacon or Beacon set ID by calling
[readDataFeedId()](./read-data-feed-with-id.md) and
[readDataFeedValueById()](./read-data-feed-value-with-id.md). Doing so is
considered an advanced user flow. In practice reading with a name and reading
with an ID are very different things. When you read with a name, you benefit
from what the name maps to and how its value is aggregated from sourced Beacons.
API3 manages dAPI name mappings to provide the best possible responses. When you
read with an ID, you will always read a value directly from a Beacon or Beacon
set. Also see [dAPI Composition](../#dapi-composition).

:::

## DapiServer Functions

- [readDataFeedWithDapiName()](./read-data-feed-with-dapi-name.md) - Returns a
  value and timestamp using the dAPI name.
- [readDataFeedValueWithDapiName()](./read-data-feed-value-with-dapi-name.md) -
  Returns a value using the dAPI name.
- [readerCanReadDataFeed()](./reader-can-read-datafeed.md) - Whether a reader
  can read a dAPI, Beacon, or Beacon set.
- [dataFeedIdToReaderToWhitelistStatus()](./data-feed-id-to-reader-to-whitelist-status.md) -
  Details about the coverage policy status of a reader address for a dAPI,
  Beacon, or Beacon set.
- [readDataFeedWithId()](./read-data-feed-with-id.md) - Returns a value and
  timestamp using a Beacon or Beacon set ID.
- [readDataFeedValueWithId()](./read-data-feed-value-with-id.md) - Returns a
  value using a Beacon or Beacon set ID.

## Resources

- [Chains and Contracts](../reference/chains.md): A list of chains, and
  supporting contracts that dAPIs are available on.
- [dAPI Browser](../reference/dapi-browser.md): A list of dAPIs that have been
  deployed.
