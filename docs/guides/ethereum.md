---
title: Ethereum Test Page
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides
path: /guides/ethereum.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

::: danger Note

This is a temporary page.

:::

## Using the `document.ethereum` object

- https://www.youtube.com/watch?v=BQ4bJrvSi-E

This option has already proven to be problematic as the vite build does not like
seeing the `window` object in the page script.

<!--button id="connect-button">Connect MetaMask</button>

<p id="meta-account"></p-->

## Using the `vue-metamask` obj

<!-- script for this page only -->
<!--script>
    window.addEventListener('load', function () {
        console.log(ethereum._state.accounts);
        const el = document.getElementById('meta-account');
        el.innerHTML = ethereum._state.accounts;
    })
</script-->

<!-- styles for this page only -->
<style>

#connect-button{
    border:gray 1px solid;
    padding:5px;
    border-radius:.3em;
    background-color:skyblue;
    color:black;
    font-size:larger;
}
</style>
