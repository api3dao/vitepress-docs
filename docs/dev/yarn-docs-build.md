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
// Prior to setting --max_old_space_size=7168
yarn docs:build
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

This is a know Vite issue, see the
[GitHub issue➚](https://github.com/vitejs/vite/issues/2433).

Prior to running the `yarn docs:build` command, `NODE_OPTIONS` must be set to
increase memory. This need to be done both for the Firebase base deployments and
local builds.

```sh
export NODE_OPTIONS=--max_old_space_size=7168
```

The command `yarn docs:build` sets `--max_old_space_size=7168`. See
`package.json`.

```
// The command includes --max_old_space_size=7168
yarn docs:build

...
✓ rendering pages...
build complete in 44.38s.
✨  Done in 46.68s.

```
