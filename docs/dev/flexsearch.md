---
title: FlexSearch
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
path: /dev/flexsearch.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

[FlexSearch](https://www.npmjs.com/package/flexsearch) is used to support
searching in the docs.

## Script flexBuildIndexes.js

```js
"flex:build": "node libs/flexBuildIndexes.js; yarn format;",
```

## Script flexTestSearch.js
