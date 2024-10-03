---
title: How are dAPIs maintained?
pageHeader: dAPIs → Introduction
outline: deep
---

<PageHeader/>

# How are dAPIs maintained?

API3 composes dAPIs out of individual beacons and beacon sets, and provides them
as turn-key data feed services. Users need not worry about the exact API
provider used, the endpoint called, or the parameters used. This process is
managed by the API3 core technical team multisigs deployed on the chains that
dAPIs are provided on. API3 also provides access to individual beacons or beacon
sets for the users that require full control over the curation of the data feeds
they use.

## Role of `API3Server.sol`

A dAPI points to an individual beacon or an aggregation of multiple beacons
(beacon set). Each dAPI has a human-readable name (e.g., `AVAX/USD`) that makes
them easy to categorize. The contract
[API3ServerV1.sol](https://github.com/api3dao/contracts/blob/main/contracts/api3-server-v1/Api3ServerV1.sol)
maintains the link between a dAPI name and the beacon(s) it uses for the dAPI.
dApps use an API3 Market proxy contract to read any dAPI from
`API3ServerV1.sol`.

dApp owners use a proxy contract, available on the
[API3 Market](https://market.api3.org), to access a dAPI. Proxy contracts use
the
[API3Server.sol](https://github.com/api3dao/contracts/blob/main/contracts/api3-server-v1/Api3ServerV1.sol)
contract to access dAPIs. Developers can easily set the proxy contract address
in a dApp contract to start reading from the dAPIs.

<img src="../assets/images/dAPI_explainer.png" style="width:500px">

The `API3ServerV1.sol` contract reads directly from its data store of beacons,
which are powered by API provider-operated Airnodes. Thus proxies allow dAPIs to
be used like libraries. The smart contract only needs to
[import the interface](/dapis/guides/read-a-dapi/index.md#_2-read-a-dapi) for
calling the proxy contract.

This means once a dAPI is integrated to read a different data feed, the contract
does not need to change the code itself, rather it only needs to use a different
proxy address when calling the `read()` function on the proxy contract. If the
dAPI interface has previously been imported, it abstracts away the technical
implementation of accessing new data feeds.
