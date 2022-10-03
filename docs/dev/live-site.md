---
lang: en-US
title: Branch - live-site
sidebarHeader: /dev
description:
folder: dev
basePath: /dev
outline: deep
---

# {{$frontmatter.title}}

The branch `live-site` is used to generate the production web site for the docs
on Firebase. The default branch remains as `main` and it is used to generate teh
staging web site on Firebase.

## PRs on `live-site`

When merging `main` into `live-site` do not "Squash and Merge". Us a regular
merge. Otherwise `live-site` will end up with its own commit history. If you do
follow these instructions to fix this issue.

From branch main locally:

```bash
git branch -d live-site
git checkout -b live-site 1cd2b41
git push origin live-site --force
```

1. Delete the live-site branch locally
2. Checkout a new branch, live-site, from main commit 1cd2b41,  which is the
   commit before the last main commit
3. Force push live-site to github. This now puts live-site 1 commit behind main
   in the network graph, thereby enabling a clean PR from main into live-site.

Going forward, PRs should just work easily like this so long as there aren't
squash commits.
