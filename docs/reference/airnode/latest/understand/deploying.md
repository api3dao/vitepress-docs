---
title: Deploying Airnode
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Understanding Airnode
path: /reference/airnode/latest/understand/deploying.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

After integrating your API ([API Integration](api-integration.md)) and creating
the configuration files ([Configuring Airnode](configuring.md)), the next step
is to deploy the Airnode.

::: tip Complete the following before deploying your Airnode.

- [API Integration](api-integration.md)
- [API Security](api-security.md)
- [Configuring Airnode](configuring.md)
- [Using Authorizers](./apply-auth.md) optional
- [Heartbeat](./heartbeat.md) optional
- [HTTP Gateways](./http-gateways.md) optional

:::

## Deploy with Docker

The recommended way to deploy Airnode is by using the Docker
[deployer image](../docker/deployer-image.md). This image is simply a wrapper
around the
[deployer CLI](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-deployer).
Try out the [Quick Start](/guides/airnode/) guides if you wish to become
familiar with the deployer image first.

The deployer interacts with a cloud provider to deploy Airnode programmatically,
without requiring you to click through a lot of ever-changing graphical
interfaces. For it to do so, a cloud project setup and credentials are required
and was discussed in
[Configuring an Airnode](./configuring.md#aws-setup-aws-deployment-only).

## Install Docker

The [deployer image](../docker/deployer-image.md) is containerized as a Docker
image. This will deploy the Airnode to the cloud provider without the worry of
installing dependencies and is the recommended way to do a deployment. If you do
not already have docker installed go to the
[Docker website](https://docs.docker.com/get-docker/) and install it.

## Deployment

At this point your project should resemble the following. The `config.json`,
`secrets.env`, `aws.env` (if deploying to AWS) and `gcp.json` (if deploying to
GCP) files should be ready to go. Other files you may have added are expected
but not used by the deployer image.

<tabs>

@tab:AWS

```
my-airnode
├── aws.env
├── config.json
└── secrets.env
```

@tab:GCP

```
my-airnode
├── gcp.json
├── config.json
└── secrets.env
```

</Tabs>

<!-- Use of .html below is intended. -->
<WarningSimultaneousDeployments removeLink="../docker/deployer-image.html#manual-removal"/>

From the root of the project directory run the Docker image command
[deploy](../docker/deployer-image.md#deploy) as shown below to deploy the
Airnode. When the deployment has completed a `receipt.json` file will be written
to your current working directory, which is mounted to the `/app/config`
directory within the container. This file contains important configuration
information about the Airnode and is needed to remove the Airnode should the
need arise.

<p><DeployerPermissionsWarning/></p>

<Tabs>

@tab:Linux/Mac/WSL2

```sh
docker run -it --rm \
  -e USER_ID=$(id -u) -e GROUP_ID=$(id -g) \
  -v "$(pwd):/app/config" \
  api3/airnode-deployer:0.10.0 deploy
```

@tab:Windows

```batch
# For Windows, use CMD (not PowerShell).
docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:0.10.0 deploy
```

</Tabs>

### receipt.json

The `receipt.json` file is a product of a deployment attempt. It contains
Airnode configuration and deployment information and is used to remove the
Airnode. The field `success` is important in that it specifies whether the
deployment was successful or not.

```json
{
  "airnodeWallet": {
    "airnodeAddress": "0xaBd9daAdf32fCd96eE4607bf3d5B31e19a244Cac",
    "airnodeAddressShort": "abd9daa",
    "xpub": "xpub661MyMwAqRbcGHp9uC7...vbeziJwFHuNs"
  },
  "deployment": {
    "deploymentId": "aws8fd2e911",
    "cloudProvider": {
      "type": "aws",
      "region": "us-east-1"
    },
    "stage": "dev",
    "nodeVersion": "0.10.0",
    "timestamp": "2022-03-26T02:37:55.506Z"
  },
  "success": true
}
```

## Testing with HTTP Gateway

If you opted to enable the HTTP Gateway it can be used to test the Airnode while
bypassing the chain it was deployed to. There are three examples in other docs
that detail how to do this.

- [HTTP Gateways](./http-gateways.md#using-curl)
- [Quick Deploy AWS](/guides/airnode/quick-start-aws/index.md#test-the-airnode)
- [Quick Deploy GCP](/guides/airnode/quick-start-gcp/index.md#test-the-airnode)
- [Quick Deploy Container](/guides/airnode/quick-start-container/index.md#test-the-airnode)

## Calling the Airnode

Once the Airnode is deployed, see
[Calling an Airnode](../developers/call-an-airnode.md) to learn how requests are
made to it.

## Removing the Airnode

If you would like to remove a deployed Airnode, see the Docker image commands
for [remove](../docker/deployer-image.md#remove) or
[remove-with-receipt](../docker/deployer-image.md#remove-with-receipt)
instructions.
