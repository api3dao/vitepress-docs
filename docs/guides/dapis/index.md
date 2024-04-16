---
title: Getting Started with dAPIs
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → dAPIs
path: /guides/dapis/index.html
outline: deep
tags:
  - dapis
  - getting started
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

This is the getting started section for dAPIs along with some frequently asked
questions. If you have a question that is not answered here, you can head over
to our [Discord server](https://discord.com/invite/qnRrcfnm5W).

## What are dAPIs?

dAPIs are on-chain decentralized data feeds sourced directly from
[first-party oracles](/explore/airnode/why-first-party-oracles.md) owned and
operated by API providers themselves (using
[Airnode](/reference/airnode/latest/understand/)) and are continuously updated
using [signed data](/reference/airnode/latest/understand/http-gateways.md). dApp
owners can read the on-chain value of any dAPI in real-time.

dAPIs serve a variety of data feeds, such as latest cryptocurrency, stock, and
commodity prices. They can power various decentralized applications such as DeFi
lending, synthetic assets, stable coins, derivatives, NFTs, and more.

dAPIs also allow dApps to earn revenue by auctioning off the right to update the
data feeds to searchers using the OEV Network.

To read more about dAPIs, [click here](/reference/dapis/understand/).

## What is the API3 Market?

[API3 Market](https://market.api3.org/) enables users to browse, activate and
manage dAPIs. Within the Market you can see all live dAPIs on the supported
chains. You can also see the details of each dAPI, such as the provider, the
asset type, the deviation threshold, the heartbeat, and the last on-chain
updated price.

Check out the API3 Market [here](https://market.api3.org/). You can browse
through the available dAPIs and check out their details.

## How do dAPIs and OEV work?

[dAPIs](/reference/dapis/understand/managed.md) are sourced directly from
multiple [first-party](/explore/airnode/why-first-party-oracles.md) data
providers running an Airnode and aggregated using their
[Airnode's signed data](/reference/airnode/latest/understand/http-gateways.md).

Users also get the option to configure the
[deviation threshold](/reference/dapis/understand/deviations.md) and
[heartbeat](/reference/dapis/understand/deviations.md#heartbeat) for each dAPI.
The deviation threshold is the percentage deviation from the current value of
the dAPI that triggers an update. If a dAPI is not updated within a known amount
of time (called the heartbeat), the dAPI update is triggered.

Apart from triggering a dAPI update solely based on the deviation threshold and
heartbeat, dApps can set up OEV to auction off the right to update the data
feeds to searchers. Searchers can bid for price updates through the OEV Network
to update the data feeds. All the OEV proceeds goes back to the dApp.

[Click here](/guides/dapis/subscribing-to-dapis/) to read more about how to get
started with dAPIs.

## How to use dAPIs in a smart contract?

To read a dAPI value in a smart contract, import the `IProxy.sol` interface and
call the `read()` function. Here's an example:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts@4.9.5/access/Ownable.sol";
import "@api3/contracts/v0.8/interfaces/IProxy.sol";

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
[click here](/guides/dapis/read-a-dapi/).

## Data providers for dAPIs

There are nine providers used by dAPIs as a data source. These providers can be
grouped by asset type(s) of supplied data:

- Coinpaprika
- dxFeed
- Finage
- Finnhub
- IEXCloud
- Kaiko
- NCFX
- Tradermade
- Twelvedata

| Asset Type     | Data Providers                                                  |
| -------------- | --------------------------------------------------------------- |
| Cryptocurrency | Coinpaprika, Finage, Twelvedata, NCFX, Kaiko, dxFeed            |
| Forex          | Finage, Twelvedata, NCFX, IEXCloud, Finnhub, dxFeed, Tradermade |
| Commodities    | Finage, Twelvedata, dxFeed, Tradermade                          |
| Equities       | Finage, Twelvedata, IEXCloud, Finnhub, dxFeed                   |

## What are dAPI proxy contracts?

Each dAPI has a [proxy contract](/reference/dapis/understand/proxy-contracts)
that is used to read the value of the dAPI. The proxy contract is linked to a
mapping that maps to a `beaconId` or `beaconSetId` and an OEV beneficiary
address. The `beaconId` for each dAPI gets updated when the price hits the set
[deviation threshold](/reference/dapis/understand/deviations.md)/[heartbeat](/reference/dapis/understand/deviations.md#heartbeat)
using
[Airnode's Signed Data](/reference/airnode/latest/understand/http-gateways.md).

Read more about
[Proxy Contracts](/reference/dapis/understand/proxy-contracts.md).

<FlexEndTag/>
