---
title: Decentralization
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore
path: /explore/decentralization.html
outline: deep
tags:
  - decentralization
  - decentralized
  - governance
---

<PageHeader/>

# {{$frontmatter.title}}

[First-party oracles](./connectivity-problem.md#what-are-first-party-oracles)
are optimally secure and cost-efficient. Nevertheless, they cannot be considered
as a full solution for all use cases. This is because a first-party oracle is
operated by a single API provider and only serves their API. Then, using a
single first-party oracle creates centralization at the API level, and requires
the API provider to be trusted. This is not acceptable in some use cases, e.g.,
if the use case secures a large amount of funds.

## Decentralized Governance

In such cases as mentioned above, oracle networks provide the required
decentralization. An oracle network makes the same request to multiple
independent oracles and reduces their responses to a single answer through
predetermined consensus rules implemented as a smart contract called the
aggregator. Individual malicious oracles cannot manipulate the outcome of this
process, which provides a degree of decentralization and trustlessness.

> <img src="../assets/images/central-governance.png" width="300"/>

::: danger TODO

The diagram above and below do not illustrate the governance issue well. They
need to be blended into one.

:::

> <img src="../assets/images/decentral-governance.png" width="300"/>

Here, an important thing to consider is how the oracle network is governed. If a
central entity can switch the oracles or APIs used in the aggregator in and out,
or even replace the aggregator itself making use of a proxy mechanism, they can
effectively manipulate the oracle network output at will. This eliminates the
decentralization and trustlessness qualities that using an oracle network
provides. Therefore, it is not adequate to use an oracle network for
decentralization, this oracle network must be governed decentrally as well.

_See the medium article,
[Why API3 DAO, not API3 CORP?](https://medium.com/api3/why-api3-dao-not-api3-corp-2dde51c537c1)
on DAOs and decentralized governance._

## dAPI (Decentralized API)

Consider the following:

- Decentralized applications need access to APIs.
- APIs should be interfaced to smart contract platforms through first-party
  oracles.
- For API level decentralization, decentrally-governed oracle networks should be
  employed.s

It can be concluded that decentrally-governed networks of first-party oracles
solve the API connectivity problem. Although this is technically correct, the
same solution can be reached through a more useful lens.

Decentralized applications cannot access Web APIs, and oracle solutions aim to
build decentralized interfaces to facilitate this. However, this approach
results in an inferior solution and ecosystem (see the
<a href="/api3-whitepaper-v1.0.3.pdf" target="_api3-whitepaper">API3
Whitepaper</a> for a detailed explanation).

> <img src="../assets/images/dapi.png" width="350"/>

Instead, API3 builds complete products called decentralized APIs (dAPIs for
short), which are blockchain-native, decentralized API services. From the user's
(i.e., the entity that operates the decentralized application) perspective, the
experience of using a dAPI would be very similar to a Web developer using a
traditional API; they would find a dAPI they need, pay the subscription fee, and
enjoy access.

Due to being defined as a full product rather than an interface, unlike a
traditional oracle network, a dAPI includes the underlying APIs. This results in
a superior solution (secure and cost-efficient first-party oracles) and
ecosystem (with API providers as its members).
