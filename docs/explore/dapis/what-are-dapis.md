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

At the core, a **dAPI** is a mapping that points towards a **Beacon** or a
**Beacon Set**, similarly to how an ENS name is mapped to a wallet address. As
such a dAPI is the interface to securely connect to a variety of oracle services
such as price reference feeds or other data feeds used within DeFi.

## What is a Beacon or a Beacon Set?

A Beacon is a point of data that is kept alive on-chain by a respective
first-party oracle. It corresponds to an ID which is derived from the hash of
the Airnode address that is deployed by an API Provider, in combination with the
request parameters. This resulting ID will always represent a specific provider
with specific request parameters and cannot be changed.

Following the same principle, a Beacon Set is addressed by an ID, which is
derived from the hash of multiple Beacons. This allows for the creation of
aggregations between multiple Beacons. The resulting ID of a Beacon Set always
represents the specific Beacons that make it up and cannot be changed.

::: info Learn more

Values for Beacons or Beacon Sets are kept up to date on-chain on
[DapiServer.sol](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/dapis/DapiServer.sol)<externalLinkImage/>,
where they can be read directly through `readDataFeedValueWithId`.

:::

# Understanding dAPIs

Through the use of the function `setDapiName` API3 can associate the ID of a
Beacon or Beacon Set with a human-readable name like AVAX/USD. This makes it
possible to take over the management overhead that is associated with oracle
infrastructure by e.g. creating a new Beacon Set if one first-party oracle
becomes unavailable and pointing the name "AVAX/USD" towards the newly created
ID.

The benefit of this approach is that the dApps continue reading the same dAPI
name through `readDataFeedWithDapiName` without being required to make any
changes to their oracle specifications, effectively turning dAPIs into a
turn-key data feed solution for smart contract engineers.

In summary, a dAPI is the interface that smart contracts connect to to access
data feeds. Through a dAPI developers can connect to either self-funded or
managed data feed products.

### Self-Funded dAPIs

Self-funded dAPIs are sourced from a single first-party oracle and allow API3 to
spin up any data on any chain without much overhead. Network fees for the
self-funded dAPIs are paid from a respective sponsor wallet.

Once funds are available in this wallet, updates on the associated dAPI will
begin automatically (given the Airnode invocation restrictions). In the same
way, the dAPI will stop being updated if the required funds for updates are not
sufficiently available anymore.

Sponsor wallets can be funded by anybody and the API3 Market is providing an
intuative interface to check the status of respective self-funded dAPIs and fund
them accordingly. Self-funded dAPIs provide developers with the tools to try out
data feed services with minimal associated costs and no upfront commitment
before committing to managed dAPIs.

::: danger Please note

API3 does not recommend using self-funded dAPIs in a production environment.
Read more in our
[security considerations](/explore/dapis/security-considerations.md).

:::

### Managed dAPIs

Managed dAPIs are sourced from multiple first-party oracles and aggregated using
a median function. Compared to self-funded dAPIs, managed dAPIs are monetized,
as API3 requires payment in USDC on Ethereum Mainnet to operate them.

To access a managed dAPI users need to authorize access through the API3 Market.
Self-funded dAPIs can be upgraded by paying for a managed version and selecting
a desired amount of first-party oracles that should be included in the
aggregation. API3 will create the respective Beacon Set from the best available
first-party providers for the requested data set and point the dAPI towards this
creation.

In addition, API3 takes over the gas management overhead associated with
operating the respective dAPI. API3 recommends the usage of managed dAPIs in
production environments. Please read more about the
[security consideration](/explore/dapis/security-considerations.md) of managed
dAPIs.

## `DapiServer.sol`

Developers use the
[DapiServer.sol](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/dapis/DapiServer.sol)<externalLinkImage/>
contract to access dAPIs. `DapiServer.sol` reads directly from its data store of
Beacons, which are powered by API provider-owned and operated
[Airnodes](/reference/airnode/latest/).

> <img src="../assets/images/dapp-beacon.png" width="550px"/>

A dAPI can be pointed towards an individual Beacon or an aggregation of multiple
Beacons (Beacon Set).

> <img src="../assets/images/dapi-beacons.png" width="550px"/>

Each dAPI has a human-readable name (e.g., `AVAX/USD`) that makes them easily
accessible using `DapiServer.sol` by simply passing the encoded bytes32 value of
the `dapiName` to a reader function.

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

## API3 Market

The API3 Market lists all available dAPIs, self-funded and managed alike. It
represents a hub, that allows developers to browse through a catalogue of
potential data feeds to integrate, fund their operation in the case of
self-funded dAPIs, pay for the upgrade to a managed version or request new data
types.

<!--Additionally it is going to play a cruical role in setting up required
contracts for OEV (LINK) and Service Coverage (LINK). // add this when OEV & Service Coverage pages are added-->

## dAPI Maintenance

The exact process that is being followed currently and what is envisioned for
the future can be found in
[how are dAPIs maintained](/explore/dapis/how-are-dapis-maintained.md).

## Medium Articles

For more information, please refer to
[dAPIs: APIs for dApps](https://medium.com/api3/dapis-apis-for-dapps-53b83f8d2493)<externalLinkImage/>,
[Beacons](https://medium.com/api3/beacons-building-blocks-for-web3-data-connectivity-df6ad3eb5763)<externalLinkImage/>
and
[Monetizing Data Feeds](https://medium.com/@ugurmersin/monetizing-data-feeds-951cd5c912bd)<externalLinkImage/>.
