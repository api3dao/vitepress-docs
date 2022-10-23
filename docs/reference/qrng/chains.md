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

<table style="font-family:courier;">
<th>Network</th>
<th>ID</th>
<th><code>AirnodeRrpV0</code> Address</th>
<th><code>minConfirmations</code></th>

<tr>
<td><ChainName chainId="5"/></td>
<td>5</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>1</td>
</tr>

<tr>
<td><ChainName chainId="1"/></td>
<td>1</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>6</td>
</tr>

<tr>
<td><ChainName chainId="42161"/></td>
<td>42161</td>
<td NOWRAP class="qrng-cell">0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924<CopyIcon text="0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924"/></td>
<td>25</td>
</tr>

<tr>
<td><ChainName chainId="43114"/></td>
<td>43114</td>
<td NOWRAP class="qrng-cell">0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E<CopyIcon text="0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E"/></td>
<td>25</td>
</tr>

<tr>
<td><ChainName chainId="56"/></td>
<td>56</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>25</td>
</tr>

<tr>
<td><ChainName chainId="250"/></td>
<td>250</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>80</td>
</tr>

<tr>
<td><ChainName chainId="100"/></td>
<td>100</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>15</td>
</tr>

<tr>
<td><ChainName chainId="1088"/></td>
<td>1088</td>
<td NOWRAP class="qrng-cell">0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E<CopyIcon text="0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E"/></td>
<td>12</td>
</tr>

<tr>
<td><ChainName chainId="2001"/></td>
<td>2001</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>20</td>
</tr>

<tr>
<td><ChainName chainId="1284"/></td>
<td>1284</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>6</td>
</tr>

<tr>
<td><ChainName chainId="1285"/></td>
<td>1285</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>3</td>
</tr>

<tr>
<td><ChainName chainId="10"/></td>
<td>10</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>25</td>
</tr>

<tr>
<td><ChainName chainId="137"/></td>
<td>137</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>20</td>
</tr>

<tr>
<td><ChainName chainId="30"/></td>
<td>30</td>
<td NOWRAP class="qrng-cell">0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd<CopyIcon text="0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"/></td>
<td>3</td>
</tr>

</table>

<style>
.qrng-cell{
    font-size:small;
}
</style>
