---
title: dAPIs are datafeeds
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /reference/dapis/understand/index.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

dAPIs are continuously updated streams of off-chain data, such as the latest
cryptocurrency, stock, and commodity prices. They can power various
decentralized applications such as DeFi lending, synthetic assets, stable coins,
derivatives, NFTs and more.

## Datafeeds stored on-chain

API providers, owners of first-party Airnodes, store datafeed values on-chain as
individual beacons that in are turn sourced by the
[Api3ServerV1.sol<ExternalLinkImage/>](https://github.com/api3dao/airnode-protocol-v1/blob/v1/contracts/dapis/Api3ServerV1.sol)
contract as dAPIs.

<img src="../assets/images/beacons.png" style="width:80%;">

`Api3ServerV1.sol` manages the definitions for thousands of dAPIs, each of which
is an aggregated value of multiple beacons or the value of a single beacon.
Functions in `Api3ServerV1.sol` expose dAPIs values to API3 Market
[proxy contracts](/reference/dapis/understand/proxy-contracts.md). dApps do not
call the `Api3ServerV1.sol` contract directly but use intuitive proxy contracts
to get the value of a dAPI.

<!--## Reading dAPIs

dApps can be read dAPIs easily with API3 Market
[proxy contracts](/reference/dapis/understand/proxy-contracts.md). Use the API3
Market UI to obtain the proxy contract address for any dAPI such as
[AAVE/USD<ExternalLinkImage/>](https://staging.api3-market.pages.dev/dapis/polygon-testnet/AAVE-USD)
on the Mumbai network. A proxy contract describes a single unique dAPI.

<img src="../assets/images/proxy.png" style="width:80%;">

Use as many proxy contracts desired. Each self-funded dAPI has an on-chain proxy
contract address that is used to read its value. The address for the dAPI
AAVE/USD on the Mumbai network is `0xa8785d83A31B21065F27b640F50694b39B1bda9a`.

```solidity
return IDapiProxy(0xa8785d83A31B21065F27b640F50694b39B1bda9a).read();
```

## More related material...

See the guide
[Reading a self-funded dAPI proxy](/guides/dapis/read-self-funded-dapi/) and
learn more on how to use a proxy contract.

Learn more about the differences between a [self-funded]() and [managed]() dAPI.
-->
