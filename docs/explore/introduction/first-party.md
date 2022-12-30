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

An oracle is an agent that acts as an intermediary between a smart contract
platform and an API. In other words, a decentralized application can use an
oracle to call an API.

> <img src="../assets/images/oracle.png" width="450"/>

An oracle consists of two parts:

- The oracle node that acts as a proxy, i.e., listens for requests made on the
  blockchain, calls the API over the Web, fulfills the requests by making
  transactions on the blockchain. Note that the oracle node is a traditional
  application that needs hosting.
- The smart contracts that implement the protocol defining how decentralized
  applications can make requests to the oracle and receive responses. This part
  is deployed on-chain and runs trustlessly, i.e., no specific party needs to
  host it.

Based on this information, it looks like simply having an oracle solves the API
connectivity problem. However, there is an important point to consider: Who will
host the oracle node?

1. If an API provider hosts the oracle node, the oracle is called a
   **first-party oracle**.
2. If a third-party middleman hosts the oracle node, the oracle is called a
   **third-party oracle**.

<!-- _See our article,
First-Party vs Third-Party Oracles
for a comparison of the two types of oracles._ -->

Third party oracles are both insecure and expensive (see the
<a href="/api3-whitepaper-v1.0.3.pdf#page=10" target="_blank">API3
Whitepaper</a><externalLinkImage/> _Issues with Third-Party Oracles as
Middlemen_ for a detailed explanation). In contrast, first-party oracles are
both secure and cost-efficient due to not having a middleman on the interface
path.
