---
title: Migration Guide
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.13
path: /reference/airnode/next/migration.html
version: v0.13
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

The following guide assumes a valid v0.12 `config.json` file. All changes listed
below will need to be implemented in order to migrate to Airnode v0.13.0. This
document is written in a way that will preserve existing behavior with earlier
Airnode versions.

The document also mentions changes to user facing services related to Airnode,
such as airnode-deployer, airnode-admin, etc., and new features.

## Summary

1. `nodeSettings.nodeVersion` updated to "0.13.0".

## Details

1. `nodeSettings.nodeVersion`

Updated to "0.13.0"

```diff
{
- "nodeVersion": "0.12.0"
+ "nodeVersion": "0.13.0"
}
```

## New features and updates
