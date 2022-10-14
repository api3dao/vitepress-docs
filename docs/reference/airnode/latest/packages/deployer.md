---
title: Deployer
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Packages
path: /reference/airnode/latest/packages/deployer.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

The
[airnode-deployer](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-deployer)
package is used primarily by the [Docker Images](../../grp-providers/docker/).
This CLI tool provides the underlying commands used by the Docker images when
deploying an Airnode.

::: warning Deploying an Airnode

API providers are strongly encouraged to use the
[Docker Images](../../grp-providers/docker/) when deploying an Airnode and not
the deployer CLI commands.

:::

## Usage

The deployer's commands can be run using
[npx](https://www.codingninjas.com/codestudio/library/difference-between-npm-and-npx),
installing a global npm package or by manually building the airnode-deployer
package. Using npx is the simplest method to interact with the deployer manually
if you do not wish to use the Docker images.

- [Using npx](./deployer.md#using-npx)
- [Global Package](./deployer.md#global-package)
- [Build Manually](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-deployer)

### Using npx

The airnode-deployer package can be run as an npm package using npx. This allows
you to run deployer commands without installing the deployer npm package or
having to manually build the airnode-deployer package yourself.

```sh
npx @api3/airnode-deployer deploy --config config/config.json --secrets config/secrets.env --receipt config/receipt.json
```

### Global Package

The airnode-deployer package can be installed globally with yarn or npm. If
installed using yarn make sure yarn bin is added to `PATH`.

```sh
yarn global add @api3/airnode-deployer
# OR
npm install @api3/airnode-deployer -g

# Executing the deployer.
airnode-deployer deploy --config config/config.json --secrets config/secrets.env --receipt config/receipt.json
```

<!--  HOLD THIS UNTIL THE REPO README IS UPDATED
### Prerequisites

- Install [Terraform](https://www.terraform.io/downloads.html) and make sure
  that the terraform binary is available in your `PATH`.
- Make sure your AWS credentials are stored in the
  [configuration file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html#cli-configure-files-where)
  or exported as
  [environment variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html#envvars-set).
  If you need help setting up an AWS IAM user you can follow
  [this video tutorial](https://www.youtube.com/watch?v=bT19B3IBWHE). Note that
  this step is done for you when using the Docker
  [deployer image](../../grp-providers/docker/deployer-image.md).

### Setup

- Download the Airnode monorepo and build the Airnode packages.

```bash
git clone https://github.com/api3dao/airnode.git
cd airnode

# Run from the root of the airnode directory
git checkout v0.3
yarn run bootstrap
yarn build
```

- Make sure `config.json` and `secrets.env` are available in the `config`
  directory. You can use the provided example
  [config.json](https://github.com/api3dao/airnode/blob/v0.8/packages/airnode-deployer/config/config.example.json)
  and
  [secrets.env](https://github.com/api3dao/airnode/blob/v0.8/packages/airnode-deployer/config/secrets.example.env)
  templates to get started quickly, but you will need to edit these with your
  own API details and secrets.

```bash
# Change directories: /packages/airnode-deployer
cd packages/airnode-deployer

cp config/config.json.example config/config.json
cp config/secrets.env.example config/secrets.env
# Edit both `config.json` and `secrets.env` to reflect your configuration.
```
-->

## Commands

### Airnode Deployment

When creating or updating an Airnode the `config.json` and `secrets.env` files
are needed. You can use the provided example
[config.json](https://github.com/api3dao/airnode/blob/v0.8/packages/airnode-deployer/config/config.example.json)
and
[secrets.env](https://github.com/api3dao/airnode/blob/v0.8/packages/airnode-deployer/config/secrets.example.env)
templates to get started quickly, but you will need to edit these with your own
API details and secrets.

<!-- Use of .html below is intended. -->
<WarningSimultaneousDeployments removeLink="../../grp-providers/docker/deployer-image.html#manual-removal"/>

Make sure `config.json` and `secrets.env` are available in the path for the
`--configuration` argument.

#### deploy

When executed, the `deploy` command defaults to creating a `receipt.json` file
in the `config/` directory, although a different path can be specified using the
path and name with the `--receipt` argument. The receipt contains metadata about
the deployment and can be used to remove the Airnode.

If the deployment isn't successful, the command will try to automatically remove
deployed resources. You can disable this by running the deploy command with a
`--no-auto-remove` argument.

```bash
# Deploys an Airnode instance using the `config.json` and `secrets.env` files.
# This can be used for a new deployment or to update an existing deployment.

Options:
      --version                          Show version number                                                   [boolean]
      --debug                            Run in debug mode                                    [boolean] [default: false]
      --help                             Show help                                                             [boolean]
  -c, --configuration, --config, --conf  Path to configuration file             [string] [default: "config/config.json"]
  -s, --secrets                          Path to secrets file                   [string] [default: "config/secrets.env"]
  -r, --receipt                          Output path for receipt file          [string] [default: "config/receipt.json"]
      --auto-remove                      Enable automatic removal of deployed resources for failed deployments
                                                                                               [boolean] [default: true]

# Basic example
airnode-deployer deploy

# Advanced example
airnode-deployer deploy --config config/config.json --secrets config/secrets.env --receipt config/receipt.json
```

### Listing Airnodes

Once you've already deployed one or more Airnode, you can list your currently
deployed instances using the `list` command.

#### list

By default, the deployer will attempt to list Airnode instances from all the
supported cloud providers. You can use the `--cloud-providers` option to select
just the cloud providers you want the deployer to list from.

```bash
# Lists deployed Airnode instances

Options:
      --version          Show version number                                                                   [boolean]
      --debug            Run in debug mode                                                    [boolean] [default: false]
      --help             Show help                                                                             [boolean]
  -c, --cloud-providers  Cloud providers to list Airnodes from  [array] [choices: "aws", "gcp"] [default: ["aws","gcp"]]

# Basic example
airnode-deployer list

# Advanced example with cloud provider selection
airnode-deployer list --cloud-providers gcp
```

### Fetching deployment information

You can use the `info` command to retrieve information about one of your
deployments. The retrieved information include deployment's Airnode address,
stage, Airnode version and the update history.

#### info

```bash
# Displays info about deployed Airnode

Positionals:
  deployment-id  ID of the deployment (from 'list' command)                                          [string] [required]

Options:
  --version  Show version number                                                                               [boolean]
  --debug    Run in debug mode                                                                [boolean] [default: false]
  --help     Show help                                                                                         [boolean]

# Example
airnode-deployer info aws2c6ef2b3
```

### Airnode Removal

An Airnode can be removed in two different ways:

- **Best:** With `remove`, which uses the deployment ID found either in the
  [deployment receipt file](../../reference/deployment-files/receipt-json.md) or
  via the `list` command.
- **Alternate:** With `remove-with-receipt`, which uses the deployment receipt
  created when the Airnode was deployed.

#### remove

```bash
# Removes a deployed Airnode instance

Positionals:
  deployment-id  ID of the deployment (from 'list' command)                                          [string] [required]

Options:
  --version  Show version number                                                                               [boolean]
  --debug    Run in debug mode                                                                [boolean] [default: false]
  --help     Show help                                                                                         [boolean]

# Example
airnode-deployer remove aws2c6ef2b3
```

#### remove-with-receipt

```bash
# Removes a deployed Airnode instance.

Options:
      --version                Show version number                                                             [boolean]
      --debug                  Run in debug mode                                              [boolean] [default: false]
      --help                   Show help                                                                       [boolean]
  -r, --receipt                Path to receipt file                            [string] [default: "config/receipt.json"]

# Basic example
airnode-deployer remove-with-receipt

# Advanced example specifying the receipt file location
airnode-deployer remove-with-receipt --receipt config/receipt.json
```
