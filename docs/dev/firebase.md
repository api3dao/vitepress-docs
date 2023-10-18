---
title: Firebase
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
basePath: /dev/firebase.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

All production and PR preview deployments are published on Firebase hosting and
are built automatically using GitHub
[workflows](https://github.com/api3dao/vitepress-docs/tree/main/.github/workflows)
stored in the `vitepress-docs` repo.

- Production: https://vitepress-docs.web.app (and https://docs.api3.org)

## Repo Branches

When a PR is merged into the default branch, `main`, a Firebase deployment of
the docs production website is triggered.
