---
title: Cloud Resources
docSetName: Airnode v0.10
folder: Reference
basePath: /airnode/v0.10
tags:
---

<TitleSpan>{{$frontmatter.folder}}</TitleSpan>

# {{$frontmatter.title}}

<VersionWarning/>

When deployed to a cloud provider, such as AWS or GCP, Airnode uses certain
resources to fully operate.

:::: tabs

::: tab AWS

| Resource    | Description                                                                   |
| :---------- | :---------------------------------------------------------------------------- |
| EventBridge | Timer starting the Airnode service.                                           |
| CloudWatch  | Log groups for deployed resources.                                            |
| Lambda      | The heart of the Airnode. Serverless functions providing the Airnode service. |
| IAM         | Roles & policies to allow communication among other resources.                |
| API Gateway | Endpoints for the HTTP Gateway and HTTP Signed Data Gateway.                  |
| S3          | File describing the state of the deployed infrastructure.                     |

:::

::: tab GCP

| Resource        | Description                                                                                 |
| :-------------- | :------------------------------------------------------------------------------------------ |
| Cloud Scheduler | Timer starting the Airnode service.                                                         |
| Cloud Functions | The heart of the Airnode. Serverless functions providing the Airnode service.               |
| API Gateway     | Endpoints for the HTTP Gateway and HTTP Signed Data Gateway.                                |
| Cloud Storage   | File describing the state of the deployed infrastructure & source code for cloud functions. |
| IAM             | Service accounts & roles to allow communication among other resources.                      |

:::

::::
