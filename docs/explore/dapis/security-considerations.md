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

<FlexStartTag/>

# {{$frontmatter.title}}

There are various moving parts in the operation of dAPIs which bring with it a
variety of security considerations. When using dAPIs integrating parties should
be aware of and understand these processes.

## Multi-sig dependency

As previously mentioned, a dAPI is a mapping towards a specific beacon or beacon
Set ID, which can be changed. Currently the ability to do so rests with
multi-sigs that are operated on each chain that `API3ServerV1.sol` is deployed
on. The multi-sig setup is a 4/n with members of the Core Technical Team (CTT)
along with members of the dAPI team being part of it. When reading dAPIs like
e.g. BTC/USD, this multi-sig could alter what data is being consumed by pointing
the dAPI towards a different ID, which can cause intended or unintended damage.

Similar to other oracle network designs, like the Chainlink contract
upgradability by a 4/9 multi-sig, there are trust implications being made that
such abilities will not be abused. However, the long term goal is to limit this
ability drastically once dAPI operations have matured, by capping the amount of
changes that are allowed to be made in addition to giving the API3 DAO the
ability to revoke dAPI name setting rights through a governance vote.

## Self-funded dAPIs

Compared to managed dAPIs, self-funded dAPIs are sourced from a single datafeed
(beacon) and are hence susceptible to more risk. Downtime with the associated
Airnode or the sourced API operation will consequently lead to a stale data
point. For this reason, self-funded dAPIs are treated as an introduction to
dAPIs as well as a testing ground for data feeds. It is recommended that use
cases with higher security requirements make use of managed dAPIs when
available.

### Sponsor Wallets

Self-funded dAPIs will only update if the respective sponsor wallet has
sufficient funds available to create the on-chain transaction. Consequently, it
is imperative that the status of a respective sponsor wallet is monitored if it
is used in any capacity because there will be no updates without funds. Keeping
the sponsor wallet at a desired level can be automated with services offered by
projects like Gelato. Please note, that funds send to a sponsor wallet are not
recoverable, which means that sending small amounts to keep it operational
repeatedly is recommended over sending large amounts.

## Managed dAPIs

With managed dAPIs, API3 takes over the gas management overhead that is
associated with running dAPIs. The underlying
[beacon sets](/reference/dapis/understand/index.md) of a managed dAPI are kept
up to date by collecting signed data from the respective underlying Airnodes of
a beacon set via Airnode's HTTP-Gateway and updating the beacon values on-chain.

### Working towards absolute decentralization

It is important that no central authority has the opportunity to impact the
delivery of a dAPI's value. API3 is committed to keep the beacon sets behind a
managed dAPI updated in a completely decentralized fashion. Therefore
decentralization will be a key feature when managed dAPIs are made available.

<FlexEndTag/>
