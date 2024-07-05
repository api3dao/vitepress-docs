---
title: Auction Cycle
sidebarHeader: Reference
sidebarSubHeader: OEV Network
pageHeader: Reference → OEV Network → Auction Cycle
path: /reference/oev-network/overview/auction-cycle.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

The OEV Network uses an on-chain auction mechanism to facilitate the
distribution of conditional oracle updates. The condition embedded in the oracle
update is the value that the searcher is willing to pay to for the update to the
beneficiary of the dAPI proxy.

To fully understand the auction mechanism let's break down the auction cycle
using the following sequence diagram:

![Auction Cycle](/reference/oev-network/overview/assets/oev-auction-sequence.png){data-zoomable}

The auction cycle consists of the following steps:

1. <b> Bridging to the OEV Network</b>

In order to interact with the OEV Network and participate in the auction the
searcher needs to
[bridge](/reference/oev-network/overview/bridge-oev-network.md) their ETH to the
OEV Network and deposit ETH into the
[OevAuctionHouse](https://github.com/api3dao/contracts/blob/main/contracts/api3-server-v1/OevAuctionHouse.sol)
contract.

2. <b> Update searcher balance in OevAuctionHouse </b>

Depositing ETH updates the searcher's balance in the OevAuctionHouse contract.
The deposited ETH serves as
[Collateral](/reference/oev-network/searchers/collateral-protocol-fee.md) which
is needed to be able to win in the auction. The amount of Collateral needed is a
percentage of the bid amount.

3. <b>Identify profitable oracle update</b>

The searcher identifies conditions for an oracle update that would be valuable,
for example a liquidation event if the price of ETH falls below 2000.

4. <b>Submitting a bid</b>

The searcher would then submit a bid to the OevAuctionHouse contract with the
specified conditions to receive the price update i.e price of ETH <= 2000. In
order to submit a bid, the searcher doesn't need to have collateral deposited in
the OevAuctionHouse contract. However for a bid to be eligible to win an
auction, the searcher needs to have the required collateral deposited in the
OevAuctionHouse contract.

Note: The collateral doesn't get locked until the bid is awarded.

5. <b>Start of a new Auction Round</b>

An auction rounds starts when the auctioneer receives a dAPI value update from
Airnodes (eg: ETH/USD = 2000) or new blocks are produced on the OEV Network.

:::info Auction Rounds

- Off-chain Airnodes stream dAPI values to the auctioneer. Whenever there is a
  change in the dAPI value, the auctioneer would check if the new dAPI value
  satisfies the conditions of any of the bids on the OevAuctionHouse contract.
  If no bids are satisfied, the auctioneer waits for the next dAPI value change
  or new bids being placed. If a bid has just won an auction, the auctioneer
  waits for 60 seconds before starting the next auction round for that dAPI
  proxy.

- In addition to fetching dAPI values, the auctioneer also fetches new blocks on
  the OEV Network periodically. The auctioneer checks if new bids have been
  placed and if any of the bids are satisfied by the current dAPI value. If no
  bids are satisfied, the auctioneer waits for the next block or dAPI value
  change. If a bid has just won an auction, the auctioneer waits for 60 seconds
  before starting the next auction round for that dAPI proxy.

:::

6. <b>Check for bid conditions </b>

The auctioneer checks the current dAPI value against bids received from the
OevAuctionHouse contract to determine if any of the bids conditions have been
met.

7. <b>Finding the winning bid</b>

If there are multiple bids that are satisfied, the auctioneer finds the winning
bid by selecting the bid with the highest bid amount. More details on how the
auctioneer selects the winning bid can be found in the
[Understanding Auctioneer](/reference/oev-network/searchers/understanding-auctioneer.html#parallel-auctions)
page.

8. <b> Sign the winning bid</b>

The winning bid is sent to the Airnodes to obtain a signature allowing the
searcher to update the dAPI value for the given proxy. These signatures are then
processed by Auctioneer to prepare the update transaction calldata for
searchers' convenience.

9. <b> Fetch the encoded transaction from the airnodes</b>

The auctioneer fetches the encoded transaction and signatures from the airnodes.

10. <b> Award the winning bid</b>

The auctioneer publishes the winning bid along with the encoded transaction and
signatures to the OevAuctionHouse contract. The collateral of the winning bid is
locked in the OevAuctionHouse contract in the same transaction that the winning
bid is awarded.

11. <b> Fetch the awarded bid transaction</b>

The searcher fetches the awarded bid transaction from the OEV Network. This
transaction contains the encoded transaction. The searcher has 60 second window
of exclusivity to trigger the oracle update.

12. <b>Triggering the oracle update</b>

The searcher can then use the encoded transaction to trigger the oracle update
on the dAPI proxy and trigger the liquidation event atomically in a multicall
transaction. The searcher can only do the price update if they transfer the bid
amount to the beneficiary of the dAPI proxy.

13. <b> Submit fulfillment transaction hash to OevAuctionHouse</b>

The searcher submits the fulfillment transaction hash to the OevAuctionHouse
contract to confirm that the oracle update has been triggered. The searcher has
a 24 hour window to submit the fulfillment transaction hash. In the event that
the searcher does not submit the fulfillment transaction hash, the collateral of
the winning bid is slashed.

14. <b> Release collateral and charge protocol fee</b>

Once the fulfillment transaction hash is submitted, the collateral of the
winning bid is released and the protocol fee is charged.
