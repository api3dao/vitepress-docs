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

<FlexStartTag/>

# {{$frontmatter.title}}

::: info Prerequisites

This section assumes that you have already deployed a self-funded dAPI proxy. If
you have not done so, please follow this guide on
[<span style="color:rgb(16, 185, 129);">subscribing to self-funded dapis</span>](/guides/dapis/subscribing-self-funded-dapis/index.md).

:::

dAPI proxies allows dAPIs to be used like libraries. Your smart contract just
need to import the interface for calling the proxy contract. To read a different
dAPI, your smart contract does not need to change the code itself, rather it
just needs to use a different proxy address when calling the `read()` function
on the proxy contract.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@api3/contracts/v0.8/interfaces/IProxy.sol";

contract DataFeedReaderExample is Ownable {
    // This contract reads from a single proxy. Your contract can read from multiple proxies.
    address public proxy;

    // Updating the proxy address is a security-critical action. In this example, only
    // the owner is allowed to do so.
    function setProxy(address _proxy) public onlyOwner {
        proxy = _proxy;
    }

    function readDataFeed()
        external
        view
        returns (int224 value, uint256 timestamp)
    {
        (value, timestamp) = IProxy(proxy).read();
        // If you have any assumptions about `value` and `timestamp`, make sure
        // to validate them right after reading from the proxy.
    }
}
```

For more information on how to read from a self-funded dAPI proxy, please refer
to the
[datafeed-reader-example](https://github.com/api3dao/data-feed-reader-example)
repository which contains a hardhat project with a sample smart contract that
reads from a self-funded dAPI proxy.

<FlexEndTag/>
