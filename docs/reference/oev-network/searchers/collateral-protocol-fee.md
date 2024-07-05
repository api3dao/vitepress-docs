---
title: Collateral And Protocol Fee
sidebarHeader: Reference
sidebarSubHeader: OEV Network
pageHeader: Reference → OEV Network → Collateral And Protocol Fee
path: /reference/oev-network/searchers/collateral-protocol-fee.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

In the context of the OEV Network's auction mechanism, collateral plays a
critical role in ensuring that oracle updates get triggered upon being awarded.

For a searcher to win an auction for oracle updates, they are required to
deposit ETH into the OevAuctionHouse contract. The value the searcher can win is
limited by the amount they have deposited. On winning a bid, the searcher locks
up a percentage of the bid amount as collateral.

In the event that the oracle update is fulfilled, the searcher is refunded the
collateral and is charged a protocol fee. The protocol fee is also a percentage
of the bid amount.

If the oracle update is not fulfilled, the collateral is slashed

| Parameter                | Value |
| ------------------------ | ----- |
| collateralInBasisPoints  | 1000  |
| protocolFeeInBasisPoints | 0000  |

::: tip

The collateral and protocol fee rates are configurable parameters within the
OevAuctionHouse contract and are configured by the API3 DAO.

:::

## Fee Calculation

The value that a searcher bids is in the native currency of the chain on which
the oracle update is to be made. The collateral and protocol fee are calculated
in basis points (1/100th of a percentage point) of the bid amount in ETH.

The "Collateral Rate in basis points" and the "Protocol Fee in basis points" are
parameters configured within the OevAuctionHouse contract. Searchers can query
the `getCurrentCollateralAndProtocolFeeAmounts` function to get the current
collateral and protocol fee rates for the specified `bidAmount` and `chainId`
before placing a bid. Internally, the function uses dAPIs to fetch the value of
the target chain native currency in ETH.

```javascript
const { JsonRpcProvider } = require('ethers');
const api3Contracts = require('@api3/contracts');

const oevNetworkProvider = new JsonRpcProvider(OEV_NETWORK_RPC_URL);
const OevAuctionHouseArtifact = await hre.artifacts.readArtifact(
  'OevAuctionHouse'
);
const OevAuctionHouse = new Contract(
  api3Contracts.deploymentAddresses.OevAuctionHouse['4913'],
  OevAuctionHouseArtifact.abi,
  oevNetworkProvider
);

const collateralAndProtocolFee =
  await oevAuctionHouse.getCurrentCollateralAndProtocolFeeAmounts(
    BID_AMOUNT,
    CHAIN_ID
  );
```
