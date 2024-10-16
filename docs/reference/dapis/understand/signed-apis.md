---
title: Signed APIs
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → Signed APIs
path: /reference/dapis/understand/signed-apis.html
outline: deep
tags: signed-apis
---

<PageHeader/>

# Signed APIs

Signed APIs store the data pushed by Airnodes and expose them to the public via
an API. This allows for various use cases, including powering API3 push oracles.

Both the [Airnode](https://github.com/api3dao/airnode) and
[Signed API](https://github.com/api3dao/signed-api) implementations are open
source to increase the transparency and security of the process.

### Endpoints

Signed APIs are also open sourced for anyone to use. This is yet another step
towards more decentralization, because even if API3 oracle service is down,
anyone can use these existing Signed APIs to do the updates instead. This also
allows MEV searchers to utilize the data to perform updates outside of the
deviation parameters to further increase data feed currentness.

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

::: info Airnode Address

To view the Airnode address of all the providers refer to the
[API Integrations](https://github.com/api3dao/data-feeds/tree/main/packages/api-integrations/data/apis)
repository.

:::

### Response

The response of the Signed API is a JSON object with the following fields:

1. `count` - The number of signed data entries.
2. `data` - An object with the signed data entries. The keys are the beacon IDs
   and the values are the signed data objects for the particular beacon(s).
   Beacon Ids are
   [derived](/reference/dapis/verify-beacon.html#verifying-beaconid) from the
   hash of the provider's Airnode's address and its Template ID.

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
