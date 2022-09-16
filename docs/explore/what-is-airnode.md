---
title: Airnode config.json
folder: Explore
basePath: /explore
sidebarHeader: Explore
tags:
---

# {{$frontmatter.title}}

An Airnode is a first-party oracle that will push off-chain API data to any
on-chain requester. It is defined by a [config.json](/reference/airnode/latest/)
file.

See the [Guides](/guides/providers/) section in the API Provider docs to build
the necessary files required to deploy an Airnode. The diagrams below illustrate
the required components to successfully deploy an Airnode to AWS, GCP or a
Docker Container.

<!-- https://github.com/Jacobs63/vue3-tabs-component -->

<tabs>

@tab:AWS

<img src="/api-provider-overview-aws.png" style="width:450px;">

1. <p class="diagram-line"><b>config.json</b>: Contains the Airnode's configuration. The OIS object is important as it maps an API to Airnode endpoints.</p>
2. <p class="diagram-line" style="margin-top:10px;"><b>secrets.env</b>: Values that should not be exposed in config.json.</p>
3. <p class="diagram-line" style="margin-top:10px;">aws.env: AWS credentials required by the Docker deployer image.</p>
4. <p class="diagram-line" style="margin-top:10px;"><b>Docker deployer image</b>: Deploys Airnode using its deploy command.</p>

@tab:GCP

<img src="/api-provider-overview-gcp.png" style="width:450px;">

1. <p class="diagram-line"><b>config.json</b>: Contains the Airnode's configuration. The OIS object is important as it maps an API to Airnode endpoints.</p>
2. <p class="diagram-line" style="margin-top:10px;"><b>secrets.env</b>: Values that should not be exposed in config.json.</p>
3. <p class="diagram-line" style="margin-top:10px;"><b>Docker deployer image</b>: Deploys Airnode using its deploy command.</p>

@tab:Container

<img src="/api-provider-overview-container.png" style="width:450px;">

1. <p class="diagram-line"><b>config.json</b>: Contains the Airnode's configuration. The OIS object is important as it maps an API to Airnode endpoints.</p>
2. <p class="diagram-line" style="margin-top:10px;"><b>secrets.env</b>: Values that should not be exposed in config.json.</p>
3. <p class="diagram-line" style="margin-top:10px;"><b>Docker client image</b>: Deploys Airnode using its deploy command.</p>

</Tabs>
