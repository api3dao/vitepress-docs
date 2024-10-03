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
