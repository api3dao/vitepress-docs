---
title: Using RRP Templates
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → Airnode
path: /guides/airnode/using-rrp-templates.html
outline: deep
tags:
  - airnode
  - rrp
  - templates
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

This guide steps through the process of making a template request of an Airnode
using RRP (request-response protocol) to get data from an API provider. This
approach allows a smart contract to store the parameters for an RRP call in a
template. This is advantageous when a call to an Airnode will be made using the
same parameters each time.

::: warning Consider dAPIs

While using the Airnode's RRP protocol to acquire API provider data is usable it
is not as efficient or as straight forward as using a dAPI. Therefore, best
practices usually entail using a [dAPI](/explore/dapis/what-are-dapis.md) to
acquire API provider data.

:::

## Why use templates?

A request to an Airnode can have many parameters. It is very common for
requester contracts to make repeated requests using the exact same parameters.
In such instances, it is wasteful to pass all of these parameters repeatedly.
Templates are used to hold a set of parameter values on-chain that can be used
repeatedly when calling the`makeTemplateRequest()`function in
[AirnodeRrpV0.sol<ExternalLinkImage/>](https://github.com/api3dao/airnode/blob/v0.9/packages/airnode-protocol/contracts/rrp/AirnodeRrpV0.sol).
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

When a template is used to make a request, the parameters encoded in
`templateId` and in `parameters` will be used by the Airnode. In case
`templateId` and `parameters` include a parameter with the same name, the one
provided in `parameters` will be used.

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
requester (smart contract) to use. Each template is identified by a`templateId`,
which is the hash of its contents.

<!--When you create a template record on-chain,
[see 2. Upload Template](#2-upload-template), a templateId will be
returned.-->

## 1. Create a template

First create a file that contains a JSON object, see the example below.

```
{
  "airnode": "0x2ab9f26E18B64848cd349582ca3B55c2d06f507d",
  "endpointId": "0x2605589dfc93c8f9c35eecdfe1e666c2193df30a8b13e1e0dd72941f59f9064c",
  "parameters": [
    {
      "name": "name1",
      "value": "someString",
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

- `airnode`: You will need the address of the `AirnodeRrpV0.sol` contract on a
  desired network. See
  [Airnode Contract Addresses](/reference/airnode/latest/airnode-addresses.md)
  for a listings of several networks. The example above uses an address on
  Sepolia.

- `endpointId`: Declared inside an Airnode's configuration file which is created
  by the API provider that owns the Airnode. You may need to contact the API
  provider if they do not publish their `endpointIds`.

- `parameters`: The parameters that the Airnode endpoint needs. All parameters
  needed by the endpoint do not need to be included as they could also be passed
  to the `makeTemplateRequest()` function of Airnode along with the
  `templateId`.

Below are links that further discuss request parameters if you additional help.

- [Request](/reference/airnode/latest/concepts/request.md)
- [Making an RRP Request](rrp-request.md#request-parameters)

## 2. Upload the template

Use the
[create-template<ExternalLinkImage/>](https://github.com/api3dao/airnode/tree/v0.9/packages/airnode-admin#create-template)
command in the @api3/airnode-admin package to move your template on-chain. The
command`create-template`reads a file, uses its contents to create a template and
returns a`templateId`. To create a new template record on-chain you will need
the following.

- A providerURL from your blockchain provider.
- A mnemonic for gas to fund the record creation.
- The local path to a template file.

::: tip mnemonic

This wallet pays the transaction gas costs to write the template record
on-chain. This is not the wallet(s) that will pay gas costs to actually execute
any Airnode, for that the Airnode themselves will create sponsor wallets on
behalf of your sponsor record.

:::

```sh
npx @api3/airnode-admin create-template \
  --providerUrl https://sepolia.infura.io/v3/<KEY> \
  --mnemonic "<MNEMONIC>" \
  --templateFilePath ./template.json
```

The above command will return a `templateId`. This is the ID used when calling
the Airnode function `makeTemplateRequest()`.

```sh
Template ID: 0x006154fb94631d2bd66f36565824a6ed0f4c979eb26173ef9e4aad15dd03e6df
```

When creating more than one template using the same parameter values for an
Airnode/endpointId pair, the same `templateId`will be returned for each. Only
one template is created when the parameters are the same.

## 3. Retrieving the template

You can retrieve the template from the chain using the Admin CLI command
[get-template](/reference/airnode/latest/packages/admin-cli.html#get-template)
using the `templateId`. Note that the parameters are ABI encoded.

```sh
npx @api3/airnode-admin get-template \
  --providerUrl https://sepolia.infura.io/v3/<KEY> \
  --template-id <TEMPLATE-ID>

# Returns
{
  "airnode":"0x2ab9f26E18B64848cd349582ca3B55c2d06f507d",
  "endpointId":"0x2605589dfc93c8f9c35eecdfe1e666c2193df30a8b13e1e0dd72941f59f9064c",
  "parameters":"0x31537500000000000000000000000000000000000000000000000000000000006e616d653100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a06e616d653200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000000000000000000000000000000000000000000a736f6d65537472696e6700000000000000000000000000000000000000000000"
}
```

## More related material...

<div class="api3-css-nav-box-flex-row">
    <NavBox  type='REPO' id="_airnode-coingecko-template"/>
</div>
