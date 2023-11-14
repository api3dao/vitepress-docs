---
title: Proxy contracts
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → Understanding dAPIs
path: /reference/dapis/understand/proxy-contracts.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Proxy contracts are generated and deployed by the
[API3 Market](https://market.api3.org) and allow for simple access to dAPIs by
any dApp. Access the API3 Market UI to easily obtain the address of a proxy
contract and use it to read the value of its dAPI. Each proxy contract is linked
to a single dAPI on a particular network.

dApp owners use the address of a proxy contract to read dAPIs with the
[IProxy interface](/reference/dapis/understand/iproxy.md). See the guide
[Reading a self-funded dAPI proxy ](/guides/dapis/read-a-dapi/) for a complete
working example.

```
import "@api3/contracts/v0.8/interfaces/IProxy.sol";
...
(value, timestamp) = IProxy(proxyAddress).read();

```

Self funded dAPIs have a single public proxy contract used by the community and
are sourced from a single beacon. Managed dAPIs use the same proxy contact and
can be sourced from multiple beacons.

![proxy-contracts.png](../assets/images/proxy-contracts.png)

### Proxy contract uniqueness

All dAPIs have one publicly available
[proxy contract](/reference/dapis/understand/proxy-contracts.md). For example,
the proxy contract for the self-funded dAPI
[ZIL/USD](https://market.api3.org/dapis/polygon-testnet/ZIL-USD) on the Mumbai
testnet has an address of `0x4a40Ed2Dbd51e655eD64371737C81883B0524eB2`.
Therefore, any dApp can call the ZIL/USD dAPI to get its value and timestamp
using its proxy contract address.

```solidity
(value, timestamp) = IProxy(0x4a40Ed2Dbd51e655eD64371737C81883B0524eB2).read();
```

<FlexEndTag/>
