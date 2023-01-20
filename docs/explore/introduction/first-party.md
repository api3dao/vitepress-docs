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
oracle to call an API. It is important to understand that an oracle consists of
two parts:

**1. The oracle node**

Typically an oracle node acts as a proxy by listening for requests made on the
blockchain. The oracle then calls the API over the Web and fulfills the requests
by making transactions on the blockchain.

**2. Protocol (oracle smart contracts)**

An oracle uses smart contracts to implement the protocol. This defines how
decentralized applications can make requests to the oracle and receive
responses. Certain protocols may be more appropiate depending on how an oracle
node is being utilized.

::: tip Key takeout

1. The oracle node is a traditional application that needs hosting.
2. The protocol smart contract is deployed on-chain and runs trustlessly, i.e.,
   no specific party needs to host it.

:::

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

::: info Learn more

See the article,
[First-Party vs Third-Party Oracles](https://hackernoon.com/the-difference-between-first-party-and-third-party-oracles)
for a comparison of the two types of oracles.

:::

## Advantages of first-party oracles

For dApps first-party oracles and the data feeds they output offer a range of
benefits for builders.

- **Security:** First-party oracles are more secure because there is no
  middleman on the interface path.

- **Cost Efficiency:** Avoiding the middle man tax means first-party oracles are
  cost efficient.

- **Transparency:** Enhanced source transparency means reputation can be gauged
  when looking to utilize real-world data in dApps.

- **Flexibility:** They also are increasingly flexible when it comes to
  delivering oracle services and first-party data feeds can be utilized in a
  multitude of ways to best serve the users application.

<!--The transparency & immutability of the blockchain ensures the reputation of data providers is brought on chain with the data feeds. The flexibility refers to the ease of associating Airnode with API Providers endpoints and associated API data. -->

For these reasons, API3 believes in order for us to facilitate meaningful smart
contract applications with data a first-party oracle provides the optimal
architecture.

<!--Third-party oracles are both insecure and expensive (see the
<a href="/api3-whitepaper-v1.0.3.pdf#page=10" target="_blank">API3
Whitepaper</a><externalLinkImage/> _Issues with Third-Party Oracles as Middlemen_ for a detailed explanation). In contrast, first-party oracles are both secure and cost-efficient due to not having a middleman on the interface path. -->

## First-party oracle governance

### Legacy oracle governance

Traditionally an oracle network makes the same request to multiple independent
oracles and reduces their responses to a single answer through predetermined
consensus rules. This is implemented as a smart contract called the aggregator.

Individual malicious oracles cannot manipulate the outcome of this process,
which provides a degree of decentralization and trustlessness. Here, an
important thing to consider is how the oracle network is governed.

<img src="../assets/images/central-governance.png" width="300"/> >
<img src="../assets/images/decentral-governance.png" width="300"/>

<!--::: danger TODO
The diagram above and below do not illustrate the governance issue well. They
need to be blended into one. Or maybe they go away.
::: -->

If a central entity can switch the oracles or APIs used in the aggregator in and
out, or even replace the aggregator itself making use of a proxy mechanism, they
can effectively manipulate the oracle network output at will.

This eliminates the decentralization and trustlessness qualities that using an
oracle network provides. Therefore, it is not adequate to use an oracle network
to achieve decentralization, this oracle network must be governed decentrally as
well.

::: info Learn more

See the medium article,
[Why API3 DAO?<externalLinkImage/>](https://medium.com/api3/why-api3-dao-not-api3-corp-2dde51c537c1)
on DAOs and decentralized governance.

:::

### Decentrally governed oracles

Decentrally-governed networks of first-party oracles would adquately solve the
API connectivity problem. Consider the following:

1. Decentralized applications need access to APIs.
2. It is optimal to interface APIs to smart contract platforms through
   first-party oracles.
3. For API level decentralization, decentrally-governed oracle networks should
   be employed.

> <img src="../assets/images/dapi.png" width="350"/>

API3 delivers decentralized interfaces to APIs to facilitate this through
governance.

A decentralized API is a product which contains:

1. APIs interacting with oracle networks decentralized interfaces
2. Decentralized governance and interfaces

By taking advantage of the advantages offered by decentralization, developers
can build applications with elevated security and trustworthiness.

<!--
Due to being defined as a full product rather than an interface, unlike a
traditional oracle network, a decentralized API includes the underlying APIs. This results in
a superior solution (secure and cost-efficient first-party oracles) and
ecosystem (with API providers as its members).  -->

<!--Although this is technically correct, the
same solution can be reached through a more useful lens-->

<!--Decentralized applications cannot access Web APIs, and oracle solutions aim to build decentralized interfaces to facilitate this. However, this approach results in an inferior solution and ecosystem (see the
<a href="/api3-whitepaper-v1.0.3.pdf" target="_api3-whitepaper">API3
Whitepaper</a><externalLinkImage/> for a detailed explanation).-->

<!--Instead, API3 builds complete products called decentralized APIs (dAPIs for
short), which are blockchain-native, decentralized API services. From the user's
(i.e., the entity that operates the decentralized application) perspective, the
experience of using a dAPI would be very similar to a Web developer using a
traditional API; they would find a dAPI they need, pay the subscription fee, and
enjoy access.-->
