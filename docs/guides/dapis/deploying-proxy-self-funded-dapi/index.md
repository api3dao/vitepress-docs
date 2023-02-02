---
title: Deploying a proxy for a self-funded dAPI
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → dAPIs
path: /guides/dapis/deploying-proxy-self-funded-dapi/index.html
outline: deep
tags:
---

<!-- https://blog.chain.link/smart-contract-call-another-smart-contract/ -->

<!-- https://medium.com/@blockchain101/calling-the-function-of-another-contract-in-solidity-f9edfa921f4c -->

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

## Proxy contracts

Smart contracts can interact and read values from contracts that are already
deployed on the blockchain. By deploying a proxy contract via the API3 market, a
dAPP can interact and read values from a dAPI like ETH/USD.

If a proxy is already deployed for a self-funded dAPI, the dAPP can interact
with the dAPI without having to deploy a proxy contract by using the address of
the already deployed proxy contract which will be visible on the API3 market.

## Deploying a proxy contract

it is recommended to use the [API3 market](https://market.api3.org) to deploy a
proxy contract for a self-funded dAPIs. The API3 market will deploy the proxy
contract and will also verify the proxy contract on etherscan. The API3 market
will also provide the address of the proxy contract, in case it is already
deployed by someone else.

## Verifying the proxy contract

before using the proxy contract, you should verify if the proxy contract points
to the correct `dapiNameHash` and `Dapiserver.sol` address.This can be done
either through viewing the code of the proxy on a block explorer like etherscan

or by using the following script:

```javascript
const ethers = require("ethers");

const iface = new Interface([
    "function read() external view returns (int224,uint32)",
    "function dapiServer() external view returns (address)"
    "function dapiNameHash() external view returns (bytes32)"
    ]);
const provider = new ethers.providers.JsonRpcProvider("<RPC_ENDPOINT>");
const proxy = new ethers.Contract(proxyAddress, iface, provider);

const dapiServer = await proxy.dapiServer();
const dapiNameHash = await proxy.dapiNameHash();

console.log(dapiServer,dapiNameHash);
```

::: tip

If the proxy contract was deployed using the API3 market, the proxy contract
should be verified on a blockexplorer like etherscan.

:::

The `dapiServer` address should be the same as the address of the `Dapiserver`
contract. Please refer to this [link](../../../reference/dapis/chains.md) for
the contract address of the `Dapiserver` contract.

The `dapiNameHash` should be the same as the `dapiNameHash` of the dAPI you are
using which can be computed using the following cli commands:

```bash
$ npm install -g @ethersproject/cli

$ ethers eval 'utils.solidityKeccak256(["bytes32"],[utils.formatBytes32String("ETH/USD")])'

0x9e6138f8f57d7b493a8364edb0a0ac92399dfd890eecb9121050836a1749ba42 ← dapiNameHash
```

Where ETH/USD is the `dapiName` we got from the page of the dAPI on the API3
Market.
