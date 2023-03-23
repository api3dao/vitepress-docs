---
title: Reading dAPIs
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /reference/dapis/understand/read-dapis.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

dApps can be read dAPIs easily with API3 Market
[proxy contracts](/reference/dapis/understand/proxy-contracts.md). Use the API3
Market UI to obtain the proxy contract address for any dAPI such as
[AAVE/USD<ExternalLinkImage/>](https://market.api3.org/dapis/polygon-testnet/AAVE-USD)
on the Mumbai network. A proxy contract (using its address) only reads from a
single predefined dAPI. There are many dAPIs, each of which has its own proxy
contract used to `read()` its value and timestamp.

<img src="../assets/images/proxy.png" style="width:80%;">

## Using a proxy contract address

Currently each self-funded dAPI has an on-chain proxy contract address that is
publicly available to any dApp. Its address is used to read the dAPI value. The
address for the dAPI
[AAVE/USD<ExternalLinkImage/>](https://market.api3.org/dapis/polygon-testnet/AAVE-USD)
on the Mumbai network is `0xa8785d83A31B21065F27b640F50694b39B1bda9a`.

```solidity
return IDapiProxy(0xa8785d83A31B21065F27b640F50694b39B1bda9a).read();
```

See the guide
[Reading a self-funded dAPI proxy](/guides/dapis/read-self-funded-dapi/) and
learn more on how to use a proxy contract address.
