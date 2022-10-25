---
title: AirnodeRrpV0.sol
sidebarHeader: QRNG
sidebarSubHeader:
pageHeader: Reference → QRNG → Contracts and Functions
path: /reference/qrng/functions/airnode-rrp-v0.html
outline: deep
tags:
  - qrng
  - anu
---

<PageHeader/>

# {{$frontmatter.title}}

A requester (smart contract) uses the function `makeFullRequest()` from the
[AirnodeRrpV0.sol](https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/AirnodeRrpV0.sol)
contract (by way of
[RrpRequesterV0.sol](https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol))
to request, then receive, a quantum random number. The requester "requests" the
quantum random number and gets a `requestId` in return. When the quantum random
number is generated, it is fulfilled to a callback function in the requester.
See [Understanding QRNG](../).

<!--1. The requester calls the function `makeFullRequest()` in the
   `AirnodeRrpV0.sol` protocol contract which will return a `requestId` to the
   requester.

2. The `AirnodeRrpV0.sol` contract expects the requester to have a function
   (user-defined name) as a callback function for it to return the quantum
   random number to after Airnode acquires it from API provider.-->

## `makeFullRequest()`

```solidity
function makeRequestUint256() external {
   bytes32 requestId = airnodeRrp.makeFullRequest(
      airnode,
      endpointIdUint256,
      address(this),
      sponsorWallet,
      address(this),
      this.fulfillUint256.selector,
      ""
   );
   expectingRequestWithIdToBeFulfilled[requestId] = true;
   emit RequestedUint256(requestId);
}
```

- airnode,
- endpointIdUint256,
- address(this),
- sponsorWallet,
- address(this),
- this.fulfillUint256.selector,
- ""

## sponsorWallet
