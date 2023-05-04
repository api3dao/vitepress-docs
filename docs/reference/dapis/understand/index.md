---
title: dAPIs are data feeds
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → Understanding dAPIs
path: /reference/dapis/understand/index.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

dAPIs are on-chain data feeds sourced from off-chain first-party oracles owned
and operated by API providers themselves and are continuously updated using
signed data. dApp owners can read the on-chain value of any dAPI in realtime.

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
  sourced from multiple data feeds (beacons) - _managed dAPIs are currently
  under development_

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

## dAPI roadmap

Currently dAPIs are under an expansive development cycle and in March of 2023
the first functional **Self-funded dAPIs** were made available.

| Self-funded dAPIs                            | Managed dAPIs                                         |
| -------------------------------------------- | ----------------------------------------------------- |
| March 2023                                   | \* Summer 2023                                        |
| Single public proxy contract                 | Single public proxy contract                          |
| 1% deviation                                 | Multiple deviations<br/>(0.25%, 0.5%, 1%, 5%)         |
| 60 second interval                           | 30-60 second interval                                 |
| 24 hour heartbeat                            | 2 minute or 24 hour heartbeat                         |
| Sourced from a single<br/>data feed (beacon) | Sourced from multiple<br/>data feeds (beacons)        |
| Gas costs are community funded               | Gas costs are managed <br/>by API3 using upgrade fees |

<div style="margin-left:10px;margin-top:-15px;font-size:small;font-family:courier;">* Managed
dAPIs are under development, the release date is not available at this time.</div>

Development and expansion of dAPIs beyond self-funded and managed dAPIs will
include OEV and service coverage. More details on these concepts will be
forthcoming once managed dAPIs are released. Please feel-free to ask questions
about the evolution of dAPIs on
[Discord<ExternalLinkImage/>](https://discord.com/channels/758003776174030948/765618225144266793).

## Self funded dAPIs

Self-funded dAPIs were made available in March 2023. These are community funded
and community manage dAPIs that are only sourced from a single data feed
(beacon). The funding is used to pay gas costs incurred by an Airnode as it
places the dAPI's value on-chain when a deviation threshold is reached.

Any dApp owner can fund a dAPI and any dApp owner can use the dAPI. Meaning that
if three dApp owners are using the dAPI and only one provides funding, the other
two would benefit. However this is not best practice for the two that do not
provide funding as their dApp could fail if the original dApp decides to
discontinue further funding. So the community benefits from a community funding
approach.

### Single source data feed

Unlike the forthcoming
[managed dAPIs](/reference/dapis/understand/proxy-contracts.md#managed-dapis),
self-funded dAPIs are sourced from one data feed (beacon). This may not make
them ideal to use on a production chain.

See the guide
[Subscribing to self-funded dAPIs](/guides/dapis/subscribing-self-funded-dapis/)
and learn more on how to fund a dAPI. Also see the guide
[Reading a self-funded dAPI proxy](/guides/dapis/read-self-funded-dapi/) and
learn how to use a proxy contract address to read a dAPI.

## Managed dAPIs

Managed dAPIs are currently under development. A managed dAPI is actually the
process of upgrading a self-funded dAPI to become a managed dAPI. Here the dApp
that does the upgrade pays a small fee which is used to pay gas costs incurred
by the Airnode to place the dAPI value on-chain. Unlike self-funded dAPIs, API3
will manage the gas cost with the fees collected. This is advantages as the dApp
owner does not need to worry about the community based funding model that might
cause the dAPI to shut down due to lack of funding.

### Changing specifications

The specifications for the concept of a managed dAPI may change to some degree
as development continues. The full feature specification will be updated here as
this type of dAPI is made available.

<FlexEndTag/>

<FlexEndTag/>
