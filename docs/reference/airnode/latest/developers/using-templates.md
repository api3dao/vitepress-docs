---
title: Using Templates
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.11 → dApp Developers
path: /reference/airnode/latest/developers/using-templates.html
version: v0.11
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

<!-- TODO: 2021-11-02 wkande: Should this doc speak to creating a templateId? See the code
example ./code/create-template-id.js which may not be used anywhere in
these docs at this time. -->

A request to an Airnode can have many parameters. It is very common for
requester contracts (e.g., a data feed) to make repeated requests with the exact
same parameters. In such instances, it is wasteful to pass all of these
parameters repeatedly. Templates are used to hold a set of parameter values
on-chain that can be used repeatedly when calling
the`makeTemplateRequest()`function in
[AirnodeRrpV0.sol](https://github.com/api3dao/airnode/blob/v0.8/packages/airnode-protocol/contracts/rrp/AirnodeRrpV0.sol).
Unlike`makeFullRequest(), makeTemplateRequest()`requires that a requester
pass`templateId`which identifies a template.

```solidity
function makeTemplateRequest(
    bytes32 templateId,
    address sponsor,
    address sponsorWallet,
    address fulfillAddress,
    bytes4 fulfillFunctionId,
    bytes calldata parameters
) external override returns (bytes32 requestId) {
```

When a template is used to make a request, both the parameters encoded in
parameters of the template and parameters provided at request-time (if any) will
be used by the Airnode. In case the two include a parameter with the same name,
the one provided at request-time will be used.

The structure of a template, as shown below, is simple.

- address of the desired Airnode
- endpointId from the Airnode
- endpoint parameters

```solidity
struct Template {
  address airnode;
  bytes32 endpointId;
  bytes parameters;
}
```

There are just a few steps to create and place a template on-chain for a
requester contract to use. Each template is identified by a`templateId`, which
is the hash of its contents. When you create a template record on-chain,
[see Part #2: Upload Template](/reference/airnode/latest/developers/using-templates.md#part-2-upload-template),
a templateId will be returned.

## Part #1: Build a Template

First create a file that contains a template object. Below is an example. You
will need the address of the Airnode and its endpointId to be called. Below are
links that discuss request parameters if you need help.

- [Reference > Request-Response Protocol > Request](/reference/airnode/latest/concepts/request.md)
- [Calling an Airnode](/reference/airnode/latest/developers/call-an-airnode.md#request-parameters)

```
{
  "airnode": "0x15e7097beac1fd23c0d1e3f5a882a6f99ecbcf2e0c1011d1bd43707c6c0ec717",
  "endpointId": "0x2605589dfc93c8f9c35eecdfe1e666c2193df30a8b13e1e0dd72941f59f9064c",
  "parameters": [
    {
      "name": "name1",
      "value": "value1",
      "type": "string"
    },
    {
      "name": "name2",
      "value": "1000",
      "type": "uint256"
    }
  ]
}
```

If you create more than one template using the same parameter values for an
Airnode/endpointID the same`templateId`will be returned for each. Only one
template is created when the parameters are the same.

## Part #2: Upload Template

Use the
[create-template](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-admin#create-template)
command in the @api3/airnode-admin package to move your template on-chain. The
command`create-template`reads a file, uses its contents to create a template and
returns a`templateId`. To create a new template record you will need the
following.

- A providerURL from your blockchain provider.
- A mnemonic for gas to fund the record creation.
- The path to a template file.

::: tip mnemonic

This wallet pays the transaction gas costs to write the template record. This is
not the wallet(s) that will pay gas costs to actually execute any Airnode, for
that the Airnode themselves will create sponsor wallets on behalf of your
sponsor record.

:::

```bash
npx @api3/airnode-admin create-template \
  --providerUrl https://sepolia.infura.io/v3/<KEY> \
  --mnemonic "nature about salad..." \
  --templateFilePath ./template.json
```

## More related material...

The
[coingecko-template](https://github.com/api3dao/airnode/tree/v0.9/packages/airnode-examples/integrations/coingecko-template)
monorepo example demonstrates template requests.

<FlexEndTag/>
