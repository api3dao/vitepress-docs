---
title: Decentralized APIs (dAPIs)
pageHeader: dAPIs → Introduction
outline: deep
---

<PageHeader/>

# Decentralized APIs (dAPIs)

dAPIs are on-chain data feeds sourced from off-chain first-party oracles owned
and operated by API providers themselves. dAPIs provide DeFi with a secure and
transparent solution that is verifiably decentralized data feeds from curated
sources.

dAPIs possess a range of distinct attributes:

- dAPIs have a standardized, code-friendly interface that intends to abstract
  away technical complexity.
- dAPIs exist in a fully permissionless format.
- dAPIs exist on-chain as smart contracts and are updated by first-party
  oracles.

::: info

See the medium article about design decisions and dAPIs by reading
[dAPIs: APIs for dApps](https://medium.com/api3/dapis-apis-for-dapps-53b83f8d2493).

:::

### What can I do with a dAPI?

Through a dAPI DeFi lenders, synthetic assets, algorithmic stablecoins or
derivatives (to name a few) can securely access continuously updated streams of
off-chain price reference data on-chain. Currently dAPI price feeds serve price
reference data across:

- Crypto assets
- Equities
- Forex
- Commodities
- LRT/LST

dAPIs operate with a familiar push-oracle mechanism. Each dAPI has
pre-determined oracle specifications with deviation thresholds that sees the
price updated on 0.25%, 0.5%, 1% or 5% movements in the market with a 24hr
heartbeat.

### A next-generation push oracle

[dAPIs](/dapis/reference/understand/index.md) provide aggregated high-quality
price reference data served on-chain by first-party oracles. They have
pre-configured oracle specifications that are decentralized through being served
by multiple sources.

To activate a dAPIs users can go to the
[API3 Market](https://market.api3.org/dapis) to activate a feed.

### Verify the decentralization of your oracle

As dAPIs are powered by first-party oracles, the data sources in the aggregation
can be verified on-chain. Each off-chain oracle cryptographically signs an
update. Our data partners also add their Airnode address to their DNS records.

This means their oracle node can be verified through cryptographic signatures,
optimizing the security of price feed operation.

### Signed APIs

The heart of dAPIs are the first-party data feeds, powered by the owners of the
data themselves. These data source owners operate an Airnode - a small
abstraction that takes their data and cryptographically signs it. The signer
wallet never leaves the owner's control, and anyone can verify that a particular
signed data was signed by the respective data source. Airnodes periodically push
the signed data to Signed APIs.

Signed APIs store the data pushed by Airnodes and expose them to the public via
an API. This allows for various use cases, including powering API3 push oracle.

Both the Airnode and Signed API implementations are
[open source](https://github.com/api3dao/signed-api) to increase the
transparency and security of the process.

#### Endpoints

Signed APIs are also open sourced for anyone to use. This is yet another step
towards more decentralization, because even if API3 oracle service is down,
anyone can use these existing Signed APIs to do the updates instead. This also
allows MEV searchers to utilize the data to perform updates outside of the
deviation parameters to further increase real-timeness of the data feeds.

API3 runs Signed APIs deployed on AWS, ensuring maximum uptime and reliability.
The endpoint path of a Signed API has the following shape:

```md
<BASE_URL>/<ENDPOINT_NAME>/<AIRNODE_ADDRESS>
```

To break it down:

1. `BASE_URL` - The base URL of the Signed API.
2. `ENDPOINT_NAME` - The name of the endpoint. This is a human-readable name
   that describes the data that is being served.
3. `AIRNODE_ADDRESS` - The address of the Airnode. To see the data feed sources
   refer to the [API3 market](https://market.api3.org).

The following are the endpoints that are publicly available:

1. `https://signed-api.api3.org/public/<AIRNODE_ADDRESS>` - The official API3
   Signed APIs used by the push oracle to update the base feeds.

For example, see the
[API3 response for Nodary Airnode](https://signed-api.api3.org/public/0xc52EeA00154B4fF1EbbF8Ba39FDe37F1AC3B9Fd4).

#### Response

The response of the Signed API is a JSON object with the following fields:

1. `count` - The number of signed data entries.
2. `data` - An object with the signed data entries. The keys are the beacon IDs
   and the values are the signed data objects for the particular beacon(s).

For example:

```json
{
  "count": 2,
  "data": {
    "0xcdaf3ecba9e3f1457b64b1dd33dd6dbd5d3a0d43dbcb6b94fbf755ca8a64f1c2": {
      "airnode": "0x31C7db0e12e002E071ca0FF243ec4788a8AD189F",
      "encodedValue": "0x0000000000000000000000000000000000000000000000000f710eec75e16680",
      "signature": "0x5d382d6636f6b87642db580586bac7f57609f47d30e133dbb6bedede233a6d58065cb4aefbe2d2db1bd61ee9734a8671c05a5f2f79a0192ef491662ba3e390ac1c",
      "templateId": "0x174bd80b61ec8451784391df43c8c4ffc4ae82216a65cc15107bfdf4c29f6ca1",
      "timestamp": "1727085105"
    },
    "0x4048c53a7e6d4b857fb04bd4f496691e526f1de8f38880469ec834bc46021cd4": {
      "airnode": "0x31C7db0e12e002E071ca0FF243ec4788a8AD189F",
      "encodedValue": "0x0000000000000000000000000000000000000000000000000210a4cfc6940000",
      "signature": "0x00b84c978f9bab8639a8931990aede93ce34b8f9564ced755499bac503a39d7e7dad882dd1be77954bbbf152b436912204a29a1260283dda863cf489f631a17b1c",
      "templateId": "0xee8d0cab5281c59547d4ae9021121df9aec759d457c51b905296610fbef58bed",
      "timestamp": "1727085103"
    }
  }
}
```
