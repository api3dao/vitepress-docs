---
title: Tabs Component
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
path: /dev/tabs.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

::: danger Remooved

The Tabs component has been removed in favor of the native `code-group` markdown
component and the proper implementation of the TOC.

:::

Until a third party can make a better tab Vue component for VitePress the Tabs
component, which is home grown, is used in the VitePress release of the docs. It
is designed mostly to display code examples. Basic HTML and text can also be
added. Nesting other Vue components inside the Tabs component can become
problematic.

The primary use of the tabs component is to display source code. In fact use of
the tabs component should be used sparingly. While the search engine can find
text within a tab pane, the TOC cannot. Never place heading elements (h1-n) in a
tab pane. In some aspects tabs go against the design nature of markdown which is
why they are not natively supported by the markdown framework. Try and rely on
the TOC (by using small sections) to break the page into sections rather than
use tabs.

Example:

## Useful Vue Components

Each component that Tabs can display must be added manually to the template of
the component.

```html
<template>
  ...
  <!-- Start components listing here -->
  <!-- BlogPosts has 1 prop: show -->
  <BlogPosts
    v-else-if="element.type.name === 'BlogPosts'"
    :show="element.props['show']"
  ></BlogPosts>
  ...
</template>
```

## Limitations

Heading elements (`h2`, etc.) cannot be used in `<Tabs>`. They will not render
but will appear in the TOC thus confusing the reader.

There is a known limitation when embedding other Vue components within the
`<Tabs>` component. Nested components can only be at the root level of each
tab's content or one level below and must be on its own line. Further nesting
will result in an error.

<!-- prettier-ignore -->
```html
<Tabs>
  @tab:myTab

  <p>Some tab content.</p>

  <!-- Works because the component is in the root
  level of the content. -->
  <ChainName chainId="1" />

  <!-- Works because the component is one level below the root 
  level of the content. -->
  <div>
    <ChainName chainId="1" />
  </div>

  <!-- Fails because the component is two levels below the root 
  level of the content. -->
  <div>
    <div>
      <ChainName chainId="1" />
    </div>
  </div>

  <!-- Fails because the component is not on its own line.
  It is prefixed with ChainID: -->
  <div>
    Chain ID: <ChainName chainId="1" />
  </div>
</Tabs>
```
