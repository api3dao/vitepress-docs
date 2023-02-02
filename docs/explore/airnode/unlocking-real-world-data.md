---
title: Design Philosophy
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/airnode/design-philosophy.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

The API3 solution to the API connectivity problem requires an expansive
ecosystem of first-party oracles. Airnode aims to make first-party oracles a
reality.

## Scope

Any non-essential feature added to an application increases development time,
maintenance cost and the number of potential bugs. Essential features, though,
should be included out-of-the-box, and the burden of their implementation should
not be carried by the user. For instance, using third-party external adapters to
supply fundamental functionality is flawed by design. It is thus important to
know the exact purpose of the application so that one can specify its scope.

Airnode interfaces APIs with smart contract platforms. It is well-equipped to do
this, but only this is what it does. Although such scope might seem restrictive,
it is not, given that APIs come in many shapes and forms (HTTP/WebSocket,
request–response/publish–subscribe/webhooks, etc.). In the long term, Airnode
intends to support all API platforms that might be in demand.

## Requirements

If you want to know what prevents first-party oracles from widespread use, read
[this API3 blog post.](https://medium.com/api3/where-are-the-first-party-oracles-5078cebaf17)<ExternalLinkImage/>

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
  protocol thus should not depend on oracles to stake.
