---
title: Versioning
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
basePath: /dev/versioning.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

Versioning of a a [docset](/dev/docsets.md) only applies to Airnode and OIS. The
versioning of these two docsets can get a little complicated so this doc will
run through the process.

There is the concept of `/latest` and `/next`. Consider the chart below which
represents Airnode:

| File path and URI         | Version |
| ------------------------- | ------- |
| /reference/airnode/next   | v0.13   |
| /reference/airnode/latest | v0.12   |
| /reference/airnode/v0.11  | v0.11   |

Also consider the directory structure of the project:

```sh
reference
├── airnode
    └── latest       ← v0.12
        ├── assets
        ├── concepts
        ├── ...
    └── next         ← v0.13
        ├── assets
        ├── concepts
        ├── ...
    └── v0.11
        ├── assets
        ├── concepts
        ├── ...
├── ...
```

## Putting `/next` into production

Using the versions depicted above (`v0.11, v0.12 as latest, and v0.13 as next`)
the process of moving `/next` into production means turning `/next` into
`/latest`. Before this can be done, `/latest` must first become `v0.12`.

1. Rename the directory `/latest` to `v0.12`.
1. Create a new entry for the `v0.12` sidebar in the `/.vitepress/config.js`
   file in `themeConfig.sidebar`.
1. Update `/.vitepress/versions.json` to reflect the latest version of Airnode
   and/or OIS.
1. Update internal links in the content of `v0.12` which currently use `/latest`
   for internal links. Do a search for `/reference/airnode/latest` or `/latest`
   only in the `/reference/airnode/latest` directory. Then make changes:
   - `/reference/airnode/latest/understand/configuring.md`: change `/latest` to
     `/v0.12`
1. Look for and change external links to API3 repos that may use older repo tags
   or `/main`. Some repos may not use tags and `/main` must be used, some may
   have tags unrelated to Airnode. Evaluate each link for changes as needed:

   - `https://github.com/api3dao/api3-dao/tree/main/packages/pool/contracts`
     becomes
     `https://github.com/api3dao/api3-dao/tree/v0.12/packages/pool/contracts`

   - `https://github.com/api3dao/api3-dao/tree/main/reports` could stay as is
     since there is no related Airnode tag.

## Creating a new `/next`

After placing `/latest` into production it is best to wait a few days for any
corrections that might be needed for `/atest` before creating a new `/next`
directory (from `/latest`).

1. Copy and paste `/latest` and rename it `/next`.
1. Update internal links in the content of `/next` which currently use `/latest`
   for internal links. Do a search for `/reference/airnode/latest` or `/latest`
   only in the `/reference/airnode/next` directory. Then make changes:
   - `/reference/airnode/latest/understand/configuring.md`: change `/latest` to
     `/next`
