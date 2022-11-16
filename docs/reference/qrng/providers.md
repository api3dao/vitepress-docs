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
[https://quantumnumbers.anu.edu.au/](https://quantumnumbers.anu.edu.au/)<ExternalLinkImage/>.

<!-- TODO: Need css for mobile -->

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
