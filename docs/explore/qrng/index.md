---
title: What is QRNG?
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → QRNG
path: /explore/qrng/index.html
outline: deep
tags:
  - qrng
  - anu
  - randomness
  - entropy
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Smart contract platforms typically emulate a deterministic virtual machine,
which cannot generate random numbers. In such cases, random number generation
(RNG) needs to be provided as an oracle service.

There are are currently limited options to access entropy on-chain. API3 Quantum Random Number Generator is a method of random number generation
based on quantum phenomena.

<img src="../assets/images/RNG_types.png" style="width:800px">

The result is truly random because the outcome of a quantum event is
theoretically uncertain with well-defined characteristics. Therefore, QRNG is
the gold standard for random number generation. Read more about QRNG and
randomness in the
[Web3 Quantum Random Numbers](https://medium.com/api3/api3-qrng-web3-quantum-random-numbers-4ca7517fc5bc)
medium post.

## A permissionless public good

With the courtesy of our data partners Airnode was hosted
by various highly reputable providers to serve Quantum RNG. This means that it is a
first-party service. 

Besides gas QRNG is free of charge,
[easy to use](/guides/qrng/index.md), and will be made available on as many
[chains](/reference/qrng/chains.md) as possible. To utilize QRNG dApps need to set up a sponsor wallet to fund gas transactions from the off-chain QRNG oracle, which can be done independently, making it a permissionless oracle. 

<!--Decentralized PRNG (e.g., RANDAO, VRF) has been the popular way of building RNG
oracle services. However, this configuration suffers from the same issues as any
third-party oracle network, in that setting up an oracle node that can provide
PRNG is trivial, which exposes the solution to
[Sybil attacks](https://en.wikipedia.org/wiki/Sybil_attack). Then, one needs to
trust the governing entity to select the network participants, which means
decentralized PRNG is only as secure and decentralized as the governing entity.-->

## Why First-party oracle nodes?

The
[API3 whitepaper](https://github.com/api3dao/api3-whitepaper/blob/master/api3-whitepaper.pdf)
proposes first-party oracles, which are oracles that own the data they serve, as
the solution that optimally counters the Sybil attack risk. However, RNG is an
awkward case where it is not possible to talk of an ownership of the data. Here,
requiring QRNG creates a very significant barrier to entry to providing on-chain
RNG services, and practically eliminates the Sybil attack risk.

<!--In this regard,
QRNG is the closest thing to a first-party RNG service.-->

<!-- review -->

::: info Contribute

Please consider providing feedback and contributing to the open source
components of this public utility at the
[Discord api3-dev channel](https://discord.com/channels/758003776174030948/765618225144266793).

:::

## What to expect next?

API3 QRNG is built on Airnode, which means any future improvements to Airnode
will also be available for API3 QRNG. Most importantly, this includes faster,
cheaper, and more customizable request fulfillments. In addition, integrations
to more chains and QRNG providers will be made available over time, and
higher-level QRNG services will be built leveraging these.

<FlexEndTag/>
