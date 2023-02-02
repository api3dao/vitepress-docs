---
title: Why first-party oracles?
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/airnode/why-first-party-oracles.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

## The output of Airnode: First-party oracles

First-party oracles are integral to the API3 solution: each API is served by an
oracle that is operated by the owner of an API, and not by a third party. As
such, the output of an API that has seen Airnode deployed is a first-party
oracle.

When considering if an oracle is first or third party, there is an important
point to consider: Who will host the oracle node?

1. If an API provider hosts the oracle node, the oracle is called a first-party
   oracle.
2. If a third-party middleman hosts the oracle node, the oracle is called a
   third-party oracle.

API3's Airnode is a first-party oracle as the node is hosted in the
infrastructure of the API provider. Likewise, this means protocols serving data
do so in a first-party manor.

## {{$frontmatter.title}}

First-party oracles bring several advantages to smart contract engineers. The
noteable benefits are:

1. Increased privacy
2. Cost efficiency
3. Transparency
4. Elimination of licensing

### Private by default

First-party oracles are operated by the API providers themselves. They sign
responses with their private keys at the protocol level of the smart contract
platform, which is the best proof that the data is not tampered with. This means
the oracles are private by default since a third party cannot observe the raw
data from the API being processed, vastly expanding the range of use cases where
a first-party oracle can be used natively.

### Increased cost efficiency

- A data feed consisting of first-party oracles would be more cost-efficient
  compared to one employing middlemen as one needs to pay them both for their
  services and for de-incentivizing attacks on the data feed (referred to as the
  middleman tax).

- It will also need fewer oracles as over-redundant decentralization at the
  oracle level is not necessary in order to protect it against third-party
  attacks.

- Assuming that each API is typically served by at least two third-party
  oracles, we conservatively estimate that data feeds powered by first-party
  oracles would be at least 50% more efficient in terms of gas costs. Within
  _Proof of Reserve_ services, we often see a single data source being validated
  by multiple nodes, meaning first-party oracles

### Better transparency

First-party oracles also provide transparency in terms of the data source and
the degree of decentralization. Given that each API provider operates an oracle
(visible on-chain), the number of oracles serving a data feed accurately
represents the extent of its decentralization. This is because there is a 1:1
mapping between the oracle and the data source.

Furthermore, API providers would publish their on-chain identities through
off-chain channels, which would allow users to verify whose data they are
consuming at any given moment.

### Free of licensing issues

Finally, having API providers operate oracles helps tackle legal issues as API
services no longer need to be licensed to a third party and API providers
receive the entire revenue. Furthermore, this solves the rent-seeking
third-party oracle problem and allows for the funds to be redirected to the
group that is doing the heavy lifting — the API providers. Incentivizing API
providers aligns their financial interests with the ones of the API3 ecosystem,
resulting in a strong mutual bond between the two.

## Airnode trade offs

API3 embraces the ideology of a decentralized web and the power of open source.
Furthermore it believes that the
[oracle problem is ill-posed](https://medium.com/api3/the-api-connectivity-problem-bd7fa0420636)<ExternalLinkImage/>
and instead, the problem to be solved is how to connect APIs to the blockchain.
Airnode is a first-party oracle solution that addresses this problem. Like all
design decisions, however, the advantages presented below have tradeoffs that
should be understood.

### Advantages

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

### Tradeoffs

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
