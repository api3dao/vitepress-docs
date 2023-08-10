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

Unlike [Managed dAPIs](/reference/dapis/understand/managed.html), self-funded dAPIs are single-source datafeeds. The
data is sourced from a single [first-party](/explore/airnode/why-first-party-oracles.html) data provider running an
[Airnode](/reference/airnode/latest/understand/) and an [Airseeker](/reference/dapis/understand/self-funded.html#airseeker) which updates the `beaconId` with Airnode's
signed data. The gas costs for self-funded dAPIs are managed by the users
themselves. As long as the sponsor wallet of the dAPI has enough gas, it will be
updated.

Datafeed values for Self-funded dAPIs are also stored on-chain within the same
[`Api3ServerV1.sol`<ExternalLinkImage/>](https://github.com/api3dao/airnode-protocol-v1/tree/79b509f0e88a96fa4ea3cd576685051d37c9a504/contracts/api3-server-v1)
contract and are updated on the basis of `beaconIds`. The provider who is
running an Airnode is also running an Airseeker that is responsible for updating
the values of each `beaconId` for each dAPI.

dAPIs are human-readable mappings that maps to a certain `beaconId`.

A `beaconId` for each dAPI is derived from the hash of the provider's Airnode's
address and its Template ID(a hash of one of the Airnode's `endpointId` and
encoded parameters).

For each beacon, there is a dedicated Sponsor wallet that is used to pay for the
gas costs of updating the beacon. The Sponsor wallet is derived from the
`beaconId` and its update parameters.

## Airseeker

Like Airnode, [Airseeker<ExternalLinkImage/>](https://github.com/api3dao/airseeker/) is a serverless lambda
function that is responsible for updating the values of each `beaconId` for each
dAPI. It is used to update the beacons with signed responses from
[Airnode's HTTP-Gateway](/reference/airnode/latest/understand/http-gateways.html).

Airseeker uses Airnode's built-in HTTP-Gateway to receive signed data and push
it on-chain in a tamper proof way.

Similar to Airnode's OIS, Airseeker also requires a configuration file that is
used to configure the Airseeker.
[Click here to see an example of an Airseeker configuration file.<ExternalLinkImage/>](https://github.com/api3dao/airseeker/blob/main/config/airseeker.example.json).
The configuration file is used to configure the [deviation thresholds](/reference/dapis/understand/deviations.html) and
[heartbeat](/reference/dapis/understand/deviations.html#heartbeat) for each `beaconId`. For self-funded dAPIs, the deviation
threshold is set to 1% and the heartbeat is set to 24 hours.

No aggregation services are provided for self-funded dAPIs.

For Self-funded dAPIs, A single data provider is running its own Airnode and
Airseeker and the dAPIs are pointed to it's own `beaconIds`. Anyone who decides
to fund a self-funded dAPI will be funding the the data provider's underlying
`beaconId` and their wallet that the dAPI is mapped towards.

## Provider for Self-funded dAPIs

Currently, for self-funded dAPIs, [Nodary<ExternalLinkImage/>](https://nodary.io/) is the data
provider. Nodary is an independent group within the API3 Ecosystem that are
building high-impact oracle services. They currently operate 139 crypto, forex,
stock and commodity asset price data feeds each on 24 chains, adding up to a
total 3336 unique data feeds.

See the guide [Subscribing to Self-funded dAPIs](/guides/dapis/subscribing-self-funded-dapis/) and learn more on how to
access Self-funded dAPIs.

<FlexEndTag/>
