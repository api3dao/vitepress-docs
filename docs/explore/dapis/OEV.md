---
title: OEV capture with dAPIs
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/OEV.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Oracle extractable value (OEV) refers to oracles making use of their position to
capture value that would otherwise have gone to third parties.

### What is OEV?

Any update to data feeds, or a lack thereof, can create opportunities for OEV
such as arbitrage and liquidations. During each of these interactions value is
leaking from the dApp users to both searchers and blockchain validators. Learn
more about OEV [here](/reference/oev-network).

### Leveraging OEV alongside dAPIs

Integrating OEV-enabled data feeds can turn this fee previously being imposed on
your users into a powerful economic incentive for your protocol. With the OEV
Network, fees typically extracted through liquidation bots will be recaptured
and be able to be used for more productive means. API3 has delivered a
specialized Order Flow Auction (OFA) that maximizes the value returned to your
dApp from OEV through a sealed bid auction process similar to the one you might
be familiar with from Flashbots and MEV-Boost.

Instead of overpaying for liquidations with a fixed incentive, that during large
liquidation opportunities can be much much higher than it needs to be, a sealed
bid auction hosted at the oracle can minimize the value being paid out and
return most of it back to the dApp. The liquidations will also be able to occur
in a more timely manner because you do not have to wait for a deviation
threshold to trigger oracle updates, creating a lower latency and more robust
liquidation process.

### Re-directing MEV to dApps

Within certain DeFi protocols the arbitrage created due to oracle latency can
undermine the ability for an LPs ability to be profitable. In turn this forces
protocols, particularly derivatives, to impose higher fees on users. Capturing
OEV at the data feed level can help improve LP profitability by auctioning off
the arbitrage opportunities and returning the corresponding value to dApps. More
accurate data and value capture from the auction can be used to increase
profitability and sustainability of liquidity provision, allowing for a more
optimal market making protocol for apps that use oracles. Better market making
from a dApps LPs creates a flywheel effect of drawing more liquidity to the
application while being able to lower fees and list more assets, which then
attracts more users and volume.

<FlexEndTag/>
