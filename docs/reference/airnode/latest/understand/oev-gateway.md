---
title: OEV Gateway (optional)
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.11 → Understanding Airnode
path: /reference/airnode/latest/understand/oev-gateway.html
version: v0.11
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

OEV gateway is used in the OEV flow to sign the data won in the auction. The
data is signed by the Airnode so that only the searcher who won the auction can
use it to update the data feed.

## Setup

Enable the gateway in the `config.json` file via `nodeSettings.oevGateway`
section.

- **enabled**: A boolean to enable/disable for the gateway.
- **maxConcurrency**: (optional) A number higher than zero that represents the
  maximum number of serverless functions serving gateway requests. When omitted,
  there is no maximum concurrency set. This field is ignored for Airnode client
  gateways.
- **corsOrigins**: A list of allowed origins, `['*']` to allow all origins or an
  empty array to disable CORS.

```json
"nodeSettings": {
  "cloudProvider": {
    "type": "aws",
    "region": "us-east-1"
  },
  "airnodeWalletMnemonic": "${AIRNODE_WALLET_MNEMONIC}",
  "heartbeat": {...},
  "oevGateway": {
    "enabled": true,
    "maxConcurrency": 20,
    "corsOrigins": []
  },
  ...
},
```

## Gateway URL

The gateway implementation is different depending on how Airnode is deployed.
When deployed on a cloud provider, the serverless gateway is used. Inside
Airnode client, the gateway is implemented via a simple web server inside the
docker container. There are subtle differences in both how the gateways work and
what the gateway URLs look like.

The deployer generates a secret `UUID` path parameter which ensures that the
endpoints are not openly accessible. Therefore, the gateway URL should be kept
secret.

The gateway URL is also available as part of the payload sent from Airnode's
[heartbeat](/reference/airnode/latest/understand/heartbeat.md) to your specified
heartbeat URL.

### When deployed on a cloud provider

A gateway URL is generated when Airnode is deployed. You can see the URLs
including the secret `UUID` path parameter, displayed on your terminal at the
end of an Airnode deployment using a
[Docker image](/reference/airnode/latest/docker/).

### When using Airnode client

Airnode client can be used to run Airnode as a docker container locally. There
is a common web server for the gateway, which is exposed on the host machine.
Doing so will make the gateway API accessible like a regular web server running
on the machine. Note the `PORT` which is exposed as part of the Airnode client
container. See the
[Airnode client usage](/reference/airnode/latest/docker/client-image.md#usage)
for more details.

- `http://localhost:<PORT>/sign-oev/01234567-abcd-abcd-abcd-012345678abc` -
  Gateway URL for the OEV Gateway

## Usage

In order to execute the processing on the gateway, it needs to receive a
properly constructed HTTP request:

- It must be a `POST` request
- It must contain a `Content-Type` header, set to `application/json`.
- It must contain the following JSON body:

```json
{
  "chainId": <CHAIN_ID>,
  "dapiServerAddress": <DAPI_SERVER_ADDRESS>,
  "oevProxyAddress": <OEV_PROXY_ADDRESS>,
  "updateId": <UPDATE_ID>,
  "bidderAddress": <BIDDER_ADDRESS>,
  "bidAmount": <BID_AMOUNT>,
  "signedData": [
    {
      "airnodeAddress": <AIRNODE_ADDRESS>,
      "endpointId": <EDNPOINT_ID>,
      "encodedParameters": <ENCODED_PARAMETERS>,
      "timestamp": <TIMESTAMP>,
      "encodedValue": <ENCODED_VALUE>,
      "signature": <SIGNATURE>
    },
    {
      "airnodeAddress": <AIRNODE_ADDRESS>,
      "endpointId": <EDNPOINT_ID>,
      "encodedParameters": <ENCODED_PARAMETERS>
    },
    ...
  ]
}
```

where:

- `chainId` - ID of the blockchain where the auction was held.
- `dapiServerAddress` - Blockchain address of the dAPI server contract.
- `oevProxyAddress` - Blockchain address of the proxy data feed contract.
- `updateId` - Auction update ID.
- `bidderAddress` - Blockchain address of the winning searcher.
- `bidAmount` - Bid amount that won the auction.
- `signedData` - A list of beacon data to be signed. It can contain two types:
  full beacon data, only beacon metadata
  - `airnodeAddress` - Airnode address identifying a beacon
  - `endpointId` - Endpoint ID identifying a beacon
  - `encodedParameters` - Parameters in their encoded form identifying a beacon
  - `timestamp` - UNIX timestamp of the beacon data
  - `encodedValue` - Beacon value in its encoded form
  - `signature` - Signature of the beacon data

### Example request

```sh
curl \
-X POST \
-H 'Content-Type: application/json' \
-d '{"chainId":1,"dapiServerAddress":"0x...","oevProxyAddress":"0x...","updateId":"0x...","bidderAddress":"0x...","bidAmount":"0x...","signedData":[{"airnodeAddress":"0x...","endpointId":"0x...","encodedParameters":"0x...","timestamp":"16...","encodedValue":"0x...","signature":"0x..."},{"airnodeAddress":"0x...","endpointId":"0x...","encodedParameters":"0x..."}]}' \
'<gatewayUrl>'
```

### Example response

```json
[
  {
    "timestamp": "16...",
    "encodedValue": "0x...",
    "signature": "0x..."
  },
  {
    "timestamp": "16...",
    "encodedValue": "0x...",
    "signature": "0x..."
  }
]
```

The gateway will return a list of signed beacon data, signing for each beacon
within the data feed that is served by the given Airnode. There are two elements
that are signed: template ID of the beacon and the OEV update hash, uniqly
identifying given OEV update.

- `timestamp` - UNIX timestamp of the signature
- `encodedValue` - Encoded OEV update value
- `signature` - Signature of the OEV update by Airnode
