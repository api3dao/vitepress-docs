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

dAPIs are on-chain
data feeds sourced from off-chain first-party oracles owned and operated by API
providers themselves. dAPIs provide DeFi with a secure and transparent solution that is verifiably decentralized data feeds from curated
sources.

dAPIs possess a range of distinct attributes:

- dAPIs have a standardized, code-friendly interface that intends to abstract
  away technical complexity.
- dAPIs exist in a fully permissionless format.
- dAPIs exist on-chain as smart contracts and are updated by first-party
  oracles.

::: info

See the medium article about design decisions and dAPIs by reading
[dAPIs: APIs for dApps](https://medium.com/api3/dapis-apis-for-dapps-53b83f8d2493).

:::

<!--## dAPI roadmap

dAPIs have been designed to serve dApps with data feeds that are appropriate
across the full application development cycle. As such, dAPIs provide products
based on multiple use cases. These consist of:

1. Self-funded data feeds (single-source)
2. Managed data feeds (multi-source)
3. Service Coverage (under design and development)
4. Oracle Extractable Value (under design and development)-->

<!--### Self-funded dAPIs

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
how to read a dAPI.-->

### What can I do with a dAPI?

Through a dAPI DeFi lenders, synthetic assets, algorithmic stablecoins
or derivatives (to name a few) can securely access continuously updated streams
of off-chain price reference data on-chain. Currently dAPI price feeds serve price reference data across: 

- Crypto assets
- Equities
- Forex
- Commodities
- LRT/LST

dAPIs operate with a familiar push-oracle mechanism. Each dAPI has pre-determined oracle specifications with deviation thresholds that sees the price updated on 0.25%, 0.5% or 1% movements in the market with a 24hr heartbeat. 

### A next-generation push oracle 

[Managed dAPIs](/reference/dapis/understand/index.md#managed-dapis) provide
aggregated high-quality price reference data served on-chain by first-party
oracles. They have pre-configured oracle specifications that are
decentralized through being served by multiple sources. 

To activate a dAPIs users to go to the [API3 Market](https://market.api3.org/dapis) to activate a feed. API3 will manage the
gas fees (using access fees charged) as part of a portfolio of managed dAPIs.

 <img src="../assets/images/Managed_dAPI_visual.png" style="width:500px">

 ### Verify the decentralization of your oracle 
  
As dAPIs are powered by first-party oracles, the data sources in the aggregation
can be verified on-chain. Each off-chain oracle cryptographically signs an
update. Our data partners also add their Airnode address to their DNS records.

This means their oracle node can be verified through cryptographic signatures, optimizing the security of price feed operation. 





<FlexEndTag/>
