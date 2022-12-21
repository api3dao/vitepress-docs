---
title: Understanding dAPIs
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /reference/dapis/overview.html
version:
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

A dAPI is a live data point normally associated with human readable `dapiName`.
dAPI definitions simplify access and can return aggregated data feed values or a
single data feed value. This is suitable where the more recent data point
(meaning its set of data feeds could change as needed) is always more favorable,
e.g., in the context of an asset price data feed.

::: danger TODO

This page is very incomplete.

Should the comparison of Proxy verses DapServer.sol be here or in Explore?

:::

::: danger TODO:

Add with links to /explore and /guides

:::

## API3 Market Proxy Contracts

Proxy contracts from the API3 Market are the preferred method to use dAPIs in a
smart contract.

## `DapiServer.sol` Contract
