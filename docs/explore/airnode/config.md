---
title: config.json
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/config.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

An Airnode is a first-party oracle that will push off-chain API data to any
on-chain requester. It is defined by a file named
[config.json](../reference/airnode/deployment-files/config-json.md/).

The diagrams below illustrate the required components to successfully deploy an
Airnode to AWS, GCP, or a Docker Container.

<Tabs>

@tab:AWS

<img src="/api-provider-overview-aws.png" width="450">

1. **config.json**: Contains the Airnode's configuration. The OIS object is
   important as it maps an API to Airnode endpoints.
2. **secrets.env**: Values that should not be exposed in config.json.
3. **aws.env**: AWS credentials required by the Docker deployer image.
4. **deployer image**: Deploys Airnode using its deploy command.

@tab:GCP

<img src="/api-provider-overview-gcp.png" width="450">

1. **config.json**: Contains the Airnode's configuration. The OIS object is
   important as it maps an API to Airnode endpoints.
2. **secrets.env**: Values that should not be exposed in config.json.
3. **deployer image**: Deploys Airnode using its deploy command.

@tab:Container

<img src="/api-provider-overview-container.png" width="450">

1. **config.json**: Contains the Airnode's configuration. The OIS object is
   important as it maps an API to Airnode endpoints.
2. **secrets.env**: Values that should not be exposed in config.json.
3. **client image**: Deploys Airnode using its deploy command.

</Tabs>

## More...

- See [Understanding Airnode](/) (TODO: fix link) to learn how Airnode is
  defined by `config.json`.
- See [Deployment Files](/) (TODO: fix link) to view the available
  configurations fields for `config.json`.
- See [config.json](/) (TODO: fix link) to view an example file.
