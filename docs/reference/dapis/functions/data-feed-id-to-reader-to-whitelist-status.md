---
title: dataFeedIdToReaderToWhitelistStatus()
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → DapiServer Functions
path: /reference/dapis/data-feed-id-to-reader-to-whitelist-status.html
version:
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

For on-chain smart contracts, the function
[dataFeedIdToReaderToWhitelistStatus()](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L791-L806)
returns [read access](./#coverage-policies) information with the
`expirationTimestamp` and `indefiniteWhitelistCount` of a reader for the
specified dAPI data feed.

The reader will not be able to read the dAPI data feed past the
expirationTimestamp (assuming their `indefiniteWhitelistCount` is 0 ). If the
`indefiniteWhitelistCount` is greater than 0 , the reader will be able to read
the data feed indefinitely (regardless of the value of `expirationTimestamp`).

## Example Code

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

::: tip dAPI name

If you want to check the status for a dAPI `name`, you first need to encode the
dAPI `name` to bytes32 then calculate the hash off-chain of the encoded `name`
as shown below. Afterwards, pass the value of `dapiNameHash` as `_datafeedId` in
the example above.

```solidity
encodedDapiName = ethers.utils.formatBytes32String(dapiName);
```

```solidity
dapiNameHash = ethers.utils.solidityKeccak256(['bytes32'], [encodedDapiName]);
```

:::

## Parameters

`readerCanReadDataFeed(bytes32 datafeedId, address reader)`

- `bytes32 datafeedId` - The ID of a dAPI, Beacon, or Beacon set.
- `address reader` - The address to verify such as the reader's smart contract
  address or another address.

## Returns

- `expirationTimestamp` - Timestamp at which the whitelisting of the reader will
  expire.

- `indefiniteWhitelistCount` - Number of times `reader` was whitelisted
  indefinitely for `dataFeedId`.
