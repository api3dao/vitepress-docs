---
title: Deploying an Airnode locally using Docker
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → Airnode → Deploying an Airnode
path: /guides/airnode/deploy-airnode/deploy-container/
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

This guide is a simple introduction that demonstrates the deployment of an
Airnode. Configuration files are provided with only minor changes to be made.
The
[latest release <ExternalLinkImage/>](https://hub.docker.com/r/api3/airnode-client/tags)
of the Airnode [client image](/reference/airnode/latest/docker/client-image.md)
will be used to deploy the off-chain component of Airnode (a.k.a., the node) to
a Docker container, in this case a locally run Docker container.

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

An Airnode Docker container deployment uses a Docker image (called
[client image](/reference/airnode/latest/docker/client-image.md)) which requires
two files as input:
[config.json](/guides/airnode/deploy-airnode/deploy-container/index.md#config-json)
and
[secrets.env](/guides/airnode/deploy-airnode/deploy-container/index.md#secrets-env).
These files have been created and only require a few minor changes on your part
to make the deployment of the demo Airnode successful. The changes are needed to
supply a chain provider url and a mnemonic.

## 1. Install Prerequisites

Install the [Docker Desktop](https://docs.docker.com/get-docker/) and launch it.

## 2. Project Folder

Download the <a href="/zip-files/quick-start-container.zip" download>
quick-start-container.zip</a> project folder. Extract it into any location.

```
quick-start-container
├── config.json
└── secrets.env
```

## 3. Prepare Configuration Files

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

There are two values `config.json` extracts from `secrets.env`. Add values for
each of the there fields.

- `CHAIN_PROVIDER_URL`: A blockchain provider url (including its API key) from a
  provider such as [Infura<ExternalLinkImage/>](https://www.infura.io/). Use a
  url for the Sepolia test network. If you need help creating one see the guide
  [Create an Infura key](/guides/misc/infura-key/).

- `AIRNODE_WALLET_MNEMONIC`: Provide the seed phrase (mnemonic) to a new digital
  wallet. The wallet does not need to be funded. Use the Admin CLI command
  [generate-airnode-mnemonic](/reference/airnode/latest/packages/admin-cli.md#generate-airnode-mnemonic)
  to create one.

  ```sh [generate-airnode-mnemonic]
  npx @api3/airnode-admin generate-airnode-mnemonic
  ```

## 4. Deploy

If your Docker Desktop application already has an image named
`api3/airnode-client:latest` remove it first. The version behind `latest` may
have changed since it was last used.

Run the following command to deploy the Airnode locally from the root of the
quick-deploy-container folder.

::: code-group

```sh [Mac/WSL2/PowerShell]
docker run \
  --volume "$(pwd):/app/config" \
  --name quick-start-container-airnode \
  --publish 3000:3000 \
  api3/airnode-client:latest
```

```batch [Windows CMD]
docker run ^
  --volume "%cd%:/app/config" ^
  --name quick-start-container-airnode ^
  --publish 3000:3000 ^
  api3/airnode-client:latest
```

```sh [Linux (host networking)]
docker run \
  --volume "$(pwd):/app/config" \
  --name quick-start-container-airnode \
  --network host \
  api3/airnode-client:latest
```

:::

Note that `--publish HOST_PORT:CONTAINER_PORT` parameter (Mac/WSL2/PowerShell)
can have different values for the `HOST_PORT` and `CONTAINER_PORT`. E.g.
parameter `--publish 8000:3000` would expose the web server on port 8000 on the
host machine.

For Linux, it's recommended to use
[host networking](https://docs.docker.com/network/host/). When using host
networking, change the port via
[gatewayServerPort](/reference/airnode/latest/deployment-files/config-json.md#cloudprovider-gatewayserverport)
property inside config.json.

In the Docker desktop application view the container
(quick-deploy-container-airnode) and its logs.

## 5. Test the Airnode

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

As an alternative to CURL try an app such as
[Insomnia<externalLinkImage/>](https://insomnia.rest/) or
[Postman<externalLinkImage/>](https://www.postman.com/product/rest-client/).
Windows users can also use
[Windows Subsystem for Linux<externalLinkImage/>](https://docs.microsoft.com/en-us/windows/wsl/install)
(WSL2) to run CURL for Linux.

In order to test an endpoint make a HTTP POST request with the `Content-Type`
header set to `application/json`, the endpoint parameters in the request body as
a key/value pairs, and the `endpointId` as a path parameter in the URL.

- `-X`: POST
- `-H`: The `Content-Type` using the value of `application/json`.
- `-d`: Use request body data to pass the endpoint parameter key/value pair.
- `url`:
  - `<httpGatewayUrl>`: The HTTP gateway URL as displayed in the terminal at the
    end of an Airnode deployment. Update the placeholder in the CURL example
    below with its value.
  - <code style="overflow-wrap:break-word;">0x6db9...c27af6</code>: Passed as a
    path parameter, the endpointId to call, see `triggers.rrp[0].endpointId` in
    the `config.json` file.

```sh
# For Windows CMD replace line termination marker \ with ^
curl -X POST \
  -d '{"parameters":{"coinIds":"api3","coinVs_currencies":"usd"}}' \
  -H 'Content-Type: application/json' \
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

## 6. Start and Stop

You can start and stop the Airnode with the Docker desktop application or via
terminal commands.

```sh
docker stop quick-start-container-airnode

docker start quick-start-container-airnode
```

## 7. Logs

You can view the Airnode's logs with the Docker desktop application or via
terminal commands.

```sh
docker logs quick-start-container-airnode

docker logs --follow quick-start-container-airnode
```

## 8. Remove the Airnode

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
network to gather any requests made by requesters to this Airnode.

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

<FlexEndTag/>
