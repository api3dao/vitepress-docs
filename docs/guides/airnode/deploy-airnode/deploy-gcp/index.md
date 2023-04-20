---
title: Deploying an Airnode on Google Cloud
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → Airnode → Deploying an Airnode
path: /guides/airnode/deploy-airnode/deploy-gcp/
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

This guide is a simple introduction that demonstrates the deployment of an
Airnode. Configuration files are provided with only minor changes to be made. If
you wish to use your own configuration files, you can generate them using
[ChainAPI<ExternalLinkImage/>](https://chainapi.com).

The latest release
([0.11<ExternalLinkImage/>](https://hub.docker.com/r/api3/airnode-deployer/tags))
of the Airnode
[deployer image](/reference/airnode/latest/docker/deployer-image.md) will be
used to deploy the off-chain component of Airnode (a.k.a., the node) to GCP.

This Airnode contains a single API operation (`GET /simple/price`) from
[CoinGecko](https://www.coingecko.com/en/api/documentation) which returns the
current value of a coin. This guide does not detail the overall configuration of
an Airnode, it is just a quick start guide then lends itself to understanding an
Airnode deployment.

Please note that this tutorial only creates an off-chain Airnode and will test
it using its off-chain
[HTTP Gateway](/reference/airnode/latest/understand/http-gateways.md). It does
not attempt to make an RRP (request-response protocol) call from a smart
contract. If you wish to make an RRP call, please see the guides
[Making an RRP Request](/guides/airnode/rrp-request.md) and
[Calling an Airnode](/guides/airnode/calling-an-airnode/).

## Configuration Files

An Airnode deployment on GCP uses the Docker
[deployer image](/reference/airnode/latest/docker/deployer-image.md) which
requires three files as input:
[config.json](/guides/airnode/deploy-airnode/deploy-gcp/index.md#config-json),
[secrets.env](/guides/airnode/deploy-airnode/deploy-gcp/index.md#secrets-env),
and gcp.json.

These files have been created and only require a few minor changes to make the
deployment of the Airnode successful. These changes are needed to supply a GCP
project ID, a chain provider url, a gateway key, and a mnemonic.

If you've used ChainAPI to integrate your Airnode, extract the zip file and use
that as the project directory.

## 1. Install Prerequisites

Install the
[Docker Desktop<ExternalLinkImage/>](https://docs.docker.com/get-docker/) and
launch it.

## 2. Project Folder

Download the <a href="/zip-files/quick-start-gcp.zip" download>
quick-start-gcp.zip</a> project folder. Extract it into any location.

If you've used ChainAPI to integrate your Airnode, extract the zip file and use
that as the project directory.

```
quick-start-gcp
├── config.json
└── secrets.env
```

## 3. GCP Project Setup & Credentials

- First
  [create a GCP project](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
  (or use an existing GCP project) where the Airnode will be deployed. Once the
  project is created, add the project ID to the
  [secrets.env](/guides/airnode/deploy-airnode/deploy-gcp/#secrets-env) file.

- Make sure you have billing enabled for your project. To do so, you will need
  to pair the project with your bank card, although no charges will be incurred
  since the resource usage fits well within the free tier limit.

- In order for Airnode to deploy successfully, you need to enable the
  [App Engine Admin API<ExternalLinkImage/>](https://console.cloud.google.com/apis/library/appengine.googleapis.com)
  specifically for the project. After enabling it, wait a few minutes before
  deploying the Airnode for this change to take effect.

- Create a new service account from the
  [IAM and admin > Service accounts<ExternalLinkImage/>](https://console.cloud.google.com/iam-admin/serviceaccounts)
  menu. Grant this account access to the project by adding the role `Owner`
  during creation.

- Once the new service account is created, click on it to bring up its
  management page. Select the KEYS tab and add a new access key of type JSON for
  this account. Download the key file and place in the root of the
  `/quick-start-gcp` project directory. Rename it `gcp.json`.

## 4. Prepare Configuration Files

Prepare the three configuration files. The Airnode deployer image looks for
`config.json`, `secrets.env`, and `gcp.json` in the project root directory and
writes `receipt.json` to the project root directory.

### config.json

::: details config.json

```json
<!--@include: ./src/config.json-->
```

:::

This file requires no changes on your part. It has been created with just one
API endpoint. It will instruct the Airnode to attach to the Sepolia test network
and contains parameters to setup the off-chain Airnode.

### secrets.env

::: details secrets.env

```sh
<!--@include: ./src/secrets.env-->
```

:::

There are four values `config.json` extracts from `secrets.env` as shown below.
Add values for each.

- `CHAIN_PROVIDER_URL`: A blockchain provider url (including its API key) from a
  provider such as [Infura<ExternalLinkImage/>](https://infura.io/). Use a url
  for the Sepolia test network. If you need help creating one see the guide
  [Create an Infura key](/guides/misc/infura-key/).

- `AIRNODE_WALLET_MNEMONIC`: Provide the seed phrase (mnemonic) to a new digital
  wallet. The wallet does not need to be funded. Use the Admin CLI command
  [generate-airnode-mnemonic](/reference/airnode/latest/packages/admin-cli.md#generate-airnode-mnemonic)
  to create one.

  ```sh [generate-airnode-mnemonic]
  npx @api3/airnode-admin generate-airnode-mnemonic
  ```

- `PROJECT_ID`: Project ID of your GCP project. During
  [step #4](/guides/airnode/deploy-airnode/deploy-gcp/#_3-gcp-project-setup-credentials)
  above you should have added the project ID to the `secrets.env` file.

- `HTTP_GATEWAY_API_KEY`: Make up an apiKey to authenticate calls to the HTTP
  Gateway. The expected length is 30 - 128 characters.

### gcp.json

During
[step #4](/guides/airnode/deploy-airnode/deploy-gcp/#_3-gcp-project-setup-credentials)
above, the `gcp.json` file should have been placed into the `/quick-start-gcp`
project folder.

## 5. Deploy

Make sure Docker is running and then execute the deployer image from the root of
the `quick-start-gcp` folder. A `receipt.json` file will be created upon
completion. It contains some deployment information and is used to remove the
Airnode.

<!-- Use of .html below is intended. -->
<WarningSimultaneousDeployments removeLink="/reference/airnode/latest/docker/deployer-image.html#manual-removal"/>

Run the following command to deploy the Airnode. Normally (for Linux/Mac/WSL2)
the deployer image `deploy` command is run by the user root. This may cause
permission issues when the `receipt.json` file is generated. Optionally you can
specify the
<a href="https://en.wikipedia.org/wiki/User_identifier" target="_blank">UID
(user identifier)<externalLinkImage/></a> and <a
href="https://en.wikipedia.org/wiki/Group_identifier" target="\_blank"> GID
(group identifier)<externalLinkImage/></a> that the deployer image should use.
Do so by setting the environment variables USER_ID and GROUP_ID, otherwise omit
the line containing these variables.

::: code-group

```sh [Linux/Mac/WSL2]
docker run -it --rm \
  -e USER_ID=$(id -u) -e GROUP_ID=$(id -g) \
  -v "$(pwd):/app/config" \
  api3/airnode-deployer:0.11 deploy
```

```batch [Windows]
:: For Windows, use CMD (and not PowerShell).

docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:0.11 deploy
```

:::

Note the HTTP gateway URL in the output shown below. You will need it to test
the Airnode in the next section.

```sh [output]
✔ Deployed Airnode 0x6A6cF2d0094c73b7aBb22Cd6196824BCBB830125 tutorial-gcp to gcp us-east1
ℹ Outputted config/receipt.json
  This file does not contain any sensitive information.
ℹ HTTP gateway URL: https://airnode-6a6cf2d-tutorial-gcp-httpgw-4fhnl4fi.ue.gateway.dev
```

## 6. Test the Airnode

After a successful deployment the Airnode can be tested directly using its
off-chain [HTTP Gateway](/reference/airnode/latest/understand/http-gateways.md)
without accessing the blockchain. You provide endpoint parameters to get a
response from an integrated API.

### HTTP Gateway

Looking at the `config.json` code snippet below shows the HTTP gateway was
activated for the Airnode. Furthermore the endpoint for `/simple/price` (with an
`endpointId` of `0x6...af6`) has been added to `triggers.http[n]`. Only those
endpoints added to the `http` array can be tested.

::: details Expand to view: HTTP gateway and endpoint ID

```json
"nodeSettings": {
  ...
  "httpGateway": {
    "enabled": true, // The gateway is activated for this Airnode
    "apiKey": "${HTTP_GATEWAY_API_KEY}",
    "maxConcurrency": 20,
    "corsOrigins": []
  },
  ...
},
"triggers": {
  "rrp": [
    {
      "endpointId": "0x6db9e3e3d073ad12b66d28dd85bcf49f58577270b1cc2d48a43c7025f5c27af6",
      "oisTitle": "CoinGecko Basic Request",
      "endpointName": "coinMarketData",
      "cacheResponses": false
    }
  ],
  "http": [
    {
      "endpointId": "0x6db9e3e3d073ad12b66d28dd85bcf49f58577270b1cc2d48a43c7025f5c27af6",
      "oisTitle": "CoinGecko Basic Request",
      "endpointName": "coinMarketData",
    }
  ],
  ...
}
```

:::

### Execute Endpoint

Use CURL to execute the HTTP gateway configured for the Airnode and get the
results from the CoinGecko endpoint `/simple/price` bypassing the Sepolia test
network that Airnode was deployed for.

:::info Custom ChainAPI configuration

If you are using your own ChainAPI configuration, use the HTTP Gateway according
to your OIS.

:::

As an alternative to CURL try an app such as
[Insomnia<externalLinkImage/>](https://insomnia.rest/) or
[Postman<externalLinkImage/>](https://www.postman.com/product/rest-client/).
Windows users can also use
[Windows Subsystem for Linux<externalLinkImage/>](https://docs.microsoft.com/en-us/windows/wsl/install)
(WSL2) to run CURL for Linux.

In order to test an endpoint make a HTTP POST request with the `endpointId` as a
path parameter, the `Content-Type` header set to `application/json`, the
`x-api-key` header set to the `HTTP_GATEWAY_API_KEY`, and place the endpoint
parameter in the request body as a key/value pair.

- `-X`: POST
- `-H`: The `Content-Type` using the value of `application/json`.
- `-H`: The `x-api-key` using the value of the `HTTP_GATEWAY_API_KEY` from
  `secrets.env`. Update the placeholder in the CURL example below with its
  value.
- `-d`: Use request body data to pass the endpoint parameter key/value pair.
- `url`:
  - `<httpGatewayUrl>`: The base URL to the gateway including the secret `UUID`
    path parameter, displayed in the terminal at the end of an Airnode
    deployment. Update the placeholder in the CURL example below with its value.
  - <code style="overflow-wrap:break-word;">0x6db9...c27af6</code>: Passed as a
    path parameter, the endpointId to call, see `triggers.rrp[0].endpointId` in
    the `config.json` file.

#### Request

::: code-group

```sh [Linux/Mac/WSL2]
curl -v \
-X POST \
-H 'Content-Type: application/json' \
-H 'x-api-key: <HTTP_GATEWAY_API_KEY-from-secrets.env>' \
-d '{"parameters": {"coinIds": "api3", "coinVs_currencies": "usd"}}' \
'<httpGatewayUrl>/0x6db9e3e3d073ad12b66d28dd85bcf49f58577270b1cc2d48a43c7025f5c27af6'
```

```batch [Windows]
curl -v ^
-X POST ^
-H "Content-Type: application/json" ^
-H "x-api-key: <apiKey-from-secrets.env>" ^
-d "{\"parameters\": {\"coinIds\": \"api3\", \"coinVs_currencies\": \"usd\"}}" ^
"<httpGatewayUrl>/0x6db9e3e3d073ad12b66d28dd85bcf49f58577270b1cc2d48a43c7025f5c27af6"
```

:::

<br/>

#### Response

```json
{
  "rawValue": { "api3": { "usd": 1.18 } },
  "encodedValue": "0x0000000000000000000000000000000000000000000000000000000000120160",
  "values": ["1180000"]
}
```

<TutorialResponse/>

## 7. Remove the Airnode

When you are done with this guide you can remove the deployed Airnode. The
following command uses the `receipt.json` file that was created when the Airnode
was deployed.

::: code-group

```sh [Linux/Mac/WSL2]
docker run -it --rm \
  -v "$(pwd):/app/config" \
  api3/airnode-deployer:0.11 remove-with-receipt
```

```batch [Windows]
:: For Windows, use CMD (and not PowerShell)

docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:0.11 remove-with-receipt
```

:::

::: danger Post Removal

After removing an Airnode it may be necessary to wait several minutes before
deploying or redeploying Airnode again to the same GCP project. GCP takes
several minutes to complete its behind the scenes clean-up of configured
resources.

:::

## Summary

You have deployed an Airnode on GCP and tested it using the HTTP gateway that
was enabled as part of the Airnode deployment. The Airnode, upon deployment,
started contacting the `AirnodeRrpV0` contract on the Sepolia test network to
gather any requests made by requesters to this Airnode. This guide did not
address making a request on-chain as its purpose was simply to quickly deploy a
functional Airnode.

Finally the API integration was tested using the Airnode's off-chain
[HTTP gateway](/reference/airnode/latest/understand/http-gateways.md). You made
a CURL request (using HTTP) to the HTTP gateway. Airnode queried the API
provider and sent back a response. All of this was performed without accessing
the blockchain.

This guide did not address making an on-chain request as its purpose was to
quickly deploy a functional Airnode. See the guides
[Making an RRP Request](/guides/airnode/rrp-request.md) and
[Calling an Airnode](/guides/airnode/calling-an-airnode/) to learn how your
smart contract can make an RRP call to an Airnode.

Learn more about GCP resources that Airnode uses in the
[Cloud Resources](/reference/airnode/latest/cloud-resources.md) doc.

<FlexEndTag/>
