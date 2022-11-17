---
title: Chain Idiosyncrasies
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0
path: /reference/airnode/latest/chain-idiosyncrasies.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Differences in chain design inevitably lead to some unique chain-specific
considerations. Below are idiosyncrasies we have identified, though it may not
be comprehensive and we are interested in hearing if you encounter others.

The idiosyncrasies below relate to the `chains` field of `config.json`. For the
corresponding Airnode configuration guide section
[see here](./understand/configuring.md#chains) and for the corresponding
reference section [see here](./deployment-files/config-json.md#chains).

## Avalanche

Gas prices on Avalanche mainnet are often underestimated when getting `type 0`
estimates (e.g. for the `providerRecommendedGasPrice` strategy). The error
manifests as the `maxFeePerGas` being set to less than the block
`baseFeePerGas`, resulting in unfulfilled requests. A solution to this is to set
`recommendedGasPriceMultiplier` to slightly greater than `1` e.g. `1.1`.

## Arbitrum

Execution costs on Arbitrum are calculated slightly differently than Ethereum,
which impacts the gas required to fulfill requests. To account for this, we
recommend a minimum value of `2000000` for `fulfillmentGasLimit` when using both
Arbitrum mainnet and testnet. For more on ArbGas
[see here](https://developer.offchainlabs.com/docs/arbgas).

## Metis

On the Metis testnet Stardust, though not on the Metis mainnet Andromeda, we
recommend a `fulfillmentGasLimit` of at least `2000000`.

## Optimism

Using `type 0` transaction types is recommended over `type 2` so the use of
`providerRecommendedEip1559GasPrice` is discouraged.

As a L2 scaling solution, Optimism has an L1 data fee and an L2 execution fee,
which are
[accounted for separately](https://community.optimism.io/docs/developers/build/transaction-fees/#displaying-fees-to-users).
To cover the L1 data fee when a sponsor requests a
[withdrawal](./concepts/sponsor.md#withdrawals), an amount has to be subtracted
from the funds returned to the sponsor. The `withdrawalRemainder` parameter has
been introduced specifically for this reason, though the value required will
differ between Optimism mainnet and testnet due to differences in L1 gas fees.
For Optimism testnet, a `withdrawalRemainder` of `1 gwei` should suffice, while
for Optimism mainnet, a value as high as `2.4 finney` (`2400000 gwei`) may be
required in order to cover an L1 gas price of `300 gwei` and `8000` L1 gas used
by the transaction.
