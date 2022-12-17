---
title: Just the Code
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → dAPIs
path: /guides/dapis/just-the-code.html
outline: deep
tags:
---

<!-- https://blog.chain.link/smart-contract-call-another-smart-contract/ -->

<!-- https://medium.com/@blockchain101/calling-the-function-of-another-contract-in-solidity-f9edfa921f4c -->

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

## Using an API3 Market proxy contract

On blockchains, smart contracts can interact with existing deployed contracts.
Interacting with proxy contracts from the API3 Market you can acquire the value
of a dAPI such as AVAX/USD. Each proxy contract is tied to a single dAPI.

This practice allows dAPIs to be used like libraries. This can also reduce
deployment costs because your smart contract doesn’t need to include all the
code itself, rather it just needs to use a different dAPI name when calling the
`read()` function on hte proxy contract.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract MyContract  {

    DapiProxy proxy;

    function MyContract(address _proxyAddress) public {
        proxy = DapiProxy(_proxyAddress);
    }

    function callDapiProxy public view returns (int224 value, uint32 timestamp) {
        // Read the dAPI value
        return proxy.read();
    }
}
```

## Using the DapiServer.sol contract

::: tip

The preferred method of calling a dAPI is to use a proxy contract acquired from
the API3 Market. Please take a look at the Call dAPI (proxy) guide.

:::

The `DapiServer.sol` contract is the original method to call a dAPI such as
AVAX/USD. It use requires your smart contract to import the `IDapiServer` and
call one its functions than can read a dAPI. Doing so requires the necessary
parameters that identifies the `DapiServer` contract address and the name of the
dAPI
[encoded as a bytes32 value](/reference/dapis/functions/read-data-feed-with-dapi-name.md#parameters).
This is different from the API3 Market proxy contracts where you only need the
proxy's contract address.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol";
contract MyContract {

int224 public value;
uint32 public timestamp;

    function callDapi(
        address _dapiServerContractAddress,
        bytes32 _dapi
    )  external {

        // Call the DapiServer contract for the value and timestamp of AVAX/USD on Polygon Mumbai.
        // _dapiServerContractAddress: 0x71Da7A936fCaEd1Ee364Df106B12deF6D1Bf1f14
        // _dapi: AVAX/USD - 0x415641582f555344000000000000000000000000000000000000000000000000
        (value, timestamp) =
            IDapiServer(_dapiServerContractAddress).readDataFeedWithDapiName(_dapi);
    }
}
```
