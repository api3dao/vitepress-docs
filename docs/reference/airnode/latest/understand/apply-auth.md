---
title: Using Authorizers (optional)
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.11 → Understanding Airnode
path: /reference/airnode/latest/understand/apply-auth.html
version: v0.11
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

An Airnode can authorize smart contracts (know as requesters) access to its
endpoints using
[Authorizers](/reference/airnode/latest/concepts/authorizers.md). This method is
on-chain and requires some blockchain knowledge by an API provider.

## What is an authorizer?

An [Authorizer](/reference/airnode/latest/concepts/authorizers.md) is a contract
which typically checks for a single condition ("has the requester made their
monthly payment", "is this `requesterAddress` whitelisted", etc.). Authorizers
can be combined to enforce more complex policies. If any of the authorizers in
the list gives access, the request will considered to be authorized. From a
logical standpoint, the authorization outcomes get *OR*ed.

::: info Alternative: Relayed Meta Data

As an alternative to authorizers and authorizations, an API provider can use
[Relayed Meta Data](/reference/airnode/latest/understand/api-security.md#relayed-meta-data-security-schemes)
to authenticate a request. This approach is off-chain and requires no blockchain
knowledge by the API provider. Note that it is possible to use authorizers,
authorizations, and relayed meta data together.

:::

## How to implement authorizers.

When you deploy your Airnode a receipt file is generated which contains the
Airnode's `airnodeAddress`. Sponsors (via their sponsored requesters) use
`airnodeAddress` and an `endpointId` to make requests to your Airnode's
endpoints. However, rather than serve them publicly, you may want to:

- Only serve your own
  [requester contracts](/reference/airnode/latest/concepts/requesters-sponsors.md).
- Only serve sponsors who have made a subscription payment.
- Only serve sponsors who have gone through KYC.

You can use different authorizer contracts for an Airnode deployment per chain
by declaring them in the `config.json` file under `chains[n].authorizers`. Add
one or more authorizer contract addresses to the
`chains[n].authorizers.requesterEndpointAuthorizers` array or add one or more
cross-chain authorizer objects to the
`chains[n].authorizers.crossChainRequesterAuthorizers` array as shown below. If
the `requesterEndpointAuthorizers` array is left empty then all requests will be
accepted by the Airnode but still could be filtered by using
[Relayed Meta Data Security Schemes](/reference/airnode/latest/understand/api-security.md#relayed-meta-data-security-schemes).

```json
{                       // The scheme type
 ...                    // authorizers.requesterEndpointAuthorizers
 "chains":[             // lists on-chain authorizer contract addresses
    {                   // such as the pre-built
      "id": "1",        // RequesterAuthorizerWithAirnode contract
      ...               // or custom authorizer contracts.
      "authorizers": {
        "requesterEndpointAuthorizers": [  // Requests must satisfy at least
          "0xeabb...C123",                 // one of the authorizer contracts
          "0xCE5e...1abc"
        ],
        "crossChainRequesterAuthorizers": []
      }
    },
    {
      "id": "2",
      ...
      "authorizers": {
        "requesterEndpointAuthorizers": [], // All requests will be processed
        "crossChainRequesterAuthorizers": []
      },
    },
    {
      "id": "3",
      ...
      "authorizers": {
        "requesterEndpointAuthorizers": [  // Requests must satisfy a
          "0xeabb...C123"                  // single authorizer contract
        ],
        "crossChainRequesterAuthorizers": []
      }
    },
    {
      "id": "4",
      ...
      "authorizers": {
        "requesterEndpointAuthorizers": [  // Requests must satisfy a
          "0xeabb...C123"                  // single authorizer contract
        ],                                 // OR an authorizer contract deployed
                                           // on a different chain (Ethereum mainnet)
        "crossChainRequesterAuthorizers": [
          {
            "requesterEndpointAuthorizers": ["0xCE5e...1abc"],
            "chainType": "evm",
            "chainId": "1",
            "contracts": {
              "AirnodeRrp": "0xa0AD...a1Bd"
            },
            "chainProvider": {
              "url": "https://mainnet.infura.io/..."
            }
          }
        ]
      }
    },
   ]
}
```

## Using `RequesterAuthorizerWithAirnode`

A common use case for an authorizer is the
[RequesterAuthorizerWithAirnode](/reference/airnode/latest/concepts/authorizers.md#requesterauthorizerwithairnode)
authorizer contract developed for Airnode operators to use right out-of-the-box.
It allows the whitelisting of requester contracts (with or without expiration
timestamps) on a per endpoint basis. Endpoints are declared in the
`ois.endpoints` field of the `config.json` file. This is the most common use
case and can be implemented with the following steps:

1. Add the RequesterAuthorizerWithAirnode
   [authorizer contract address](/reference/airnode/latest/#requesterauthorizerwithairnode)
   to the array `chains[n].authorizers.requesterEndpointAuthorizers`.
2. After your Airnode is deployed, call the Admin CLI command
   [set-whitelist-expiration](/reference/airnode/latest/packages/admin-cli.md#set-whitelist-expiration)
   to add the desired requester contract addresses to the whitelist maintained
   by RequesterAuthorizerWithAirnode.

Once implemented, only requester contract addresses you have added to
RequesterAuthorizerWithAirnode will have access to your Airnode.
