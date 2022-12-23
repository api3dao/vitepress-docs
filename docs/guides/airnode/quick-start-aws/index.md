---
title: Quick Start AWS
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → Airnode
path: /guides/airnode/quick-start-aws/index.html
outline: deep
tags:
deployerVersion: 0.9.2
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

<!-- Dec 23rd, 2022: wkande
GET READY FOR Airnode v0.10+
The apiKey for the HTTP gateway will be removed.
-->

The **Airnode Quick Start** guides are simple introductions that demonstrate the
deployment of an Airnode. Configuration files are provided with only minor
changes to be made.

This guide uses the latest release
([{{$frontmatter.deployerVersion}}<ExternalLinkImage/>](https://hub.docker.com/r/api3/airnode-deployer/tags))
of the Airnode
[deployer image](/reference/airnode/latest/docker/deployer-image.md) which
deploys the off-chain component of Airnode (a.k.a., the node) to AWS. It uses an
API endpoint (`GET /simple/price`) from
[CoinGecko<ExternalLinkImage/>](https://www.coingecko.com/en/api/documentation)
which returns the current value of a coin. This guide does not detail the
overall configuration of an Airnode, it is just a quick start guide then lends
itself to understanding an Airnode deployment.

## 1. Configuration Files

An Airnode deployment on AWS uses the Docker
[deployer image](/reference/airnode/latest/docker/deployer-image.md) which
requires three files as input: [config.json](#config-json),
[secrets.env](#secrets-env), and [aws.env](#aws-env).

For the purpose of this guide, these files have been created and only require a
few minor changes to make the deployment of the Airnode successful. These
changes are needed to supply AWS credentials, a chain provider url, a gateway
key, and a mnemonic.

## 2. Install Prerequisites

Install the
[Docker Desktop<ExternalLinkImage/>](https://docs.docker.com/get-docker/) and
launch it.

## 3. Project Folder

Download the <a href="/zip-files/quick-start-aws.zip" download>
quick-start-aws.zip</a> project folder. Extract it into any location.

```
quick-start-aws
├── aws.env
├── config.json
└── secrets.env
```

## 4. Prepare Configuration Files

Prepare the three configuration files. The Airnode deployer image looks for
`config.json`, `secrets.env`, and `aws.env` in the project root directory and
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

Note that `nodeSetting...disableConcurrencyReservations` has been set to `true`.
This is a precaution for new AWS accounts that have yet to address concurrency
management. For production deployments, `disableConcurrencyReservations` should
be set to `false`. See
[disableConcurrencyReservations](/reference/airnode/latest/deployment-files/config-json.md#maxconcurrency)
under the `cloudProvider` key and
[maxConcurrency](/reference/airnode/latest/deployment-files/config-json.md#maxconcurrency)
for more information.

### secrets.env

::: details secrets.env

```sh
<!--@include: ./src/secrets.env-->
```

:::

There are three values `config.json` extracts from `secrets.env` as shown below.
Add values for each.

- `CHAIN_PROVIDER_URL`: A chain provider url from a provider such as
  [Infura](https://infura.io/). Use a provider url for the Seploia test network.

  - Sign-up or login to Infura.
  - Use an existing project, or create a new project using the Web3 API network
    (click the CREATE NEW KEY button), then select the **Endpoints** tab in the
    project.
  - Copy the URL for Sepolia in the Ethereum box.

- `AIRNODE_WALLET_MNEMONIC`: Provide the seed phrase (mnemonic) to a new digital
  wallet. For the purpose of this guide it does not need any ETH in it. Use the
  Admin CLI command
  [generate-airnode-mnemonic](/reference/airnode/latest/packages/admin-cli.md#generate-airnode-mnemonic)
  to create one.

  ```sh [generate-airnode-mnemonic]
  npx @api3/airnode-admin generate-airnode-mnemonic
  ```

- `HTTP_GATEWAY_API_KEY`: Make up an apiKey to authenticate calls to the HTTP
  Gateway. The expected length is 30 - 128 characters.

### aws.env

::: details aws.env

```sh
<!--@include: ./src/aws.env-->
```

:::

Add the access credentials from your AWS account. The deployer image will use
these to install the Airnode functions to Lambda under your account's control.
If you do not have an account watch this
[video<ExternalLinkImage/>](https://www.youtube.com/watch?v=KngM5bfpttA) to
create one. Unlike `secrets.env`, you cannot surround values with double quotes
(").

- `AWS_ACCESS_KEY_ID`: Is ACCESS_KEY_ID in IAM.
- `AWS_SECRET_ACCESS_KEY`: Is SECRET_ACCESS_KEY in IAM.

## 5. Deploy

Make sure Docker is running and then execute the deployer image from the root of
the `quick-deploy-aws` folder. A `receipt.json` file will be created upon
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
  api3/airnode-deployer:latest deploy
```

```batch [Windows]
:: For Windows, use CMD (and not PowerShell).

docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:latest deploy
```

:::

Note the HTTP gateway URL in the output shown below. You will need it to test
the Airnode in the next section.

```sh [output]
✔ Deployed Airnode 0x6A6cF2d0094c73b7aBb22Cd6196824BCBB830125 tutorial-aws to aws us-east-1
ℹ Outputted config/receipt.json
  This file does not contain any sensitive information.
ℹ HTTP gateway URL: https://vfnss24505.execute-api.us-east-1.amazonaws.com/v1
```

## 6. Test the Airnode

After a successful deployment the Airnode can be tested directly using its
[HTTP Gateway](/reference/airnode/latest/understand/http-gateways.md) without
accessing the blockchain. You provide endpoint parameters to get a response from
an integrated API.

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
network that Airnode was deployed for. As an alternative to CURL try an app such
as [Insomnia<externalLinkImage/>](https://insomnia.rest/) or
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
  api3/airnode-deployer:latest remove-with-receipt
```

```batch [Windows]
:: For Windows, use CMD (and not PowerShell)

docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:latest remove-with-receipt
```

:::

## Summary

You have deployed an Airnode on AWS and tested it using the HTTP gateway that
was enabled as part of the Airnode deployment. The Airnode, upon deployment,
started contacting the AirnodeRrpV0 contract on the Sepolia test network to
gather any requests made by requesters to this Airnode. This guide did not
address making a request on-chain as its purpose was simply to quickly deploy a
functional Airnode.

Learn more about AWS resources that Airnode uses in the
[Cloud Resources](/reference/airnode/latest/cloud-resources.md) doc.
