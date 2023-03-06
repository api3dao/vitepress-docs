---
title: makeFullRequest()
sidebarHeader: QRNG
sidebarSubHeader:
pageHeader: Reference → QRNG → Contracts and Functions
path: /reference/qrng/functions/make-full-request.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

QNRG uses the `makeFullRequest()` function in the
[AirnodeRrpV0.sol](https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/AirnodeRrpV0.sol)
protocol contract to get a quantum random number.

```
@param airnode Airnode address
@param endpointId Endpoint ID (allowed to be `bytes32(0)`)
@param sponsor Sponsor address
@param sponsorWallet Sponsor wallet that is requested to fulfill the request
@param fulfillAddress Address that will be called to fulfill
@param fulfillFunctionId Signature of the function that will be called to fulfill
@param parameters All request parameters
@return requestId Request ID
```

- `airnode`: The address of the Airnode.
