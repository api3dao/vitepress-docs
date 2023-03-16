---
title: Service Coverage
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/service-coverage.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}} # Using API3 data feeds

As outlined in [what are dAPIs](/explore/dapis/what-are-dapis) API3 has created
a unified, user-friendly interface that is designed to simplify the process of
obtaining data feed services. The API3 Market enables users to connect to a
decentralized API and access data feed services. There are two types of dAPIs:

1- Self-funded dAPIs

2- Managed dAPIs

# Self-funded dAPIs

Self-funded dAPIs currently rely on a single first-party oracle. They offer
developers the opportunity to make use of data feeds with minimal up-front
commitment and are accessible permissionlessly for developers.

### Using Self-funded dAPIs

Self-funded dAPIs require users to provide funds necessary for creating on-chain
transaction to a a sponsor wallet. Once sufficient funds are available, updates
will begin automatically within a 15 minute window. In accordance with deviation
thresholds and heartbeat these funds will be used to maintain the on-chain price
of the respective dAPI until they are depleted.

  <img src="../assets/images/Sponsoring_a_feed_overview.png" style="width:500px">

<!--::: tip Developer info

dAPI implmentation to your solidity contract is simple, learn more [within this
starter kit](link to API3 DAO starter kit).

:::-->

<!--Self-funded dAPIs currently rely on a single first-party oracle and projects utilizing these in production and high value use cases should consider the risk and security implications.
Read more in our
[security considerations](/explore/dapis/security-considerations.md)-->

### Accessing a Self-funded dAPI

The [API3 Market](https://market.api3.org) features a user-friendly interface
that enables easy activation and management of self-funded dAPIs. To use a
self-funded data feed you:

1- Select your data feed within the API3 Market

2- Fund a sponsor wallet

3- Deploy the proxy contract

  <img src="../assets/images/self_funded_market_process_notext.png" style="width:500px">

The dAPI integration process has been designed to be simple and abstract away
any further technical lifting, offering a standardized interface for a variety
of data feed services. Developers then obtain the value of the dAPI by reading
the API3Server.sol contract.

::: warning Get started

Developers can [use the API3 Market](/guides/dapis/read-self-funded-dapi/) now
to read a self-funded dAPI.

:::

### Why use a self-funded dAPIs

A self-funded data feed provides advantages for builders:

- Developers can utilize dAPIs in a permissionless fashion using the self-serve
  tooling within the [API3 Market](https://market.api3.org/dapis)
- Developers have the ability to use an oracle within early stages of the
  development life cycle without an ongoing commitment
- dApps that may only require data feeds for a short period of time can activate
  a self-funded dAPI as needed

<!--Additionally, the API3 Market provides an intuitive interface to check the
status of respective self-funded dAPIs and fund them accordingly.-->

# Managed dAPIs

Managed data feeds are sourced from multiple first-party oracles and aggregated
using a median function.

### Accessing Managed dAPIs

A self-funded dAPI can be upgraded to a managed dAPI by paying the API3 DAO. The
API3 Market will faciliate this process and allow potential users to specify
desired amount of first-party oracles that should be included in the
aggregation. API3 will create the respective Beacon Set from the best available
first-party providers for the requested data set and point the dAPI towards this
creation.

 <img src="../assets/images/Managed_dAPI_visual.png" style="width:500px">

In addition, API3 takes over the gas management overhead associated with
operating managed dAPIs. Compared to self-funded dAPIs, managed dAPIs are
monetized, as API3 requires payment in USDC on Ethereum Mainnet to operate them.
API3 recommends the usage of managed dAPIs in high value production use cases.

# API3 Market

The API3 Market lists all available dAPIs, self-funded and managed alike. It
represents a hub that allows developers to:

- Browse through a catalogue of potential data feeds to integrate
- Fund their operation in the case of self-funded dAPIs
- Pay for the upgrade to a managed version
- Request new data types

You can head to the [API3 Market](https://market.api3.org/dapis) now and use
self-funded dAPIs.
