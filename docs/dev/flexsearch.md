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

Builds the index files.

```js
yarn flex:build

// Runs the following from package.json
"flex:build": "node libs/flexBuildIndexes.js; yarn format;",
```

## Script flexTestSearch.js

Test the index files.

```js
yarn flex:test

// Runs the following from package.json
"flex:test": "node libs/flexTestSearch.js;"
```
