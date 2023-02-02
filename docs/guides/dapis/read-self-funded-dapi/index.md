---
title: Reading a self-funded dAPI proxy
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → dAPIs
path: /guides/dapis/read-self-funded-dapi/index.html
outline: deep
tags:
---

<!-- https://blog.chain.link/smart-contract-call-another-smart-contract/ -->

<!-- https://medium.com/@blockchain101/calling-the-function-of-another-contract-in-solidity-f9edfa921f4c -->

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

dAPI proxies allows dAPIs to be used like libraries. This can reduce deployment
costs because your smart contract just need to import the interface for calling
the proxy contract. To read a different dAPI, your smart contract does not need
to change the code itself, rather it just needs to use a different proxy address
when calling the `read()` function on the proxy contract.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract MyContract  {
    import "@api3/airnode-protocol-v1/contracts/dapis/proxies/interfaces/IDapiProxy.sol";
    import "@openzeppelin/contracts/ownership/Ownable.sol";

    address dapiProxy;

    function setDapiProxyAddress(address _proxyAddress) public onlyOwner {
        dapiProxy = _proxyAddress;
    }

    function readDapi public view returns (int224 value, uint32 timestamp) {
        return IDapiProxy(dapiProxy).read();
    }
}
```
