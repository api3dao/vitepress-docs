---
title: Overview
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

::: danger TODO

This page is very incomplete.

Should the comparison of Proxy verses DapServer.sol be here or in Explore?

:::

A dAPI is a live data point associated with human readable `dapiName`. dAPI
definitions simplify access and can return aggregated Beacon values or a single
Beacon value. This is suitable where the more recent data point (meaning its set
of Beacons could change as needed) is always more favorable, e.g., in the
context of an asset price data feed.

## API3 Market Proxy COntracts

Proxy contracts from the API3 Market are the preferred method to use dAPIs in a
smart contract.

## `DapiServer.sol` Contract
