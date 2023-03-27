---
title: Calling an Airnode (RRP)
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.11 → Airnode for dApp Developers
path: /reference/airnode/latest/developers/call-an-airnode.html
version: v0.11
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

A requester is a contract that can trigger an Airnode RRP request. To do so, the
requester needs to be sponsored and make the request using a matching sponsor
wallet. See
[Requesters and Sponsors](/reference/airnode/latest/developers/requesters-sponsors.md)
on how to sponsor a requester and derive the sponsor wallet.

## How it works

Airnode RRP consists of two parts: the off-chain **Airnode** (a.k.a. "the node")
deployed as self hosted or cloud provider functions (e.g., AWS) and the on-chain
**protocol contract** AirnodeRrpV0.sol. A requester calls the protocol contract,
which emits a blockchain event with the request parameters. Airnode listens to
the events emitted by the AirnodeRrpV0 contract. During the next run cycle,
Airnode gets the request parameters from the emitted event. The diagram below
and the diagram in the [Overview](/reference/airnode/latest/developers/) doc for
developers illustrate the mechanics of the entire process.

The AirnodeRrpV0 protocol is designed to be flexible and is meant to serve a
variety of use cases. See the Airnode
[requester examples](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/contracts)
for potential design patterns.

Ignoring the mechanics of the overall process, the requester calling an Airnode
primarily focuses on two tasks, indicated by points A & B in the diagram below.

- <span style="color:green;font-weight:bold;">A</span>: Make the request
- <span style="color:blue;font-weight:bold;">B</span>: `myFulfill()` accepts and
  decodes the response

> <img src="../assets/images/call-an-airnode.png" width="650px"/>
>
> - <p>A requester makes a request to the AirnodeRrpV0 contract which adds the <code>requestId</code> to storage, emits the request to the event logs and returns the <code>requestId</code> to the requester. The request is retrieved by the Airnode during its next run cycle. It then verifies the requester is authorized by checking authorizer contracts assigned to the Airnode.</p>
> - <p>If the request is authorized, Airnode proceeds to respond. It first gathers the requested data from the API and calls the <code>fulfill()</code> function in AirnodeRrpV0, which removes the pending <code>requestId</code> from storage and makes a callback to <code>myFulfill()</code>. The gas costs associated 
>    with the response are covered by the sponsor of the requester.</p>

See the guide [ Making an RRP Request](/guides/airnode/rrp-request.html) and
learn how to make a RRP request of an Airnode.

<!--
The following section of this document discusses the requester implementation,
its deployment and sponsoring.


## Step #1: Inherit RrpRequesterV0.sol

