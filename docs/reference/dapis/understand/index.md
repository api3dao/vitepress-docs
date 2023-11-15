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

## Values stored on-chain

API providers, owners of first-party Airnodes, provide the signed data used to
store individual beacon values on-chain. A dAPI's value is in turn an aggregate
of beacon values. dAPI values are held in the
[Api3ServerV1.sol](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/api3-server-v1/Api3ServerV1.sol)
contract.

<img src="../assets/images/beacons.png" style="width:80%;">

`Api3ServerV1.sol` manages the definitions for hundreds of dAPIs, each of which
is an aggregated value of multiple beacons or the value of a single beacon.

- [Self-funded dAPIs](/reference/dapis/understand/index.md#self-funded-dapis):
  sourced from a single data feed (beacon)
- [Managed dAPIs](/reference/dapis/understand/index.md#managed-dapis): sourced
  from multiple data feeds (beacons)

Functions in `Api3ServerV1.sol` expose dAPIs values to API3 Market
[proxy contracts](/reference/dapis/understand/proxy-contracts.md). dApps do not
call the `Api3ServerV1.sol` contract directly but use intuitive proxy contracts
to get the value of a dAPI.

## The role of Airnode

Airnode is a flexible off-chain module that can support multiple protocols. Most
noticeably is its implementation of the request-response protocol (RRP) and data
feeds.

An Airnode is owned by an API provider and is used to call API provider
endpoints to fetch and sign data. An Airnode is owned by an API provider and
integrates itself along side their API operations. Airnode interfaces with these
operations and gathers its signed data at the request of Airseeker. Airseeker
uses the signed data to determine if the deviation of a dAPI value (e.g., plus
or minus 0.25%, 0.5%, 1%) warrants an on-chain update of its beacon(s).

<img src="../assets/images/beacons-airnode.png">

In the diagram above, companies XYZ and ABC both provide ZIL/USD values, A and
B, respectively, that are aggregated to determine the dAPI ZIL/USD value.
Airseeker regularly checks the deviation of ZIL/USD using the sign data from
these Airnodes. Airseeker will update the corresponding beacons behind ZIL/USD
when deviation is detected.

When a dApp requests the value of ZIL/USD, it will get the aggregated value of
the beacons behind the dAPI ZIL/USD.

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

Unlike [managed dAPIs](/reference/dapis/understand/index.md#managed-dapis),
self-funded dAPIs are sourced from one data feed (beacon). This may not make
them ideal to use on a production chain.

See the guide
[Subscribing to self-funded dAPIs](/guides/dapis/subscribing-self-funded-dapis/)
and learn more on how to fund a dAPI. Also see the guide
[Reading a self-funded dAPI proxy](/guides/dapis/read-a-dapi/) and learn how to
use a proxy contract address to read a dAPI.

## Managed dAPIs

A managed dAPI is actually the process of upgrading a self-funded dAPI to become
a managed dAPI. Here the dApp that does the upgrade pays a small fee which is
used to pay gas costs incurred by the Airnode to place the dAPI value on-chain.
Unlike self-funded dAPIs, API3 will manage the gas cost with the fees collected.
This is advantages as the dApp owner does not need to worry about the community
based funding model that might cause the dAPI to shut down due to lack of
funding.

## Availability

Both **Self-funded dAPIs** and **Managed dAPIs** are available on the
[Market](https://market.api3.org/dapis).

| Self-funded dAPIs                                                               | Managed dAPIs                                         |
| ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Single public [proxy contract](/reference/dapis/understand/proxy-contracts.md)  | Single public proxy contract                          |
| 1% deviation                                                                    | Multiple deviations<br/>(0.25%, 0.5%, 1%)             |
| 60 second [interval](/reference/dapis/understand/deviations.md#update-interval) | 30-60 second interval                                 |
| 24 hour [heartbeat](/reference/dapis/understand/deviations.md#heartbeat)        | 2 minute or 24 hour heartbeat                         |
| Sourced from a single<br/>data feed (beacon)                                    | Sourced from multiple<br/>data feeds (beacons)        |
| Gas costs are community funded                                                  | Gas costs are managed <br/>by API3 using upgrade fees |

Development and expansion of dAPIs beyond self-funded and managed dAPIs will
include OEV share. More details for OEV share will be forthcoming. Please
feel-free to ask questions about the evolution of dAPIs on
[Discord](https://discord.com/channels/758003776174030948/765618225144266793).

<FlexEndTag/>
