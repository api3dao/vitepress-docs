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
Apple M1 users see the page [Rosetta, Nodejs, esbuild](./rosetta.md) if you get
an error.

::: tip Nodejs `v18`

It is best to use nodejs `v18` which gives the best performance and is the
engine described in the
[package.json<ExternalLinkImage/>](https://github.com/api3dao/vitepress-docs/blob/main/package.json)
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
builds. It maybe necessary to increase the memory for NodejsMake corrections as
needed. If the build displays errors or warnings (such as broken links) address
them as needed.

```sh
// If you get a memory error, change the memory space for Nodejs
// usually 1024 or 2048 will work
export NODE_OPTIONS=--max_old_space_size=1024
```

```sh
yarn docs:build

// Output shown below
$ yarn sync:VPFlyout; yarn sync:VPNavBarTitle; yarn sync:VPNavBar; yarn sync:VPSidebar; yarn sync:sidebarHeader; vitepress build docs;
$ cp docs/_components/vitepress/VPFlyout.vue  node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue
$ cp docs/_components/vitepress/VPNavBarTitle.vue  node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue
$ cp docs/_components/vitepress/VPNavBar.vue  node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue
$ cp docs/_components/vitepress/VPSidebar.vue  node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue
$ cp docs/_components/vitepress/SidebarHeader.vue  node_modules/vitepress/dist/client/theme-default/components/SidebarHeader.vue
vitepress v1.0.0-alpha.36
✓ building client + server bundles...
✓ rendering pages...
build complete in 5.85s.
✨  Done in 6.89s.
```
