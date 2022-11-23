---
title: Page Styling
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides
path: /guides/styles.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

::: danger Note

This is a temporary page.

:::

You can add a style definition just for this page. Inspect the source for this
page to see.

```css
<!-- styles for this page only -->
<style>
.this-bigger-font{
    font-size:xx-large;
}
</style>
```

<!-- styles for this page only -->
<style>
.this-bigger-font{
    font-size:xx-large;
}
#connect-button{
    border:gray 1px solid;
    padding:5px;
    border-radius:.3em;
    background-color:skyblue;
    color:black;
    font-size:larger;
}
</style>
