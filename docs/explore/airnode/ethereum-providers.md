---
title: Ethereum providers
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/airnode/ethereum-providers.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

An oracle node requires access to a node on a blockchain (such as Ethereum) to
be able to listen for request events and send transactions to fulfill requests.
The Airnode model minimizes the node operation effort using managed services
wherever possible. It is thus assumed that the typical user makes use of
Ethereum providers such as Infura, Alchemy, etc. The number of such services is
only expected to grow, so designing a solution depending on these is not
expected to cause a problem in the future. As an example, the Infura provider
allows for making 100,000 calls per day for free. An oracle that doesn't get any
requests makes less than 3,000 calls per day (2 calls per minute), which allows
the user to keep an oracle online for free, and upgrade to a paid plan once it
gains traction.

Although the expectation is that the user will be using an Ethereum provider,
nothing prevents API providers from using a private Ethereum node. Furthermore,
Airnode is designed to allow the usage of multiple Ethereum providers
simultaneously. This is achieved by treating all of the integrated providers
individually. The operations of an Airnode thus cannot be disrupted reliably
unless all of its providers are malicious. Therefore, using multiple Ethereum
providers is a better strategy to achieve the highest possible availability than
using a private Ethereum node.