A requester inherits from the
[RrpRequesterV0.sol](https://github.com/api3dao/airnode/blob/v0.8/packages/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol)
contract. This will expose the AirnodeRrpV0.sol protocol contract to the
requester allowing it to make Airnode requests.

```solidity
import "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";

contract MyRequester is V0 {
  ...
  constructor (address airnodeRrpAddress)
      public
      RrpRequesterV0(airnodeRrpAddress)
  {}
  ...
}
```

Note the constructor parameter `airnodeRrpAddress`, which is the public address
of the AirnodeRrpV0.sol protocol contract on the blockchain you wish to use. It
is used by RrpRequesterV0.sol to point itself to AirnodeRrpV0.sol.

See the list of all [Airnode contract addresses](/reference/airnode/latest/) in
the reference section.

## Step #2: Implement the request logic

There are two types of requests provided by the AirnodeRrpV0.sol contract. See
the [Request](/reference/airnode/latest/concepts/request.md) page for
information related to each request type.

This example uses a
[full request](/reference/airnode/latest/concepts/request.md#full-request) type
(note the `airnodeRrp.makeFullRequest` function call in the code below) which is
called from the requester's own function `callTheAirnode`. The function
`makeFullRequest` requires that the requester pass all parameters needed by
Airnode to call its underlying API.

Once the request has been made to `airnodeRrp.makeFullRequest`, the
AirnodeRrpV0.sol contract returns a `requestId` confirming the request has been
accepted and is in process of being executed. Your requester would most likely
wish to track all `requestId`s. Note the line
`incomingFulfillments[requestId] = true;` in the code below that stores the
`requestId`s in a mapping. This is useful when the Airnode responds to the
requester later at the function (`airnodeCallback`) with the `requestId` and the
`data` requested.

```solidity
import "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";

contract MyRequester is RrpRequesterV0 {
  mapping(bytes32 => bool) public incomingFulfillments;
  mapping(bytes32 => int256) public fulfilledData;

  constructor (address airnodeRrpAddress)
      public
      RrpRequesterV0(airnodeRrpAddress)
  {}

  function callTheAirnode(
      address airnode,
      bytes32 endpointId,
      address sponsor,
      address sponsorWallet,
      bytes calldata parameters // Inbound API parameters which may already be ABI encoded
      )
      external
  {
      bytes32 requestId = airnodeRrp.makeFullRequest( // Make the Airnode request
          airnode,                        // airnode
          endpointId,                     // endpointId
          sponsor,                        // sponsor's address
          sponsorWallet,                  // sponsorWallet
          address(this),                  // fulfillAddress
          this.airnodeCallback.selector,  // fulfillFunctionId
          parameters                      // API parameters
          );
      incomingFulfillments[requestId] = true;
  }

  function airnodeCallback(   // The AirnodeRrpV0.sol protocol contract will callback here.
      bytes32 requestId,
      bytes calldata data
  {
      ...
  }
}
```

### Request Parameters

A full request using the AirnodeRrpV0.sol contract `makeFullRequest` function
requires all parameters needed by the Airnode application to be passed at
runtime. This is in contrast to a template request that would use a template for
some or all of the required parameters. Learn more about
[using templates](/reference/airnode/latest/developers/using-templates.md).

Since the `callTheAirnode` function makes a
[full request](/reference/airnode/latest/concepts/request.md#full-request), it
must gather the following parameters to pass on to `airnodeRrp.makeFullRequest`.

- **airnode** and **endpointId**: As a pair, these uniquely identify the
  endpoint desired at a particular Airnode.

- **sponsor**: The
  [sponsor](/reference/airnode/latest/developers/requesters-sponsors.md#what-is-a-sponsor)
  address.

- **sponsorWallet**: The
  [sponsor wallet](/reference/airnode/latest/developers/requesters-sponsors.md#how-to-derive-a-sponsor-wallet)
  address that the sponsor received when deriving the wallet for the Airnode
  being called.

- **fulfillAddress** and **fulfillFunctionId**: The public address of your
  requester contract and its function that is called upon the return of the
  request.

- **parameters**: Specify the API parameters and any
  [reserved parameters](/reference/airnode/latest/specifications/reserved-parameters.md),
  these must be encoded. See
  [Airnode ABI specifications](/reference/airnode/latest/specifications/airnode-abi.md)
  for how these are encoded.

  In most, cases the parameters are encoded off-chain and passed to the
  requester which only forwards them. You can use the
  [@api3/airnode-abi](/reference/airnode/latest/specifications/airnode-abi.md#api3-airnode-abi)
  package to perform the encoding and decoding. Take a look at the JavaScript
  snippet below.

  ```javascript
  // JavaScript snippet

  import { encode } from '@api3/airnode-abi';

  const parameters = [
    { type: 'string32', name: 'coin', value: 'ETH' },
    { type: 'string32', name: 'apiKey', value: 'UHHS7SRGC975E' },
  ];
  const encodedData = encode(parameters);

  console.log(encodedData);
  // '0x...'
  ```

  However, this is not a hard requirement and you can encode the parameters
  on-chain as well. Take a look at the Solidity snippet below.

  ```solidity
  // Solidity snippet

  abi.encode(
    string32("1SS"),
    string32("period"), "30d",
    string32("symbols"), "btc,eth,matic,link,uni,sushi,aave,chz,theta,rsr,grt,enj,ocean,kacy"
  )
  ```

For additional information on request parameters when calling
`airnodeRrp.makeFullRequest()`, see
[Request Parameters](/reference/airnode/latest/concepts/request.md#request-parameters)
in the Reference section.

## Step #3: Capture the Response

As soon as the Airnode gets a request, it gathers the data, encodes it and
starts an on-chain transaction responding to the request. The Airnode calls the
AirnodeRrpV0.sol contract function `fulfill()`, which in turn calls the
requester, in this case, at `airnodeCallback`. For the purposes of the callback,
recall the request supplied the request contract address and the desired
callback function which the AirnodeRrpV0.sol protocol contract stored with the
`requestId`.

```solidity
import "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";

contract MyRequester is RrpRequester {
    mapping(bytes32 => bool) public incomingFulfillments;
    mapping(bytes32 => int256) public fulfilledData;

    constructor (address airnodeRrpAddress)
        public
        RrpRequesterV0(airnodeRrpAddress)
    {}

    function callTheAirnode(
        ...
    }

    function airnodeCallback(        // The AirnodeRrpV0.sol protocol contract will callback here.
        bytes32 requestId,
        bytes calldata data
        )
        external
        onlyAirnodeRrp
    {
        require(incomingFulfillments[requestId], "No such request made");
        delete incomingFulfillments[requestId];
        int256 decodedData = abi.decode(data, (int256));
        fulfilledData[requestId] = decodedData;
    }
}
```

### Response Parameters

The callback to a requester contains two parameters, as shown in the
`airnodeCallback` function in the code sample above.

- **requestId**: First acquired when making the request and passed here as a
  reference to identify the request for which the response is intended.
- **data**: In case of a successful response, this is the requested data which
  has been encoded and contains a
  [timestamp](/reference/ois/latest/reserved-parameters.md#timestamp-encoded-to-uint256-on-chain)
  in addition to other response data. Decode it using the function `decode()`
  from the `abi` object.

## Step #4: Deploy and Sponsor the Requester

Deploy the requester to the desired blockchain and then sponsor the requester.
See
[Requesters and Sponsors](/reference/airnode/latest/developers/requesters-sponsors.md#how-to-sponsor-a-requester)
to learn more about sponsoring a requester.
-->

<FlexEndTag/>
