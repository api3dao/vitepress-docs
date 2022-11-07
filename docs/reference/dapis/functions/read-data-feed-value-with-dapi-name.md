---
title: readDataFeedValueWithDapiName()
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → DapiServer Functions
path: /reference/dapis/read-data-feed-value-with-dapi-name.html
version:
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

This function reads a value from a dAPI using its name. In the code example
below, `\_dapiName`is a dAPI name. For on-chain smart contracts the `msg.sender`
argument received by the function
[readDataFeedValueWithDapiName()](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L749-L765)
must have [read access](/explore/dapis/coverage-policies.md) for the dAPI
requested.

Calling from off-chain code (_using a library such as `ether.js`_) is not
subject to coverage policies. Off-chain code is beyond the scope of this doc.

## Example Code

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

- `bytes32 dapiName` - The name of the dAPI to retrieve a value for.

## Returns

- `int224 value` - The value of the dAPI.

::: tip Please note:

The `DapiServer.sol` contract casts the reported data point to `int224`. If this
is a problem (because the reported data may not fit into 224 bits or it is of a
completely different type such as `bytes32`), do not use this contract and
implement a customized version instead. The contract casts the timestamps to
`uint32`, which means it will not work work past-2106 in the current form. If
this is an issue, consider casting the timestamps to a larger type.

:::

If the timestamp is `0` then the function will revert with "_Data feed does not
exist_".
