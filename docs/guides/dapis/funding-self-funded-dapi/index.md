---
title: Funding a self-funded dAPI
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → dAPIs
path: /guides/dapis/funding-self-funded-dapi/index.html
outline: deep
tags:
---

<!-- https://blog.chain.link/smart-contract-call-another-smart-contract/ -->

<!-- https://medium.com/@blockchain101/calling-the-function-of-another-contract-in-solidity-f9edfa921f4c -->

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

## Funding a dAPI

With Self-Funded dAPIs, you can fund the dAPI with your own funds. The amount of
gas you supply will determine how long your dAPI will be available for use. If
you run out of gas, you can fund the dAPI again to keep it available for use.
This is a good option if you are not planning to use the dAPI for a long period
of time or if you are not planning to use the dAPI in a production environment.

::: tip

If you are planning to use your dAPI for a long period of time or if you are
planning to use your dAPI in a production environment, we recommend that you use
managed dAPIs provided by the API3DAO. This way, you can be sure that your dAPI
will be available to your users at all times.

:::

To fund the dAPI, you need to send gas tokens to the sponsorWallet. The address
of the sponsorWallet can be obtained from the dAPI page on the API3 Market or by
querying the following api-endpoint:

```
https://api.api3.org/v1/dapis/<dapiname> //TODO: update this
```

::: tip

The [API3 market](https://market.api3.org) has a UI on the dAPI page that sends
funds to the sponsorWallet and displays the estimated time your dAPI will be
active for use based on the amount of gas you supply.

:::
