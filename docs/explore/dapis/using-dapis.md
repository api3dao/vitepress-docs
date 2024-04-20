---
title: Using dAPIs in a dApp
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/using-dapis.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

> <Video src="https://www.youtube.com/embed/FVI16FAJgjQ"/>

As outlined on the page [What are dAPIs?](/explore/dapis/what-are-dapis.md),
API3 has created a unified, user-friendly implementation that is designed to
simplify the process of obtaining data feed services. The API3 Market enables
dApp owners to connect to a decentralized API and access its data feeds.

## A next generation push oracle

Managed dAPIs are sourced from multiple first-party oracles and aggregated using
a median function. They operate using a push model with a variety of update
specifications based on deviation thresholds. dAPIs have been designed to be
simple to integrate, manage and change.

### Accessing Managed dAPIs

dAPI are accessible through the API3 Market. The market enables developers to
permissionlessly access price feeds and manage them once integrated. Once gas
overheads required to activate a feed are provided, within minutes price
reference data will be readable on-chain.

 <img src="../assets/images/Managed_dAPI_visual.png" style="width:500px">

It is worth noting that API3 operates all infrastructure required for data feed
updates, there is no additional infrastructure to set up, operate and maintain
by a dApp looking to utilize a dAPI.

# API3 Market

The API3 Market lists all available dAPIs, self-funded and managed dAPis. It
represents a hub that allows developers to:

- Browse through a catalogue of potential data feeds to integrate
- Provide gas for dAPIs to activate
- Access the proxy address to read the value of a required data pair
- Request new data types

You can head to the [API3 Market](https://market.api3.org/dapis) to explore this
further.

<!--## Self-funded dAPIs

Self-funded dAPIs currently rely on a single first-party oracle. They offer dApp
owners the opportunity to make use of data feeds with minimal up-front
commitment and are accessible
[permissionlessly](https://www.gemini.com/en-US/cryptopedia/what-is-permissionless-crypto-permissionlessness-blockchain)
for developers.

### Using Self-funded dAPIs

Self-funded dAPIs require any dApp owner to provide funds into a sponsor wallet.
These funds are used by the first-party oracle, that supports a particular data
feed, to pay gas costs when placing the value of the data feed on-chain. Once
sufficient funds are available, updates will begin automatically within a 15
minute window. In accordance with deviation thresholds and heartbeat these funds
will be used to maintain the on-chain price of the respective dAPI until they
are depleted. In many cases you will find that the a dAPI's sponsor wallet has
already been funded and any dApp owner can proceed to use the dAPI.

  <img src="../assets/images/Sponsoring_a_feed_overview.png" style="width:500px">

::: info Developer info

dAPI implementation to your solidity contract is simple, learn more [within this
starter kit](link to API3 DAO starter kit).

:::

<!--Self-funded dAPIs currently rely on a single first-party oracle and projects utilizing these in production and high value use cases should consider the risk and security implications.
Read more in our
[security considerations](/explore/dapis/security-considerations.md)

### Accessing a self-funded dAPI

The [API3 Market](https://market.api3.org) features a user-friendly UI that
enables easy activation and management of self-funded dAPIs. To use a
self-funded data feed you:

- Select a data feed within the API3 Market
- [Fund a sponsor wallet](/guides/dapis/subscribing-self-funded-dapis/) (if not
  already funded)
- Deploy the proxy contract (if not already deployed)
- [Read the dAPI](/guides/dapis/read-a-dapi/)

  <img src="../assets/images/self_funded_market_process_notext.png" style="width:500px">

The dAPI integration process has been designed to be simple and abstract away
any further technical lifting, offering a standardized implementation for all
data feeds. Developers then obtain the value of by reading the dAPIs value using
a [proxy contract](/reference/dapis/understand/proxy-contracts.md).

::: info Get started

Developers can use the API3 Market now to
[<span style="color:rgb(16, 185, 129);">read</span>](/guides/dapis/read-a-dapi/)
a self-funded dAPI.

:::

### Why use self-funded dAPIs

A self-funded data feed provides advantages for dApp owners:

- Developers can utilize dAPIs in a permissionless fashion using the self-serve
  tooling within the [API3 Market](https://market.api3.org/dapis)
- Developers have the ability to use a first-party oracle within early stages of
  the development life cycle without an ongoing commitment
- dApps that may only require data feeds for a short period of time can activate
  a self-funded dAPI as needed-->

<!--Additionally, the API3 Market provides an intuitive interface to check the
status of respective self-funded dAPIs and fund them accordingly.-->

<FlexEndTag/>
