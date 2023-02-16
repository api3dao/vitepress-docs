---
title: Configuration Files
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.11 → Understanding Airnode
path: /explore/reference/airnode/latest/understand/config-files.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

An Airnode is defined by a file name
[config.json](/reference/airnode/latest/deployment-files/config-json.md). It is
the central element that supplies on-chain dAPIs with data behind the scenes.

The diagrams below depict the configuration files needed for a successful
deployment of an Airnode to AWS, GCP, or for running in a Docker Container.

## AWS

<img style="margin-top:15px;display: block;" src="../assets/images/api-provider-overview-aws.png" width="450">

1. **config.json**: Contains the Airnode's configuration. It contains an
   important element, called OIS, that maps an API to Airnode endpoints.
2. **secrets.env**: Contains values that should not be exposed in config.json.
3. **aws.env**: Contains AWS credentials required by the Docker deployer image.
4. **deployer image**: A Docker image that deploys the Airnode using its deploy
   command.

## GCP

<img style="margin-top:15px;display: block;" src="../assets/images/api-provider-overview-gcp.png" width="450">

1. **config.json**: Contains the Airnode's configuration. It contains an
   important element, called OIS, that maps an API to Airnode endpoints.
2. **secrets.env**: Contains values that should not be exposed in config.json.
3. **deployer image**: A Docker image that deploys the Airnode using its deploy
   command.

## Container

<img style="margin-top:15px;display: block;" src="../assets/images/api-provider-overview-container.png" width="450">

1. **config.json**: Contains the Airnode's configuration. It contains an
   important element, called OIS, that maps an API to Airnode endpoints.
2. **secrets.env**: Contains values that should not be exposed in config.json.
3. **client image**: A Docker image that contains the Airnode that will run with
   the provided configuration.

## More related material...

- See
  [Deployment Files](/reference/airnode/latest/deployment-files/config-json.md)
  to view the available configurations fields for `config.json`.
- See
  [config.json](/reference/airnode/latest/deployment-files/examples/config-json.md)
  to view an example file.
