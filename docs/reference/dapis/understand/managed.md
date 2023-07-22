---
title: Managed dAPIs
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → Understanding dAPIs
path: /reference/dapis/understand/managed.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Managed dAPIs are sourced directly from mulitple [first-party]() data providers
running an [Airnode]() and aggregated using Airnode's signed data. The gas costs
and avaibality of Managed dAPIs is managed by the dAPI team within [API3 DAO]().

## How it works

[Datafeed values are stored on-chain](/reference/dapis/understand/#data-feeds-values-stored-on-chain)
and are updated by the [`Api3ServerV1.sol`<ExternalLinkImage/>](https://github.com/api3dao/airnode-protocol-v1/tree/79b509f0e88a96fa4ea3cd576685051d37c9a504/contracts/api3-server-v1) contract. The
`beaconId` for each dAPI gets updated when the price hits the set
[deviation threshold]()/[heartbeat]() using [Airseeker<ExternalLinkImage/>]().
The Airseeker is responsible for updating each individual `beaconId` for each
dAPI.

A dAPI Name is a human readable name that represents a `beaconId` or
`beaconSetId`.

A `beaconId` for each dAPI is derived from the hash of the provider's Airnode's
address, Template ID and encoded parameters of the dAPI.

Providers who are running an Airnode are also running an Airseeker that is
responsible for updating the values of each `beaconId` for each dAPI. Currently,
the dAPI team is also running an Airseeker for each dAPI with different
configurations.

To provide aggregated data, beacon sets are used which are a collection of
multiple `beaconIds` that are then used to calculate the aggregated value
on-chain using a median function. The median value is then used to update the
`beaconSetId` of the dAPI. Beacon sets get updated by updating each underlying
beacon (`updateBeaconWithSignedData`) and then calling the update beacon set
function (`updateBeaconSetWithBeacons`)

For each beacon, there is a dedicated Sponsor wallet that is used to pay for the
gas costs of updating the beacon. The Sponsor wallet is derived from the
`beaconId` and its update parameters.

## Airseeker

Like [Airnode](), [Airseeker<ExternalLinkImage/>]() is a serverless lambda
function that is responsible for updating the values of each `beaconId` for each
dAPI. It is used to update the beacons with signed responses from
[Airnode's HTTP-Gateway]().

Airseeker uses Airnode's built-in HTTP-Gateway to receive signed data and push
it on-chain in a tamper proof way.

Similar to Airnode's OIS, Airseeker also requires a configuration file that is
used to configure the Airseeker.
[Click here to see an example of an Airseeker configuration file.<ExternalLinkImage/>](https://github.com/api3dao/airseeker/blob/main/config/airseeker.example.json).
The configuration file is used to configure the deviation thresholds and
heartbeat for each `beaconId`.

## Providers for Managed dAPIs

Currently, the [API3 Market<ExternalLinkImage/>]() has 4 differnet asset classes
that are listed below. For each type, there are multiple providers that are
running an Airnode and are providing data for the dAPIs. The providers are
listed below:

| Asset Type     | Data Provider                                                           |
| -------------- | ----------------------------------------------------------------------- |
| Cryptocurrency | Nodary, Coinpaprika, Finage, Twelvedata, NCFX, Kaiko, dxFeed            |
| Forex          | Nodary, Finage, Twelvedata, NCFX, IEXCloud, Finnhub, dxFeed, Tradermade |
| Commodities    | Nodary, Finage, Twelvedata, dxFeed, Tradermade                          |
| Equities       | Nodary, Finage, Twelvedata, IEXCloud, finnhub, dxfeed                   |

All the data providers listed here are selected and properly tested by the dAPI
team to ensure the highest quality data availability for the listed dAPIs.

## Update Process

When a user places an order for a Managed service, the order will be created
on-chain and the dAPI team will manually update the mapping for the dAPI to
point to a particular `beaconSetId` with the requested deviation threshold and
heartbeat. The update process is currently manual and will be automated in the
future.

::: info Note

The proxy contract address to read from the dAPI will remain the same.
Purchasing a better configuration will not change the proxy contract address for
the dAPI.

:::

With Managed dAPIs, dApps can have an option to configure the dAPI's devation
threshold and heartbeat. For each Managed feed, the dApp have the following
options to choose from:

| Deviation | Heartbeat |
| --------- | --------- |
| 0.25%     | 2 minutes |
| 0.25%     | 24 hours  |
| 0.5%      | 24 hours  |
| 1%        | 24 hours  |

See the guide [Subscribing to Managed dAPIs]() and learn more on how to access Managed dAPIs.

<FlexEndTag/>
