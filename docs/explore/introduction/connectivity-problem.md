---
title:
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore
path: /explore/jobs.html
outline: deep
tags:
  - api
  - connectivity
  - first-party
  - oracle
  - oracles
---

<PageHeader/>

# The ~~oracle problem~~ API connectivity problem

An API is a well-defined and documented protocol that one can use to interact
with an application programmatically. In the context of decentralized
applications, this definition is quite useless, and even misguiding. Instead, we
should see APIs as channels businesses use to monetize their data and services.

Take the [CoinMarketCap API](https://coinmarketcap.com/api/)<ExternalLinkImage/>
as an example. It allows Web developers to use all the data seen on
https://coinmarketcap.com/<ExternalLinkImage/> and more in their applications
programmatically by making API calls. In return, developers pay a
[subscription fee](https://coinmarketcap.com/api/pricing/)<ExternalLinkImage/>.
In practice, any kind of data or service that is worth using is served by a paid
API.

> <img src="../assets/images/coinmarketcap.png" width="500" style="border:solid gray 1px;">

See the article,
[APIs: The Digital Glue](https://medium.com/api3/apis-the-digital-glue-7ac87566e773)<ExternalLinkImage/>
for a more complete background on APIs.

## Oracles

A smart contract cannot access data that is not presently in the blockchain,
which is commonly known as _the oracle problem_. This is only worth
consideration because it includes not being able to call the paid (read: useful)
APIs described above. All the game theoretic and cryptographic methods proposed
for various oracle solutions essentially aim to provide smart contracts access
to these paid APIs. Therefore, it would be more accurate to define the problem
at hand as _the API connectivity problem_. As you read about API3 offerings, you
will discover that this redefinition will have ripple effects across the entire
solution, from how the ecosystem is built to the lowest levels of the protocol.
See the article,
[The API Connectivity Problem](https://medium.com/api3/the-api-connectivity-problem-bd7fa0420636)<ExternalLinkImage/>
for a more relative information.

## API Providers

API provider is a term that is criminally underused by existing oracle
solutions. It refers to the business that owns and operates the API that the
decentralized application needs to receive data and services from. Then, it is
only natural for the API provider to be a point of consideration in the solution
of the API connectivity problem. Airnode was built on this premise. Airnode is a
first-party, API provider owned and operated oracle node that provides a
meaningful focus on the business of each API provider.

## What are first-party oracles?

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
Whitepaper</a> _Issues with Third-Party Oracles as Middlemen_ for a detailed
explanation). In contrast, first-party oracles are both secure and
cost-efficient due to not having a middleman on the interface path.
