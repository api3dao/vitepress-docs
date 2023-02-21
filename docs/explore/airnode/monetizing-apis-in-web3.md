---
title: Potential Obstacles (of operating oracle nodes)
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/airnode/monetizing-apis-in-web3.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# Monetize an API in Web3

The goal of API3 is to provide smart contract developers with an easy way to
access off-chain resources from within their smart contracts, without having to
worry about the security and trust implications of doing so.

To achieve this goal it is imperative API3 enables those operating off-chain
resources to be able to easily serve and monetize their data in Web3.

## Airnode is built with API Providers in mind

API3 communicated with API providers extensively and observed a number of
obstacles that might prevent them from oracle onboarding and operation. The key
insights identified were:

1. API Providers are not familiar with blockchain technology
2. Hiring for skill sets of blockchain validator operation is difficult
3. API Providers do not want to use cryptocurrencies

### Familiarity with blockchain is not required

From observations we understand that traditional API providers are typically not
familiar with blockchain technologies, including those that curate
cryptocurrency market data. Typically an API Provider's main operation is
collecting data from exchange APIs, processing them, and serving the result
through their own APIs.

The key insight is that typically an API Provider cannot readily operate an
oracle node in-house. As such, Airnode has been designed to not require
blockchain development skills. Within the ecosystem tooling can be used to
deploy and manage Airnode and the first-party oracle feeds.

### Making oracle node operation pragmatic

Operating a third-party oracle node consumes a lot of resources in the form of
person-hours and infrastructure costs. At the same time there is no job market
for oracle node operator. Thus unless subsidies or profits are immediately
provided, operating an oracle node is financially infeasible.

Airnode is open source and free to use. It's a pragmatic tool to enable API
Providers to monetize to on-chain services that doesn't require investment in
skills or infrastructure.

<!--Even if some API provider were to obtain the specific know-how
needed by hiring the few node operators that are available, this would not be a
scalable solution.-->

### No need to handle cryptocurrencies

Operating an oracle node requires the API providers to transact with
cryptocurrencies. Specifically, they must pay for gas costs in the native
currency (e.g., ETH) and receive payments in one or more cryptocurrencies. This
disqualifies the vast majority of API providers for compliance-related, legal
and accounting reasons. In addition, any scheme that requires API providers to
stake funds is categorically rejected for similar reasons related to financial
risks.

Airnode has been designed so that the API Provider doesn't need to handle
cryptocurrencies. For example, the Airnode requester can be funded by the dApp
operators and oracle authentication can be paid directly to an API Providers
bank account.

# Considerations for API Providers

Whilst API3 embraces the ideology of a decentralized web and the power of open
source, like all design decisions, the advantages to the first-party
architecture presented also have tradeoffs that should be understood.

<!--

Although the potential barriers might seem off-putting at first, there are
several compelling reasons for which it is still worth considering operating an
oracle node.

::: info Learn more

Read more about them (in this
article)["/explore/airnode/why-first-party-oracles.md"]

:::
-->
<!--
API3 embraces the ideology of a decentralized web and the power of open source.

Furthermore it believes that the
[oracle problem is ill-posed](https://medium.com/api3/the-api-connectivity-problem-bd7fa0420636)<ExternalLinkImage/>
and instead, the problem to be solved is how to connect APIs to the blockchain.
Airnode is a first-party oracle solution that addresses this problem. Like all
design decisions, however, the advantages presented below have tradeoffs that
should be understood.
-->

## Benefits

- **First-party** oracles overcome the significant disadvantages of third-party
  oracle node solutions that use middlemen to deliver APIs to the blockchain.
- Airnode's **simple**
  [set and forget](/explore/airnode/api-connectivity-problem.html#_1-set-and-forget)
  design avoids the time, complexity, and cost of other third-party oracle node
  solutions.
- Airnode is **stateless** and treats the blockchain as the single source of
  truth. This alone solves the majority of operational problems of traditional
  third-party oracle nodes while providing an overall higher level of
  simplicity.
- By **not requiring Airnode operators to own any cryptocurrency**, API3
  provides countless traditional API providers access to the rapidly growing
  blockchain market and to innovative use cases for their data.
  <!--To
  enable this, Airnode protocols are designed in way that requesters (contracts
  making the requests) specify a sponsor (account that sponsors the transaction)
  to pay for the response transaction.-->
- Airnode and other API3 projects are **open source** and developed on
  [GitHub](https://github.com/api3dao)<ExternalLinkImage/>.
- Due to its stateless nature Airnode is inherently more **secure** than other
  solutions. Nonetheless, API3 remains highly focused on security and has a
  track record of favorable
  [external security audits](https://github.com/api3dao/api3-dao/tree/main/reports)<ExternalLinkImage/>.
- API3 does **not charge** for deploying and using Airnode. Under the AWS lambda
  free tier, operating an Airnode can even be free.

## Tradeoffs

- Some **knowledge about how Airnode works** is inherently necessary. The API
  provider needs to understand how to
  [configure an Airnode](/reference/airnode/latest/understand/configuring.md)
  for successful deployment, while
  [requesters](/reference/airnode/latest/concepts/requester.md) need to
  understand how to make the requests. API3 aims to make this as convenient as
  possible for both parties.
- When an API provider begins using Airnode, they become a "vendor" and
  therefore forfeit some control over technical aspects of API delivery.
- Airnode is designed to periodically wake up, check for any new requests, and
  process them. This means that there is a window in which Airnode "sleeps".
  This is generally not problematic since the specific time a response
  transaction is recorded on-chain is never guaranteed and this "sleep time" is
  configurable, but can lead to higher response time for requests.

The advantages that Airnode provides will greatly outweigh the tradeoffs for the
large majority of use cases.

# Oracle tooling

Providing the appropriate preparation has taken place deploying Airnode is a
simple and low-effort process that doesn't require specific developer resources
and benefits from the
[set and forget](/explore/airnode/api-connectivity-problem.html#_1-set-and-forget)
design principles.
