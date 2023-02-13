---
title: What is QRNG?
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → QRNG
path: /explore/qrng/index.html
outline: deep
tags:
  - qrng
  - anu
  - random
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Smart contract platforms typically emulate a deterministic virtual machine,
which cannot generate random numbers. In such cases, random number generation
(RNG) needs to be provided as an oracle service.

Most computer hardware is also designed to run deterministically, which means
regular computers cannot generate true random numbers. Instead, pseudorandom
number generation (PRNG) methods are used to generate _adequately
random-looking_ numbers. Unless stated otherwise, RNG oracle services should be
expected to be PRNG-based.

--Insert Graphic comparing hash pseudo & qrng-

Quantum random number generation (QRNG) is a method of random number generation
based on quantum phenomena. There are different methods of implementing QRNG
with varying levels of practicality, yet the common point is that the resulting
numbers will be truly random because the outcome of a quantum event is
theoretically uncertain with well-defined characteristics. Therefore, QRNG is
the gold standard for random number generation. Read more about QRNG and
randomness in the
[Web3 Quantum Random Numbers<ExternalLinkImage/>](https://medium.com/api3/api3-qrng-web3-quantum-random-numbers-4ca7517fc5bc)
medium post.

# First-party QRNG

Decentralized PRNG (e.g., RANDAO, VRF) has been the popular way of building RNG
oracle services. However, this configuration suffers from the same issues as any
third-party oracle network, in that setting up an oracle node that can provide
PRNG is trivial, which exposes the solution to
[Sybil attacks](https://en.wikipedia.org/wiki/Sybil_attack)<ExternalLinkImage/>.
Then, one needs to trust the governing entity to select the network
participants, which means decentralized PRNG is only as secure and decentralized
as the governing entity.

The
[API3 whitepaper](https://github.com/api3dao/api3-whitepaper/blob/master/api3-whitepaper.pdf)<ExternalLinkImage/>
proposes first-party oracles, which are oracles that own the data they serve, as
the solution that optimally counters the Sybil attack risk. However, RNG is an
awkward case where it is not possible to talk of an ownership of the data. Here,
requiring QRNG creates a very significant barrier to entry to providing on-chain
RNG services, and practically eliminates the Sybil attack risk.

## A permisionless oracle service: API3 QRNG

API3 QRNG is a public utility API3 provides on behalf of well-established,
prestigious organizations who have invested a significant amount of resources to
be able to provide this kind of a service. These are the properties that qualify
API providers to be the ideal first-party oracle service providers.

<!--In this regard,
QRNG is the closest thing to a first-party RNG service.-->

After deploying an [Airnode](/explore/airnode/implementation.md) that is hosted
by the API Provider developers can then access QRNG. It utilizes the
request-response protocol to serve data on-chain, serving data as the API3 QRNG
requester is called from a dApp. There are currently a handful of QRNG
providers, with the ability for this number to expand in the
future.<!-- review -->

### Australian National University (ANU) Quantum Random Numbers API

With the courtesy of the Australian National University (ANU) Airnode was hosted
by ANU Quantum Random Numbers to serve Quantum RNG. This means that it is a
first-party service. It is free of charge (apart from the gas costs),
[easy to use](../../guides/qrng/qrng-example.md), and will be made available on
as many [chains](../../reference/qrng/chains.md) as possible.

[Australian National University](https://www.anu.edu.au/)<ExternalLinkImage/> is
one of the leading research universities in Australia, and also the provider of
the well-known and widely used
[Quantum Random Numbers API](https://quantumnumbers.anu.edu.au/)<ExternalLinkImage/>,
which is powered by novel research done by the ANU quantum optics group as
described below:

> The random numbers are generated in real-time in our lab by measuring the
> quantum fluctuations of the vacuum. The vacuum is described very differently
> in the quantum physics and classical physics. In classical physics, a vacuum
> is considered as a space that is empty of matter or photons. Quantum physics
> however says that that same space resembles a sea of virtual particles
> appearing and disappearing all the time. This is because the vacuum still
> possesses a zero-point energy. Consequently, the electromagnetic field of the
> vacuum exhibits random fluctuations in phase and amplitude at all frequencies.
> By carefully measuring these fluctuations, we are able to generate ultra-high
> bandwidth random numbers. <br/><br/> The technical details on how the random
> numbers are generated can be found in
> [Appl. Phys. Lett. 98, 231103 (2011)](https://dx.doi.org/10.1063/1.3597793)<ExternalLinkImage/>
> and
> [Phys. Rev. Applied 3, 054004 (2015)](https://dx.doi.org/10.1103/PhysRevApplied.3.054004)<ExternalLinkImage/>.

::: info Contribute

Please consider providing feedback and contributing to the open source
components of this public utility at the
[Discord api3-dev channel](https://discord.com/channels/758003776174030948/765618225144266793)<ExternalLinkImage/>.

:::

## What to expect next?

API3 QRNG is built on [Airnode](/reference/airnode/latest/), which means any
future improvements to Airnode will also be available for API3 QRNG. Most
importantly, this includes faster, cheaper, and more customizable request
fulfillments. In addition, integrations to more chains and QRNG providers will
be made available over time, and higher-level QRNG services will be built
leveraging these.

## More related material...

<div class="api3-css-nav-box-flex-row">
  <NavBox type='GUIDE' id='_qrng-remix-example'/>
  <NavBox type='REPO' id='_qrng-starter-project'/>
</div>
