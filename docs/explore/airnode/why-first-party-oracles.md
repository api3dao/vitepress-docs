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

<FlexStartTag/>

# Defining first-party oracles

First-party oracles are integral to the API3 solution. Through using Airnode a
smart contract is served by an oracle that is operated by the owner of an API,
and not by a third party. As such, the output of an API that has seen Airnode
deployed is a first-party oracle.

When considering if an oracle is first or third party, there is an important
point to consider: Who will host the oracle node?

1. If an API provider hosts the oracle node, the oracle is called a first-party
   oracle.
2. If a third-party middleman hosts the oracle node, the oracle is called a
   third-party oracle.

As API3's Airnode is a first-party oracle as the node is hosted in the
infrastructure of the API provider this means protocols serving data do so in a
first-party manor. This is opposed to being served by a middle node layer that
is seen within third-party oracles.

# <FlexStartTag/>

# {{$frontmatter.title}}

First-party oracles bring several advantages to smart contract engineers. The
noteable benefits are:

1. Increased privacy
2. Cost efficiency
3. Source transparency
4. Elimination of licensing

### Private by default

First-party oracles are operated by the API providers themselves. They sign
responses with their private keys at the protocol level of the smart contract
platform, which is the best proof that the data is not tampered with. This means
the oracles are private by default since a third party cannot observe the raw
data from the API being processed, vastly expanding the range of use cases where
a first-party oracle can be used natively.

### Increased cost efficiency

A data feed consisting of first-party oracles would be more cost-efficient
compared to one employing middlemen as one needs to pay them both for their
services and for de-incentivizing attacks on the data feed (referred to as the
middleman tax).

It will also need fewer oracles as over-redundant decentralization at the oracle
level is not necessary in order to protect it against third-party attacks.

Assuming that each API is typically served by at least two third-party oracles,
we conservatively estimate that data feeds powered by first-party oracles would
be at least 50% more efficient in terms of gas costs. Within _Proof of Reserve_
services, we often see a single data source being validated by multiple nodes,
meaning first-party oracles

### Source transparency

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

::: info Learn more

Understand more by reading
[first-party vs third-party oracles](https://medium.com/api3/first-party-vs-third-party-oracles-13b4b9b4db8e).

:::

## Empowering API Providers

Through experience of engaging API Providers we realized the incentive structure
that sees API accessibility scale were misaligned for those responsible serving
the data, the API Providers. Thus Airnode and the corresponding first-party
oracles have been designed with the those operating the API in mind.

With consideration of the API Provider, first-party represents increased
flexibility in deployment & configuration and the ability to ensure ownership of
their data.

<!--::: info Read more

Replace this with a content box linking to 'monetizing apis n web3'

:::-->

<FlexEndTag/>
