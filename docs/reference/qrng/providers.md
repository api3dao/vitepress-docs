---
title: API Providers
sidebarHeader: QRNG
sidebarSubHeader:
pageHeader: Reference → QRNG
path: /reference/qrng/providers.html
outline: deep
tags:
  - api
  - providers
  - anu
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

API3 QRNG is built on [Airnode RRP](/reference/airnode/latest/concepts/), and as
a result is provider-agnostic. See below for the providers that are currently
available. Each provider has an Airnode address with an extended public key
(xpub)) and two endpoint IDs.

- <b>`airnode`</b>: The address that belongs to the Airnode that will be called
  to get the QRNG data via its endpoints. This is not AirnodeRrpV0 contract
  address.

- <b>`xpub`</b>: The extended public key of the Airnode (`airnode`).

- <b>`endpointIdUint256`</b>: The Airnode endpoint ID that returns one random
  number of type `uint256`.

- <b>`endpointIdUint256Array`</b>: The Airnode endpoint ID that returns multiple
  random numbers of type `uint256[]`. Takes one parameter named `size` of type
  `uint256` (maximum value: 512).

## ANU Quantum Random Numbers

Australian National University is one of the leading research universities in
Australia. Visit their website at
[https://quantumnumbers.anu.edu.au<ExternalLinkImage/>](https://quantumnumbers.anu.edu.au/).

<!-- Need css for mobile -->

::: warning Supported chains

ANU Quantum Random Numbers are only available on [mainnets](./chains.md#anu).
Refer to [byog Random Numbers](./providers.md#byog-random-numbers) below for
testnet service.

:::

### `airnode`

<div style="word-wrap:break-word;margin-top:25px;">
<div style="margin-top:15px;margin-left:15px">
    <span style="font-family:courier">0x9d3C147cA16DB954873A498e0af5852AB39139f2</span>
    <CopyIcon text="0x9d3C147cA16DB954873A498e0af5852AB39139f2"/>
</div>
</div>

### `xpub`

<div style="word-wrap:break-word;margin-top:25px;">
<div style="margin-top:15px;margin-left:15px">
    <span style="font-family:courier">xpub6DXSDTZBd4aPVXnv6Q3SmnGUweFv6j24SK77W4qrSFuhGgi666awUiXakjXruUSCDQhhctVG7AQt67gMdaRAsDnDXv23bBRKsMWvRzo6kbf</span>
    <CopyIcon text="xpub6DXSDTZBd4aPVXnv6Q3SmnGUweFv6j24SK77W4qrSFuhGgi666awUiXakjXruUSCDQhhctVG7AQt67gMdaRAsDnDXv23bBRKsMWvRzo6kbf"/>
</div>
</div>

### `endpointIdUint256`

<div style="word-wrap:break-word;margin-top:15px;margin-left:15px">
    <span style="font-family:courier">0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78</span>
    <CopyIcon text="0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78"/>
</div>

### `endpointIdUint256Array`

<div style="word-wrap:break-word;margin-top:15px;margin-left:15px;">
    <span style="font-family:courier">0x27cc2713e7f968e4e86ed274a051a5c8aaee9cca66946f23af6f29ecea9704c3</span>
    <CopyIcon text="0x27cc2713e7f968e4e86ed274a051a5c8aaee9cca66946f23af6f29ecea9704c3"/>
</div>

## byog Random Numbers

[byog<ExternalLinkIamge/>](https://byog.io/) is an independent group within the
API3 ecosystem that builds high-impact oracle services.

::: warning Supported chains

**byog** Random Numbers emulates the QRNG service on
[testnets](./chains.md#byog) using
[pseudorandom number generation](/explore/qrng/).

:::

<!-- Need css for mobile -->

### `airnode`

<div style="word-wrap:break-word;margin-top:25px;">
<div style="margin-top:15px;margin-left:15px">
    <span style="font-family:courier">0x6238772544f029ecaBfDED4300f13A3c4FE84E1D</span>
    <CopyIcon text="0x6238772544f029ecaBfDED4300f13A3c4FE84E1D"/>
</div>
</div>

### `xpub`

<div style="word-wrap:break-word;margin-top:25px;">
<div style="margin-top:15px;margin-left:15px">
    <span style="font-family:courier">xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo</span>
    <CopyIcon text="xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo"/>
</div>
</div>

### `endpointIdUint256`

<div style="word-wrap:break-word;margin-top:15px;margin-left:15px">
    <span style="font-family:courier">0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78</span>
    <CopyIcon text="0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78"/>
</div>

### `endpointIdUint256Array`

<div style="word-wrap:break-word;margin-top:15px;margin-left:15px;">
    <span style="font-family:courier">0x27cc2713e7f968e4e86ed274a051a5c8aaee9cca66946f23af6f29ecea9704c3</span>
    <CopyIcon text="0x27cc2713e7f968e4e86ed274a051a5c8aaee9cca66946f23af6f29ecea9704c3"/>
</div>

## Quintessence Random Numbers

Australian-based
[Quintessence Labs<ExternalLinkImage/>](https://www.quintessencelabs.com/) is a
global leader in quantum cybersecurity, recognized for its advanced
quantum-resilient data protection capabilities.

<!-- Need css for mobile -->

### `airnode`

<div style="word-wrap:break-word;margin-top:25px;">
<div style="margin-top:15px;margin-left:15px">
    <span style="font-family:courier">0x224e030f03Cd3440D88BD78C9BF5Ed36458A1A25</span>
    <CopyIcon text="0x224e030f03Cd3440D88BD78C9BF5Ed36458A1A25"/>
</div>
</div>

### `xpub`

<div style="word-wrap:break-word;margin-top:25px;">
<div style="margin-top:15px;margin-left:15px">
    <span style="font-family:courier">xpub6CyZcaXvbnbqGfqqZWvWNUbGvdd5PAJRrBeAhy9rz1bbnFmpVLg2wPj1h6TyndFrWLUG3kHWBYpwacgCTGWAHFTbUrXEg6LdLxoEBny2YDz</span>
    <CopyIcon text="xpub6CyZcaXvbnbqGfqqZWvWNUbGvdd5PAJRrBeAhy9rz1bbnFmpVLg2wPj1h6TyndFrWLUG3kHWBYpwacgCTGWAHFTbUrXEg6LdLxoEBny2YDz"/>
</div>
</div>

### `endpointIdUint256`

<div style="word-wrap:break-word;margin-top:15px;margin-left:15px">
    <span style="font-family:courier">0xffd1bbe880e7b2c662f6c8511b15ff22d12a4a35d5c8c17202893a5f10e25284</span>
    <CopyIcon text="0xffd1bbe880e7b2c662f6c8511b15ff22d12a4a35d5c8c17202893a5f10e25284"/>
</div>

### `endpointIdUint256Array`

<div style="word-wrap:break-word;margin-top:15px;margin-left:15px;">
    <span style="font-family:courier">0x4554e958a68d68de6a4f6365ff868836780e84ac3cba75ce3f4c78a85faa8047</span>
    <CopyIcon text="0x4554e958a68d68de6a4f6365ff868836780e84ac3cba75ce3f4c78a85faa8047"/>
</div>
