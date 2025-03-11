---
title: Getting Started
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
path: /dev/index.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

Use newer versions of Nodejs. Currently the builds on GitHub are using `v20`.
Mac users (Apple silicon) should see the page
[Rosetta, Nodejs, esbuild](/dev/rosetta.md) if you get an error.

::: info Nodejs `v20`

It is best to use nodejs `v20` which gives the best performance and is the
engine described in the
[<span style="color:rgb(16, 185, 129);">package.json</span>](https://github.com/api3dao/airnode-docs/blob/main/package.json)
file.

:::

## Clone the remote repo

Clone the remote repo and install it packages.

```sh
git clone git@github.com:api3dao/airnode-docs.git
cd airnode-docs
pnpm install
```

Create a working branch.

```sh
git checkout -b <branch-name>
```

Run the development server.

```sh
pnpm docs:dev
```

## Push the working branch

Before pushing your working branch to the remote repo, be sure that the branch
builds.

```sh
pnpm docs:build
```

The output should look like this:

```sh
  vitepress v1.0.0-alpha.61

✓ building client + server bundles...
✓ rendering pages...
build complete in 5.20s.
✨  Done in 6.19s.
```

If the build displays errors or warnings (such as broken links) address them as
needed.

## Memory

It maybe necessary to increase the memory for Nodejs to run `pnpm docs:dev` or
`pnpm docs:build`. This can be done with the command below, with a higher value
potentially necessary. For Apple silicon this may be a sign of a
[Rosetta issue](/dev/rosetta.md) which should be addressed before committing to
additional memory for Nodejs.

```sh
export NODE_OPTIONS=--max_old_space_size=1024
```
