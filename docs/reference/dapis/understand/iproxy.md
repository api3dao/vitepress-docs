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

For every [dAPI](/reference/dapis/understand/index.md) there is a single
publicly available proxy contract that reads the dAPI's data (`value` int224,
`timestamp` uint256). You do not access the proxy contract directly but rather
use the `IProxy` interface. The `IProxy` interface is part of the npm package
[@api3/contracts](https://www.npmjs.com/package/@api3/contracts).

## IProxy interface contracts

For each version of Solidity supported there is an associated `IProxy` contract.
This ensures that the interface can handle any necessary differences in the
Solidity releases. You simply import the required `IProxy` interface contract
accordingly.

```solidity
// imports for Solidity versions 6x, 7x, and 8x
import "@api3/contracts/v0.6/interfaces/IProxy.sol";
import "@api3/contracts/v0.7/interfaces/IProxy.sol";
import "@api3/contracts/v0.8/interfaces/IProxy.sol";
```

You can also see the available Solidity specific IProxy contracts in the API3
repo
[api3dao/contracts](https://github.com/api3dao/contracts/tree/main/contracts).

## Usage

Use the address of a proxy contract to read dAPIs with `IProxy`. See the guide
[Reading a dAPI proxy](/guides/dapis/read-a-dapi/) for a complete working
example. Proxy contract addresses are available on the
[API3 Market](https://market.api3.org).

```
import "@api3/contracts/v0.8/interfaces/IProxy.sol";
...
(value, timestamp) = IProxy(proxyAddress).read();

```

<FlexEndTag/>
