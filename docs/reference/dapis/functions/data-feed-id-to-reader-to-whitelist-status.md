---
title: dataFeedIdToReaderToWhitelistStatus()
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → DapiServer Functions
path: /reference/dapis/functions/data-feed-id-to-reader-to-whitelist-status.html
version:
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

For on-chain smart contracts, the function
[dataFeedIdToReaderToWhitelistStatus()](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L791-L806)
returns [read access](/explore/dapis/subscriptions.md) information with the
`expirationTimestamp` and `indefiniteWhitelistCount` of a reader for the
specified dAPI data feed.

The reader will not be able to read the dAPI data feed past the
expirationTimestamp (assuming their `indefiniteWhitelistCount` is 0 ). If the
`indefiniteWhitelistCount` is greater than 0 , the reader will be able to read
the data feed indefinitely (regardless of the value of `expirationTimestamp`).

## Example Usage

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol";
contract mySmartContract {

  function myReadable(
    address _dapiServerContractAddress,
    bytes32 _datafeedId
  ) external {
    uint64 expirationTimestamp;
    uint192 indefiniteWhitelistCount;

    // Calling the DapiServer for reader status
    // where "this" is the contract address of this contract (myReadable).
    (expirationTimestamp, indefiniteWhitelistCount) =
      IDapiServer(_dapiServerContractAddress).dataFeedIdToReaderToWhitelistStatus(_datafeedId, address(this));
  }
}
```

## Parameters

`dataFeedIdToReaderToWhitelistStatus(bytes32 datafeedId, address reader)`

- `bytes32 datafeedId` - The ID of a dAPI, Beacon, or Beacon set.
- `address reader` - The address to verify such as the reader's smart contract
  address or another address.

### Using a `dapiName` for the `datafeedId` parameter

If you want to check the status using a `dapiName`, first encode the `dapiName`
to bytes32 and calculate the off-chain hash of the `encodedDapiName` as shown
below. Then pass the value of `dapiNameHash` as `_datafeedId` in the code
example above. Try it in the
[ethers playground](https://playground.ethers.org/).

```solidity
// First encode the dapiName (such as AVAX/USD) to bytes32
encodedDapiName = ethers.utils.formatBytes32String("AVAX/USD");
// encodedDapiName now equals
// 0x415641582f555344000000000000000000000000000000000000000000000000

// Then calculate the off-chain hash
dapiNameHash = ethers.utils.solidityKeccak256(['bytes32'], [encodedDapiName]);
// dapiNameHash now equals
// 0xcc06defee290c6e46f55823e39eb14024b06d4a6c7a0b6bf8b1f1e229c389b9c
```

## Returns

- `expirationTimestamp` - Timestamp at which the whitelisting of the reader will
  expire.

- `indefiniteWhitelistCount` - Number of times `reader` was whitelisted
  indefinitely for `dataFeedId`.
