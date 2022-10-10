---
title: Heartbeat (optional)
sidebarHeader: Reference
sidebarSubHeader: Airnode
basePath: /airnode/latest/understand/
outline: deep
tags:
---

<VersionWarning/>

<PageHeader>v1.0 → Understanding Airnode </PageHeader>

# {{$frontmatter.title}}

At the end of an Airnode's run (every minute), Airnode can make an HTTP POST
request to a specified URL. This is both to signal that the Airnode is alive and
working (useful especially right after the deployment) and also as a
notification every time it runs (self-operates).

> <img src="../assets/images/heartbeat.png" width="650ps"/>
>
> 1.  <p>Airnode gathers on-chain requests targeting the API it supports.</p>
> 2.  <p>The required API operation for each request is called.</p>
> 3.  <p>A response is sent to each request.</p>
> 4.  <p>Finally Airnode makes a request to the heartbeat URL (HTTP POST). This could be to an operation within the API Airnode supports or to any cloud REST endpoint such as a monitoring service.</p>

Turn on the optional heartbeat functionality by setting all fields in the
`config.json` section for `nodeSettings.heartbeat`.

```json
{
  ois:{...},
  triggers:{...},
  chains:{...},
  environment:{...},
  nodeSettings:{
      "airnodeWalletMnemonic": "<FILL_*>",
      "cloudProvider": {
        "type": "aws",
        "region": "us-east-1"
      },
      "heartbeat": {
        "enabled": true,
        "url": "${HEARTBEAT_URL}",
        "apiKey": "${HEARTBEAT_API_KEY}"
      },
      "httpGateway": {
        "enabled": true,
        "maxConcurrency": 20,
        "corsOrigins": []
      },
      "httpSignedDataGateway": {
        "enabled": true,
        "maxConcurrency": 20,
        "corsOrigins": []
      },
      "logFormat": "json",
      "logLevel": "INFO",
      "nodeVersion": "0.10.0",
      "stage": "testnet",
  }
}
```

- `enabled`: Enable/disable Airnode's heartbeat.
- `url`: The URL to make the heartbeat request to.
- `apiKey`: The API key to authenticate with the heartbeat URL.

## Heartbeat Endpoint

The table below illustrates the parameters passed to the Heartbeat URL.

| name                         | in     | type   |
| ---------------------------- | ------ | ------ |
| airnode-heartbeat-api-key    | header | string |
| http_gateway_url             | body   | string |
| http_signed_data_gateway_url | body   | string |
| cloud_provider               | body   | string |
| stage                        | body   | string |
| region                       | body   | string |
| signature                    | body   | string |
| timestamp                    | body   | string |

Below is an example of what is included in the request body to `heartbeat.url`.

```json
{
  "http_gateway_url": "https://some.aws.http.gateway.url/v1/01234567-abcd-abcd-abcd-012345678abc",
  "http_signed_data_gateway_url": "https://some.aws.http.signed.data.gateway.url/v1/01234567-abcd-abcd-abcd-012345678abc",
  "cloud_provider": "aws",
  "region": "us-east-1",
  "stage": "220910-0913",
  "signature": "0xde49c22487107a1f46f1a35f47d2e50fdb94a518c8fc79a93ef046984ac2108a0f0b68269076b3de97d4447b04563527fd0d86fbe72f31eadb2dc4f6eea33c161c",
  "timestamp": "1661582890984"
}
```

<table>
  <tr>
    <td>airnode-heartbeat-api-key:</td><td>API key for heartbeat calls configured in nodeSettings.heartbeat.apiKey. Used for authentication against the heartbeat service running on URL from nodeSettings.heartbeat.url.</td>
  </tr>
  <tr>
    <td>http_gateway_url:</td><td>If HTTP gateway is enabled this is the URL of the gateway you can make test HTTP calls against.</td>
  </tr>
  <tr>
    <td>http_signed_data_gateway_url:</td><td>If HTTP signed data gateway is enabled this is the URL of the gateway you can make HTTP calls against.</td>
  </tr>
  <tr>
    <td>cloud_provider:</td><td>This is the deployment cloud provider.</td>
  </tr>
  <tr>
    <td>region:</td><td>This is the deployment region.</td>
  </tr>
  <tr>
    <td>stage:</td><td>This is the deployment stage.</td>
  </tr>
  <tr>
    <td>signature:</td><td>This is the signature of the heartbeat payload signed with the Airnode wallet.</td>
  </tr>
  <tr>
    <td>timestamp:</td><td>This is the heartbeat timestamp.</td>
  </tr>
</table>
