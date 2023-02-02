---
title: Potential Obstacles (of operating oracle nodes)
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/airnode/potential-obstacles.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# Enabling API Providers to monetize data in Web3

API3 communicated with API providers extensively and observed a number of
obstacles that might prevent them from oracle onboarding and operation. The key
insights we identified were:

1. API Providers are not familiar with blockchain technology
2. Hiring for skillsets of blockchain validator operation is difficult
3. API Providers do not want to use cryptocurrencies

### Lack of familiarity

Traditional API providers are typically not more familiar with blockchain
technologies than the general public. This applies even for the ones that curate
cryptocurrency market data as their main operation is collecting data from
exchange APIs, processing them, and serving the result through their own APIs
which does not require any blockchain-specific know-how. Therefore, they
typically cannot readily operate an oracle node with in-house resources.

### The problem of node operators

There is no job market for oracle node operators. Even if some API provider were
to obtain the specific know-how needed by hiring the few node operators that are
available, this would not be a scalable solution.

Operating an oracle node consumes a lot of resources in the form of person-hours
and infrastructure costs. Unless one is guaranteed significant subsidies or
future profits, operating an oracle node is financially infeasible.

### Using cryptocurrencies

Operating an oracle node requires the API providers to transact with
cryptocurrencies. Specifically, they must pay for gas costs in the native
currency (e.g., ETH) and receive payments in one or more cryptocurrencies. This
disqualifies the vast majority of API providers for compliance-related, legal
and accounting reasons. In addition, any scheme that requires API providers to
stake funds is categorically rejected for similar reasons related to financial
risks.

## Airnode is built with API Providers in mind

Although these potential barriers might seem off-putting at first, there are
several compelling reasons for which it is still worth considering operating an
oracle node. With first-party oracle nodes, there are, in fact, practical
solutions to most of the issues above.

::: info Learn more Read more about them (in this
article)["/explore/airnode/why-first-party-oracles.md"] :::

API3 embraces the ideology of a decentralized web and the power of open source.
Furthermore it believes that the
[oracle problem is ill-posed](https://medium.com/api3/the-api-connectivity-problem-bd7fa0420636)<ExternalLinkImage/>
and instead, the problem to be solved is how to connect APIs to the blockchain.
Airnode is a first-party oracle solution that addresses this problem. Like all
design decisions, however, the advantages presented below have tradeoffs that
should be understood.

## Advantages

- First-party - First-party oracles overcome the significant disadvantages of
  third-party oracle node solutions that use middlemen to deliver APIs to the
  blockchain.
- Simple - Airnode's simple "set and forget" design avoids the time, complexity,
  and cost of other third-party oracle node solutions.
- Stateless - Airnode is stateless and treats the blockchain as the single
  source of truth. This alone solves the majority of operational problems of
  traditional third-party oracle nodes while providing an overall higher level
  of simplicity.
- Transformative - By not requiring Airnode operators to own any cryptocurrency,
  API3 provides countless traditional API providers access to the rapidly
  growing blockchain market and to innovative use cases for their data. To
  enable this, Airnode protocols are designed in way that requesters (contracts
  making the requests) specify a sponsor (account that sponsors the transaction)
  to pay for the response transaction.
- Open source - Airnode and other API3 projects are developed on
  [GitHub](https://github.com/api3dao)<ExternalLinkImage/>.
- Secure - Airnode is inherently more secure than other solutions due to its
  stateless nature. Nonetheless, API3 remains highly focused on security and has
  a track record of favorable
  [external security audits](https://github.com/api3dao/api3-dao/tree/main/reports)<ExternalLinkImage/>.
- Free - API3 does not charge for deploying and using Airnode. Under the AWS
  lambda free tier, operating an Airnode can even be free.

## Tradeoffs

- Requires knowledge - Some knowledge about how Airnode works is inherently
  necessary. The API provider needs to understand how to
  [configure an Airnode](/reference/airnode/latest/understand/configuring.md)
  for successful deployment, while
  [requesters](/reference/airnode/latest/concepts/requester.md) need to
  understand how to make the requests. API3 aims to make this as convenient as
  possible for both parties.
- Airnode becomes a vendor - When an API provider begins using Airnode, they
  become a "vendor" and therefore forfeit some control over technical aspects of
  API delivery.
- Higher response time for requests - Airnode is designed to periodically wake
  up, check for any new requests, and process them. This means that there is a
  window in which Airnode "sleeps". This is generally not problematic since the
  specific time a response transaction is recorded on-chain is never guaranteed
  and this "sleep time" is configurable.

The advantages that Airnode provides will greatly outweigh the tradeoffs for the
large majority of use cases.
