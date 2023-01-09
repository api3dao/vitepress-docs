---
title: What are first-party oracles?
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → About our journey!
path: /explore/introduction/first-party.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

## What is an oracle?

An oracle is an agent that acts as an intermediary between a smart contract
platform and an API. In other words, a decentralized application can use an
oracle to call an API.

It is important to understand that an oracle consists of two parts:

**1. The oracle node**

Typically an oracle node acts as a proxy by listening for requests made on the
blockchain. The oracle then calls the API over the Web and fulfills the requests
by making transactions on the blockchain.

Note that the oracle node is a traditional application that needs hosting.

**2. Protocol (oracle smart contracts)**

An oracle uses smart contracts to implement the protocol. This defines how
decentralized applications can make requests to the oracle and receive
responses. Certain protocols may be more appropiate depending on how an oracle
node is being utilized.

::: tip

The protocol smart contract is deployed on-chain and runs trustlessly, i.e., no
specific party needs to host it.

:::

> <img src="../assets/images/oracle-map.png" width="450"/>

## First-party oracles

<!-- Based on this information, it looks like simply having an oracle solves the API
connectivity problem.-->

When considering if an oracle is first or third party, there is an important
point to consider: Who will host the oracle node?

1. If an API provider hosts the oracle node, the oracle is called a first-party
   oracle.
2. If a third-party middleman hosts the oracle node, the oracle is called a
   third-party oracle.

API3's Airnode is a first-party oracle as the node is hosted in the
infrastructure of the API provider. Likewise, this means protocols serving data
do so in a first-party manor.

::: tip

See the article, First-Party vs Third-Party Oracles for a comparison of the two
types of oracles.

:::

## Advantages of first-party oracles

For dApps first-party oracles and the data feeds they output offer a range of
benefits for builders.

**Security:** First-party oracles are more secure because there is no middleman
on the interface path.

**Cost Efficiency:** Avoiding the middle man tax means first-party oracles are
cost efficient.

**Transparency:** Enhanced source transparency means reputation can be gauged
when looking to utilize real-world data in dApps.

**Flexibility:** They also are increasingly flexible when it comes to delivering
oracle services and first-party data feeds can be utilized in a multitude of
ways to best serve the users application.

<!--The transparency & immutability of the blockchain ensures the reputation of data providers is brought on chain with the data feeds. The flexibility refers to the ease of associating Airnode with API Providers endpoints and associated API data. -->

For these reasons, API3 believes in order for us to facilitate meaningful smart
contract applications with data a first-party oracle provides the optimal
architecture.

<!--Third-party oracles are both insecure and expensive (see the
<a href="/api3-whitepaper-v1.0.3.pdf#page=10" target="_blank">API3
Whitepaper</a><externalLinkImage/> _Issues with Third-Party Oracles as Middlemen_ for a detailed explanation). In contrast, first-party oracles are both secure and cost-efficient due to not having a middleman on the interface path. -->
