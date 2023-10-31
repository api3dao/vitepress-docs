---
title: Decentralized APIs (dAPIs)
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → About our journey!
path: /explore/introduction/decentralized-apis.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

dAPIs are on-chain data feeds sourced from off-chain first-party oracles owned
and operated by API providers themselves.

A dApp is an application that is implemented as a smart contract ands runs on a
decentralized blockchain. By the same token, a dAPI can be also described as an
on-chain API-like service that is available to dApps. Just as traditional
applications use APIs, dApps can use dAPIs.

dAPIs deliver quantifiably secure data feeds from curated sources. Through a
dAPI DeFi lenders, synthetic assets, algorithmic stablecoins or derivatives (to
name a few) can securely access continuously updated streams of off-chain price
reference data on-chain.

### dAPI distinct attributes

dAPIs are data feeds and they have been specifically engineered for dApps to
mimic the access of traditional Web APIs. dAPIs possess a range of distinct
attributes:

- dAPIs have a standardized, code-friendly interface that intends to abstract
  away technical complexity.
- dAPIs exist in a fully permissionless or authorized format.
- dAPIs exist on-chain as smart contracts and are updated by first-party
  oracles.

See the medium article about design decisions and dAPIs by reading
[dAPIs: APIs for dApps](https://medium.com/api3/dapis-apis-for-dapps-53b83f8d2493).

## dAPI roadmap

dAPIs have been designed to serve dApps with data feeds that are appropriate
across the full application development cycle. As such, dAPIs provide products
based on multiple use cases. These consist of:

1. Self-funded data feeds (single-source)
2. Managed data feeds (multi-source)
3. Service Coverage (under design and development)
4. Oracle Extractable Value (under design and development)

### Self-funded dAPIs

[Self-funded dAPIs](/reference/dapis/understand/index.md#self-funded-dapis)
provide developers with the tools to use single-source data feed with no upfront
commitment. They are served in a fully permissionless fashion through the API3
Market. Once gas funds have been provided in a sponsor wallet, the dAPI will
automatically begin posting data on-chain when price deviation thresholds are
met.

Self-funded data feeds are provided as an output of a single first-party oracle
that triggers price updates on-chain to a 1% deviation threshold. As such these
dAPIs are appropriate for early-stage of dApp development.

#### Activating a self-funded dAPI

To activate an self-funded dAPI, dApp owners must deposit chain-native
collateral to a designated dAPI sponsor wallet. This collateral will cover the
costs of gas when the dAPI's associated first-party oracle updates the dAPI
on-chain.

 <img src="../assets/images/Sponsoring_a_feed_overview.png" style="width:500px">

API3 suggests using a managed dAPI when the single source value of a self-funded
dAPI does not provide enough reliability, or the costs associated with topping
off the dAPI's associated sponsor wallet is too prohibitive.

Access a self-funded dAPI via the [API3 Market](https://market.api3.org/dapis)
is easy and requires only a few simple steps. Utilizing the tools available
within the API3 Market, dApp owners can swiftly gain access to a dAPI with
minimal effort. Follow the guide
[Subscribing to Self-Funded dAPIs](/guides/dapis/subscribing-self-funded-dapis/)
to get started. Then see the guide
[Reading a self-funded dAPI proxy](/guides/dapis/read-a-dapi/) and understand
how to read a dAPI.

### Managed dAPIs

[Managed dAPIs](/reference/dapis/understand/index.md#managed-dapis) provide
aggregated high-quality price reference data served on-chain by first-party
oracles. dAPIs provide DeFi with a secure and transparent solution that can be
decentralized according to their requirements.

Compared to self-funded dAPIs, managed dAPIs require authorization through the
API3 Market. As such reading an aggregated data feed is permissioned, meaning
dApp owners need to register for dAPIs they wish to use. API3 will manage the
gas fees (using access fees charged) as part of a portfolio of managed dAPIs.

 <img src="../assets/images/Managed_dAPI_visual.png" style="width:500px">

<FlexEndTag/>
