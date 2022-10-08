---
title: Frontmatter
sidebarHeader: Docs Development
sidebarSubHeader:
basePath: /dev/
outline: deep
tags:
  - frontmatter
  - title
  - sidebarHeader
  - sidebarSubHeader
  - basePath
  - outline
  - tags
---

<PageHeader/>

# {{$frontmatter.title}}

The frontmatter must be at the top of the Markdown file, and must take the form
of valid YAML set between triple-dashed lines. Each page must contain
$frontmatter which is used to provide navigation, navigation labels, and search
criteria.

```
---
title: Frontmatter
sidebarHeader: Docs Development
sidebarSubHeader:
basePath: /dev/
outline: deep
tags:
    - cookie
    - cake
    - ...
---
```

## Fields

Most $frontmatter keys are required.

### `title`

(required) Sets the page's title. This title is not used by the sidebars which
must provide a title for each page using the key `text`. They can be the same or
different.

### `sidebarHeader`

(required) At the top of the sidebar is a text block (preceded by a folder
image). This label represents a selection from the navbar or other hidden
sections such as /dev or /operations.

### `sidebarSubHeader`

(required for Airnode and OIS) In the case of the navbar selection
**Reference**, there are sub-selections such as Airnode, OIS, dAPIs, etc.

### `basePath`

(required) The root for a group of pages known as a doc set. The root contains
the `sidebar.js` file. The base path is used by the search engine to logically
group search results for display to the reader.

### `outline`

(optional) Each page has its own table of contents component displayed on its
right side if the page use heading elements H2-H6. Without a value for `outline`
only H2 elements will be displayed. A value of deep will show all elements
H2-H6.

- `outline: null`: Shows H2
- `outline: false`: The TOC is hidden
- `outline: [2,4]`: Shows H2-H4
- `outline: deep`: Shows H2-H6

### `tags`

(optional) Provides important key search words for the search engine.
