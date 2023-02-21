---
title: What is Airnode?
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/airnode/api-connectivity-problem.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# Understanding Airnode

At its core, **Airnode** lets API providers easily run their own _oracle nodes_.
That way, they can provide data to any on-chain _decentralized app_ \(dApp\)
that's interested in their services, all without an intermediary.

Airnode lets dApp developers write _smart contracts_ that interact with
off-chain data of API providers at ease. It's designed to be easily deployed by
any API provider with almost no maintenance.

::: info Learn more

Read about Airnode in the _API3 Whitepaper:
<a href="/api3-whitepaper-v1.0.3.pdf#page=14" target="_blank"> A Node Designed
for First-Party Oracles.</a><ExternalLinkImage/>_

:::

## The API Connectivity Problem

<!--Smart contracts operating on a blockchain are limited in their access to off-chain data, this phenomenon is referred to as the ‘Oracle Problem.' This is only worth consideration because it includes not being able to call the paid APIs described above.-->

Smart contracts operating on a blockchain are limited in their access to
off-chain data. This phenomenon is referred to as the Oracle Problem. All the
game theoretic and cryptographic methods proposed for various oracle solutions
essentially aim to provide smart contracts access to paid APIs.

As such it would be more accurate to define the problem at hand as _the API
connectivity problem_. Solving the API connectivty problem has been a key
consideration in the design of API3's offerings.

As you read more about API3, you will discover that this redefinition will have
ripple effects across the entire solution, from how the ecosystem is built to
the lowest levels of the protocol.

Additionally, existing oracle solutions fall short because they fail to make
this distinction, resulting in inferior solutions that depend on third-party
oracles and ecosystems that exclude API providers. As such, API3 belives the
oracle problem is ill-posed, instead we are faced with an API Connectivity
Problem.

## What is Airnode?

Airnode is a fully-serverless oracle node that is designed specifically for API
providers to operate their own oracles. Airnode has been designed to be a
lightweight wrapper around a Web API that allows it to communicate with smart
contract platforms, with no overhead or payment token friction.

It addresses many of the issues API providers face in relation to oracle nodes:

1. **Set and forget**

Airnode does not require any specific know-how to operate. In fact, it is
difficult to even speak of any operation as Airnode is designed around the "set
and forget" principle. Airnode's stateless, serverless technology eliminates the
need for day-to-day maintenance and monitoring, and provides superior resilience
against permanent downtime or operator interventions.

2. **Ease of deployment**

Oracle tooling has been developed to make Airnode simple and easy to deploy. A
basic understanding of API operation is all that is needed with the process
taking no longer than 30mins (should the appropiate preparation be in place).

3. **Efficienct and flexible operation**

It is built on services priced on-demand, meaning that the node operators are
charged only by the usage of their node. This allows API providers to run an
oracle for free and start paying only after they start generating revenue. For
smart contracts this makes accessing real world data economical, when
considering the gas fees for oracle transactions.

4. **Fairer API Provider incentives**

Airnodes protocol is designed in a way that the requester covers all gas costs
for oracle transactions. Opearting Airnode does not require the node operators
to handle cryptocurrency. Authentication happens through tooling within the API3
ecosystem.

::: tip Learn more

