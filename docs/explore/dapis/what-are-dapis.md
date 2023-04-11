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

<FlexStartTag/>

# {{$frontmatter.title}}

<!--A dAPI is a standardized interface that smart contracts can use to access data
feed services, that are continuously updated. These can range from the latest
cryptocurrency, forex, stock or commodity prices.-->

dAPIs are on-chain data feeds sourced from off-chain
[first-party oracles](/explore/introduction/first-party.md) owned and operated
by API providers themselves. Data feeds are continuously updated by first-party
oracles using signed data. dApp owners can read the on-chain value of any dAPI
in realtime.

<!--They can power various decentralized applications such as DeFi
lending, synthetic assets, stable coins, derivatives, NFTs and more.-->

dAPIs are composed of a
[beacon](/reference/dapis/understand/index.md#data-feeds-values-stored-on-chain)
or a set of beacons and are sometimes referred to as first-party data feeds
because they are sourced from first-party oracles. Therefore a beacon is
directly powered and maintained on-chain by the owner of the data, the API
provider, which effectively removes third-party middlemen that other oracle
solutions rely on. This approach creates source transparency in addition to,
higher security, cost-efficiency and scalability through less parties being
involved in the oracle service operation.

## dAPIs connect smart contracts to first-party data feeds

Through the use of the proxy contract function `read()` API3 can associate the
ID of a beacon or beacon set with a human-readable name like ETH/USD. The
benefit of this approach is that dApps continue to read the same dAPI name
without being required to make any changes to their code, effectively turning
dAPIs into a turn-key data feed solution for smart contract developers.

<img src="../assets/images/02-b-First_vs_Third_party_oracles-Descentralized_API_(dAPI).png" width="400"/>

At the core, a **dAPI** is a mapping that points towards a **beacon** or a
**beacon set**, similarly to how an ENS name is mapped to a wallet address. The
ability to control this mapping allows the API3 DAO to take over the management
overhead that is associated with oracle infrastructure by e.g. creating a new
beacon set if one first-party oracle becomes unavailable and pointing the name
"AVAX/USD" towards the newly created ID.

## What is a Beacon or a Beacon Set?

A beacon is a point of data that is kept alive on-chain by a respective
first-party oracle. It corresponds to an ID which is derived from the hash of
the Airnode address that is deployed by an API Provider, in combination with the
request parameters. This resulting ID will always represent a specific provider
with specific request parameters and cannot be changed.

<img src="../assets/images/dAPI_explainer_advanced.png" style="width:500px">

Following the same principle, a beacon set is addressed by an ID, which is
derived from the hash of multiple beacons. This allows for the creation of
aggregations between multiple beacons. The resulting ID of a beacon set always
represents the specific beacons that make it up and cannot be changed.

Values for beacons or beacon sets are kept up to date on-chain by many Airnodes
which are owned by API providers, where they can be read using an API3 Market
[proxy contract](/reference/dapis/understand/proxy-contracts.md).

## dAPI: A standardized interface

dAPIs possess a range of distinct attributes:

- dAPIs have a standardized, user-friendly interface that intends to abstract
  away the technical implementation.
- A dApp uses the dAPI interface to access data feed services. These services
  exist in a fully permissionless or authorized format.
- dAPIs exist entirely on-chain managed by a central contract that manages a
  beacon store that is in turn updated by Airnodes.
- Through a dAPI smart contract, developers can access additional services such
  as Service Coverage or Oracle Extractable Value.

::: info Read more

Dive into the design decisions about dAPIs by reading
[<span style="color:rgb(16, 185, 129);">dAPIs: APIs for dApps<ExternalLinkImage/></span>](https://medium.com/api3/dapis-apis-for-dapps-53b83f8d2493).

:::

<!--## Why use dAPIs?

Due to being composed out of first-party data feeds, dAPIs offer security,
transparency, cost-efficiency and scalability in a turn-key package.

_Security_

Data used to update a first-party data feed is cryptographically signed by the
owner of the data. This means that the data that will update a feed cannot be
tampered with once it leaves the source. Furthermore, the API providers host a
first-party oracle node, Airnode, to push the data to the chain themselves. This
renders denial of service attacks by third parties ineffective.

_Transparency_

The cryptographic signatures prove that the data that updates a feed comes
directly from a specific API provider. Furthermore, Beacons that underpin dAPIs
allow the user to inspect what exact API endpoints are being called, and with
which parameters. This provides complete transparency to the dApp developer,
which is a big step from depending on a pseudonymous selection of third parties
that intentionally obscure their data sources.

_Cost-efficiency_

dAPIs are cost efficient compared to third-party data feeds, as the user does
not need to pay middlemen node operators for their services. Furthermore,
first-party data feeds do not require redundancy against middlemen layer
attacks. This makes single-Beacon dAPIs feasible, and allows API3 to provide a
wide variety of data feeds in a cost-efficient way.

_Scalability_

An inherently secure and cost-efficient data feed design allows API3 to build a
large number of dAPIs on many chains. This is supplemented by purpose-designed
Airnode protocols and relayer schemes to improve efficiency while not degrading
the security guarantees of a first-party data feed. The improved scalability of
dAPIs also factors into building aggregated data feeds. Since first-party data
feeds do not require redundancy at the middlemen layer, the aggregation costs
less gas and source-level decentralization becomes more affordable.-->

## Role of `API3Server.sol`

A dAPI points to an individual beacon or an aggregation of multiple beacons
(beacon set). Each dAPI has a human-readable name (e.g., `AVAX/USD`) that makes
them easy to categorize. The contract
[API3ServerV1.sol](/reference/dapis/understand/) maintains the link between a
dAPI name and the beacon(s) it uses for the dAPI. dApps use an API3 Marker proxy
contract to read any dAPI from `API3ServerV1.sol`.

dApp owners use a proxy contract, available on the
[API3 Market<ExternalLinkImage/>](https://market.api3.org), to access a dAPI.
Proxy contracts use the
[API3Server.sol<ExternalLinkImage/>](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/api3-server-v1/Api3ServerV1.sol)
contract to access dAPIs. Developers can easily set the proxy contract address
in a dApp contract to start reading from the dAPIs.

<img src="../assets/images/dAPI_explainer.png" style="width:500px">

The `API3ServerV1.sol` contract reads directly from its data store of beacons,
which are powered by API provider-operated
[Airnodes](/reference/airnode/latest/). Thus proxies allow dAPIs to be used like
libraries. The smart contract only needs to
[import the interface](/guides/dapis/read-self-funded-dapi/) for calling the
proxy contract.

This means once a dAPI is integrated to read a different data feed, the contract
does not need to change the code itself, rather it only needs to use a different
proxy address when calling the read() function on the proxy contract. If the
dAPI interface has previously been imported, it abstracts away the technical
implementation of accessing new data feeds.

Refer to these guides and learn how to fund a self-funded dAPI and to read the
dAPI using a proxy contract:

- [Subscribing to Self-Funded dAPIs](/guides/dapis/subscribing-self-funded-dapis/index.md)
- [Reading a Self-Funded dAPI Proxy](/guides/dapis/read-self-funded-dapi/index.md)

<!--Additionally it is going to play a cruical role in setting up required
contracts for OEV (LINK) and Service Coverage (LINK). // add this when OEV & Service Coverage pages are added-->

<!--## dAPI Maintenance

The exact process that is being followed currently and what is envisioned for
the future can be found in
[how are dAPIs maintained](/explore/dapis/how-are-dapis-maintained.md).-->

<!--## Medium Articles

For more information, please refer to
[dAPIs: APIs for dApps](https://medium.com/api3/dapis-apis-for-dapps-53b83f8d2493)<externalLinkImage/>,
[Beacons](https://medium.com/api3/beacons-building-blocks-for-web3-data-connectivity-df6ad3eb5763)<externalLinkImage/>
and
[Monetizing Data Feeds](https://medium.com/@ugurmersin/monetizing-data-feeds-951cd5c912bd)<externalLinkImage/>.-->

<FlexEndTag/>
