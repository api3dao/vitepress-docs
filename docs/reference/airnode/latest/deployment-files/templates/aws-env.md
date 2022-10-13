---
title: aws.env
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Deployment Files → Templates
version: v1.0
basePath: /airnode/latest/deployment-files/templates/
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

The `aws.env` contains AWS credentials from an IAM user. These credentials are
used by the Docker
[deployer image](../../grp-providers/docker/deployer-image.md) to deploy an
Airnode to AWS. For more details, see the full description of the
[aws.env](../deployment-files/aws-env.md) file.

- Variable names cannot contain dashes (-) or start with a number.

```sh
AWS_ACCESS_KEY_ID=<FILL_*>
AWS_SECRET_ACCESS_KEY=<FILL_*>
```
