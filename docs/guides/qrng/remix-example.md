---
title: Remix Example
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → QRNG
path: /guides/qrng/remix-example.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

This project is a simple introduction to API3's QRNG service. Follow along to
see how a requester (smart contract) can access an on-chain quantum random
number. You will use the browser based Remix IDE and MetaMask. Some basic
knowledge of these two tools is assumed.

Currently QRNG has three [providers](/reference/qrng/providers.md), two of which
provide quantum random numbers. This guide will be using the
[ANU](/reference/qrng/providers.md#anu-quantum-random-numbers) provider.

## 1. Add the Sample Contract

Open the [Remix online IDE](https://remix.ethereum.org) using a browser that you
have added Metamask support to. Not all browsers support
[MetaMask](https://metamask.io/download/).

Add a new file called `RemixQrngExample.sol` to a Remix workspace. You can use
an existing workspace or create a new one. Copy and paste the code from the
[RemixQrngExample.sol](/reference/qrng/remix-example.md) contract into the file.

![Add Contract](../assets/images/qrng-add-contract.png)

## 2. Compile the Contract

Switch to the <b>SOLIDITY COMPILER</b> tab. Select the `0.8.9` version of
Solidity from the <b>COMPILER</b> pick list. Select the <b>Compile
RemixQrngExample.sol</b> button to compile the `RemixQrngExample.sol` contract.

  <img src="../assets/images/qrng-compile.png"  style="width:50%"/>

## 3. Deploy the Contract

::: danger Deploy to a testnet only.

Do not deploy the `RemixQrngExample.sol` contract to a production network. It
lacks adequate security features.

You can use one of [testnets](/reference/qrng/chains.md) for deployment to get
random number from
[byog RNG API](/reference/qrng/providers.md#byog-random-numbers) which has same
usage with
[ANU Quantum Random Numbers](/reference/qrng/providers.md#anu-quantum-random-numbers).

:::

Switch to the <b>DEPLOY & RUN TRANSACTIONS</b> tab. Use MetaMask and switch to
the desired account and testnet for your deployment. Select the
<b>ENVIRONMENT</b> pick list and switch to _Injected Provider - Metamask_. Check
that the testnet and account you selected in MetaMask are displayed in Remix as
shown below.

<img src="../assets/images/qrng-deploy-net-account.png"  style="width:50%"/>

Be sure `RemixQrngExample - contracts/RemixQrngExample.sol` is selected in the
<b>CONTRACT</b> pick list. Add the Airnode `_airnodeRrp` address parameter value
for the constructor into the field next to the <b>Deploy</b> button. See the
[list of addresses](/reference/qrng/chains.md) for the testnet you are using.
Select the <b>Deploy</b> button and approve the transaction with MetaMask.

<img src="../assets/images/qrng-deploy-contract-airnode-address.png"  style="width:50%"/>

## 4. Setting the Parameters

Before making a request, parameters must be set. They determine which Airnode
endpoint will be called and define the wallet used to pay the gas costs for the
response.

Under <b>Deployed Contracts</b> expand and expose the functions and variables of
the contract. Note the address of the contract that is displayed with its name.
This is the requester's contract address which will be needed later. Next expand
the <b>setRequestParameters()</b> function. Add the following to the
corresponding fields for the function.

- `_airnode`: The airnode address of the desired RNG service provider. If you
  wish to use BYOB, get its value from the
  [byog Airnode](/reference/qrng/providers.md#airnode-1) or copy it here →
  <CopyIcon text="0x6238772544f029ecaBfDED4300f13A3c4FE84E1D"/>.

- `_endpointIdUint256`: The Airnode endpoint ID (copy it here →
  <CopyIcon text="0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78"/>
  ) that will return a single random number. See its value from the
  [byog Airnode](/reference/qrng/providers.md#endpointiduint256-1).

- `_sponsorWallet`: A wallet derived from the requester's contract address, the
  Airnode address, and the Airnode xpub. The wallet is used to pay gas costs to
  acquire a random number. A sponsor wallet must be derived using the command
  [derive-sponsor-wallet-address](/reference/airnode/latest/packages/admin-cli.html#derive-sponsor-wallet-address)
  from the Admin CLI. Use the value of the _sponsor wallet address_ that the
  command outputs.

  ```sh
  npx @api3/airnode-admin derive-sponsor-wallet-address \
    --airnode-xpub xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo \
    --airnode-address 0x6238772544f029ecaBfDED4300f13A3c4FE84E1D \
    --sponsor-address <use-the-address-of: RemixQrngExample.sol>

    # --airnode-xpub:    Pre-filled, see https://docs.api3.org/reference/qrng/providers.html.
    # --airnode-address: Pre-filled, see https://docs.api3.org/reference/qrng/providers.html.
    # --sponsor-address: Use the requester's contract address for
    #                    RemixQrngExample.sol as displayed in the Remix IDE.

    # The command outputs.
    Sponsor wallet address: 0x6394...5906757
    # Use the above address from your command execution as the value for _sponsorWallet.
  ```

  Be sure to fund the public address of the sponsor wallet that the command
  outputs with enough testnet currency. The funds are used to pay gas costs for
  the Airnode's response. You can use the table below for the amount of fund as
  reference.

  | Testnet                   | Amount | Unit  | Chain Id |
  | ------------------------- | ------ | ----- | -------- |
  | Goerli                    | 0.1    | ETH   | 5        |
  | Sepolia                   | 0.05   | SEP   | 11155111 |
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

Lastly select the <b>Transact</b> button in Remix to send the parameters to the
contract to be stored. Approve the transaction with MetaMask.

<SponsorWalletWarning/>

## 5. Make a Request

Be sure you have funded the sponsor wallet created in step #4. Its funds will be
used to pay gas costs when Airnode returns a random number to the callback
function `fulfillUint256()`.

Each request made will use the parameters set in step 4. You can change the
parameters at any time and subsequent requests will use the newer parameter set.

To make a request select the <ElementSelect text="MakeRequest"/> button in
Remix. Approve the transaction with MetaMask.

<!-- prettier-ignore -->
As soon as the transaction completes in MetaMask, select the <ElementSelect text="lastRequest"/> 
button in Remix. You will see the
`requestId` and a `randomNumber` which equals _0_. This is because the random
number has yet to be returned to the callback function. Copy and paste the
`requestId` into the field for <ElementSelect text="waitingFulfillment"/> and
select the button. You will see the value is _true_, meaning the callback has
not been made.

<img src="../assets/images/qrng-response-wait.png" style="width:50%"/>

## 6. View the Response

The request is gathered by the off-chain Airnode which in turn calls the API
provider. Once the API provider returns data, Airnode will callback to the
`RemixQrngExample.sol` contract function
`fulfillUint256(bytes32 requestId, bytes calldata data)`.

Select the the <ElementSelect text="lastRequest"/> button in Remix again. If the
callback has been successfully completed the randomNumber will be present. The
value of <ElementSelect text="waitingFulfillment"/> will be _false_.

<img src="../assets/images/qrng-response-complete.png" style="width:50%"/>

## More related material...

<div class="api3-css-nav-box-flex-row">
  <NavBox  type='REFERENCE' id="_reference-qrng-providers"/>
</div>
