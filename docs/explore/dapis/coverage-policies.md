---
title: Coverage Policies
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/coverage-policies.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

`DapiServer.sol` will check that the requester has a coverage policy for each
dAPI it may attempt to read. See available dAPIs on the
[API3 Market](https://market.api3.org)<ExternalLinkImage/>. During the _preview
period_, all dAPIs on production networks have free access (limited time offer).
Please go to the
[Request Data](https://forms.monday.com/forms/embed/f44d0ed9dfd0154885f48fdb3b87a489?r=use1)<ExternalLinkImage/>
page to request dAPI access on production networks. See
[Chains and Contracts](/reference/dapis/chains.md), which includes supported
networks.

On the Polygon Mumbai testnet, developers can _self-enable_ the use of any dAPI.
During the deployment flow of your smart contract that reads a data feed, add
code that self-enables the desired dAPI. The following scripts from the
[Starter Project](https://github.com/api3dao/data-feed-reader-example)<ExternalLinkImage/>
detail how this is done. Please be sure to explore the starter project in its
entirety.

- [allow-to-read-with-name.js](https://github.com/api3dao/data-feed-reader-example/blob/main/scripts/allow-to-read-with-name.js)
  <ExternalLinkImage/>
- [allow-to-read-with-id.js](https://github.com/api3dao/data-feed-reader-example/blob/main/scripts/allow-to-read-with-id.js)
  <ExternalLinkImage/>
