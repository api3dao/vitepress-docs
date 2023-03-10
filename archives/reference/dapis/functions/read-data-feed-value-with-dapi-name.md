---
title: readDataFeedValueWithDapiName()
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → DapServer Contract
path: /reference/dapis/functions/read-data-feed-value-with-dapi-name.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

This function reads a value from a dAPI using its name. In the code example
below, `\_dapiName`is a dAPI name. For on-chain smart contracts the `msg.sender`
argument received by the function
[readDataFeedValueWithDapiName()](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L749-L765)
must have [read access](/reference/dapis/functions/index.md#read-access) for the
dAPI requested.

Calling from off-chain code (_using a library such as `ether.js`_) is not
subject to coverage policies. Off-chain code is beyond the scope of this doc.

## Example Usage

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol";
contract mySmartContract {

    function myGetDataFeedValue(
        address _dapiServerContractAddress,
        bytes32 _dapiName
    ) external {
        int224 private value;

        // Calling the DapiServer for a data feed value.
        value =
            IDapiServer(_dapiServerContractAddress).readDataFeedValueWithDapiName(_dapiName);
    }
}
```

See another code example of `readDataFeedValueWithDapiName()` in the
[data-feed-reader-example repo](https://github.com/api3dao/data-feed-reader-example/blob/main/contracts/DataFeedReaderExample.sol#L37)<ExternalLinkImage/>.

## Parameters

`readDataFeedValueWithDapiName(bytes32 _dapiName)`

- `bytes32 dapiName` - The encoded bytes32 value of a dAPI name to retrieve a
  value for (no timestamp). See
  [Encode the dapiName](/reference/dapis/#with-dapiserver-functions) to learn
  how to encode the value of a `dapiName`.

## Returns

- `int224 value` - The value of the dAPI.

The `DapiServer.sol` contract casts the reported data point to `int224`. If this
is a problem (because the reported data may not fit into 224 bits or it is of a
completely different type such as `bytes32`), do not use this contract and
implement a customized version instead. The contract casts the timestamps to
`uint32`, which means it will not work work past-2106 in the current form. If
this is an issue, consider casting the timestamps to a larger type.
