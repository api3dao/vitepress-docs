---
title: readDataFeedValueWithId()
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → DapiServer Functions
path: /reference/dapis/functions/read-data-feed-value-with-id.html
version:
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

::: warning This function uses IDs.

Be sure to understand the difference between using a name or ID. See
[dAPI Names](../index.md).

:::

This function reads a value directly from a Beacon or Beacon set using its ID.
In the code example below, `_datafeedId` is a Beacon or Beacon set ID. For
on-chain smart contracts the `msg.sender` argument received by the function
[readDataFeedValueWithId()](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L708-L721)
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
        bytes32 _datafeedId
    ) external {
        int224 private value;

        // Calling the DapiServer for a data feed value.
        value =
            IDapiServer(_dapiServerContractAddress).readDataFeedValueWithId(_datafeedId);
    }
}
```

See another code example of `readDataFeedValueWithId()` in the
[data-feed-reader-example repo](https://github.com/api3dao/data-feed-reader-example/blob/main/contracts/DataFeedReaderExample.sol#L19)<ExternalLinkImage/>.

## Parameters

`readDataFeedValueWithId(bytes32 _datafeedId)`

- `bytes32 datafeedId` - The ID of a Beacon or Beacon set to retrieve a value
  for.

## Returns

- `int224 value` - The value of the Beacon or Beacon set.

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
