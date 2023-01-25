---
title: Overview
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Deployment Files
path: /reference/airnode/latest/deployment-files/index.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Airnode is deployed with the following files:

- [config.json](./config-json.md): specifies the API–Airnode integrations and
  various node and deployment parameters.

- [secrets.env](./secrets-env.md): holds secrets used by Airnode such as the
  Airnode mnemonic, API keys, blockchain provider URLs, and more.

- [aws.env](./aws-env.md): (AWS deployments only) holds AWS credentials and is
  required by the Docker [deployer image](../docker/deployer-image.md).

- gcp.json: (GCP deployments only) holds GCP project information and is required
  by the Docker [deployer image](../docker/deployer-image.md). This file is
  downloaded from a GCP project. See the guide
  [Quick Start GCP](/guides/airnode/quick-start-gcp/#_4-gcp-project-setup-credentials)
  for more information.

Airnode deployments utilize secrets such as security scheme values (i.e., API
keys) and blockchain provider URLs. These secrets are injected into
`config.json` from `secrets.env` using standard shell variable interpolation
syntax (e.g. `${VARIABLE}`). This way secrets are stored separately but are
available as part of the configuration during the Airnode runtime.

The `config.json` file does NOT reference values in `aws.env` as `aws.env` is
read directly by the deployer image.

The deployer image outputs a [receipt.json](receipt-json.md) file after
deployment, which contains information about the deployment that can be referred
to later on for interaction or removal.
