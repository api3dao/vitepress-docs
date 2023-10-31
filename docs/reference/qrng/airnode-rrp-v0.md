---
title: AirnodeRrpV0.sol
sidebarHeader: QRNG
sidebarSubHeader:
pageHeader: Reference → QRNG
path: /reference/qrng/airnode-rrp-v0.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

A requester (smart contract) uses the function `makeFullRequest()` from the
[AirnodeRrpV0.sol](https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/AirnodeRrpV0.sol)
contract (by way of
[RrpRequesterV0.sol](https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol))
to request, then receive, a quantum random number. See
[Understanding QRNG](/reference/qrng/).

1. The requester "requests" the quantum random number and gets a `requestId` in
   return.

2. When the quantum random number is generated, it is fulfilled to a callback
   function in the requester.

The code snippets on this page are extracted from the
[QRNGExample.sol](/reference/qrng/qrng-example.md) contract. See it for
completeness.

## `airnode.makeFullRequest()`

```solidity

pragma solidity 0.8.9;
import "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";
...
event RequestedUint256(bytes32 indexed requestId);
...
mapping(bytes32 => bool) public expectingRequestWithIdToBeFulfilled;
...
function makeRequestUint256() external {
   bytes32 requestId = airnodeRrp.makeFullRequest(
      airnode,                      // address airnode
      endpointIdUint256,            // bytes32 endpointId
      address(this),                // address sponsor
      sponsorWallet,                // address sponsorWallet
      address(this),                // address fulfillAddress
      this.fulfillUint256.selector, // bytes4 fulfillFunctionId
      ""                            // bytes calldata parameters
   );
   expectingRequestWithIdToBeFulfilled[requestId] = true;
   emit RequestedUint256(requestId);
}
```

### Parameters

- `address airnode`: Address of the Airnode to use. See the
  [Chains](/reference/qrng/chains.md) page for a list of address on different
  chains.
- `bytes32 endpointId`: Endpoint ID known by the Airnode that will map to an API
  provider call (allowed to be `bytes32(0)`).
- `address sponsor`: Sponsor address, usually the requester's contract address.
- `address sponsorWallet`: Sponsor wallet that is used to fulfill the request.
- `address fulfillAddress`: Address that will be called to fulfill, usually
  requester's contract address.
- `bytes4 fulfillFunctionId`: Signature of the function that will be called to
  fulfill.
- `bytes calldata parameters`: There are no parameters QRNG endpoints require.

See the [QrngExample.sol](/reference/qrng/qrng-example.md) contract as an
example on how to populate the parameters using its `setRequestParameters()`
function. Setting parameter values once on the requester contract is useful as
these parameter values usually do not change.

### Returns

- requestId: The request will be assigned an ID for future reference and will
  also be part of the callback to the fulfillment function.

## Callback

Once Airnode receives an RRP request, it will immediately return a requestId to
the requester. Airnode then uses the parameters of the request to gather the
random number from the appropriate API provider. Then it will callback to the
requester with the requestId and the data. The callback is made using the
request parameter `this.fulfillUint256.selector`. Below is an example callback
within a requester.

```solidity
...
event ReceivedUint256(bytes32 indexed requestId, uint256 response);
...
mapping(bytes32 => bool) public expectingRequestWithIdToBeFulfilled;
...
function fulfillUint256(bytes32 requestId, bytes calldata data)
        external
        onlyAirnodeRrp
    {
        require(
            expectingRequestWithIdToBeFulfilled[requestId],
            "Request ID not known"
        );
        expectingRequestWithIdToBeFulfilled[requestId] = false;
        uint256 qrngUint256 = abi.decode(data, (uint256));
        // Do what you want with `qrngUint256` here...
        emit ReceivedUint256(requestId, qrngUint256);
    }
```

<FlexEndTag/>
