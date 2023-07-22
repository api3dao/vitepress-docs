---
title: Self-funded dAPIs
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → Understanding dAPIs
path: /reference/dapis/understand/self-funded.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Self-funded dAPIs are single-source data feeds that are funded by the users with
their own funds. The amount of gas supplied determines how long the dAPI will be
available to use. If it runs out of gas, the dAPI will no longer be updated
unless it is funded again.

## How it works

Unlike [Managed dAPIs](), self-funded dAPIs are single-source datafeeds. The
data is sourced from a single [first-party]() data provider running an
[Airnode]() and an [Airseeker]() which updates the `beaconId` with Airnode's
signed data. The gas costs for self-funded dAPIs are managed by the users
themselves. As long as the sponsor wallet of the dAPI has enough gas, it will be
updated.

A `beaconId` for each dAPI is derived from the hash of the provider's Airnode's
address, Template ID and encoded parameters of the dAPI.

The provider who is running an Airnode is also running an Airseeker that is
responsible for updating the values of each `beaconId` for each dAPI.

For each beacon, there is a dedicated Sponsor wallet that is used to pay for the
gas costs of updating the beacon. The Sponsor wallet is derived from the
`beaconId` and its update parameters.

## Airseeker

Like [Airnode](), [Airseeker<ExternalLinkImage/>]() is a serverless lambda
function that is responsible for updating the values of each `beaconId` for each
dAPI. It is used to update the beacons with signed responses from
[Airnode's http gateway]().

Airseeker uses Airnode's built-in HTTP-Gateway to receive signed data and push
it on-chain in a tamper proof way.

Similar to Airnode's OIS, Airseeker also requires a configuration file that is
used to configure the Airseeker.
[Click here to see an example of an Airseeker configuration file.<ExternalLinkImage/>](https://github.com/api3dao/airseeker/blob/main/config/airseeker.example.json).
The configuration file is used to configure the [deviation thresholds]() and
[heartbeat]() for each `beaconId`. For self-funded dAPIs, the deviation
threshold is set to 1% and the heartbeat is set to 24 hours.

No aggregation services are provided for self-funded dAPIs.

For Self-funded dAPIs, the data provider is running its own Airnode and
Airseeker and the dAPIs are pointed to it's own `beaconIds`. Anyone who decides
to fund a self-funded dAPI will be funding the the Nodary's underlying
`beaconId` and their wallet that the dAPI is pointed towards.

## Provider for Self-funded dAPIs

Currently, for self-funded dAPIs, [Nodary<ExternalLinkImage/>]() is the data
provider. Nodary is an independent group within the API3 ecosystem that are
building high-impact oracle services. They currently operate 139 crypto, forex,
stock and commodity asset price data feeds each on 24 chains, adding up to a
total 3336 unique data feeds.

<FlexEndTag/>
