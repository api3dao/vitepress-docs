---
title: Sponsor wallets
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → Understanding dAPIs
path: /reference/dapis/understand/wallets.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Funds from sponsor wallets are used to pay the gas cost when updating the
on-chain value of a self-funded dAPI's sourced beacon value. Sponsor wallets are
only relevant when using self-funded dAPIs.

Self-funded dAPI sponsor wallets are important in that the community (dApp
owners) must fund the sponsor wallets of the dAPIs they wish to use. This is
done by using the [API3 Market<ExternalLinkImage/>](https://market.api3.org) UI
which allows you to find a dAPI, fund its sponsor wallet, and obtain its
[proxy contract](/reference/dapis/understand/proxy-contracts.md) address.

<img src="../assets/images/wallets.png" style="width:80%">

> **dApp access:**
>
> A dApp uses a proxy contract address to
> [read()](/reference/dapis/understand/read-dapis.md) the value of the dAPI. The
> dAPI is defined, and its value retrieved, by the `Api3ServerV1.sol` contract.
>
> **Data feed updates:**
>
> Airnode monitors the value of an API provider's API endpoint based on its
> `updateInterval` parameter. If the on-chain value deviates by 1% from the API
> provider value, the dAPI's beacon is updated on-chain.

:::info Deviation: Self-funded dAPIs

Self-funded dAPIs are sourced from a single beacon and only use a 1% deviation
threshold when updating the value of its beacon.

:::

## Managed dAPIs

Managed dAPIs do not use sponsor wallets. The gas costs for managed dAPIs are
managed by API3 using the fees when self-funded dAPIs are upgraded to managed
dAPIs. The fees are deposited into a common wallet that Airnodes uses to cover
gas costs when updating data feeds.

<FlexEndTag/>
