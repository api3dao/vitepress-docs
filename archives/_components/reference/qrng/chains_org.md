---
title: Chains
sidebarHeader: QRNG
sidebarSubHeader:
pageHeader: Reference → QRNG
path: /reference/qrng/index.html
outline: deep
tags:
  - qrng
  - anu
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Requests will be responded to after `minConfirmations` blocks (see
[this](https://blog.ethereum.org/2015/09/14/on-slow-and-fast-block-times/) for
context). Expect this to correspond to 1–3 minutes based on chain conditions
such as congestion and block times. These numbers are subject to change.

You can import `AirnodeRrpV0` addresses from the `@api3/airnode-protocol`
package, see the
[QRNG example project](https://github.com/api3dao/qrng-example). The
[@api3/airnode-protocol](https://www.npmjs.com/package/@api3/airnode-protocol)
package is distributed via npm.

<!--
Do not use tabs to display the two tables below. Tabs does not support nested Vue components
beyond one level deep inside and element (i.e. <div>). See /dev/tabs.md
-->

## mainnets

<!-- "white-space: nowrap;" on the first row will cause the remaining rows
to not break as well.
-->
<!-- prettier-ignore -->
<div class="mainnets">

| Network                      | Chain ID | AirnodeRrpV0 Address                                                                                      | `minConfirmations` |
| ---------------------------- | -------- | --------------------------------------------------------------------------------------------------------- | ------------------ |
| <ChainName chainId="1"/>     | 1        | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 6                  |
| <ChainName chainId="42161"/> | 42161    | `0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924`<CopyIcon text="0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924"/> | 25                 |
| <ChainName chainId="43114"/> | 43114    | `0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E`<CopyIcon text="0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E"/> | 25                 |
| <ChainName chainId="56"/>    | 56       | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 25                 |
| <ChainName chainId="250"/>   | 250      | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 80                 |
| <ChainName chainId="100"/>   | 100      | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 15                 |
| <ChainName chainId="1088"/>  | 1088     | `0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E`<CopyIcon text="0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E"/> | 12                 |
| <ChainName chainId="2001"/>  | 2001     | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 20                 |
| <ChainName chainId="1284"/>  | 1284     | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 6                  |
| <ChainName chainId="1285"/>  | 1285     | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 3                  |
| <ChainName chainId="10"/>    | 10       | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 25                 |
| <ChainName chainId="137"/>   | 137      | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 20                 |
| <ChainName chainId="30"/>    | 30       | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 3                  |

</div>

## testnets

<div class="testnets">

| Network                         | Chain ID | AirnodeRrpV0 Address                                                                                      | `minConfirmations` |
| ------------------------------- | -------- | --------------------------------------------------------------------------------------------------------- | ------------------ |
| <ChainName chainId="5"/>        | 5        | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |
| <ChainName chainId="11155111"/> | 11155111 | `0x2ab9f26E18B64848cd349582ca3B55c2d06f507d`<CopyIcon text="0x2ab9f26E18B64848cd349582ca3B55c2d06f507d"/> | 1                  |
| <ChainName chainId="31"/>       | 31       | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |
| <ChainName chainId="77"/>       | 77       | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |
| <ChainName chainId="97"/>       | 97       | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |
| <ChainName chainId="420"/>      | 420      | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |
| <ChainName chainId="1287"/>     | 1287     | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |
| <ChainName chainId="4002"/>     | 4002     | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |
| <ChainName chainId="43113"/>    | 43113    | `0x7f5AF7a37a33898544717AAa6c35c111dCe95b28`<CopyIcon text="0x7f5AF7a37a33898544717AAa6c35c111dCe95b28"/> | 1                  |
| <ChainName chainId="80001"/>    | 80001    | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |
| <ChainName chainId="200101"/>   | 200101   | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |
| <ChainName chainId="421613"/>   | 421613   | `0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd`<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                  |

</div>

<style>
  .mainnets th {
    word-wrap: break-word;
    text-align: center;
    color:black;
    background:lightgray !important;

  }
  .mainnets th  code { color:black;background: gray; }
  .mainnets tr:nth-child(1) td { color:black;background: #e5ecf9; }
  .mainnets tr:nth-child(1) td code { color:black;background: #e5ecf9; }
  
  .testnets th {
    word-wrap: break-word;
    text-align: center;
    color:black;
    background:lightgray !important;
  }

  .testnets th  code { color:black;background: gray; }
  .testnets tr:nth-child(1) { color:black;background: #e5ecf9; }
  .testnets tr:nth-child(1) td code { color:black;background: #e5ecf9; }
  .testnets tr:nth-child(2) { color:black;background: #e5ecf9; }
  .testnets tr:nth-child(2) td code { color:black;background: #e5ecf9; }
  

</style>
