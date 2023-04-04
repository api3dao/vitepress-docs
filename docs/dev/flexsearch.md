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
used to support searching in the docs. The script
[/libs/flexBuildIndexes.js<ExternalLinkImage/>](https://github.com/api3dao/vitepress-docs/blob/main/libs/flexBuildIndexes.js)
will index all HTML files in the `/dist` folder for the following directories:

- `/dist/explore/`
- `/dist/guides/`
- `/dist/reference/`

Any files that are not part of the docs but are desired to be retained should go
into the `/archive` folder before running `yarn docs:build` which will create
the `/dist` folder. This prevents such files from being indexed.

## `<FlexStartTag/>` and `<FlexEndTag/>`

For the `/lib/flexBuildIndexes.js` script to extract the content from a markdown
file, the file must contain the markers `<FlexStartTag/>` and `<FlexEndTag/>`.
The script will only extract DOM text content between the markers. This will
result in the exclusion of headers and footers.

```js{10,14}
---
title: FlexSearch
...
---

<PageHeader />

<SearchHighlight />

<FlexStartTag />

# {{$frontmatter.title}}
...
<FlexEndTag />
```

## Vue components and Flex indexes

Vue components that do not immediately return HTML content will not index since
their content is generated at runtime in the browser. For example: the component
uses Axios to pull data from an API operation.

To overcome this short fall, the script
[/axiosBuildScripts.js](https://github.com/api3dao/vitepress-docs/blob/main/libs/axiosBuildScripts.js)
gathers on-line data into local data files for markdown pages to use. This
allows for proper rendering of HTML at build time. A example of a markdown file
that uses a locally generated data file is
[chains-list.md](https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/reference/dapis/chains/chains-list.md).

## Creating/updating the index files

The following three sections represent the workflow to create the FlexSearch
indexes.

## 1. Build the local data files

Build the local data files via the Axios script.

```js
axios: build;
```

## 2. Build the `/dist` folder

Build the `/dist` folder with the latest HTML files. All markdown files in
`/docs` are converted to HTML files and are added to `/dist`. All files must
contain hte extraction markers `<Flex...Tag/>`.

```js
yarn docs:build
```

## 3. Script `flexBuildIndexes.js`

Builds the index files.

```js
yarn flex:build

// Runs the following from package.json
// "flex:build": "node libs/flexBuildIndexes.js; yarn format;",
```

## 4. Script `flexTestSearch.js`

Test the index files.

```js
yarn flex:test

// Runs the following from package.json
// "flex:test": "node libs/flexTestSearch.js;"
```
