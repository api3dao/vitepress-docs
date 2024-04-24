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
[Reading a dAPI proxy ](/guides/dapis/read-a-dapi/) for a complete working
example.

```
import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";
...
(value, timestamp) = IProxy(proxyAddress).read();

```

![proxy-contracts.png](../assets/images/proxy-contracts.png)

<FlexEndTag/>
