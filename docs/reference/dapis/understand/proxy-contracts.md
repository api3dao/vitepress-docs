---
title: Proxy contracts
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /reference/dapis/understand/proxy-contracts.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Proxy contracts are generated and deployed by the
[API3 Market<ExternalLinkImage/>](https://market.api3.org) and allow for simple
access to dAPIs by any dApp. Access the API3 Market UI to easily obtain the
address of a proxy contract and use it to read the value of its dAPI. Each proxy
contract is linked to a single dAPI on a particular network.

dApp owners use the address of a proxy contract to read dAPIs with the
[IProxy interface](/reference/dapis/understand/iproxy.md). See the guide
[Reading a self-funded dAPI proxy ](/guides/dapis/read-self-funded-dapi/) for a
complete working example.

```
import "@api3/contracts/v0.8/interfaces/IProxy.sol";
...
(value, timestamp) = IProxy(proxyAddress).read();

```

Self funded dAPIs have a single public proxy contract used by the community and
are sourced from a single beacon. Managed dAPIs (under development) also have a
single public proxy contact but also can have private proxy contracts and can be
sourced from multiple beacons.

![proxy-contracts.png](../assets/images/proxy-contracts.png)

## dAPI roadmap

Currently dAPIs are under an expansive development cycle and in March of 2023
the first functional **Self-funded dAPIs** were made available.

| Self-funded dAPIs                            | Managed dAPIs                                         |
| -------------------------------------------- | ----------------------------------------------------- |
| March 2023                                   | \* Summer 2023                                        |
| Single public proxy contract                 | Additional private proxy contracts                    |
| Sourced from a single<br/>data feed (beacon) | Sourced from multiple<br/>data feeds (beacons)        |
| Gas costs are community funded               | Gas costs are managed <br/>by API3 using upgrade fees |

<div style="margin-left:10px;margin-top:-15px;font-size:small;font-family:courier;">* Managed
dAPIs are under development, the release date is not available at this time.</div>

Development and expansion of dAPIs beyond self-funded and managed dAPIs will
include OEV and service coverage. More details on these concepts will be
forthcoming once managed dAPIs are released. Please feel-free to ask questions
about the evolution of dAPIs on
[Discord<ExternalLinkImage/>](https://discord.com/channels/758003776174030948/765618225144266793).

## Self funded dAPIs

Self-funded dAPIs were made available in March 2023. These are community funded
and community manage dAPIs that are only sourced from a single data feed
(beacon). The funding is used to pay gas costs incurred by an Airnode as it
places the dAPI's value on-chain when a deviation threshold is reached.

Any dApp owner can fund a dAPI and any dApp owner can use the dAPI. Meaning that
if three dApp owners are using the dAPI and only one provides funding, the other
two would benefit. However this is not best practice for the two that do not
provide funding as their dApp could fail if the original dApp decides to
discontinue further funding. So the community benefits from a community funding
approach.

### Single source data feed

Unlike the forthcoming
[managed dAPIs](/reference/dapis/understand/proxy-contracts.md#managed-dapis),
self-funded dAPIs are sourced from one data feed (beacon). This may not make
them ideal to use on a production chain.

### Proxy contract uniqueness

Each self-funded dAPI has only one publicly available proxy contract. For
example, the proxy contract for the self-funded dAPI
[ZIL/USD<ExternalLinkImage/>](https://market.api3.org/dapis/polygon-testnet/ZIL-USD)
on the Mumbai testnet has an address of
`0x4a40Ed2Dbd51e655eD64371737C81883B0524eB2`. Therefore, any dApp can call the
ZIL/USD dAPI to get its value and timestamp using its proxy contract address.

```solidity
(value, timestamp) = IProxy(0x4a40Ed2Dbd51e655eD64371737C81883B0524eB2).read();
```

See the guide
[Subscribing to self-funded dAPIs](/guides/dapis/subscribing-self-funded-dapis/)
and learn more on how to fund a dAPI. Also see the guide
[Reading a self-funded dAPI proxy](/guides/dapis/read-self-funded-dapi/) and
learn how to use a proxy contract address to read a dAPI.

## Managed dAPIs

Managed dAPIs are currently under development. A managed dAPI is actually the
process of upgrading a self-funded dAPI to become a managed dAPI. Here the dApp
that does the upgrade pays a small fee which is used to pay gas costs incurred
by the Airnode to place the dAPI value on-chain. Unlike self-funded dAPIs, API3
will manage the gas cost with the fees collected. This is advantages as the dApp
owner does not need to worry about the community based funding model that might
cause the dAPI to shut down due to lack of funding.

### Private proxy contracts

Another advantage of manage dAPIs is that each dApp owner can request a private
proxy contract. These contracts will be listed on the API3 Market website under
"my dAPIS" allowing the dApp owner a visual management console for the dAPIs
they may be using.

### Changing specifications

The specifications for the concept of a managed dAPI may change to some degree
as development continues. The full feature specification will be updated here as
this type of dAPIs is made available.

<FlexEndTag/>
