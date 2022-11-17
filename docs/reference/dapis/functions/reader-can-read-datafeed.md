---
title: readerCanReadDataFeed()
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → DapiServer Functions
path: /reference/dapis/functions/reader-can-read-datafeed.html
version:
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

For on-chain smart contracts, the function
[readerCanReadDataFeed()](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L771-L781)
returns true if the `reader` parameter can access the `dataFeedId` parameter
meaning that the reader address has read access. See
[Coverage Policies](/explore/dapis/coverage-policies.md) for more information
about dAPI read access.

## Example Code

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol";
contract mySmartContract {


  function myVerifyReadable(
    address _dapiServerContractAddress,
    bytes32 _datafeedId
  ) external {
    bool private canRead;

    // Calling the DapiServer for reader status
    // where "this" is the contract address of this contract (myVerifyReadable).
    (canRead) =
      IDapiServer(_dapiServerContractAddress).readerCanReadDataFeed(_datafeedId, address(this));
  }
}

```

::: tip Using dapiName

If you want to check the status using a `dapiName`, you first need to calculate
its off-chain hash. Then pass `dapiNameHash` as `_datafeedId` in the example
code above.

```solidity
dapiNameHash = ethers.utils.solidityKeccak256(['bytes32'], [ethers.utils.formatBytes32String(dapiName)]);
```

:::

## Parameters

`readerCanReadDataFeed(bytes32 datafeedId, address reader)`

- `bytes32 datafeedId` - The ID of a dAPI, Beacon, or Beacon set.
- `address reader` - The address to verify such as the reader's smart contract
  address or another address.

## Returns

- `bool` - Whether the address passed is whitelisted and therefore can read the
  dAPI, Beacon, or Beacon set ID passed.
