---
title: Why use dAPIs?
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/why-use-dapis.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

Due to being composed out of first-party data feeds, dAPIs offer security,
transparency, cost-efficiency, and scalability in a turn-key package.

## Security

Data used to update a first-party data feed is cryptographically signed by the
owner of the data. This means that the data that will update a feed cannot be
tampered with once it leaves the source. Furthermore, the API providers host a
first-party oracle node, [Airnode](/explore/airnode/what-is-airnode.md), to push
the data to the chain themselves. This renders denial of service attacks by
third parties ineffective.

## Transparency

The cryptographic signatures prove that the data that updates a feed comes
directly from a specific API provider. Furthermore, Beacons that underlie dAPIs
allow the user to inspect what exact API endpoints are being called, and with
which parameters. This provides complete transparency to the dApp developer,
which is a big step from depending on a pseudonymous selection of third parties
that intentionally obscure their data sources.

::: tip API3 Market

dAPIs source data from Beacons, whose parameters you can examine in detail. See
the [API3 Market](https://market.api3.org/)<externalLinkImage/> for lists of
dAPIs.

:::

## Cost-efficiency

dAPIs are cost efficient compared to third-party data feeds, as the user does
not need to pay middlemen node operators for their services. Furthermore,
first-party data feeds do not require redundancy against middlemen layer
attacks. This makes single-Beacon dAPIs feasible, and allows API3 to provide a
wide variety of data feeds in a cost-efficient way.

## Scalability

An inherently secure and cost-efficient data feed design allows API3 to build a
large number of them, on many chains. This is supplemented by purpose-designed
Airnode protocols and relayer schemes to improve efficiency while not degrading
the security guarantees of a first-party data feed. The improved scalability of
dAPIs also factors into building aggregated data feeds. Since first-party data
feeds do not require redundancy at the middlemen layer, the aggregation costs
less gas and source-level decentralization becomes more affordable.
