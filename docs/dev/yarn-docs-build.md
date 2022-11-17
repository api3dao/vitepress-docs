---
title: yarn docs:build
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
basePath: /dev
---

<PageHeader/>

# {{$frontmatter.title}}

There is an issue with memory when building.

```
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

This is a know Vite issue, see the
[GitHub issue ➚](https://github.com/vitejs/vite/issues/2433).

Prior to running the command set the `NODE_OPTIONS` to increase the memory. This
need to be done both for the Firebase base deployments and local builds.

```sh
export NODE_OPTIONS=--max_old_space_size=7168
```
