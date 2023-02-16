---
title: Security Considerations
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/security-considerations.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

There are various moving parts in the operation of dAPIs, which bring with a variety of security considerations that integrating parties should be aware of.

## Multi-sig dependency

As previously mentioned, a dAPI is a mapping towards a specific Beacon or Beacon Set ID, which can be changed. Currently the ability to do so rests with multi-sigs that are operated on each chain that `dapiserver.sol` is deployed on. The multi-sig setup is a 3/n with members of the Core Technical Team (CTT) along with members of the dAPI team being part of it. When reading dAPIs like e.g. BTC/USD, this multi-sig could alter what data is being consumed by pointing the dAPI towards a different ID, which can cause intended or unintended damage. Similar to other oracle network designs, like the Chainlink Contract upgradability by a 4/9 multi-sig, there are trust implications being made that such abilities will not be abused. However, the long term goal is to limit this ability drastically once dAPI operations have matured, by capping the amount of changes that are allowed to be made in addition to giving the API3 DAO the ability to revoke dAPI name setting rights through a governance vote.


## Self-funded dAPIs 

## Managed dAPIs


###