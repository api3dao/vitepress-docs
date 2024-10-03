---
title: What are dAPIs?
pageHeader: dAPIs → Overview
outline: deep
---

<PageHeader/>

# What are dAPIs?

> <Video src="https://www.youtube.com/embed/wLZ4pyqAFuE"/>

dAPIs are on-chain data feeds sourced from off-chain first-party oracles owned
and operated by API providers themselves. Data feeds are continuously updated by
first-party oracles using signed data. dApp owners can read the on-chain value
of any dAPI in realtime.

Thanks to first-party oracles source transparency is realized, enabling the
independent verification of whether an oracle uses multiple data sources and is
thus decentralized. By removing the third-party node layer that other oracle
solutions rely on, dAPIs provide a solution with improved transparency,
scalability and security.

## dAPI composition

At the core, a **dAPI** is a mapping that points towards a **beacon** or a
**beacon set**.

dAPIs are directly powered and maintained on-chain by multiple off-chain oracle
nodes operated by the owner of data (API Provider) served directly to a network.
API3 refers to these as a beacon. Each of these off-chain sources serve
cryptographically signed data by a data provider before being aggregated
on-chain, API3 refers to as a beacon set.

<img src="./assets/images/dAPI_q2.png" style="width:500px">

The aggregated value is read through a proxy address as part of the dAPI
requester. If the dAPI is active the proxy address will be displayed on the UI
of the API3 Market.

It is simple for developers to integrate a dAPI request into their contracts and
once imported a dAPI can be re-directed to read any price feed without any
further technical implementation. For a further technical understanding of dAPIs
head to the [developer reference section](/dapis/reference/understand/).

::: info Read more

Dive into the design decisions about dAPIs by reading
[<span style="color:rgb(16, 185, 129);">dAPIs: APIs for dApps</span>](https://medium.com/api3/dapis-apis-for-dapps-53b83f8d2493).

:::

### A simple way to access next-generation push oracles

dAPIs operate in a familiar push-model, meaning price is updated on-chain
according to pre-determined oracle specifications. These are 0.25%, 0.5%, 1% and
5% update thresholds that can be selected through the
[API3 Market](https://market.api3.org/dapis). All oracles have a 24hr heartbeat.

dAPIs are simple and permissionless to access. Through the use of the proxy
contract function `read()` you can do this in minutes with little changes to the
code.

### Activate and Manage dAPIs

The API3 Market provides tooling for dApp owners to access decentralized price
feeds, known as dAPIs. Use the [API3 Market](https://market.api3.org) to search
for dAPIs, activate feeds, obtain dAPI proxy contract addresses, and monitor
dAPIs.

<img src="./assets/images/API3_market_september2024.png" style="width:1200px">

From the API3 Market developers will manage all data feed subscriptions. Once
the dAPI interface has been imported to a dApps contract, upgrading a data feed
happens through the API3 Market.

### Get started

Refer to these guides and learn how to subscribe, activate and read the dAPI
using a proxy contract:

- [Subscribe and activate a dAPI](/dapis/guides/subscribing-to-dapis/)
- [Read a dAPI Proxy](/dapis/guides/read-a-dapi/)
