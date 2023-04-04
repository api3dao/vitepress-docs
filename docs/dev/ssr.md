---
title: SSR on CloudFlare
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
basePath: /dev/ssr.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

API3 uses CloudFlare for DNS records which includes the docs. If SSR is turned
on for any domain related to the docs, then CloudFlare will minify the already
minified source files from Firebase. This will result in the merging of pages as
visible to the reader.

<img src="./assets/images/ssr-cloudflare.png" style="width:70%">

Because the docs are not using SSR and relying on a CDN (Firebase), caching
isn't necessary. The CDN is effectively a cache as the data is static. So
caching for DNS records related to the docs should be turned off.
