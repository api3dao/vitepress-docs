---
title: Requester
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.11 → Concepts and Definitions
path: /reference/airnode/latest/concepts/requester.html
version: v0.11
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

A requester is a contract that makes Airnode requests. While making a request,
the requester refers to a [sponsor](sponsor.md) by its
[sponsorAddress](sponsor.md#sponsoraddress), which means "fulfill my request
with the [sponsor wallet](sponsor.md#sponsorwallet) of the sponsor identified by
`sponsorAddress`. Doing so requires the requester to be [sponsored](sponsor.md)
by the said sponsor.

Note that the requester is the contract that makes the request. The requester
may specify the request such that the request is fulfilled by the Airnode
calling back another contract.

See the
[Airnode requester examples](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/contracts).
