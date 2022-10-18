---
title: AWS/GCP Deployer Image
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Docker Images
path: /reference/airnode/latest/docker/index.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

Use the deployer image to deploy or remove an Airnode with a cloud provider such
as AWS. The simplest way is to use the pre-built packages. If you would rather
build the images yourself see the
[README](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-deployer/docker)
in the deployer package.

::: tip Quick Deploy Demos

See the [Quick Deploy Demos](../tutorial/) to quickly deploy and remove a
preconfigured Airnode using the deployer image.

:::

## Configuration Files

The files `config.json` and `secrets.env` are used to configure the Airnode. The
`aws.env` and `gcp.json` files are used to define environment information the
deployer uses to connect to these cloud providers.

```
my-airnode
├── aws.env     <- Used for AWS deployment
├── gcp.json    <- Used for GCP deployment
├── config.json
└── secrets.env
```

## Cloud Provider Credentials

In order to deploy Airnode to a serverless cloud provider, you need to provide
could provider credentials to the Airnode deployer image. The deployer image
currently supports deploying to AWS and GCP. For AWS deployment, see the
[AWS Setup](../guides/build-an-airnode/configuring-airnode.md#aws-setup-aws-deployment-only)
and for GCP deployment, see the
[GCP Setup](../guides/build-an-airnode/configuring-airnode.md#gcp-setup-gcp-deployment-only).

## Deployer Image Commands

All three commands are similar for AWS and GCP, with differences noted where
they exist.

- [deploy](./deployer-image.md#deploy)
- [list](./deployer-image.md#list)
- [info](./deployer-image.md#info)
- [remove](./deployer-image.md#remove)
- [remove-with-receipt](./deployer-image.md#remove-with-receipt)

### `deploy`

The [deploy](../../reference/packages/deployer.md#deploy) command will create
the Airnode with a cloud provider or update it if it already exists. Three files
are needed to run the deploy command.

- config.json
- secrets.env
- aws.env (AWS only)
- gcp.json (GCP only)

See
[Deploying an Airnode](../guides/build-an-airnode/deploying-airnode.md#deploy-with-docker)
for deployment commands specific to various operating systems and cloud
providers.

Note that a `receipt.json` file will be created upon completion. It contains
some deployment information and is used to remove the Airnode.

<!-- Use of .html below is intended. -->

<WarningSimultaneousDeployments removeLink="./deployer-image.html#manual-removal"/>

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

:::tip Re-deployments

A unique deployment is defined by the value of
[nodeSetting.stage](../../reference/deployment-files/config-json.md#stage). If
you deploy again, using the same `nodeSetting.stage` value, then you are
re-deploying or updating the previous deployment.

By default the deployer will attempt to remove the Airnode should either a
deployment or re-deployment fail. But if either fails (and
[--auto-remove](../../reference/packages/deployer.md#deploy) is false) then the
Airnode will not be removed, however it could be left in an unstable state. You
can alter the `deploy` command to change this behavior using the following.

- `--auto-remove true|false`: defaults to true
- `--no-auto-remove`

Auto removal is usually recommended for development deployments. For production
deployments, consider changing the value of `nodeSetting.stage` to create a new
deployment and follow-up by removing the previous deployment.

Use the following example to avoid the automatic removal of the Airnode.

```sh
docker run -it --rm \
-e USER_ID=$(id -u) -e GROUP_ID=$(id -g) \
-v "$(pwd):/app/config" \
api3/airnode-deployer:0.10.0 deploy --auto-remove false
```

:::

### `list`

Once one or more Airnodes were deployed using the
[deploy](./deployer-image.md#deploy) command above, the
[list](../../reference/packages/deployer.md#list) command can be used to list
currently deployed Airnodes. Files for cloud provider authentication are needed
for the command to run correctly: `aws.env` (for AWS) and/or `gcp.json` (for
GCP).

<Tabs>

@tab:Linux/Mac/WSL2

```sh
docker run -it --rm \
  -v "$(pwd):/app/config" \
  api3/airnode-deployer:0.10.0 list
```

@tab:Windows

```batch
# For Windows, use CMD (not PowerShell).
docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:0.10.0 list
```

</Tabs>

By default, the deployer will attempt to list Airnode instances from all the
supported cloud providers. You can use the `--cloud-providers` option to select
just the cloud providers you want the deployer to list from.

<Tabs>

@tab:Linux/Mac/WSL2

```sh
docker run -it --rm \
  -v "$(pwd):/app/config" \
  api3/airnode-deployer:0.10.0 list --cloud-providers aws
```

@tab:Windows

```batch
# For Windows, use CMD (not PowerShell).
docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:0.10.0 list --cloud-providers aws
```

</Tabs>

### `info`

You can retrieve more information about the deployment with the
[info](../../reference/packages/deployer.md#info) command. Use the deployment ID
from the [list](./deployer-image.md#list) command above to request information
about a specific deployment. The retrieved information include deployment's
Airnode address, stage, Airnode version and the update history. Files for cloud
provider authentication are needed for the command to run correctly: `aws.env`
(for AWS) and/or `gcp.json` (for GCP).

<Tabs>

@tab:Linux/Mac/WSL2

```sh
docker run -it --rm \
  -v "$(pwd):/app/config" \
  api3/airnode-deployer:0.10.0 info aws2c6ef2b3
```

@tab:Windows

```batch
# For Windows, use CMD (not PowerShell).
docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:0.10.0 info aws2c6ef2b3
```

</Tabs>

### `remove`

A deployed Airnode can be removed via the
[remove](../../reference/packages/deployer.md#remove) command. To remove
Airnode, use the deployment ID from the [list](./deployer-image.md#list) command
above. Airnode's update history, that can be seen by the
[info](./deployer-image.md#info) command, will be removed as well. Files for
cloud provider authentication are needed for the command to run correctly:
`aws.env` (for AWS) and/or `gcp.json` (for GCP). This is the recommended way to
remove a deployment, but there are alternatives as described below.

<Tabs>

@tab:Linux/Mac/WSL2

```sh
docker run -it --rm \
  -v "$(pwd):/app/config" \
  api3/airnode-deployer:0.10.0 remove aws2c6ef2b3
```

@tab:Windows

```batch
# For Windows, use CMD (not PowerShell).
docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:0.10.0 remove aws2c6ef2b3
```

</Tabs>

### `remove-with-receipt`

When an Airnode was deployed using the `deploy` command, a `receipt.json` file
was created. This file is used to remove the Airnode. The
[remove-with-receipt](../../reference/packages/deployer.md#remove-with-receipt)
command is identical for AWS and GCP. Files for cloud provider authentication
are needed for the command to run correctly: `aws.env` (for AWS) and/or
`gcp.json` (for GCP).

<Tabs>

@tab:Linux/Mac/WSL2

```sh
docker run -it --rm \
  -v "$(pwd):/app/config" \
  api3/airnode-deployer:0.10.0 remove-with-receipt
```

@tab:Windows

```batch
# For Windows, use CMD (not PowerShell).
docker run -it --rm ^
  -v "%cd%:/app/config" ^
  api3/airnode-deployer:0.10.0 remove-with-receipt
```

</Tabs>

## Manual Removal

Optionally you can remove an Airnode manually though it is highly recommended
that you do so using the deployer image's `remove-with-receipt` or
`remove-with-deployment-details` commands. When removing manually, you will need
the short Airnode address, `airnodeAddressShort` (e.g., `0ab830c`) and the
Airnode stage name (e.g., `production`). These are included in the element name
of AWS and GCP deployed features. Airnode has a presence in several areas of
both AWS and GCP as listed below.

::: danger Remember

Only delete elements of a feature with the `airnodeAddressShort` address and
`stage` name contained in the element's name. There can be more than one
Airnode. Example: (airnode-**6a6cf2d-production**-run), where `6a6cf2d` is the
airnodeShortAddress and `production` is the stage name.

:::

<Tabs>

@tab:AWS

<DeleteAirnodeAws />

@tab:GCP

<DeleteAirnodeGcp />

</Tabs>

Learn more about AWS or GCP resources that Airnode uses in the
[Cloud Resources](../../reference/cloud-resources.md) doc.
