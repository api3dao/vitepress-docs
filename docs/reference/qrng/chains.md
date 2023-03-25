---
title: Chains
sidebarHeader: QRNG
sidebarSubHeader:
pageHeader: Reference → QRNG
path: /reference/qrng/chains.html
outline: deep
tags:
---

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

  .testnets tr:nth-child(1) { color:black;background: #e5ecf9; }
  .testnets tr:nth-child(1) td code { color:black;background: #e5ecf9; }
  .testnets tr:nth-child(2) { color:black;background: #e5ecf9; }
  .testnets tr:nth-child(2) td code { color:black;background: #e5ecf9; }
  

</style>

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Requests will be responded to after `minConfirmations` blocks (see
[On Slow and Fast Block Times<ExternalLinkImage/>](https://blog.ethereum.org/2015/09/14/on-slow-and-fast-block-times/)
to learn more). Expect this to correspond to 1–3 minutes based on chain
conditions such as congestion and block times. These numbers are subject to
change.

You can import `AirnodeRrpV0` addresses from the `@api3/airnode-protocol`
package, see the
[QRNG example project](https://github.com/api3dao/qrng-example). The
[@api3/airnode-protocol](https://www.npmjs.com/package/@api3/airnode-protocol)
package is distributed via npm.

[**Nodary**](/reference/qrng/chains.md#nodary) imitates QRNG using pseudorandom
numbers and is best used during development. Use
[ANU](/reference/qrng/chains.md#anu) or
[Quintessence](/reference/qrng/chains.md#quintessence) in production to acquire
quantum random numbers.

<!--
Do not use tabs to display the two tables below. Tabs does not support nested Vue components
beyond one level deep inside and element (i.e. <div>). See /dev/tabs.md
-->

<!-- "white-space: nowrap;" on the first row will cause the remaining rows
to not break as well.
-->

## ANU

ANU is only available on mainnets.

### Mainnets

<div class="mainnets">

<div style="position:absolute;right:0px;margin-top:-30px;">ANU</div>

| Network                                                                              | ID    | AirnodeRrpV0 Address                                                                                                 | minConfirmations |
| ------------------------------------------------------------------------------------ | ----- | -------------------------------------------------------------------------------------------------------------------- | ---------------- |
| [<ChainName chainId="1"/>](https://sepolia.etherscan.io)                             | 1     | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 6                |
| [<ChainName chainId="42161"/>](https://arbiscan.io)                                  | 42161 | <code>0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924</code><CopyIcon text="0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924"/> | 25               |
| [<ChainName chainId="43114"/>](https://snowtrace.io/)                                | 43114 | <code>0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E</code><CopyIcon text="0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E"/> | 25               |
| [<ChainName chainId="56"/>](https://bscscan.com)                                     | 56    | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 25               |
| [<ChainName chainId="250"/>](https://ftmscan.com)                                    | 250   | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 80               |
| [<ChainName chainId="100"/>](https://gnosisscan.io)                                  | 100   | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 15               |
| [<ChainName chainId="1088"/>](https://andromeda-explorer.metis.io)                   | 1088  | <code>0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E</code><CopyIcon text="0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E"/> | 12               |
| [<ChainName chainId="2001"/>](https://explorer-devnet-cardano-evm.c1.milkomeda.com/) | 2001  | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 20               |
| [<ChainName chainId="1284"/>](https://moonscan.io)                                   | 1284  | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 6                |
| [<ChainName chainId="1285"/>](https://moonriver.moonscan.io)                         | 1285  | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 3                |
| [<ChainName chainId="10"/>](https://optimistic.etherscan.io)                         | 10    | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 25               |
| [<ChainName chainId="137"/>](https://polygonscan.com)                                | 137   | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 20               |
| [<ChainName chainId="30"/>](https://explorer.rsk.co)                                 | 30    | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 3                |

</div>

## Nodary

**Nodary** is best used for development and is only available on several
testnets.

### Testnets

<div class="testnets">

<div style="position:absolute;right:0px;margin-top:-30px;">Nodary</div>

| Network                                                                                | ID       | AirnodeRrpV0 Address                                                                                                 | minConfirmations |
| -------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- | ---------------- |
| [<ChainName chainId="5"/>](https://goerli.etherscan.io)                                | 5        | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="11155111"/>](https://sepolia.etherscan.io)                        | 11155111 | <code>0x2ab9f26E18B64848cd349582ca3B55c2d06f507d</code><CopyIcon text="0x2ab9f26E18B64848cd349582ca3B55c2d06f507d"/> | 1                |
| [<ChainName chainId="31"/>](https://explorer.testnet.rsk.co)                           | 31       | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="77"/>](https://blockscout.com/poa/sokol)                          | 77       | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="97"/>](https://testnet.bscscan.com)                               | 97       | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="420"/>](https://goerli-optimism.etherscan.io)                     | 420      | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="1287"/>](https://moonbase.moonscan.io)                            | 1287     | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="4002"/>](https://testnet.ftmscan.com)                             | 4002     | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="43113"/>](https://testnet.snowtrace.io)                           | 43113    | <code>0x7f5AF7a37a33898544717AAa6c35c111dCe95b28</code><CopyIcon text="0x7f5AF7a37a33898544717AAa6c35c111dCe95b28"/> | 1                |
| [<ChainName chainId="80001"/>](https://mumbai.polygonscan.com)                         | 80001    | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="200101"/>](https://explorer-devnet-cardano-evm.c1.milkomeda.com/) | 200101   | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="421613"/>](https://goerli.arbiscan.io/)                           | 421613   | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |

</div>

## Quintessence

Quintessence is available on selected mainnets and testnets.

### Mainnets

<div class="mainnets">

<div style="position:absolute;right:0px;margin-top:-30px;">Quintessence</div>

| Network                                                                              | ID         | AirnodeRrpV0 Address                                                                                                 | minConfirmations |
| ------------------------------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- | ---------------- |
| [<ChainName chainId="1"/>](https://sepolia.etherscan.io)                             | 1          | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="42161"/>](https://arbiscan.io)                                  | 42161      | <code>0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924</code><CopyIcon text="0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924"/> | 1                |
| [<ChainName chainId="42170"/>](https://nova.arbiscan.io)                             | 42170      | <code>0xd864A45334C7a632cA9149993682354D7f967F28</code><CopyIcon text="0xd864A45334C7a632cA9149993682354D7f967F28"/> | 1                |
| [<ChainName chainId="43114"/>](https://snowtrace.io/)                                | 43114      | <code>0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E</code><CopyIcon text="0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E"/> | 1                |
| [<ChainName chainId="1313161554"/>](https://explorer.mainnet.aurora.dev)             | 1313161554 | <code>0xE338f63170c42bA0d2a888f18F6185369779009c</code><CopyIcon text="0xE338f63170c42bA0d2a888f18F6185369779009c"/> | 1                |
| [<ChainName chainId="56"/>](https://bscscan.com)                                     | 56         | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="288"/>](https://bobascan.com)                                   | 288        | <code>0x1d4F592E0723e03bed2Ff6d78F3CEe6750f08B38</code><CopyIcon text="0x1d4F592E0723e03bed2Ff6d78F3CEe6750f08B38"/> | 1                |
| [<ChainName chainId="43288"/>](https://blockexplorer.avax.boba.network)              | 43288      | <code>0xd864A45334C7a632cA9149993682354D7f967F28</code><CopyIcon text="0xd864A45334C7a632cA9149993682354D7f967F28"/> | 1                |
| [<ChainName chainId="56288"/>](https://blockexplorer.bnb.boba.network)               | 56288      | <code>0x20C9e9610d4e719a39F82893b3f42e2730F42778</code><CopyIcon text="0x20C9e9610d4e719a39F82893b3f42e2730F42778"/> | 1                |
| [<ChainName chainId="1294"/>](https://moonscan.io)                                   | 1294       | <code>0xb3070A0F2f84765Ee19EfADf91dfE50690a9eEa1</code><CopyIcon text="0xb3070A0F2f84765Ee19EfADf91dfE50690a9eEa1"/> | 1                |
| [<ChainName chainId="250"/>](https://ftmscan.com)                                    | 250        | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="100"/>](https://gnosisscan.io)                                  | 100        | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="1088"/>](https://andromeda-explorer.metis.io)                   | 1088       | <code>0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E</code><CopyIcon text="0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E"/> | 1                |
| [<ChainName chainId="2001"/>](https://explorer-devnet-cardano-evm.c1.milkomeda.com/) | 2001       | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="1284"/>](https://moonscan.io)                                   | 1284       | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="1285"/>](https://moonriver.moonscan.io)                         | 1285       | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="10"/>](https://optimistic.etherscan.io)                         | 10         | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="137"/>](https://polygonscan.com)                                | 137        | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="30"/>](https://explorer.rsk.co)                                 | 30         | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="416"/>](https://explorer.sx.technology)                         | 416        | <code>0xE338f63170c42bA0d2a888f18F6185369779009c</code><CopyIcon text="0xE338f63170c42bA0d2a888f18F6185369779009c"/> | 1                |

</div>

### Testnets

<div class="testnets">

<div style="position:absolute;right:0px;margin-top:-30px;">Quintessence</div>

| Network                                                         | ID       | AirnodeRrpV0 Address                                                                                                 | minConfirmations |
| --------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- | ---------------- |
| [<ChainName chainId="5"/>](https://goerli.etherscan.io)         | 5        | <code>0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd</code><CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/> | 1                |
| [<ChainName chainId="11155111"/>](https://sepolia.etherscan.io) | 11155111 | <code>0x2ab9f26E18B64848cd349582ca3B55c2d06f507d</code><CopyIcon text="0x2ab9f26E18B64848cd349582ca3B55c2d06f507d"/> | 1                |

</div>

<FlexEndTag/>
