---
title: Access real world data
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/airnode/unlocking-real-world-data.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Preferring the better-specified API connectivity problem over the oracle
problem, API3 believes that an oracle node should be designed to interface APIs
with smart contract platforms very well<!-- rather than as a sandbox that can
purportedly be used for any imaginable purpose-->. The API3 solution to the API connectivity
problem requires an expansive ecosystem of first-party oracles. Within this API3
sees thousands of API Providers participating in the Web3 API Economy.

That said Airnode and first-party oracles will also be a fundamental development
tool for smart contract developers.

<!--Any non-essential feature added to an application increases development time,
maintenance cost and the number of potential bugs. Essential features, though,
should be included out-of-the-box, and the burden of their implementation should
not be carried by the user. For instance, using third-party external adapters to
supply fundamental functionality is flawed by design. It is thus important to
know the exact purpose of the application so that one can specify its scope.-->

<!--In its simplest form: Airnode interfaces APIs with smart contract platforms. It
is well-equipped to do this, but only this is what it does. An oracle protocol
is required to serve the data on-chain.-->

<!--Preferring the better-specified API connectivity problem over the oracle
problem, API3 believes that an oracle node should be designed to interface APIs
with smart contract platforms very well, rather than as a sandbox that can
purportedly be used for any imaginable purpose. Based on this philosophy, the
Airnode protocol is designed to follow the self-emergent patterns used by APIs
to achieve as transparent and frictionless of an API–smart contract platform
interface as possible.-->

<!--Although such scope
might seem restrictive, it is not, given that APIs come in many shapes and forms
(HTTP/WebSocket, request–response/publish–subscribe/webhooks, etc.). In the long
term, Airnode intends to support all API platforms that might be in demand.-->

## Oracle Protocols

A first-party oracle consists of two parts:

1. The oracle node (Airnode)

2. Protocol (oracle smart contracts)

An oracle protocol defines how decentralized applications can make requests to
the oracle and receive responses.

<img src="../assets/images/05-How_Airnode_works.png" style="width:350px">

Certain protocols may be more appropriate depending on how an oracle node is
being utilized. As such Airnode utilizes a range of protocols to ensure a data
feed achieves the appropriate efficiency for the respective use case.

### Request-response Protocol

The first and the most commonly used API style follows the request–response
pattern, where the user makes a request with parameters and the API responds as
soon as possible. Airnode supports since it is easy to standardize and integrate
with existing APIs that follow the same pattern.

An example use case of this scheme would be requesting the result of a specific
match to be delivered, which can be used to resolve the respective prediction
market.

### Publish-subscribe Protocol

In addition, Airnode supports the publish–subscribe pattern, where the user
requests the oracle to call back a specific method when parametrized conditions
are met. For example, a decentralized exchange may request the oracle to trigger
a liquidation event for a user in a leveraged position when ETH price drops
below a particular price. Either of these patterns can be used to implement the
live data feeds that DeFi applications use today, but they can also support a
much larger variety of use cases in the form of dAPIs.

<!--
::: info Note

An oracle utilizes a smart contracts to implement the protocol in a variety of
patterns optimized for the use case. dAPIs utilize the publish-subscribe
protocol. Learn more about [dAPIs](/explore/dapis/using-dapis.md).

:::
-->

## Airnode Requesters and Sponsors

As a developer it helps to understand what a **requester** is and what a
**sponsor** does. They are both important parts of the Airnode ecosystem.

### What is a Requester?

The term [requester](/reference/airnode/latest/concepts/requester.md) is
important to remember. When requester is mentioned, the reference is to your
smart contract that calls an Airnode.

> <img src="/reference/airnode/latest/assets/images/requesters-sponsors-1.png" width="350px"/>

<!--<img src="../assets/images/03-solving_the_API_connectivity_problem_Airnode.png" style="width:350px">-->

As an example see the `myContract.sol` contract in the diagram within the
[dAPP Developers Overview](/reference/airnode/latest/developers/) doc, it is a
requester.

### What is a Sponsor?

Equally important is the term
[sponsor](/reference/airnode/latest/concepts/sponsor.md). A sponsor is an entity
such as yourself, an organization, etc. Sponsors create relationships between
requesters and Airnodes.

### Sponsor's Requester/Airnode Relationships

As a sponsor you will use the public address from an account within a mnemonic
you own to "**sponsor a requester**" and then use the public address (known as a
[sponsorAddress](/reference/airnode/latest/concepts/sponsor.md#sponsoraddress))
to "**derive a
[sponsorWallet](/reference/airnode/latest/concepts/sponsor.md#sponsorwallet)**"
for an Airnode. This action creates a relationship between a sponsor's requester
and a particular Airnode. You do this because a sponsor is the entity that pays
for the fulfillment of a request, the gas costs the Airnode will incur. These
costs will be withdrawn from the `sponsorWallet` of the Airnode when the
requester calls it.

::: info Learn more

Understand the process of sponsoring a requester and deriving a sponsor wallet
using the admin CLI commands within the
[<span style="color:rgb(16, 185, 129);">Sponsor and Requester</span>](/reference/airnode/latest/developers/requesters-sponsors.md)
developer resource

:::

<!-- ## Additional functionality & future development

Within the explore section we have discussed the foundational aspects of Airnode
and first-party oracles. However, as API are increasingly complex Airnode will
be required to accommodate these developments. Additionally, API functionality
needs to be compatible with an oracle node.

::: info Read more

This functionality includes functions such as
[Authorizers](/reference/airnode/latest/understand/apply-auth.md). An Airnode
can authorize smart contracts (know as requesters) access to its endpoints using
Authorizers.

::: -->

## API3 Market

API3 has developed an oracle solution that enables smart contracts to access and
utilize valuable real-world data with ease. As such it is essential to make sure
the process of accessing this data is as user-friendly and efficient as
possible.

<!--The API3 Market is easy to use with an intuitive UI. Developers are able to
browse and access first-party data feeds via a dAPI interface. This interface is
how API3's data feed services will be consumed by DeFi protocols.-->

The API3 Market is a tool that enables developers to browse and use first-party
data feeds in a self-serve manor. Developers can use a dAPI's interface to
consume first-party data<!--price?--> feed services in smart contracts.

<!--
## Requirements

If you want to know what prevents first-party oracles from widespread use, read
[this API3 blog post.](https://medium.com/api3/where-are-the-first-party-oracles-5078cebaf17)

Airnode is designed to run as a first-party oracle by the API providers
themselves. As a result, this imposes fairly restrictive requirements:

<p align="center">
  <img src="../assets/images/airnode.png" />
</p>

- The API provider does not know how to operate an oracle node. The oracle node
  thus should not require any know-how from the API provider.
- API–oracle node integration should be standardized so that tools can be
  developed to streamline the process.
- The API provider does not want to invest man-hours to operate the node. The
  oracle node should thus function according to the _set-and-forget_ principle.
- The API provider does not want to pay for hosting when their oracle is not
  being used. The hosting services thus should be priced on-demand.
- The API provider cannot accept cryptocurrency as payment due to compliance,
  legal and accounting reasons. They cannot exchange cryptocurrencies or fund
  their node wallets for the same reasons. The protocol thus should not require
  the API provider to handle cryptocurrency as a means of payment, or fund their
  node wallet periodically.
- The API provider cannot stake funds that would expose them to financial risk
  due to compliance, legal and accounting reasons. The security mechanics of the
  protocol thus should not depend on oracles to stake.-->

<FlexEndTag/>
