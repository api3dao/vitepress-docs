---
title: How are dAPIs maintained?
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/how-are-dapis-maintained.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

API3 composes dAPIs out of individual Beacons and Beacon sets, and provides them
as turn-key data feed services. Users need not worry about the exact API
provider used, the endpoint called, or the parameters used. This process is
managed by the API3 core technical team multisigs deployed on the chains that
dAPIs are provided on. API3 also provides access to individual Beacons or Beacon
sets for the users that require full control over the curation of the data feeds
they use.

## DapiServer Contract

As mentioned above, dAPIs are an abstraction layer over Beacons and Beacon sets.
The primary purpose of
[DapiServer.sol➚](https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.1/contracts/dapis/DapiServer.sol)
is to return dAPI values to requesters (smart contracts) that has authorized to
read a particular dAPI.

::: info Read more

Learn about how the dAPI Server
