---
title: Calling a dAPI
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → dAPIs
path: /guides/dapis/calling-a-dapi.html
outline: deep
tags:
  - dapi
  - dapis
  - datafeed
  - datafeeds
  - data
  - feed
  - feeds
---

<PageHeader/>

# {{$frontmatter.title}}

Calling a dAPI is a simple one line call.

```solidity
import "@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol";
...
// Calling the ETH/USD dAPI with the DapiServer contract address.
(value, timestamp) =
  IDapiServer(_dapiServerContractAddress).readDataFeedWithDapiName("ETH/USD");
```

## DapiServer

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
