---
title: Proxy contracts
pageHeader: dAPIs → Reference
outline: deep
---

<PageHeader/>

# Proxy contracts

Proxy contracts are generated and deployed by the
[API3 Market](https://market.api3.org) and allow for simple access to dAPIs by
any dApp. Access the API3 Market UI to easily obtain the address of a proxy
contract and use it to read the value of its dAPI. Each proxy contract is linked
to a single dAPI on a particular network.

dApp owners use the address of a proxy contract to read dAPIs with the
[IProxy interface](#iproxy-interface-contracts). See the guide
[Reading a dAPI proxy ](/dapis/guides/read-a-dapi/) for a complete working
example.

## IProxy interface contracts

The `IProxy` interface is available for Solidity versions 8x and greater but can
be easily adapted for earlier versions. The interface is available in the npm
package [@api3/contracts](https://www.npmjs.com/package/@api3/contracts) under

`/@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol`.

```solidity
// imports for Solidity versions 8x and greater
import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";
```

## Usage

Use the address of a proxy contract to read dAPIs with `IProxy`. See the guide
[Reading a dAPI proxy](/dapis/guides/read-a-dapi/) for a complete working
example. Proxy contract addresses are available on the
[API3 Market](https://market.api3.org).

```solidity
import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";
...
(value, timestamp) = IProxy(proxyAddress).read();

```
