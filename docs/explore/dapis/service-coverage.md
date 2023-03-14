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

Self-funded dAPIs offer developers the opportunity to experience data feeds with
minimal up-front commitment, providing a low commitment and permissionless
option for developers prior to using a managed dAPIs.

### Using Self-funded dAPIs

Self-funded data feeds requires users to provide collateral for a sponsor
wallet, activating oracle transactions. Once funds are available in the sponsor
wallet data feed updates will begin automatically.

  <img src="../assets/images/09-Visual_that_communicates_how_a_self-funded_feed_works.png" width="550px"/>

In the same way, the data feed will stop being updated if the required funds for
updates are not sufficiently available anymore. As users fund the sponsor wallet
to activate the feed in a permissionless fashion, users have the ability to
self-operate data feeds.

::: tip Developer info

dAPI implmentation to your solidity contract is simple, learn more [within this
starter kit](link to API3 DAO starter kit).

:::

<!--API3 does not recommend using self-funded dAPIs in a production environment.
Read more in our
[security considerations](/explore/dapis/security-considerations.md)-->

### Accessing a Self-funded dAPI

The [API3 Market](https://market.api3.org) features a user-friendly interface
that enables easy activation and management of self-funded dAPIs. To use a
self-funded data feed you:

1- Select your data feed within the API3 Market

2- Fund a sponsor wallet

3- Deploy the proxy contract

<img src="../assets/images/11-Visual_that_communicates_the_process_of_sponsoring_a_byog_feed_using_the_market.png" width="550px"/>

The dAPI integration process has been designed to be simple and abstract away
any further technical lifting, offering a standardized interface for a variety
of data feed services. Developers then obtain the value of the dAPI by reading
the API3Server.sol contract.

::: warning Change this to a content box

Get started by following
[how to use the API3 Market](/guides/dapis/read-self-funded-dapi/) to access a
self-funded dAPI.

:::

### Why use a self-funded dAPIs

A self-funded data feed provides advantages for builders:

- Developers can utilize dAPIs in a permissionless fashion using the self-serve
  tooling within the [API3 Market](https://market.api3.org/dapis)
- Developers have the ability to use an oracle within early stages of the
  development life cycle without an ongoing commitment
- dApps that may only require data feeds for a short period of time can activate
  a self-funded dAPI as needed
- Whilst a self-funded dAPI provides access to a single API Provider, the feed
  does provide access to a median price from the agreegation of multiple data
  sources

Whilst there are advantages to using a self-funded data feed, users should
consider the security implications of using the model if the dApp is in
production.

::: warning Please note

Self-funded data feeds rely on a single first-party oracle. Therefore, users
should consider if they provide an appropiate solution if securing funds within
a DeFi protocol.

:::

<!--Additionally, the API3 Market provides an intuitive interface to check the
status of respective self-funded dAPIs and fund them accordingly.-->

# Managed dAPIs

Managed data feeds are sourced from multiple first-party oracles and aggregated
using a median function.

### Accessing Managed dAPIs

To access a managed data feeds users need to authorize access through the API3
Market. Self-funded dAPIs can be upgraded by paying for a managed version and
selecting a desired amount of first-party oracles that should be included in the
aggregation. API3 will create the respective Beacon Set from the best available
first-party providers for the requested data set and point the dAPI towards this
creation.

<img src="../assets/images/10-Visual_that_communicates_how_a_managed_service_feed.png" width="550px"/>

In addition, API3 takes over the gas management overhead associated with
operating managed dAPI. Compared to self-funded dAPIs, managed dAPIs are
monetized, as API3 requires payment in USDC on Ethereum Mainnet to operate them.
API3 recommends the usage of managed dAPIs in production environments.

# API3 Market

The API3 Market lists all available dAPIs, self-funded and managed alike. It
represents a hub that allows developers to:

- Browse through a catalogue of potential data feeds to integrate
- Fund their operation in the case of self-funded dAPIs
- Authorize for the upgrade to a managed version
- Request new data types

You can head to the [API3 Market](https://market.api3.org/dapis) now and use
self-funded dAPIs.
