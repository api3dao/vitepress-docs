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

Airnode is deployed with two files:

- [config.json](./config-json.md) is the file that specifies the API–Airnode
  integrations and various node and deployment parameters.

- [secrets.env](./secrets-env.md) is the file that keeps the secret parameters
  (airnode mnemonic, API keys, blockchain provider URLs and others) that the
  Airnode deployments will use.

- [aws.env](./aws-env.md) is the file that holds credentials if the Airnode is
  deployed to AWS cloud provider. It is required by the Docker
  [deployer image](../docker/deployer-image.md).

Airnode deployments utilizes secrets such as security scheme values (i.e., API
keys) and blockchain provider URLs. While populating `config.json` you can use
standard shell variable interpolation syntax (e.g. `${VARIABLE}`) to insert
values from `secrets.env`. That way the secrets are kept separately but are
available as part of the configuration during the Airnode runtime.

The `config.json` file does NOT reference values in `aws.env` as it is read
directly by the deployer image.

The deployer image outputs a [receipt.json](receipt-json.md) file after
deployment, which contains information about the deployment that can be referred
to later on for interaction or removal.
