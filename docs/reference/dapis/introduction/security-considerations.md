---
title: Security Considerations
pageHeader: dAPIs → Introduction
outline: deep
---

<PageHeader/>

# Security Considerations

There are various moving parts in the operation of dAPIs which bring with it a
variety of security considerations. When using dAPIs integrating parties should
be aware of and understand these processes.

### Multi-sig dependency

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

### Sponsor Wallets

dAPIs will only update if the respective sponsor wallet has sufficient funds
available to create the on-chain transaction. When a user activates a dAPI and
purchases a configuration for it, the sponsor wallet gets funded with the
required gas to keep the dAPI updated. If the sponsor wallet runs out of funds,
the dAPI will not update until the sponsor wallet is re-funded/ or a new
configuration is purchased.

### Working towards absolute decentralization

It is important that no central authority has the opportunity to impact the
delivery of a dAPI's value. API3 is committed to keep the beacon sets behind a
dAPI updated in a completely decentralized fashion.
