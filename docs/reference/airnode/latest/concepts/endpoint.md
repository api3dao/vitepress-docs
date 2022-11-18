---
title: Endpoint
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Concepts and Definitions
path: /reference/airnode/latest/concepts/endpoint.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Airnode serves an API to a blockchain according to
[Oracle Integration Specifications (OIS)](/reference/ois/latest/). An API is
composed of [operations](/reference/ois/latest/ois.md#_5-2-operation), which
represent individual functionalities that an API offers. OIS maps each API
operation to an [endpoint](/reference/ois/latest/ois.md#_5-endpoints), which can
be thought of as an Airnode operation. The endpoints that an Airnode will serve
over the request–response protocol are listed under
[triggers](../deployment-files/config-json.md#triggers) of
[config.json](../deployment-files/config-json.md).

## `endpointId`

`endpointId` identifies specific endpoints that an Airnode serves, and is
computed in JS (using ethers.js) as follows:

```js
ethers.utils.keccak256(
  ethers.utils.defaultAbiCoder.encode(
    ['string', 'string'],
    [oisTitle, endpointName]
  )
);
```

An alternative method to create an `endpointId` is to use the
[Admin CLI](../packages/admin-cli.md) to derive the endpoint ID.

Note that this means that an `endpointId` is not unique, and two Airnodes can
serve equivalent endpoints using the same ID (in fact, this is the desired
outcome).This is not an issue, as requests are made with a `airnode` (Airnode's
`address`) and `endpointId` pair.

This convention of determining an `endpointId` is not enforced at the
protocol-level. For example, one could choose to generate an `endpointId`
randomly, and as long as requesters use the correct `endpointId`, this will not
be an issue.

## Authorizers

Airnodes can assign a list of authorizers to their endpoints. See the section
[Authorizer](authorizers.md) for more information.
