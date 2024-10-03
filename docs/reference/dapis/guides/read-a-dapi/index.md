---
title: Reading a dAPI proxy
pageHeader: dAPIs → Guides
outline: deep
---

<!-- https://blog.chain.link/smart-contract-call-another-smart-contract/ -->

<!-- https://medium.com/@blockchain101/calling-the-function-of-another-contract-in-solidity-f9edfa921f4c -->

<PageHeader/>

# Reading a dAPI proxy

This guide requires a proxy contract address for a particular dAPI you are
interested in. You can find them in the [API3 Market](https://market.api3.org)
website. If a proxy contract has not been created for a particular dAPI, use the
API3 Market UI to do so, see the guide
[Subscribing to dAPIs](/dapis/guides/subscribing-to-dapis/).

## 1. Add npm package

dAPI proxies allows dAPIs to be used like libraries. Your smart contract needs
to import the `IProxy` interface to call a dAPI's proxy contract. You can add
the [@api3/contracts](https://www.npmjs.com/package/@api3/contracts) package to
your project and get access to the IProxy interface contract.

```bash
npm i @api3/contracts
```

## 2. Read a dAPI

The solidity smart contract below demonstrates how to read a dAPI using a proxy
contract address and the `IProxy` interface. You do not read directly from the
proxy contract itself but rather by using the `IProxy` interface. Look at the
`read()` function of the IProxy interface on line 24 below.

To read a different dAPI, your smart contract does not need to change the code
itself, rather it just needs to use a different proxy contract address, see line
13 below. `IProxy` will call the proxy contract associated with the dAPI for
you.

```solidity{13,24}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts@4.9.5/access/Ownable.sol";
import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";

contract DataFeedReaderExample is Ownable {
    // The proxy contract address obtained from the API3 Market UI.
    address public proxyAddress;

    // Updating the proxy contract address is a security-critical
    // action. In this example, only the owner is allowed to do so.
    function setProxyAddress(address _proxyAddress) public onlyOwner {
        proxyAddress = _proxyAddress;
    }

    function readDataFeed()
        external
        view
        returns (int224 value, uint256 timestamp)
    {
        // Use the IProxy interface to read a dAPI via its
        // proxy contract .
        (value, timestamp) = IProxy(proxyAddress).read();
        // If you have any assumptions about `value` and `timestamp`,
        // make sure to validate them after reading from the proxy.
    }
}
```

Note that this contract is an example and should not be used for production
purposes without proper security audits and testing.

## Code explanation

- The contract `DataFeedReaderExample` imports the `Ownable` contract, which is
  used to restrict certain actions to the owner of the contract.

- The contract imports the `IProxy` interface from the
  `@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol` library, which
  defines a function called `read()` that reads data from a dAPI data feed. Be
  sure to use the proper IProxy interface version for the version of Solidity
  you are using, see
  [IProxy Interface](/dapis/reference/understand/proxy-contracts.md#iproxy-interface-contracts).

- The contract has a public variable called `proxyAddress` which is the address
  of the proxy contract that will be used to access the desired dAPI via its
  proxy contract. The `setProxyAddress()` function is a public function that
  allows the owner of the contract to update the proxy contract address.

* The `readDataFeed()` function is a public function that reads from a dAPI
  through the IProxy interface. The function returns two values representing the
  latest `value` with 18 decimals (type int224) and `timestamp` (type uint256)
  of the dAPI that the proxy is reading from.

## Summary

For additional information on how to read from a dAPI proxy, please refer to the
[datafeed-reader-example](https://github.com/api3dao/data-feed-reader-example)
repository which contains a hardhat project with a sample smart contract that
reads from a dAPI proxy.
