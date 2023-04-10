---
title: dAPIs are data feeds
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /reference/dapis/understand/index.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

dAPIs are on-chain data feeds sourced from off-chain first-party oracles owned
and operated by API providers themselves. Data feeds are continuously updated by
first-party oracles using signed data. dApp owners can read the on-chain value
of any dAPI in realtime.

dAPIs can serve a variety of continuously updated streams of off-chain data,
such as the latest cryptocurrency, stock, and commodity prices. They can power
various decentralized applications such as DeFi lending, synthetic assets,
stable coins, derivatives, NFTs, and more.

## Data feeds values stored on-chain

API providers, owners of first-party Airnodes, store data feed values on-chain
as individual beacons that in are turn sourced by the
[Api3ServerV1.sol<ExternalLinkImage/>](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/api3-server-v1/Api3ServerV1.sol)
contract as dAPIs.

<img src="../assets/images/beacons.png" style="width:80%;">

`Api3ServerV1.sol` manages the definitions for hundreds of dAPIs, each of which
is an aggregated value of multiple beacons or the value of a single beacon.

- [Self-funded dAPIs](/reference/dapis/understand/proxy-contracts.md#self-funded-dapis):
  sourced from a single data feed (beacon)
- [Managed dAPIs](/reference/dapis/understand/proxy-contracts.md#managed-dapis):
  sourced from multiple data feeds (beacons)

Functions in `Api3ServerV1.sol` expose dAPIs values to API3 Market
[proxy contracts](/reference/dapis/understand/proxy-contracts.md). dApps do not
call the `Api3ServerV1.sol` contract directly but use intuitive proxy contracts
to get the value of a dAPI.

## The role of Airnode

Airnode is a flexible off-chain module that can support multiple protocols. Most
noticeably are its implementation of the request-response protocol (RRP) and
data feeds.

An Airnode is owned by an API provider and integrates itself along side their
API operations. Functionality within Airnode monitors one or more API operations
hosted by an API provider and looks for a preset deviation of a data feed value
(e.g., plus or minus 1%). When the deviation threshold is reached, Airnode
pushes the new value on-chain into the beacon store. Each beacon represents a
value from a single API operation.

<img src="../assets/images/beacons-airnode.png" style="width:80%;">

In the diagram above, company ABC has two API operations (B and C) and a single
Airnode that monitors the API operations. When the deviation threshold is
reached for either operation it will update the corresponding beacons, in this
case `1FeexV6A` and `1AC4fMwg`.

Note that company XYZ has an operations (A) that provides the value of ZIL/USD
just like operation (B) from company ABC. A dAPI can now aggregate the value of
operations (A) and (B) since they are the same data feed but from different
companies.

<FlexEndTag/>
