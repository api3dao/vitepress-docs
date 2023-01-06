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

[FlexSearch<ExternalLinkImage/>](https://www.npmjs.com/package/flexsearch) is
used to support searching in the docs. A script `/libs/flexBuildIndexes.js`
named will index all HTML files in the `/dist` folder with exceptions as shown
below.

- `./docs/.vitepress/dist/index.html`
- `./docs/.vitepress/dist/team.html`
- `./docs/.vitepress/dist/404.html`

Any files that are not part of the docs but are desired to be retained should go
into the `/archive` folder before running `yarn docs:build` which will create
the `/dist` folder. This prevents such files from being indexed.

The following three sections represent the workflow to create the FlexSearch
indexes.

## 1. Update the `/dist` folder

Build/update the `/dist` folder with the latest HTML files. All markdown files
in `/docs` are converted to HTML files s and added to `/dist`.

```js
yarn docs:build
```

## 2. Script `flexBuildIndexes.js`

Builds the index files.

```js
yarn flex:build

// Runs the following from package.json
// "flex:build": "node libs/flexBuildIndexes.js; yarn format;",
```

## 3. Script `flexTestSearch.js`

Test the index files.

```js
yarn flex:test

// Runs the following from package.json
// "flex:test": "node libs/flexTestSearch.js;"
```
