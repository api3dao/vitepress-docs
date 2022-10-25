---
title: QRNG Example
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → QRNG
path: /guides/qrng/qrng-example.html
outline: deep
tags:
  - qrng
---

<PageHeader/>

# {{$frontmatter.title}}

The [qrng-example](https://github.com/api3dao/qrng-example)<ExternalLinkImage/>
project (GitHub repo) demonstrates how to build a smart contract (known as a
requester) using the Airnode request–response protocol to receive QRNG services.
It is recommended to run the example project to learn how it uses the QRNG
service on a testnet, and read the associated README file. It also contains
example code that will be useful when creating a requester (smart contract) that
requests a quantum random number.

- [qrng-example/contracts/](https://github.com/api3dao/qrng-example/tree/main/contracts)<ExternalLinkImage/>
  - `QrngExamples.sol`: A sample requester used to call the QRNG service.
- [qrng-example/deploy/](https://github.com/api3dao/qrng-example/tree/main/deploy)<ExternalLinkImage/>
  - `deploy.js`: Script that deploys a requester to a chain.
  - `setup.js`: Script that sets the parameters on the requester contract. These
    parameters are used when calling the QRNG service.
  - `fund.js`: Script that funds the wallet the requester uses to pay the gas
    costs.

::: tip Gas Costs

Using the QRNG service is free, meaning there is no subscription fee to pay.
There is a gas cost incurred on-chain when Airnode places the random number
on-chain in response to a request, which the requester needs to pay for.

:::

## Sponsor Wallet

The QRNG example project
[sets the sponsor wallet](https://github.com/api3dao/qrng-example/blob/main/deploy/2_setup.js#L11-L28)<ExternalLinkImage/>
using the requester address. The wallet is then used to pay gas costs when the
Airnode responds to a request. An alternate method is to use the
[Admin CLI](/reference/airnode/latest/packages/admin-cli.md) as is the case with
the [Remix Example](./remix-example.md) guide.

<SponsorWalletWarning/>
