---
title: Getting Started
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
basePath: /dev/index.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

Use newer versions of Nodejs. Currently the builds on GitHub are using `v18`.
Apple M1 users see the page [Rosetta, Nodejs, esbuild](/dev/rosetta.md) if you
get an error.

::: info Nodejs `v18`

It is best to use nodejs `v18` which gives the best performance and is the
engine described in the
[<span style="color:rgb(16, 185, 129);">package.json<ExternalLinkImage/></span>](https://github.com/api3dao/vitepress-docs/blob/main/package.json)
file.

:::

## Clone the remote repo

Clone the remote repo and install it packages.

```sh
git clone git@github.com:api3dao/vitepress-docs.git
cd vitepress-docs
yarn install
```

Create a working branch.

```sh
// Create a working branch, with git or the VS Code UI
git checkout -b <branch-name>
```

Run the development server.

```sh
yarn docs:dev
```

## Push the working branch

Before pushing your working branch to the remote repo, be sure that the branch
builds.

```sh
yarn docs:build

// Output shown below
  vitepress v1.0.0-alpha.61

✓ building client + server bundles...
✓ rendering pages...
build complete in 5.20s.
✨  Done in 6.19s.
```

If the build displays errors or warnings (such as broken links) address them as
needed.

### Memory

It maybe necessary to increase the memory for Nodejs to run `yarn docs:dev` or
`yarn docs:build`. Make corrections as needed. For m1, M2 Mac users this may be
a sign of a [Rosetta issue](/dev/rosetta.md) which should be addressed before
committing to additional memory for Nodejs.

```sh
// If you get a memory error, change the memory space for Nodejs
// usually 1024 or 2048 will work
export NODE_OPTIONS=--max_old_space_size=1024
```
