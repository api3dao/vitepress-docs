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

Until a third party can make a better tab Vue component for VitePress the
`<Tabs/>` component, which is home grown, is used in the VitePress release of
the docs. It is designed mostly to display code examples. Basic HTML and text
can also be added. Nesting other Vue components inside the Tabs component can
become problematic.

Example:

<Tabs>

@tab:Tab 1

Number one tab

Below is the ChainName component which shows the chain name as Ethereum.

<div>
    <ChainName chainId="1" />
</div>

@tab:Tab 2

Number two tab

</Tabs>

## Useful Vue Components

Each component that `<Tabs>` can display must be added manually to the template
of the component. See the component in the `vitepress-docs` repo
[here](https://github.com/api3dao/vitepress-docs/blob/main/docs/_components/Tabs.vue).

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
