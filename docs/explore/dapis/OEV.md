---
title: Oracle Extractable Value
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/oev.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Oracle extractable value (OEV) refers to oracles making use of their position to
capture value that would otherwise have gone to third parties.

### What is OEV?

Oracle Extractable Value (OEV) is a subset of MEV related to the way oracles are
currently designed. Any update to data feeds, or a lack thereof, can create
opportunities for OEV such as frontrunning, arbitrage, and liquidations. During
each of these interactions value is leaking from the dApp users to both
searchers and validators.

### Leveraging OEV alongside dAPIs

Integrating OEV data feeds can turn this fee previously being imposed on your
users into a powerful economic incentive driving value to your ecosystem. OEV
data feeds will maximize the value returned to your dapp from OEV through a
sealed bid auction process similar to the one you might be familiar with from
Flashbots and MEV-Boost.

Instead of overpaying for liquidations with a fixed incentive, that during large
liquidation opportunities can be much too high than it needs to be, a sealed bid
auction hosted at the oracle can minimize the value being paid out and return
most of it back to the dapp. The liquidations will also be able to occur in a
more timely manner because you do not have to wait for a deviation threshold to
trigger oracle updates, creating a lower latency and more robust liquidation
process.

### Revenue for DeFi protocols

Within derivative protocols, arbitrage and frontrunning of oracle updates can
seriously affect your LPs ability to earn profit, and force you to impose higher
fees on your users. OEV data feeds can help improve LP profitability by
auctioning off the arbitrage opportunities and returning this value to your
dapp. This can allow you to attract more liquidity and provide lower fees to
traders, thus driving more volume to your dApp.

## More related material...

Learn more about Oracle Extractable Value in a summary of the
[OEV Litepaper<ExternalLinkImage/>](https://medium.com/api3/oracle-extractable-value-oev-13c1b6d53c5b).
