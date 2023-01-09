---
title: Decentralized APIs (dAPIs)
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore
path: /explore/introduction/decentralized-apis.html
outline: deep
tags:
  - decentralization
  - decentralized
  - governance
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

A dApp is an application that is implemented as a smart contract that runs on a
decentralized blockchain. By the same token, a dAPI is an API-like service that
is delivered to smart contracts. In simpler terms, just as applications use
APIs, dApps will use dAPIs.

## dAPI Overview

dAPIs are managed API services designed to resemble Web APIs from the
perspective of a smart contract.

Through a dAPI dApps access continuously updated streams of off-chain price
reference data served via first-party oracles. They provide a secure way for
dApps such as DeFi lending, synthetic assets, stable coins, derivatives and more
to function.

The dAPI system is composed of a variety of Airnode protocols. These typically
encompass Request-response Protocol (RRP), Publish-subscribe Protocol (PSP),
relayed RRP, relayed PSP and API-signed data.

dAPIs are then delivered to builders from a variety of oracle services price
reference data for the latest cryptocurrency, stock and commodity prices.

## dAPI services

dAPIs have been designed to serve builders with data feeds that are appropiate
across the full application development cycle. As such, dAPIs are accessed in a
range of oracle services depending on product stage and use case. These consist
of:

1. Self-funded data feeds
2. Agreegated data feeds
3. Service covered data feeds

### 1. Self-funded data feeds

Self-funded data feeds are permissionless price reference dAPIs where collateral
for an oracle update transaction is provided by the user. Self-funded dAPIs are
activated by funding a gas wallet using the API3 Market.

These data feeds are provided by a single API provider. As such these dAPIs are
appropiate for early-stage of dApp development.

In cases where a single source is deemed insufficient or the overhead of keeping
a wallet topped up for oracle services is undesirable, API3 recommended to
upgrade to a service covered dAPI service.

::: Tip Get started with self-funded dAPIs provided by byog.io :::

### 2. Aggregated data feeds

In the live data feed use-case, a dAPI is a set of first-party oracles that is
aggregated and wrapped by a higher-level interface. A user that is whitelisted
can read the respective dAPI, without needing to specify what Beacon should be
used under the hood.

API3 will spin up the desired data feed and point the dAPI mapping towards it.
Compared to single sourced (byog) dAPIs, API3 and the underlying API providers
will also take over the gas management overhead from this point onward until the
time that the service expires.

dAPIs will aggregate high-quality data sources

### 3. Service covered data feeds

## Accessing dAPIs

API3 has made accessing a dAPI simple and seamless through the the API3 Market.

The API3 Market is the primary tool to;

- Find available dAPIs
- Request new dAPIs
- Sponsor existing dAPIs

Additionally, for self-funded dAPIs the API3 Market will providing tooling to
fund a sponsor wallet and activate the feed.

--END--

## Decentralized Governance

In such cases as mentioned above, oracle networks provide the required
decentralization. An oracle network makes the same request to multiple
independent oracles and reduces their responses to a single answer through
predetermined consensus rules implemented as a smart contract called the
aggregator. Individual malicious oracles cannot manipulate the outcome of this
process, which provides a degree of decentralization and trustlessness.

> <img src="../assets/images/central-governance.png" width="300"/>

::: danger TODO

The diagram above and below do not illustrate the governance issue well. They
need to be blended into one. Or maybe they go away.

:::

> <img src="../assets/images/decentral-governance.png" width="300"/>

Here, an important thing to consider is how the oracle network is governed. If a
central entity can switch the oracles or APIs used in the aggregator in and out,
or even replace the aggregator itself making use of a proxy mechanism, they can
effectively manipulate the oracle network output at will. This eliminates the
decentralization and trustlessness qualities that using an oracle network
provides. Therefore, it is not adequate to use an oracle network for
decentralization, this oracle network must be governed decentrally as well.

See the medium article,
[Why API3 DAO, not API3 CORP?<externalLinkImage/>](https://medium.com/api3/why-api3-dao-not-api3-corp-2dde51c537c1)
on DAOs and decentralized governance.

## dAPI (Decentralized API)

Consider the following:

- Decentralized applications need access to APIs.
- APIs should be interfaced to smart contract platforms through first-party
  oracles.
- For API level decentralization, decentrally-governed oracle networks should be
  employed.s

It can be concluded that decentrally-governed networks of first-party oracles
solve the API connectivity problem. Although this is technically correct, the
same solution can be reached through a more useful lens.

Decentralized applications cannot access Web APIs, and oracle solutions aim to
build decentralized interfaces to facilitate this. However, this approach
results in an inferior solution and ecosystem (see the
<a href="/api3-whitepaper-v1.0.3.pdf" target="_api3-whitepaper">API3
Whitepaper</a><externalLinkImage/> for a detailed explanation).

> <img src="../assets/images/dapi.png" width="350"/>

Instead, API3 builds complete products called decentralized APIs (dAPIs for
short), which are blockchain-native, decentralized API services. From the user's
(i.e., the entity that operates the decentralized application) perspective, the
experience of using a dAPI would be very similar to a Web developer using a
traditional API; they would find a dAPI they need, pay the subscription fee, and
enjoy access.

Due to being defined as a full product rather than an interface, unlike a
traditional oracle network, a dAPI includes the underlying APIs. This results in
a superior solution (secure and cost-efficient first-party oracles) and
ecosystem (with API providers as its members).
