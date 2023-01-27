---
title: Client Image
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Docker Images
path: /reference/airnode/latest/docker/client-image.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Usually the Airnode is deployed on a serverless platform using the
[deployer](./deployer-image.md). However, there is another option which is to
run the Airnode in a docker container on your machine locally, on premise or
cloud hosted.

A docker client image has been published on
[Docker Hub](https://hub.docker.com/r/api3/airnode-client). If you want to build
the container from the source yourself, you can find the image and built
instructions in the
[Airnode repository](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-node/docker).

## Configuration

The Airnode needs two configuration files for its run: `config.json` and
`secrets.env`. These files need to be passed to the Docker container via
volumes.

The Docker container looks for configuration files mounted internally in the
`/app/config` directory.

Your current working directory should contain the configuration files above and
you bind it to the `/app/config` directory for the docker using the `--volume`
parameter.

::: code-group

```sh [Linux/Mac/WSL2]
$ tree
.
├── config.json
└── secrets.env
$ docker run --volume $(pwd):/app/config ...
```

```powershell [Windows PowerShell]
$ tree
.
├── config.json
└── secrets.env
$ docker run --volume $(pwd):/app/config ...
```

```batch [Windows CMD]
$ tree
.
├── config.json
└── secrets.env
$ docker run --volume %cd%:/config:/app/config ...
```

:::

## Usage

Example directory structure and commands for running the Airnode Docker
container. The below commands are run from the depicted directory.

### Running Airnode

It is recommended to run the Airnode in a detached mode using the `--detach`
parameter, but you may run the it without it as well.

::: code-group

```sh [Linux/Mac/WSL2]
docker run --detach \
  --volume $(pwd):/app/config \
  --name airnode \
  api3/airnode-client:0.10.0
```

```powershell [Windows PowerShell]
docker run --detach \
  --volume $(pwd):/app/config \
  --name airnode \
  api3/airnode-client:0.10.0
```

```batch [Windows]
docker run --detach ^
  --volume %cd%:/app/config ^
  --name airnode ^
  api3/airnode-client:0.10.0
```

:::

> If you want to connect Airnode to a blockchain running on localhost, you need
> to make the blockchain accessible from within the docker itself. If you use
> docker for linux you can use `--network="host"` parameter. If you are using
> Docker Desktop (on any platform), connect to
> `http://host.docker.internal:8545` instead of `http://127.0.0.1:8545`. See
> [https://stackoverflow.com/a/24326540](https://stackoverflow.com/a/24326540).

### Checking Airnode logs

If you run the Airnode in a detached mode, you need to use the `logs` command to
access the logs. You can also use `--follow` parameter to stream the Airnode log
output.

```bash
docker logs airnode
```

or

```bash
docker logs --follow airnode
```

## Stopping Airnode

```bash
docker stop airnode
```
