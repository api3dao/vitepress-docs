---
title: The Airnode protocol
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/airnode/what-is-airnode.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Preferring the better-specified API connectivity problem over the oracle
problem, API3 believes that an oracle node should be designed to interface APIs
with smart contract platforms very well, rather than as a sandbox that can
purportedly be used for any imaginable purpose. Based on this philosophy, the
Airnode protocol is designed to follow the self-emergent patterns used by APIs
to achieve as transparent and frictionless of an API–smart contract platform
interface as possible.

The first and the most commonly used API style follows the request–response
pattern, where the user makes a request with parameters and the API responds as
soon as possible. This is the first pattern that Airnode supports since it is
easy to standardize and integrate with existing APIs that follow the same
pattern. An example use case of this scheme would be requesting the result of a
specific match to be delivered, which can be used to resolve the respective
prediction market. In addition, Airnode is planned to support the
publish–subscribe pattern, where the user requests the oracle to call back a
specific method when parametrized conditions are met. For example, a
decentralized exchange may request the oracle to trigger a liquidation event for
a user in a leveraged position when ETH price drops below a particular price.
Either of these patterns can be used to implement the live data feeds that DeFi
applications use today, but they can also support a much larger variety of use
cases in the form of dAPIs.

The Airnode protocol is designed in such a way that the request contract's
sponsor assumes all gas costs, including even the request fulfillment (response)
transactions. This is achieved by each Airnode having a separate wallet for each
sponsor, similar to how cryptocurrency exchanges automatically designate wallets
to which the users will deposit funds. The sponsor funds this wallet with the
native currency (e.g. ETH) either in a lump sum or through per-request
microtransactions. The funds in this wallet are used to fulfill all of the
following requests made by the sponsor. This scheme has significant advantages:

- The volatility in gas costs and payment token prices (e.g., LINK) makes it
  virtually impossible for oracles to set profitable yet competitive prices.
  Calculating prices dynamically on-chain requires multiple data feeds and adds
  a significant gas overhead per-request. With the Airnode protocol, the API
  providers do not have to concern themselves with gas costs, and can use
  pricing schemes such as $0.1 per call or $100 per month, which is similar to
  typical API pricing models.

- It is not reasonable to expect API providers to be able to convert fiat into
  cryptocurrency and fund their node wallets as a part of their day-to-day
  operations. In this scheme, the node operator never has to think about their
  node wallet balance.

- As seen in an attack performed on an Airnode competitor's data feeds, oracle
  nodes that use a common wallet to fulfill requests are susceptible to
  attackers spamming requests to drain their wallets. The solution to this is
  for the node operators to maintain a whitelist of trusted addresses that they
  will accept requests from. In addition to the difficulty of determining which
  contracts are supposed to be trusted in this context, this renders any kind of
  public listing service practically infeasible. This is a critical issue, as it
  stops the little independent ecosystem growth there is dead in its tracks.
  Airnode is not susceptible to this type of an attack, as a sponsor's
  designated wallet is only used to fulfill requests from the said sponsor, and
  cannot be drained by others.

- Traditional oracle nodes have to fulfill all requests with very high gas
  prices, as they cannot tolerate their transaction queue being blocked by a
  single transaction made with a low gas price. With the Airnode protocol, this
  is no longer a concern, as each sponsor will have a separate transaction
  queue. Then, sponsors whose requests are not time-critical would be able to
  provide the fulfillment gas price as a request parameter and enjoy service at
  a much lower gas cost. This scheme can be expected to synergize with EIP-1559.

Finally, let us briefly mention how the Airnode protocol approaches
monetization. It is common for a project-specific token to be worked into the
core of the protocol in an attempt to ensure that the said token is needed.
However, this induces an enormous gas price overhead, severely restricts
alternative monetization options and creates overall friction. For these
reasons, the Airnode protocol purposefully avoids using such a token. Instead,
the node operator is allowed to associate custom authorizer contracts with their
oracle endpoints, which essentially decide if a requester should be responded to
based on any criteria that can be implemented on-chain. The authorizer contracts
can be used to enforce whitelists, blacklists, monthly subscription payments or
per-call fees. This scheme is both very flexible and is implemented in a way
that does not add any gas cost overheads. Although dAPI monetization is a
completely independent matter, the flexibility that Airnode provides will carry
over, say, it will be possible to implement a dAPI where the users assume all
gas costs, which is not possible with the existing oracle solutions.