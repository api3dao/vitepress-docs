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
is delivered to smart contracts. Just as applications use
APIs, dApps will use dAPIs.

## dAPI Overview

dAPIs deliver quantifiably secure data feeds from curated sources to smart contracts. Through a dAPI DeFi lenders, synthetic assets, algorithmic stablecoins or derivatives (to name a few) can securely access continuously updated streams of off-chain price
reference data. 

dAPIs are managed API services designed to resemble Web APIs for Web2 apps, but from the perspective of a dApp. They have a standardized, user-friendly interface that intends to abstract away the technical implementation.

The dAPI system is composed of a variety of Airnode protocols. These typically
encompass Request-response Protocol (RRP), Publish-subscribe Protocol (PSP),
relayed RRP, relayed PSP and API-signed data.

<!-- Can we turn this paragraph into an asset

dAPIs are then delivered to builders from a variety of oracle services price
reference data for the latest cryptocurrency, stock and commodity prices.-->

## dAPI Services

dAPIs have been designed to serve builders with data feeds that are appropiate
across the full application development cycle. As such, dAPIs are accessed in a
range of oracle services depending on product stage and use case. These consist
of:

1. Self-funded data feeds
2. Aggregated data feeds
3. Service covered data feeds

### 1. Self-funded data feeds

Self-funded data feeds serve price reference data on-chain in a permissionless fashion. 

To activate an oracle feed, users must deposit chain-native collateral to a designated dAPI sponsor wallet. This collateral will cover the costs of gas for oracle transactions. 

<!--Self-funded data feeds are permissionless price reference dAPIs where collateral for an oracle update transaction is provided by the user. Self-funded dAPIs are activated by funding a gas wallet using the API3 Market.-->

Self-funded data feeds are provided as an output of a single first-party oracle that triggers price updates on-chain to a 1% deviation threshold. As such these dAPIs are appropiate for early-stage of dApp development.

::: Tip 

Get started with self-funded data feeds 

:::

<!--In cases where a single source is deemed insufficient or the overhead of keeping a wallet topped up for oracle services is undesirable, API3 recommends to utilize an ageeegated data feed.-->

API3 suggests using an aggregated data feed when a single source of does not provide enough reliability, or the costs associated with topping up your wallet for oracle services are too prohibitive.

### 2. Aggregated data feeds

In the live data feed use-case, a dAPI is a set of first-party oracles that is aggregated and wrapped by a higher-level interface. <!--higher-level? or user friendly?-->

When accessing an agreegated data feed API3 will absorb gas fees and maintain as part of the dAPI service. As such reading an agreegated data feed is permissioned, meaning users need to register access to the dAPI.

<!--Compared to single sourced (byog) dAPIs, API3 and the underlying API providers will also take over the gas management overhead from this point onward until the
time that the service expires.-->

dAPIs will provide aggregated high-quality price reference data served on-chain by first-party oracles. dAPIs provide DeFi with a secure and transparent oracle solutuon that can be decentralized according to user requirements.

--designing illustration--
<!--design illustration-->


### 3. Service covered data feeds

API3 provides dAPI users with a quantifiable level of security as on-chain service coverage. Staked tokens in the DAO pool are used to cover potential financial losses from dAPI malfunctions that the dAPI consumer might incur. 

::: Info

Service coverage is not a live service and will be accessible in the future.  

:::



### Accessing dAPIs

<!--You access a dAPI through the API3 Market. This is a simple process by following the tools within API3 Market.-->

Accessing a dAPI via the API3 Market is an uncomplicated process requiring only a few simple steps. Utilizing the tools available within the API3 Market, users can swiftly gain access to a dAPI with minimal effort.

