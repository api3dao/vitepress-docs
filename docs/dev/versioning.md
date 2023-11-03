---
title: Airnode/OIS Versioning
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
path: /dev/versioning.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

Versioning of a a [docset](/dev/docsets.md) only applies to Airnode and OIS.
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
`/latest`. Before this can be done, `/latest` must first become `v0.11`.

In order to advance the versioning the following actions occur:

1. Rename the `/latest` folder to `vx.xx`, now an older version.
1. Rename `/next` to `/latest`.
1. Create a new folder `/next` as a copy of `/latest` "**after**" completing the
   updates below to the newly renamed `/latest` and `vx.xx`. Then follow the
   below steps again for the new `/next`.

Update links and other version specific content. For `vx.xx`, `/latest`, and
`/next` review the following and make the following changes where needed.

> Be careful with Airnode `migration.md` pages. Older version are mentioned as
> needed within.

1. Update `themeConfig.sidebar` in `/.vitepress/config.js`
1. Update `/.vitepress/versions.json` to reflect the latest and next versions.
1. Update internal hyperlinks in the content. In latest use `/latest`, next use
   `/next`. For folders of a specific version use the correct version number.
1. Be sure the above step also changed the `basePath` in frontmatter.
1. Change frontmatter `version:` to the proper version.
1. For `/latest` look for and change external links to API3 repos that may use
   older repo tags, `/master`, or `/main`. Some repos may not use tags and
   `/main` must be used, some may have tags unrelated to Airnode. Evaluate each
   link for changes as needed.
1. Look for links with versions that use x.x.x (i.e. Admin cli, 0.12.0)
1. Look for links to api3 repos that use older version such as Airnode `v0.11`
   or OIS `v2.0`. These need to use the proper versions.
1. Verify links in Airnode releases reference the proper OIS release and
   vice-versa. See the OIS [versions](/reference/ois/latest/versions.md) table.
1. For `/next` change frontmatter `pageHeader: Reference → Airnode → vx.x` to
   the proper version.
1. `/next` will not have a repo tag created until its version is release. Use
   the version of `/latest` in the mean time.
1. Update the [Versions](/reference/ois/latest/versions.md) page in OIS which
   maps OIS versions to Airnode versions.
1. Update the [Versions](/reference/airnode/latest/versions.md) page in Airnode.
