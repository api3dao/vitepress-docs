---
title: Oracle Extractable Value (OEV)
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → About our journey!
path: /explore/introduction/OEV.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Oracle Extractable Value (OEV) is a subset of Maximal Extractable Value (MEV)
that occurs within on-chain liquidations. Currently, liquidations in lending
markets are very inefficient with significant amounts of collateral being passed
to block producers (validators). The OEV Network is a solution that makes
liquidations more efficient by just using a dAPI price feed.

## Understanding the problem

Traditional oracle solutions update data feeds blindly, which is wasteful and
provides poor granularity. Introducing the ability for OEV auctions to
contribute to oracle updates, alongside push-updates, results in maximally
accurate data feeds alongside an opportunity to recapture MEV currently leaked
around liquidation processes.

For an in-depth understanding of Oracle Extractable Value we suggest to read the
[OEV Litepaper]().

## The OEV Network

The OEV Network is a ZK-rollup to capture the OEV from all dApps that use API3
data feeds. The OEV Network is powered by Polygon CDK, a framework for creating
custom ZK-rollups.

You can consider the OEV Network to be a specialized order flow auction platform
that sells the rights to execute data feed updates for specific dApps to the
highest bidder. The winner pays while executing the data feed update, allowing
the dApp to immediately receive the proceeds on their native chain. This all
runs as a sidecar to our regular data feeds, meaning that a dApp that uses API3
data feeds will be able to simply enable OEV Network and start earning.

## Returning value to DeFi protocols

It’s common to see that it’s the block producer (and not the liquidator)
capturing 99.9% of the liquidation revenue. These liquidation rewards are often
in the 5-10% range of the users collateral, which is a relatively large fee to
impose on users of lending protocols. These liquidations represent a small over
% of the millions extracted within the MEV supply chain.

API3 believe this value should go back to those operating the protocol. As such
90% of recaptured OEV will be given to those consuming the price feed. 10% will
be shared between API3, the searcher and the API Provider.

::: info

Recapturing OEV requires no technical implementation (if you're already using
dAPIs)

:::
