---
lang: en-US
title: Calling a dAPI
sidebarHeader: Guides
sidebarSubHeader: → dAPP Developers
description:
folder: Guides
head:
  - - meta
    - name: foo
      content: bar
  - - link
    - rel: canonical
      href: foobar
---

<!--TitleSpan>{{$frontmatter.sidebarHeader}}</TitleSpan-->

# {{$frontmatter.title}}

It had to be easy and it is.

```solidity
import "@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol";
...
// Calling the ETH/USD dAPI using the DapiServer contract
(value, timestamp) =
  IDapiServer(_dapiServerContractAddress).readDataFeedWithDapiName("ETH/USD");
```

## Next

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
