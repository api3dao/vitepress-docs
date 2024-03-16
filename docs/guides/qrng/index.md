---
title: Getting Started with QRNG
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → QRNG
path: /guides/qrng/index.html
outline: deep
tags:
  - qrng
  - getting started
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

This is the getting started section for QRNG along with some frequently asked
questions. If you have a question that is not answered here, you can head over
to our [Discord server](https://discord.com/invite/qnRrcfnm5W).

## What is the QRNG?

QRNG stands for Quantum Random Number Generator. It is a free to use service
that provides quantum randomness on-chain. It is powered by
[Airnode](/reference/airnode/latest/understand/index.md), the
[first-party](/explore/airnode/why-first-party-oracles.md) oracle that is
directly operated by the QRNG API providers. You can read more about QRNG
[here](/reference/qrng/index.md).

## How many providers are there for QRNG?

Currently, there are 3 providers for QRNG:

- [Australian National University](https://quantumnumbers.anu.edu.au/)
- [Quintessence Labs](https://www.quintessencelabs.com/)
- [Nodary (Testnet)](https://nodary.io/)

[Click here to view the list of providers](/reference/qrng/providers.md).

Both ANU and Quintessence Labs are running Airnodes in production serving 20+
chains. Nodary is a testnet provider. It emulates QRNG using pseudorandom
numbers on testnets chains.

[Click here to view the list of chains where QRNG is available](/reference/qrng/chains.md).

## How can you access QRNG?

The [qrng-example](https://github.com/api3dao/qrng-example/) project
demonstrates how to build a smart contract (known as a requester) using the
Airnode
[Request–Response Protocol (RRP)](/reference/airnode/latest/concepts/index.md)
to access QRNG services. It is recommended to run the example project to learn
how it uses the QRNG service on a testnet, and read the associated `README`
file. It also contains example code that will be useful when creating a
requester (smart contract) that requests a quantum random number.

- [qrng-example/contracts/](https://github.com/api3dao/qrng-example/tree/main/contracts)
  - `QrngExamples.sol`: A sample requester used to call the QRNG service.
- [qrng-example/deploy/](https://github.com/api3dao/qrng-example/tree/main/deploy)
  - `deploy.js`: Script that deploys a requester to a chain.
  - `setup.js`: Script that sets the parameters on the requester contract. These
    parameters are used when calling the QRNG Airnode.
  - `fund.js`: Script that funds the `sponsorWallet` the requester uses to pay
    the gas costs.

::: info Gas Costs

Using the QRNG service is free, meaning there is no subscription fee to pay.
There is a gas cost incurred on-chain when Airnode submits the random number
on-chain in response to a request, which the requester needs to pay for.

:::

### Sponsor Wallet

The QRNG example project
[sets the sponsor wallet](https://github.com/api3dao/qrng-example/blob/main/deploy/2_setup.js#L11-L28)
using the requester address. The wallet is then used to pay gas costs when the
Airnode responds to a request. An alternate method is to use the
[Admin CLI](/reference/airnode/latest/packages/admin-cli.md) as is the case with
the [Using QRNG - Remix Example](/guides/qrng/qrng-remix/index.md) guide.

<SponsorWalletWarning/>

### Withdrawals

In the QRNG example project, the requester contract was written with the scope
of demonstrating on-chain requests for random numbers.

::: warning

For brevity, the requester contract does not contain withdrawal or other
additional functionality.

:::

For those inclined, withdrawal functionality can be added to the requester
contract. Check out the Requester contract in
[Using QRNG - Remix Example](/guides/qrng/qrng-remix/index.md#_7-withdrawing-funds-from-the-sponsorwallet-optional)
guide for an example on adding a withdrawal function to the requester contract
and requesting a withdrawal from the Airnode.

## How much does it cost to use QRNG?

QRNG is free to use. You can use it as much as you want without paying anything.
However, you will have to fund the `sponsorWallet` that incurs the gas fees for
the transaction for the fulfillment of the request. A `sponsorWallet` address is
derived from the requester contract address, the QRNG Airnode address and its
extended public key (xpub). A sponsor wallet must be derived using the command
[derive-sponsor-wallet-address](/reference/airnode/latest/packages/admin-cli.md#derive-sponsor-wallet-address)
from the Admin CLI for your specific requester contract.

You can refer to the funding table below to get an idea of how much you will
have to fund the `sponsorWallet` for a request on a specific chain.

::: details Funding table reference

| Testnet                   | Amount | Unit  | Chain Id |
| ------------------------- | ------ | ----- | -------- |
| Ethereum-Goerli           | 0.1    | ETH   | 5        |
| Ethereum-Sepolia          | 0.05   | SEP   | 11155111 |
| RSK testnet               | 0.001  | tRBTC | 31       |
| POA Network Sokol testnet | 0.05   | POA   | 77       |
| BNB Chain testnet         | 0.005  | tBNB  | 97       |
| Optimism testnet          | 0.05   | ETH   | 420      |
| Moonbase Alpha testnet    | 0.1    | DEV   | 1287     |
| Fantom testnet            | 0.5    | FTM   | 4002     |
| Avalanche Fuji testnet    | 0.3    | AVAX  | 43113    |
| Polygon Mumbai testnet    | 0.05   | MATIC | 80001    |
| Milkomeda C1 testnet      | 0.5    | mTAda | 200101   |
| Arbitrum testnet          | 0.01   | AGOR  | 421613   |

:::

You can read more about `sponsorWallet`
[here](/reference/airnode/latest/concepts/sponsor.md#sponsorwallet).

## How to request a single random number?

To request a single random number, use the `endpointIdUint256` of the QRNG
provider while making the request. You can find all the parameters of the QRNG
providers [here](/reference/qrng/providers.md). To see how to code a basic QRNG
Requester contract and make a request for a single random number,
[click here](/guides/qrng/qrng-remix/index.md#to-request-a-single-random-number).

## How to request multiple random numbers?

Similar to requesting a single random number, you can request multiple random
numbers by using the `endpointIdUint256Array` of the QRNG provider while making
the request. It returns an array of random numbers. You will also have to
mention the size of the array and encode it within the parameters. To see how to
code a basic QRNG Requester contract and make a request for an array of random
numbers,
[click here](/guides/qrng/qrng-remix/index.md#to-request-an-array-of-random-numbers).

## How to request a random number within a range?

To have a random number within a specific range while making a request to the
QRNG Airnode, you can use the `endpointIdUint256` to return a single random
number and have it modulo the range difference and add the minimum number of the
range. Refer to the code snippet below to see how to convert the random number
and have it within the range `[x, y]`.

```solidity
uint256 randomNumber = (qrngUint256 % (y - x + 1)) + x;
// y is the max number for the range, x is min number for the range.
// the randomNumber will be in range [x, y].
```

## Can additional chains be supported?

At the moment, we've paused new QRNG chain integrations. If additional chains
were to be supported in the future, support would be more likely on chains with
active dAPIs.

<FlexEndTag/>
