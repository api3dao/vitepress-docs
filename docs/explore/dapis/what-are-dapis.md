---
title: What are dAPIs?
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/what-are-dapis.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

At the core, a **dAPI** is a mapping that points towards a **Beacon** or a **Beacon Set**, similarly to how an ENS name is mapped to an address. A Beacon is a point of data that is kept alive on-chain by a respective first-party oracle. It is addressed by an ID, which is derived from the hash of an Airnode address of a provider in combination with the request parameters. This resulting ID will always represent a specific provider with specific request parameters and cannot be changed. Following the same principle, a Beacon Set is addressed by an ID, which is derived from the hash of multiple Beacons, allowing for the creation of aggregations between multiple Beacons. The resulting ID of a Beacon Set also always represents the specific Beacons that make it up and cannot be changed. Values for Beacons or Beacon Sets are kept up to date on-chain on [DapiServer.sol](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/dapis/DapiServer.sol)<externalLinkImage/>, where they can be read directly through `readDataFeedValueWithId`. 

API3 can, through the use of the function `setDapiName` associate an ID with a human-readable name like AVAX/USD. This allows to take over the management overhead that is associated with oracle infrastructure by e.g. creating a new Beacon Set if one first-party oracle becomes unavailable and pointing the name "AVAX/USD" towards the newly created ID. The benefit of this approach is that the dApps continue reading the same dAPI name through `readDataFeedWithDapiName` without being required to make any changes to their oracle specifications, effectively turning dAPIs into a turn-key data feed solution for them. For more information, please refer to [dAPIs: APIs for dApps](https://medium.com/api3/dapis-apis-for-dapps-53b83f8d2493)<externalLinkImage/>
and [Beacons](https://medium.com/api3/beacons-building-blocks-for-web3-data-connectivity-df6ad3eb5763)<externalLinkImage/>.

## `DapiServer.sol`

Developers use the
[DapiServer.sol](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/dapis/DapiServer.sol)<externalLinkImage/>
contract to access dAPIs. `DapiServer.sol` reads directly from its data store of
Beacons, which are powered by API provider-owned and operated
[Airnodes](/reference/airnode/latest/).

> <img src="../assets/images/dapp-beacon.png" width="550px"/>

A dAPI can be pointed towards an individual Beacon or an aggregation of
multiple Beacons (Beacon Set).

> <img src="../assets/images/dapi-beacons.png" width="550px"/>

Each dAPI has a human-readable name (e.g., `AVAX/USD`) that makes them easily
accessible using `DapiServer.sol` by simply passing the encoded bytes32 value of the
`dapiName` to a reader function.

```solidity
// Reading the AVAX/USD dAPI using the DapiServer contract
(value, timestamp) =
  IDapiServer(_dapiServerContractAddress).readDataFeedWithDapiName("0x415...0000");
```

See
["Using an API3 Market proxy contract and Remix"](/guides/dapis/call-dapi-proxy/)
and
["Using the DapiServer contract and Remix"](/guides/dapis/call-dapi-dapiserver/)
for a step-by-step guides on how to call a dAPI. Also visit the
[reference section for dAPIs](/reference/dapis/).

## More related material...

<div class="api3-css-nav-box-flex-row">
  <NavBox type='GUIDE' id="_dapi-just-the-code"/>
  <NavBox type='GUIDE' id="_call-dapi-proxy"/>
  <NavBox type='GUIDE' id="_call-dapi-server"/>
</div>
