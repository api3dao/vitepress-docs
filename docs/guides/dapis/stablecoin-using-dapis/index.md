---
title: Making a stablecoin using dAPIs
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → dAPIs
path: /guides/dapis/stablecoin-using-dapis/index.html
outline: deep
tags:
---

<!-- https://blog.chain.link/smart-contract-call-another-smart-contract/ -->

<!-- https://medium.com/@blockchain101/calling-the-function-of-another-contract-in-solidity-f9edfa921f4c -->

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

A stablecoin is a cryptocurrency designed to minimize the price volatility of
the currency relative to some "stable" asset. A stablecoin can be pegged to a
cryptocurrency, fiat money, or to exchange-traded commodities.

This is a basic example to show how to create a stablecoin using using
[API3's ETH/USD dAPI]() on [Polygon ZKEVM]().

## Using dAPIs

dAPIs are datafeeds that are sourced directly from first-party oracles using
Airnode's signed data. [Click here to read more about dAPIs and how it works]().
For this project, we'll be using [Self-funded dAPIs]() which are single-source
dAPIs that are funded by the users with their own funds.

Click here to check out how to read dAPIs inside a smart contract.

## Getting started

To get started, follow the steps below to clone this repository and install the
dependencies.

```shell
git clone https://github.com/billyjitsu/aa-oracle-zkevm.git
```

To install all the dependencies, run the following command:

```shell
yarn
```

## Coding the Contracts

Under `backend/contracts`, you'll find the contracts used in this project.
`TokenSwap.sol` is the main contract that will be used to swap tokens.

It imports all the necessary contracts from `@api3/contracts` to make use of the
dAPIs. We also import openzeppelin's `Ownable` and `ERC20Burnable` contract to
access the `onlyOwner` modifier and have the `_mint` and `_burn` functions for
our stablecoin.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@api3/contracts/v0.8/interfaces/IProxy.sol";
```

We then define some error messages that will be used in the contract.

```solidity
error StalePrice();
error NoValue();
```

We then define the `TokenExchange` contract. It inherits from `Ownable` and
`ERC20Burnable`. We also define a public variable `proxyAddress` that will be
used to store the address of the dAPI proxy contract.

```solidity
contract TokenSwap is Ownable, ERC20Burnable {

    address public proxyAddress;
    ...
}
```

We initialize the constructor with the name and symbol of the token. We also
define `setProxyAddress()` to set the `proxyAddress` variable to the address of
the dAPI proxy contract. Only the owner can set the proxy address.

```solidity
    /// @dev Constructor initializes ERC20 token with name and symbol
    constructor() ERC20("Stable", "STA") {}

    function setProxyAddress(address _proxyAddress) public onlyOwner {
        proxyAddress = _proxyAddress;
    }
```

The `readDataFeed()` function is used to read the value from the dAPI proxy. It
returns the price and timestamp of the asset. We use the `IProxy` interface to
read the data from the dAPI. We then convert the price to `uint256` and return
the price and timestamp.

```solidity
    function readDataFeed() public view returns (uint256 price, uint256 timestamp) {
        (int224 value, uint256 timestamp) = IProxy(proxyAddress).read();
        //convert price to UINT256
        uint256 price = uint224(value);
        return (price, timestamp);
    }
```

The `depositCollateral()` function is used to deposit collateral to mint `STA`
stablecoins. It takes in ETH as collateral and mints the stablecoin based on the
price of ETH. We first check if the value sent is greater than 0. If not, we
revert with the `NoValue()` error message. We then read the data from the dAPI
using `readDataFeed()`. We then calculate the amount of stablecoin to mint based
on the price of ETH. We then mint the stablecoin to the user.

```solidity
    function depositCollateral() external payable {
        if (msg.value == 0) revert NoValue();
        (uint256 price, uint256 time) = readDataFeed();
        // if(time < (block.timestamp - 1 minutes)) revert StalePrice();
        uint256 amount = (msg.value * price) / (1e18);
        _mint(msg.sender, amount);
    }
```

The `reclaimEth()` function is used to burn the stablecoin and refund the user
with ETH. It takes in the amount of stablecoin to burn and calculates the amount
of ETH to refund based on the price of ETH. We first check if the amount is
greater than 0. If not, we revert with the `NoValue()` error message. We then
read the data from the dAPI using `readDataFeed()`. We then calculate the amount
of ETH to refund based on the price of ETH. We then burn the stablecoin from the
user and refund the user with ETH.

```
    function reclaimEth(uint256 _amount) external {
        if (_amount == 0) revert NoValue();
        (uint256 price, uint256 time) = readDataFeed();
        // if(time < (block.timestamp - 1 minutes)) revert StalePrice();
        uint256 ethAmount = (_amount * 1e18) / price;
        _burn(msg.sender, _amount);
        (bool success, ) = payable(msg.sender).call{value: ethAmount}("");
        require(success, "Failed refund eth");
    }
```

## Deploying the Contracts

We can now deploy the contracts to the Polygon ZKEVM testnet. To do so, we'll be
using [Hardhat](https://hardhat.org/).

Create a `.env` file and add your `PRIVATE_KEY` and `ZKEVM_POLYGONSCAN_API_KEY`.

```shell
cp .env.example .env
```

To compile the contracts

```shell
yarn compile
```

To deploy the contracts, run the following command:

```shell
yarn deploy
```

It will deploy the contract to the Polygon ZKEVM testnet using the
`/backend/scripts/deploy.ts` script and print out the contract addresses. It

```shell

```

<FlexEndTag/>
