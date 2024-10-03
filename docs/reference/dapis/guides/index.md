---
title: Getting Started with dAPIs
pageHeader: dAPIs → Guides
outline: deep
---

<PageHeader/>

# Getting Started with dAPIs

This is the getting started section for dAPIs along with some frequently asked
questions. If you have a question that is not answered here, you can head over
to our [Discord server](https://discord.com/invite/qnRrcfnm5W).

## What are dAPIs?

dAPIs are on-chain decentralized data feeds sourced directly from
[first-party oracles](/dapis/introduction/first-party.md) owned and operated by
API providers themselves (using Airnode) and are continuously updated using
signed data. dApp owners can read the on-chain value of any dAPI in real-time.

dAPIs serve a variety of data feeds, such as latest cryptocurrency, stock, and
commodity prices. They can power various decentralized applications such as DeFi
lending, synthetic assets, stable coins, derivatives, NFTs, and more.

dAPIs also allow dApps to earn revenue by auctioning off the right to update the
data feeds to searchers using the OEV Network.

To read more about dAPIs, [click here](/dapis/reference/understand/).

## What is the API3 Market?

[API3 Market](https://market.api3.org/) enables users to browse, activate and
manage dAPIs. Within the Market you can see all live dAPIs on the supported
chains. You can also see the details of each dAPI, such as the provider, the
asset type, the deviation threshold, the heartbeat, and the last on-chain
updated price.

Check out the API3 Market [here](https://market.api3.org/).

## How do dAPIs and OEV work?

dAPIs are sourced directly from multiple
[first-party](/dapis/introduction/first-party.md) data providers running an
Airnode and aggregated using their Airnode's signed data.

Users also get the option to configure the
[deviation threshold](/dapis/reference/understand/deviations.md) and
[heartbeat](/dapis/reference/understand/deviations.md#heartbeat) for each dAPI.
The deviation threshold is the percentage deviation from the current value of
the dAPI that triggers an update. If a dAPI is not updated within a known amount
of time (called the heartbeat), the dAPI update is triggered.

Apart from triggering a dAPI update solely based on the deviation threshold and
heartbeat, dApps can set up OEV to auction off the right to update the data
feeds to searchers. Searchers can bid for price updates through the OEV Network
to update the data feeds. All the OEV proceeds goes back to the dApp.

[Click here](/dapis/guides/subscribing-to-dapis/) to get started with dAPIs.

## How to use dAPIs in a smart contract?

To read a dAPI value in a smart contract, import the `IProxy.sol` interface and
call the `read()` function. Here's an example:

```solidity
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

You'll have to set the `proxyAddress` using the `setProxyAddress()` function.
You can get the `proxyAddress` for activated dAPIs from within the data feed
dashboard through the [API3 Market](https://market.api3.org/).

To read more about reading a dAPI value,
[click here](/dapis/guides/read-a-dapi/index.md).

## Data providers for dAPIs

There are eight providers used by dAPIs as a data source.

- Coingecko
- Coinpaprika
- dxFeed
- Finage
- Kaiko
- NCFX
- Nodary
- Twelvedata

## What are dAPI proxy contracts?

Each dAPI has a [proxy contract](/dapis/reference/understand/proxy-contracts)
that is used to read the value of the dAPI. The proxy contract is linked to a
mapping that maps to a `beaconId` or `beaconSetId`. The `beaconId` for each dAPI
gets updated when the price hits the set
[deviation threshold](/dapis/reference/understand/deviations.md)/[heartbeat](/dapis/reference/understand/deviations.md#heartbeat)
.

Read more about
[Proxy Contracts](/dapis/reference/understand/proxy-contracts.md).
