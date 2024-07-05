---
title: Submitting Bids for Oracle updates
sidebarHeader: Reference
sidebarSubHeader: OEV Network
pageHeader:
  Reference → OEV Network → Searchers → Submitting Bids for Oracle updates
path: /reference/oev-network/searchers/submit-bids.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

The
[OEV Searcher Starter Repository](https://github.com/api3dao/oev-searcher-starter)
provides a reference implementation for using the OEV Network to participate in
oracle update auctions. The repository contains a set of scripts that
demonstrate how to deposit ETH into the OevAuctionHouse contract, place bids,
check bid status, listen for awarded bids, perform oracle updates using the
awarded bid and then finally submit fulfillment of the oracle update.

## Prerequisites

- Bridge ETH to the
  [OEV Network](/reference/oev-network/overview/bridge-oev-network.html)

- clone the repository and install the dependencies

```bash
git clone https://github.com/api3dao/oev-searcher-starter
cd oev-searcher-starter
yarn
```

- Set the following environment variables in a `.env` file in the root of the
  repository:

```bash
MNEMONIC="your mnemonic"
OEV_NETWORK_RPC_URL="https://oev-network.calderachain.xyz/http"
TARGET_NETWORK_RPC_URL="https://rpc.mantle.xyz"
```

## Deploy the OEV Searcher Multicall Contract

The
[OEV Searcher Multicall Contract](https://github.com/api3dao/contracts/blob/main/contracts/utils/OevSearcherMulticallV1.sol)
is a contract that allows you to batch multiple calls in a single transaction.
This is needed to perform the oracle update and subsequent calls in a single
transaction. You can deploy the OEVSearcherMulticallV1 contract using the
following script:

```bash
yarn deploy-multicall
```

Note: You will need to have native gas tokens on the target chain (by default
Mantle Mainnet) to pay for the gas fees.

## Deposit ETH into OEV Auction House Contract

You will need to deposit ETH into the OEV Auction House Contract to start
placing bids. You can do so by calling the `deposit-collateral` script in the
repository.

```bash
yarn deposit-collateral
```

The script calls the `deposit` function of the OEV Auction House Contract with
the amount specified in the `AMOUNT` environment variable. The default amount is
`0.00001` ETH.

```javascript
const depositCollateral = async () => {
  const oevNetworkProvider = new JsonRpcProvider(
    process.env.OEV_NETWORK_RPC_URL
  );
  const oevNetworkWallet = Wallet.fromPhrase(process.env.MNEMONIC).connect(
    oevNetworkProvider
  );
  const OevAuctionHouseArtifact = await hre.artifacts.readArtifact(
    'OevAuctionHouse'
  );
  const OevAuctionHouse = new Contract(
    api3Contracts.deploymentAddresses.OevAuctionHouse['4913'],
    OevAuctionHouseArtifact.abi,
    oevNetworkWallet
  );

  const amount = process.env.AMOUNT ?? '0.00001'; // Default: 0.00001 ETH

  const depositTx = await OevAuctionHouse.deposit({
    value: parseEther(amount),
  });

  console.log(
    `Deposited ${amount} ETH into OevAuctionHouse\n Transaction hash:`,
    depositTx.hash
  );
};

depositCollateral();
```

## Submitting a Bid, Performing the Oracle Update and Reporting Fulfillment

The following script submits a bid, performs the oracle update and reports
fulfillment of the oracle update. In the subsequent sections, we will discuss
the operations performed in the script in detail.

```bash
yarn submit-bid-update
```

Note: In order to perform the oracle update, you will need to have native gas
tokens on the target chain (by default MNT on Mantle Mainnet) to pay for the gas
fees.

### Submitting a Bid

There are two ways to submit a bid for an oracle update:

- With an Expiration Timestamp
- Without an Expiration Timestamp

### With an Expiration Timestamp

Searchers place a bid with an expiration timestamp using the
`placeBidWithExpiration` function of the OEV Auction House Contract. This
function is used when searchers expect the OEV opportunity to disappear at a
specific time before the maximum bid lifetime. The searcher should determine the
maximum collateral and protocol fees that they will tolerate and specify them in
the arguments.

#### Arguments for `placeBidWithExpiration`

| Argument             | Type    | Description                                                                                  |
| -------------------- | ------- | -------------------------------------------------------------------------------------------- |
| bidTopic             | bytes32 | [Bid topic](./arguments.md#bidtopic-bytes32)                                                 |
| chainId              | uint256 | Chain ID                                                                                     |
| bidAmount            | uint256 | Bid amount in the native currency of the chain where the proxy is deployed                   |
| bidDetails           | bytes   | [Bid details](./arguments.md#biddetails-bytes)                                               |
| maxCollateralAmount  | uint256 | Maximum collateral amount in the currency of the chain that OevAuctionHouse is deployed on   |
| maxProtocolFeeAmount | uint256 | Maximum protocol fee amount in the currency of the chain that OevAuctionHouse is deployed on |
| expirationTimestamp  | uint32  | Expiration timestamp after which the bid cannot be awarded, min - 15 seconds, max 24 hours   |

```javascript
// The Bid Topic is a constant value used by the auctioneer to filter bids that pertain to that specific auctioneer instance.
// That is to say, different versions of the auctioneer will have different bid topics.
const getBidTopic = () => {
  return '0x76302d70726f642d61756374696f6e6565720000000000000000000000000000';
};

// Function to encode the bid details and return to bytes
const getBidDetails = (
  proxyAddress,
  condition,
  conditionValue,
  updaterAddress
) => {
  const abiCoder = new AbiCoder();
  const BID_CONDITIONS = [
    { onchainIndex: 0n, description: 'LTE' },
    { onchainIndex: 1n, description: 'GTE' },
  ];
  const conditionIndex = BID_CONDITIONS.findIndex(
    (c) => c.description === condition
  );
  return abiCoder.encode(
    ['address', 'uint256', 'int224', 'address', 'bytes32'],
    [
      proxyAddress,
      conditionIndex,
      conditionValue,
      updaterAddress,
      hexlify(randomBytes(32)),
    ]
  );
};

const placeBid = async () => {
  const PROXY_ADDRESS =
    process.env.PROXY_ADDRESS ?? '0xae2debfef62b1a0c8af55dae11d197bca1bcde3f'; // Default: MNT/USD on Mantle Mainnet
  const CHAIN_ID = process.env.CHAIN_ID ?? '5000'; // Default: mantle Mainnet
  const BID_AMOUNT = process.env.BID_AMOUNT ?? '0.000001'; // Default: 0.000001 MNT
  const BID_CONDITION = process.env.BID_CONDITION ?? 'LTE'; // Default: Less than or equal to
  const BID_PRICE = process.env.BID_PRICE ?? '5'; // Default: 5 MNT

  const oevNetworkProvider = new JsonRpcProvider(
    process.env.OEV_NETWORK_RPC_URL
  );
  const oevNetworkWallet = Wallet.fromPhrase(process.env.MNEMONIC).connect(
    oevNetworkProvider
  );
  const OevAuctionHouseArtifact = await hre.artifacts.readArtifact(
    'OevAuctionHouse'
  );
  const OevAuctionHouse = new Contract(
    api3Contracts.deploymentAddresses.OevAuctionHouse['4913'],
    OevAuctionHouseArtifact.abi,
    oevNetworkWallet
  );

  const bidTopic = getBidTopic();

  const bidDetails = getBidDetails(
    PROXY_ADDRESS, // Proxy address of the dAPI
    BID_CONDITION, // The condition you want to update
    parseEther(BID_PRICE), // The price you want to update
    deployments.OevSearcherMulticallV1, // Your deployed multicall contract address
    hexlify(randomBytes(32)) // Random nonce
  );

  // Placing our bid on the OEV network
  const placedbidTx = await OevAuctionHouse.placeBidWithExpiration(
    bidTopic, // The bid topic of the auctioneer instance
    parseInt(CHAIN_ID), // Chain ID of the dAPI proxy
    parseEther(BID_AMOUNT), // The amount of chain native currency you are bidding to win this auction and perform the oracle update
    bidDetails, // The details about the bid, proxy address, condition, price, your deployed multicall and random nonce
    MaxUint256, // Collateral Basis Points is set to max
    MaxUint256, // Protocol Fee Basis Points is set to max
    Math.trunc(Date.now() / 1000) + 60 * 60 * 12 // Expiration time is set to 12 hours from now
  );
  console.log('Bid Tx Hash', placedbidTx.hash);
  console.log('Bid placed');

  // Compute the bid ID
  const bidId = keccak256(
    solidityPacked(
      ['address', 'bytes32', 'bytes32'],
      [
        oevNetworkWallet.address, // The wallet address if the signer doing the bid (public of your private key)
        bidTopic, // Details of the chain and price feed we want to update encoded
        keccak256(bidDetails), // The details about the bid, proxy address, condition, price, your deployed multicall and random nonce
      ]
    )
  );
};
```

::: tip

The defaults are set so that the placed bid is immediately awardable by the
auctioneer.

:::

### Without an Expiration Timestamp

Searchers place a bid without an expiration timestamp using the `placeBid`
function of the OEV Auction House Contract. This function is used when searchers
expect the OEV opportunity to persist for the maximum bid lifetime. The searcher
should determine the maximum collateral and protocol fees that they will
tolerate and specify them in the arguments.

#### Arguments for `placeBid`

| Argument             | Type    | Description                                                                                  |
| -------------------- | ------- | -------------------------------------------------------------------------------------------- |
| bidTopic             | bytes32 | [Bid topic](./arguments.md#bidtopic)                                                         |
| chainId              | uint256 | Chain ID                                                                                     |
| bidAmount            | uint256 | Bid amount in the native currency of the chain where the proxy is deployed                   |
| bidDetails           | bytes   | [Bid details](./arguments.md#biddetails---bytes)                                             |
| maxCollateralAmount  | uint256 | Maximum collateral amount in the currency of the chain that OevAuctionHouse is deployed on   |
| maxProtocolFeeAmount | uint256 | Maximum protocol fee amount in the currency of the chain that OevAuctionHouse is deployed on |

The code snippet is similar to above, except `expirationTimestamp` is excluded
as an argument to the `placeBid` function.

## Checking Bid Status and Listening for Awarded Bids

Searchers can check the status of their bids by quering the bidId.

```javascript
const awardedTransaction = await new Promise(async (resolve, reject) => {
  console.log('Waiting for bid to be awarded...');
  const OevAuctionHouseFilter = OevAuctionHouse.filters.AwardedBid(
    null,
    bidTopic,
    bidId,
    null,
    null
  );
  while (true) {
    const bid = await OevAuctionHouse.bids(bidId);
    if (bid[0] === 2n) {
      console.log('Bid Awarded');
      const currentBlock = await oevNetworkProvider.getBlockNumber();
      const awardEvent = await OevAuctionHouse.queryFilter(
        OevAuctionHouseFilter,
        currentBlock - 10,
        currentBlock
      );
      resolve(awardEvent[0].args[3]);
      break;
    }
    // Sleep for 0.1 second
    await new Promise((r) => setTimeout(r, 100));
  }
});

// awardedTransaction is the oracle update that the searcher
// can use to perform the oracle update
```

## Performing the oracle update using the awarded bid

Once the bid is awarded, the searcher can perform the oracle update by using the
encoded awardTransaction on the `updateOevProxyDataFeedWithSignedData` function
of [Api3ServerV1 contract](https://docs.api3.org/reference/dapis/chains/) via
the deployed OevSearcherMulticallV1 contract.

```javascript
const performOevUpdate = async (awardedTransaction) => {
  const CHAIN_ID = process.env.CHAIN_ID ?? '5000'; // Default: Mantle Mainnet
  const BID_AMOUNT = process.env.BID_AMOUNT ?? '0.000001'; // Default: 0.000001 MNT

  const OevSearcherMulticallV1Artifact = await hre.artifacts.readArtifact(
    'OevSearcherMulticallV1'
  );

  const targetNetworkProvider = new JsonRpcProvider(
    process.env.TARGET_NETWORK_RPC_URL
  );
  const targetNetworkWallet = Wallet.fromPhrase(process.env.MNEMONIC).connect(
    targetNetworkProvider
  );
  const OevSearcherMulticallV1 = new Contract(
    deployments.OevSearcherMulticallV1,
    OevSearcherMulticallV1Artifact.abi,
    targetNetworkWallet
  );

  const updateTx = await OevSearcherMulticallV1.externalMulticallWithValue(
    [api3Contracts.deploymentAddresses.Api3ServerV1[CHAIN_ID]], // Targets: [Contract Addresses] The contract that can update the price feed
    [awardedTransaction], // Data: [encoded functions] The transaction details with signature and data that allows us to update the price feed
    [parseEther(BID_AMOUNT)], // Value: [Value sent] The matching bid amount that you bid on the OEV network (must match or update will fail)
    {
      value: parseEther(BID_AMOUNT), // Passing the value on the transaction
    }
  );
  await updateTx.wait();
  console.log('Oracle update performed');
  return updateTx;
};
```

<FlexEndTag />

## Submitting Fulfillment Transaction Hash

Once the oracle update is performed, the searcher can submit the fulfillment
transaction hash to the OevAuctionHouse contract to confirm that the oracle
update has been triggered. Upon confirmation, the collateral of the winning bid
is released and the protocol fee is charged.

```javascript
const reportFulfillment = async (updateTx, bidTopic, bidDetails, bidId) => {
  const oevNetworkProvider = new JsonRpcProvider(
    process.env.OEV_NETWORK_RPC_URL
  );
  const oevNetworkWallet = Wallet.fromPhrase(process.env.MNEMONIC).connect(
    oevNetworkProvider
  );
  const OevAuctionHouseArtifact = await hre.artifacts.readArtifact(
    'OevAuctionHouse'
  );
  const OevAuctionHouse = new Contract(
    api3Contracts.deploymentAddresses.OevAuctionHouse['4913'],
    OevAuctionHouseArtifact.abi,
    oevNetworkWallet
  );
  const bidDetailsHash = keccak256(bidDetails);

  const reportTx = await OevAuctionHouse.reportFulfillment(
    bidTopic, // The bid topic of the auctioneer instance
    bidDetailsHash, // Hash of the bid details
    updateTx.hash // The transaction hash of the update transaction
  );
  await reportTx.wait();
  console.log('Oracle update reported');

  const confirmedFulfillmentTx = await new Promise(async (resolve, reject) => {
    console.log('Waiting for confirmation of fulfillment...');
    const OevAuctionHouseFilter = OevAuctionHouse.filters.ConfirmedFulfillment(
      null,
      bidTopic,
      bidId,
      null,
      null
    );
    while (true) {
      const currentBlock = await oevNetworkProvider.getBlockNumber();
      const confirmEvent = await OevAuctionHouse.queryFilter(
        OevAuctionHouseFilter,
        currentBlock - 10,
        currentBlock
      );
      if (confirmEvent.length > 0) {
        console.log('Confirmed Fulfillment', confirmEvent[0].transactionHash);
        resolve(confirmEvent);
        break;
      }
      // Sleep for 0.1 second
      await new Promise((r) => setTimeout(r, 100));
    }
  });

  return confirmedFulfillmentTx;
};
```
