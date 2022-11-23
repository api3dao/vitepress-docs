---
title: Localhost Setup
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
basePath: /dev/localhost
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

Instructions for internal development of the `vitepress-docs` repo.

## Clone and Setup

Clone the remote repo and install it packages. Create a working branch to work
on.

```
git clone git@github.com:api3dao/vitepress-docs.git
cd vitepress-docs
yarn install

// Create a working branch, with git or the VS Code UI
git checkout -b <branch-name>
```

## Push Working Branch

Before pushing your working branch to the remote repo, be sure that the branch
builds. Make corrections as needed.

```sh
yarn docs:build
```

The following warnings are fine.

```sh
(!) Some chunks are larger than 500 KiB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/guide/en/#outputmanualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ building client + server bundles...
⠙ rendering pages...[Vue warn]: Component <Anonymous> is missing template or render function.
[Vue warn]: Component <Anonymous> is missing template or render function.
[Vue warn]: Component <Anonymous> is missing template or render function.
[Vue warn]: Component <Anonymous> is missing template or render function.
✓ rendering pages...
build complete in 42.88s.
✨  Done in 44.85s.
```
