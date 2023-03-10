---
title: Understanding dAPIs
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /reference/dapis/index.html
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

## Api3ServerV1.sol

API providers, owners of first-party Airnodes, send data feed values to the
`Api3ServerV1.sol` contract on-chain which stores the feed values as individual
beacons.

<img src="./assets/images/beacons.png" style="width:80%;">

`Api3ServerV1.sol` holds the definitions for thousands of dAPIs, each of which
is an aggregated value of multiple beacons or the value of a single beacon.

## API3 Market proxy contracts

dAPIs can be read easily from the `Api3ServerV1.sol` contract with API3 Market
proxy contracts. Use the API3 Market UI to create a custom proxy contract for
any dAPI such as [AAVE/USD<ExternalLinkImage/>](https://market.api3.org). A
custom proxy contract describes a single unique dAPI.

<img src="./assets/images/proxy.png" style="width:80%;">

Create as many proxy contracts as needed. Each one has an on-chain address that
is used to read the value of a desired dAPI.

```solidity
return IDapiProxy(dapiProxyAddress).read();
```

See the guide
[Reading a self-funded dAPI proxy](/guides/dapis/read-self-funded-dapi/) and
learn how to use a proxy contract.

## Security

dApp developers do not need to trust API3 as all Airnodes are owned and operated
by an API provider. Each API provider has deployed their Airnode using a
`secrets.env` file that API3 does not possess. Therefore the Airnode operates
under the complete autonomy of the API provider who's signed data is used to
update
[Api3ServerV1sol<ExternalLinkImage/>](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/dapis/Api3ServerV1.sol)
contract. API3 cannot alter values from API providers.s

All
[API3 sources code<ExternalLinkImage/>](https://github.com/orgs/api3dao/repositories?type=all)
is open sourced and can be verified by anyone. Consider reading through API3
source code to verify claims of security.
