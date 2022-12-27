---
title: Quick Start Docker Container
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → Airnode
path: /guides/airnode/quick-start-container/index.html
outline: deep
tags:
  - airnode
  - gcp
  - docker
  - container
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

The **Airnode Quick Start** guides are simple introductions that demonstrate the
deployment of an Airnode. Configuration files are provided with only minor
changes to be made.

This guide uses the latest release
([0.9.2<ExternalLinkImage/>](https://hub.docker.com/r/api3/airnode-deployer/tags))
of the Airnode [client image](/reference/airnode/latest/docker/client-image.md)
which deploys the off-chain component of Airnode (a.k.a., the node) to a Docker
container, in this case a locally run Docker container. It uses an API endpoint
(`GET /simple/price`) from
[CoinGecko](https://www.coingecko.com/en/api/documentation) which returns the
current value of a coin. This guide does not detail the overall configuration of
an Airnode, it is just a quick start.

## 1. Configuration Files

An Airnode Docker container deployment uses a Docker image (called
[client image](/reference/airnode/latest/docker/client-image.md)) which requires
two files as input: [config.json](./#config-json) and
[secrets.env](./#secrets-env).

These files have been created and only require a few minor changes on your part
to make the deployment of the demo Airnode successful. These changes are needed
to supply a chain provider url and a mnemonic.

## 2. Install Prerequisites

Install the [Docker Desktop](https://docs.docker.com/get-docker/) and launch it.

## 3. Project Folder

Download the <a href="/zip-files/quick-start-container.zip" download>
quick-start-container.zip</a> project folder. Extract it into any location.

```
quick-start-container
├── config.json
└── secrets.env
```

## 4. Prepare Configuration Files

Prepare the two configuration files `config.json` and `secrets.env`. By default,
the Airnode client image looks for them in the project root directory.

### config.json

::: details config.json

```json
<!--@include: ./src/config.json-->
```

:::

This file requires no changes on your part. It has been created with just one
API endpoint. It will instruct the Airnode to attach to the Sepolia test
network. There are a few variables this file will extract (interpolate) from
`secrets.env`.

### secrets.env

::: details secrets.env

```sh
<!--@include: ./src/secrets.env-->
```

:::

There are three values `config.json` extracts from `secrets.env`. Add values for
each of the there fields.

- `CHAIN_PROVIDER_URL`: A chain provider url from a provider such as
  [Infura](https://infura.io/). Use a provider url for the Seploia test network.

  - Sign-up or login to Infura.
  - Use an existing project, or create a new project using the Web3 API network
    (click the CREATE NEW KEY button), then select the **Endpoints** tab in the
    project.
  - Copy the URL for Sepolia in the Ethereum box.

- `AIRNODE_WALLET_MNEMONIC`: Provide the seed phrase (mnemonic) to a new digital
  wallet. The wallet does not need to be funded. Use the Admin CLI command
  [generate-airnode-mnemonic](/reference/airnode/latest/packages/admin-cli.md#generate-airnode-mnemonic)
  to create one.

  ```sh [generate-airnode-mnemonic]
  npx @api3/airnode-admin generate-airnode-mnemonic
  ```

- `HTTP_GATEWAY_API_KEY`: Make up an apiKey to authenticate calls to the HTTP
  Gateway. The expected length is 30 - 128 characters.

## Deploy

Make sure Docker is running and then run the Airnode client container from the
root of the `quick-start-container` folder.

Note that `--publish HOST_PORT:CONTAINER_PORT` parameter can have different
values for the `HOST_PORT` and `CONTAINER_PORT`. E.g. parameter
`--publish 8000:3000` would expose the web server on port 8000 on the host
machine. When using [host networking](https://docs.docker.com/network/host/)
(recommended for Linux) change the port via the
[gatewayServerPort](/reference/airnode/latest/deployment-files/config-json.md#cloudprovider-gatewayserverport)
property inside config.json.

Run the following command to deploy the Airnode locally.

::: code-group

```sh [Mac/WSL2/PowerShell]
docker run --detach \
  --volume "$(pwd):/app/config" \
  --name quick-start-container-airnode \
  --publish 3000:3000 \
  api3/airnode-client:0.9.2
```

```sh [Linux (host networking)]
docker run --detach \
  --volume "$(pwd):/app/config" \
  --name quick-start-container-airnode \
  --network host \
  api3/airnode-client:0.9.2
```

```batch [Windows CMD]
docker run --detach ^
  --volume "%cd%:/app/config" ^
  --name quick-start-container-airnode ^
  --publish 3000:3000 ^
  api3/airnode-client:0.9.2
```

:::

## Test the Airnode

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
- `url`: The base URL (`http://localhost:3000/http-data`) to the gateway
  appended with the path parameter which is the `endpointId`
  (`0x6db9...c27af6`).

```sh
# For Windows CMD replace line termination marker \ with ^
curl -X POST \
  -d '{"parameters":{"coinIds":"api3","coinVs_currencies":"usd"}}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: <HTTP_GATEWAY_API_KEY>' \
  'http://localhost:3000/http-data/0x6db9e3e3d073ad12b66d28dd85bcf49f58577270b1cc2d48a43c7025f5c27af6'
```

### Response

```json
{
  "rawValue": { "api3": { "usd": 1.18 } },
  "encodedValue": "0x0000000000000000000000000000000000000000000000000000000000120160",
  "values": ["1180000"]
}
```

<TutorialResponse/>

## Start and Stop

You can start and stop the Airnode with the Docker desktop application or via
terminal commands.

```sh
docker stop quick-start-container-airnode

docker start quick-start-container-airnode
```

## Logs

You can view the Airnode's logs with the Docker desktop application or via
terminal commands.

```sh
docker logs quick-start-container-airnode

docker logs --follow quick-start-container-airnode
```

## Remove the Airnode

When you are done with the demo Airnode you can remove it. Do so using the
Docker desktop application or by using the following terminal command. When
using the terminal command be sure to stop the container first if running.

```sh
# Stop the container if it is running.
docker stop quick-start-container-airnode

docker rm quick-start-container-airnode
```

## Summary

You have deployed an Airnode into a Docker container and tested it using the
HTTP gateway that was enabled as part of the Airnode deployment. The Airnode,
upon deployment, started contacting the `AirnodeRrpV0` contract on a local test
network to gather any requests made by requesters to this Airnode. This guide
did not address making a request on-chain as its purpose was simply to quickly
deploy a functional Airnode.

Finally the API integration was tested using the
[HTTP gateway](/reference/airnode/latest/understand/http-gateways.md#http-gateway).
You made a CURL request (using HTTP) to the HTTP gateway. Airnode queried the
API provider and sent back a response. All of this was performed without
accessing the blockchain.
