---
title: IProxy interface
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → Understanding dAPIs
path: /reference/dapis/understand/iproxy.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

For every [dAPI](/reference/dapis/understand/index.md) a proxy contract needs to
be deployed that reads the dAPI's data (`value` int224, `timestamp` uint256).
You use the `IProxy` interface to read via the proxy contract. The `IProxy`
interface is part of the npm package
[@api3/contracts](https://www.npmjs.com/package/@api3/contracts).∂

## IProxy interface contracts

The `IProxy` interface is available for∂ Solidity versions 8x and greater but
can be easily adapted for earlier versions. The interface is available in the
npm package [@api3/contracts](https://www.npmjs.com/package/@api3/contracts)
under

`/@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol`.

```solidity
// imports for Solidity versions 8x and greater
import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";
```

## Usage

Use the address of a proxy contract to read dAPIs with `IProxy`. See the guide
[Reading a dAPI proxy](/guides/dapis/read-a-dapi/) for a complete working
example. Proxy contract addresses are available on the
[API3 Market](https://market.api3.org).

```solidity
import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";
...
(value, timestamp) = IProxy(proxyAddress).read();

```

<FlexEndTag/>
