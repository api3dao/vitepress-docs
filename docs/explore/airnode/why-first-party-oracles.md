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

# {{$frontmatter.title}}

First-party oracles bring with themselves several advantages, including
increased privacy, cost efficiency, transparency and elimination of licensing
issues. However, there might be several reasons why API providers do not operate
first-party oracles as of yet. Both the advantages and the potential obstacles
are discussed in this document. Read more below to find out more details.

## Private by default

In principle, first-party oracles are operated by the API providers themselves.
They would sign responses with their private keys at the protocol level of the
smart contract platform, which is the best proof that the data is not tampered
with. This means the oracles are private by default since a third party cannot
observe the raw data from the API being processed, vastly expanding the range of
use cases where a first-party oracle can be used natively.

## Increased cost efficiency

A data feed consisting of first-party oracles would be more cost-efficient
compared to one employing middlemen as one needs to pay them both for their
services and for de-incentivizing attacks on the data feed (referred to as the
middleman tax). It will also need fewer oracles as over-redundant
decentralization at the oracle level is not necessary in order to protect it
against third-party attacks.

Assuming that each API is typically served by at least two third-party oracles,
we conservatively estimate that data feeds powered by first-party oracles would
be at least 50% more efficient in terms of gas costs.

## Better transparency

First-party oracles also provide transparency in terms of the data source and
the degree of decentralization. Given that each API provider operates an oracle
(visible on-chain), the number of oracles serving a data feed accurately
represents the extent of its decentralization. This is because there is a 1:1
mapping between the oracle and the data source.

Furthermore, API providers would publish their on-chain identities through
off-chain channels, which would allow users to verify whose data they are
consuming at any given moment.

## Free of licensing issues

Finally, having API providers operate oracles helps tackle legal issues as API
services no longer need to be licensed to a third party and API providers
receive the entire revenue. Furthermore, this solves the rent-seeking
third-party oracle problem and allows for the funds to be redirected to the
group that is doing the heavy lifting — the API providers. Incentivizing API
providers aligns their financial interests with the ones of the API3 ecosystem,
resulting in a strong mutual bond between the two.
