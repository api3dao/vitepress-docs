---
title: Overview
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → dAPP Developers
path: /reference/airnode/latest/developers/index.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Airnode is a first-party oracle that can push off-chain API data to an on-chain
contract. While dAPP developers will find dAPIs popular there is the option for
them to access Airnode data using its request-response protocol. In the diagram
below, a contract is called a requester. It makes a request to the on-chain RRP
protocol contract (AirnodeRrpV0.sol) that adds the request to the event logs.
The off-chain Airnode then accesses the event logs, gets the API data and
performs a callback to the requester.

In summary, you need to do two things.

- Call `makeFullRequest()` or `makeTemplateRequest()` on the AirnodeRrpV0.sol
  contract, which returns a [`requestId`](../concepts/request.md#requestid).
- Add a `myFulfill()` function (call it what you like) to your requester (your
  contract) where the off-chain Airnode can send the requested data when ready.
  The data includes the same `requestId` as the one returned at the time of
  making the request.

> <img src="../assets/images/developer-overview.png" width="650px"/>
>
> 1.  <p>The requester (myContract.sol) makes a request to the RRP protocol contract (AirnodeRrpV0.sol) by calling <code>makeFullRequest()</code> which adds the request to the event logs and returns a <code>requestId</code> to the requester.</p>
> 2.  <p>Airnode retrieves the on-chain request from the event logs.</p>
> 3.  <p>Airnode gathers response data from the API specified in the request.</p>
> 4.  <p>Airnode performs a callback to a named function <code>myFulfill()</code> in myContract.sol via the AirnodeRrpV0.sol function <code>fulfill()</code> with the requested data and the <code>requestId</code>.</p>

For a more detailed diagram see the first image in the
[Calling an Airnode](./call-an-airnode.md) doc.
