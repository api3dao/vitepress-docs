---
title: dApp Onboarding
sidebarHeader: Reference
sidebarSubHeader: OEV
pageHeader: Reference → OEV -> dApps
path: /reference/oev-network/dapps/index.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

OEV auctions operate as a supplementary service to regular data feed operations,
ensuring that updates persist through the oracle even during OEV Network
downtime or periods with limited OEV opportunities.

## Integration

Integration involves reading from a proxy contract visible on the
[API3 Market](https://market.api3.org).

All the dAPIs on over 35+ chains have their own proxy addresses listed on the
market.

<div>
  <img src="/reference/oev-network/dapps/assets/market.png" />
</div>

## Proxy Contract

<div>
  <img src="/explore/assets/images/dAPI_explainer.png" />
</div>

Searchers use signed data from Airnodes to update the proxy contract with the
latest data point. However, if [`Api3ServerV1`](/reference/dapis/understand/)
has a more recent timestamp than the last searcher update, the data point from
`Api3ServerV1` will be displayed.

::: tip

Please refer to the following guide on how to read from a proxy contract:

- [Reading a dAPI Proxy](/guides/dapis/read-a-dapi/)

:::

By integrating OEV auctions as a supplementary service, developers can ensure a
seamless transition between oracle updates and OEV opportunities while
maintaining the desired distribution of proceeds.