A high-level overview of Airnode can be found in
[a dedicated Medium article](https://medium.com/api3/airnode-the-api-gateway-for-blockchains-8b07ff136840)<ExternalLinkImage/>
published by API3.

:::

## Airnode unlocks real world data for smart contracts

<!--Airnode is designed to be a simple and straightforward solution for API
providers, allowing them to make their API accessible over the Web with no
additional effort or technical skill required, much like using an API gateway.-->

When it comes to integrating APIs to oracles, we face a chicken-and-egg problem.
If there is no existing demand for an API in an oracle ecosystem, nobody has the
incentive to integrate it. If the API is not available because it's missing an
integration, nobody is going to develop applications that could create the
demand.

Airnode facilitates a simplified connection between APIs and blockchains,
enabling smart contract engineers to gain access to data for use in dApps as
soon as they identify a need for the API Providers’ services. Consequently,
Airnode helps to eliminate any restrictions when it comes to application
development allowing developers to quickly leverage additional resources.

For smart contracts engineers this means access to real world data as needed
within the development lifecycle. This translates to a host of meaningful use
cases being realized for two key reasons:

1. Increased data availability through the correct incentivsation of API
   Providers
2. The flexibility of being able to utilize Airnode to connect smart contracts
   to APIs during the devlopment cycle

::: tip Get started

Get started as an API Provider [here](link.to.guide)

:::

## Oracle Integration Standards (OIS)

To reach its full potential, API3 will need hundreds, if not thousands, of first
party oracles, so that it can easily set up new decentralized APIs (dAPIs) or
recompose existing ones. This can only be achieved if APIs can be integrated to
Airnode in an even more scalable way. To this end proprietary integration tools
will be open sourced for Airnode.

Borrowing from the
[OpenAPI Specification format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md)<ExternalLinkImage/>,
Oracle Integration Specifications (OIS) define the operations of an API, the
endpoints of an oracle, and a way of mapping them to each other. Airnode users
will be able to serve an API over their oracle simply by providing its OIS to
their node. Integrations made in this standardized format will be very easy to
collect, version and distribute.

<!--One way to see Airnode is as a lightweight wrapper around a Web API that allows
it to communicate with smart contract platforms with no overhead or payment
token friction. In terms of the involvement required from an API provider, using
Airnode can be likened to using an API gateway that makes an API accessible over
the Web, rather than operating a blockchain node as a side-business. The intent
is for Airnode to become as ubiquitous and mundane for APIs as using an API
gateway, which will make a vast variety of first-party oracles available to
API3.-->

<!--Airnode is developed by the founding members of API3 and is now open-sourced.
The software is feature-complete for current protocols, and further development
will be funded by API3 in the form of grants.-->

## How does Airnode work?

Airnode is has made it easy for API Providers to monetize their data to
decentralized applications (dApps). To understand how Airnode serves data
on-chain, read more about [how Airnode works](how-does-airnode-work.md).

<!--

OIS is a JSON file, primarily designed to describe the integration
specifications for Airnode to use. This means that it does not aim to be
human-readable first and creating it manually to specify an integration would be
difficult. This problem will be solved by ChainAPI (a product from API3
currently in development), an integration platform that will allow users to
generate OIS for their APIs through an easy-to-use graphical interface. This
will be accompanied by other quality-of-life improvements for Airnode users,
including a node dashboard and a marketplace to list their endpoints. As a
result, API3 will have a wide selection of first-party oracles to compose dAPIs
from and ecosystem growth will no longer be bottlenecked by integration
capacity.


API providers invest significant resources to build infrastructure that has high
availability rates. It is important for the oracle node implementation not to
contain individual points of failure that might cause downtime. Existing
solutions using third-party oracles depend on over-redundancy at the oracle
level to cover for this, which results in excessive costs.

Airnode enables the output of an API to be served by a first-party oracle, which
means the redundancy has to be implemented at the level of the individual
Airnode. The fact that the node is fully serverless facilitates this across
different availability zones of a single cloud provider, or even across multiple
cloud providers. Apart from that, it will be possible to containerize Airnode
and operate it on-premises. However, using the serverless version will be
recommended for almost all use cases. -->

<!-- ## Off-Chain Data Signing

There is a hybrid solution that still depends on third-party oracles, yet does
not let them tamper with the data. Here, the API providers sign their data with
their private key off-chain and serve it over a regular API endpoint.
Third-party oracles call this endpoint to get the signed data and post it to the
chain. The authenticity of the data — i.e. no tampering by third-party oracles —
can then be verified on-chain using the public key of the API provider.

Although this eliminates the risk of data tampering at the oracle level, this
solution is essentially a half-measure. By depending on third-party oracles, it
continues suffering from the ecosystem issues caused by this and, additionally,
it requires API modifications to implement off-chain signing. This results in a
severely limited API selection even compared to the regular third-party
oracle-based solutions, and restricts the growth potential of the solution's
ecosystem to the application-scale. -->
