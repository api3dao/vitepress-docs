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
[https://quantumnumbers.anu.edu.au/](https://quantumnumbers.anu.edu.au/)<ExternalLinkImage/>.

### `airnode`

`0x9d3C147cA16DB954873A498e0af5852AB39139f2`<CopyIcon text="0x9d3C147cA16DB954873A498e0af5852AB39139f2"/>

### `xpub`

`xpub6DXSDTZBd4aPVXnv6Q3SmnGUweFv6j24SK77W4qrSFuhGgi666awUiXakjXruUSCDQhhctVG7AQt67gMdaRAsDnDXv23bBRKsMWvRzo6kbf`<CopyIcon text="xpub6DXSDTZBd4aPVXnv6Q3SmnGUweFv6j24SK77W4qrSFuhGgi666awUiXakjXruUSCDQhhctVG7AQt67gMdaRAsDnDXv23bBRKsMWvRzo6kbf"/>

### `endpointIdUint256`

`0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78`<CopyIcon text="0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78"/>

### `endpointIdUint256Array`

`0x27cc2713e7f968e4e86ed274a051a5c8aaee9cca66946f23af6f29ecea9704c3`<CopyIcon text="0x27cc2713e7f968e4e86ed274a051a5c8aaee9cca66946f23af6f29ecea9704c3"/>

## BYOG Random Numbers

Bring Your Own Gas is an independent group within the API3 ecosystem that builds
high-impact oracle services. Visit at [https://byog.io/](https://byog.io/).

<!-- Need css for mobile -->

### `airnode`

`0x6238772544f029ecaBfDED4300f13A3c4FE84E1D`<CopyIcon text="0x6238772544f029ecaBfDED4300f13A3c4FE84E1D"/>

### `xpub`

`xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo`<CopyIcon text="xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo"/>

### `endpointIdUint256`

`0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78`<CopyIcon text="0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78"/>

### `endpointIdUint256Array`

`0x27cc2713e7f968e4e86ed274a051a5c8aaee9cca66946f23af6f29ecea9704c3`<CopyIcon text="0x27cc2713e7f968e4e86ed274a051a5c8aaee9cca66946f23af6f29ecea9704c3"/>
