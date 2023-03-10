---
title: readDataFeedWithId()
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → DapServer Contract
path: /reference/dapis/functions/read-data-feed-with-id.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

::: warning This function uses IDs.

Be sure to understand the difference between using a name or ID. See
[dAPI Names](/reference/dapis/dapi-names.md).

:::

This function reads a value and timestamp directly from a Beacon or Beacon set
using its ID. In the code example below, `_datafeedId` is a Beacon or Beacon set
ID. For on-chain smart contracts the `msg.sender` argument received by the
function
[readDataFeedWithId()](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L691-L703)
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
        bytes32 _datafeedId
    ) external {
        int224 private value;
        uint32 private timestamp;

        // Calling the DapiServer for a data feed value and timestamp.
        (value, timestamp) =
            IDapiServer(_dapiServerContractAddress).readDataFeedWithId(_datafeedId);
    }
}
```

See another code example of `readDataFeedWithId()` in the
[data-feed-reader-example repo](https://github.com/api3dao/data-feed-reader-example/blob/main/contracts/DataFeedReaderExample.sol#L9)<ExternalLinkImage/>.

## Parameters

`readDataFeedWithId(bytes32 _datafeedId)`

- `bytes32 datafeedId` - The ID of a Beacon or Beacon set to retrieve a value
  and timestamp for.

## Returns

- `int224 value` - The value of the Beacon or Beacon set.
- `uint32 timestamp` - The timestamp associated with the value.

The `DapiServer.sol` contract casts the reported data point to `int224`. If this
is a problem (because the reported data may not fit into 224 bits or it is of a
completely different type such as `bytes32`), do not use this contract and
implement a customized version instead. The contract casts the timestamps to
`uint32`, which means it will not work work past-2106 in the current form. If
this is an issue, consider casting the timestamps to a larger type.

If the `timestamp` of a data feed is zero, this means that it was never written
to. This may be the case for new data feeds. Therefore a zero value in the
`value` field is not valid if the `timestamp` is zero.

In general, make sure to check if the timestamp of the data feed is fresh
enough, and definitely disregard data feeds with a zero `timestamp`.
