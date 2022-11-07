---
title: Using Authorizers (optional)
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Understanding Airnode
path: /reference/airnode/latest/understand/apply-auth.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

An Airnode can authorize smart contracts (know as requesters) access to its
endpoints using [Authorizers](../concepts/authorizers.md). This method is
on-chain and requires some blockchain knowledge by an API provider.

An [Authorizer](../concepts/authorizers.md) is a contract which typically checks
for a single condition ("has the requester made their monthly payment", "is this
`requesterAddress` whitelisted", etc.). Authorizers can be combined to enforce
more complex policies. If any of the authorizers in the list gives access, the
request will considered to be authorized. From a logical standpoint, the
authorization outcomes get *OR*ed.

::: tip Alternative: Relayed Meta Data

As an alternative to authorizers and authorizations, an API provider can use
[Relayed Meta Data](./api-security.md#relayed-meta-data-security-schemes) to
authenticate a request. This approach is off-chain and requires no blockchain
knowledge by the API provider. Note that it is possible to use authorizers,
authorizations, and relayed meta data together.

:::

When you deploy your Airnode a receipt file is generated which contains the
Airnode's `airnodeAddress`. Sponsors (via their sponsored requesters) use
`airnodeAddress` and an `endpointId` to make requests to your Airnode's
endpoints. However, you probably do not want to serve them publicly.

- Only serve your own [requester contracts](../concepts/requesters-sponsors.md).
- Only serve sponsors who have made a subscription payment.
- Only serve sponsors who have gone through KYC.

You can use different authorizer contracts for your Airnode deployment per chain
by declaring them in the `config.json` file under `chains[n].authorizers`. Add
one or more authorizer contract addresses to the
`chains[n].authorizers.{<authorizerSchemeType>}` array as shown below (e.g.
`requesterEndpointAuthorizers`). If the array is left empty then all requests
will be accepted by the Airnode but still could be filtered by the another
method of authorization,
[Relayed Meta Data Security Schemes](./api-security.md#relayed-meta-data-security-schemes).

```json
{
 ...
 "chains":[
    {                   Scheme type requesterEndpointAuthorizers lists
      "id": "1",        on-chain authorizer contract addresses
      ...               such as RequesterAuthorizerWithAirnode
      "authorizers": {  ⬇︎
        "requesterEndpointAuthorizers": [  // Requests must satisfy at least
          "0xeabb...C123",                 // one of the authorizer contracts
          "0xCE5e...1abc"
        ]
      }
    },
    {
      "id": "2",
      ...
      "authorizers": {
        "requesterEndpointAuthorizers": [] // All requests will be processed
      },
    },
    {
      "id": "3",
      ...
      "authorizers": {
        "requesterEndpointAuthorizers": [  // Requests must satisfy a
          "0xeabb...C123"                  // single authorizer contract
        ]
      }
    },
   ]
}
```

## RequesterAuthorizerWithAirnode

A common use case for an authorizer is the
[RequesterAuthorizerWithAirnode](../concepts/authorizers.md#requesterauthorizerwithairnode)
authorizer contract developed for Airnode operators to use right out-of-the-box.
It allows the whitelisting of requester contracts (with or without expiration
timestamps) on a per endpoint basis. Endpoints are declared in the
`ois.endpoints` field of the `config.json` file. This is the most common use
case and may in fact satisfy the needs of many Airnodes. You can find the
contract address of this authorizer in the
[Airnode Contract Addresses](../airnode-addresses.md) doc.

To use the RequesterAuthorizerWithAirnode authorizer contract:

1. Add an authorizer contract address to the array for
   `chains[n].authorizers.{<authorizerContractAddress>}`.
2. After your Airnode is deployed, call the Admin CLI command
   [set-whitelist-expiration](../packages/admin-cli.md#set-whitelist-expiration)
   to add the desired requester contract addresses to the whitelist maintained
   by RequesterAuthorizerWithAirnode.

Once implemented, only requester contract addresses you have added to
RequesterAuthorizerWithAirnode will have access to your Airnode.
