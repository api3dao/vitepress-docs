---
title: Nav Boxes
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
basePath: /dev/navboxes.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

A NavBox displays a link to related material. They are rendered using the
[NavBox.vue](https://github.com/api3dao/vitepress-docs/blob/main/docs/_components/NavBox.vue)
component which loads NavBox data from four JSON files:

- [nav-boxes-explore.json <ExternalLinkImage/>](https://github.com/api3dao/vitepress-docs/blob/main/docs/.vitepress/nav-boxes/nav-boxes-explore.json)
- [nav-boxes-guides.json <ExternalLinkImage/>](https://github.com/api3dao/vitepress-docs/blob/main/docs/.vitepress/nav-boxes/nav-boxes-guides.json)
- [nav-boxes-reference.json <ExternalLinkImage/>](https://github.com/api3dao/vitepress-docs/blob/main/docs/.vitepress/nav-boxes/nav-boxes-reference.json)
- [nav-boxes-repos.json <ExternalLinkImage/>](https://github.com/api3dao/vitepress-docs/blob/main/docs/.vitepress/nav-boxes/nav-boxes-repos.json)

## Using a NavBox

NavBoxes must be embedded within a div element that utilizes the class
`api3-css-nav-box-flex-row`. Other than the landing page or certain browsers,
the NavBoxes will probably display three to a row. They are commonly used at the
bottom of a page under a section called "**More related material...**". They are
also useful to stress the importance of certain content within (inline) a doc.

```
<div class="api3-css-nav-box-flex-row">
    <NavBox type='EXPLORE' id="_what-are-dapis"/>
    <NavBox type='GUIDE' id="_dapi-just-the-code"/>
    <NavBox type='GUIDE' id="_call-dapi-proxy"/>
    <NavBox type='GUIDE' id="_call-dapi-server"/>
</div>
```

- `type`: Tells the NavBox component which JSON file to read.
- `id`: Pulls the appropriate object from the selected JSON file.

<div class="api3-css-nav-box-flex-row">
    <NavBox type='EXPLORE' id="_what-are-dapis"/>
    <NavBox type='GUIDE' id="_dapi-just-the-code"/>
    <NavBox type='GUIDE' id="_call-dapi-proxy"/>

</div>

## Adding new NavBoxes

Simply update one of the four JSON files. Likewise a NavBox can be edited to
further refine its content in these files. Remember that other doc authors may
be happy with the content of an existing NavBox. Before making changes reach out
on the vitepress Slack channel.

## Browse current NavBoxes

This section display list of the current NavBoxes but does not allow direct
editing of each. Change each by going to and editing the appropriate JSON file.

### Explore

<NavBoxViewer type="EXPLORE"/>

### Guides

<NavBoxViewer type="GUIDE"/>

### Reference

<NavBoxViewer type="REFERENCE"/>

### Repos

<NavBoxViewer type="REPO"/>
