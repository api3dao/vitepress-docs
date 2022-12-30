---
layout: home

hero:
  name: API3
  text: dAPI data feeds powered by Airnode.
  tagline:
    dAPIs are continuously updated streams of off-chain data, such as the latest
    cryptocurrency, stock and commodity prices. They can power various
    decentralized applications such as DeFi lending, synthetic assets, stable
    coins, derivatives, NFTs and more. Airnode is a  serverless first-party
    oracle node implemented with a "set and forget" philosophy.
  image:
    src: /beacons.svg
    alt: API3
  actions:
    - theme: brand
      text: Explore
      link: /explore/introduction/
    - theme: alt
      text: API3 on GitHub
      link: https://github.com/api3dao
    - theme: alt
      text: Documentation Contributions
      link: https://github.com/api3dao/api3-docs
---

<div style="margin: 0px 65px 0px 65px">
<div style="font-size:xx-large;text-align:center;font-weight:500;margin-bottom:15px;">Getting Started</div>
<hr style="margin-bottom:22px;"/>

<!-- dAPIs -->
  <div class="api3-land-title">dAPIs</div>
  <div class="api3-land-title-desc">Continuously updated streams of off-chain data, such as the latest cryptocurrency, stock and commodity prices.
  </div>

  <div class="api3-css-nav-box-flex-row">
    <NavBox type="EXPLORE" btnURL="/explore/dapis/what-are-dapis.html" title="What are dAPIs?" content="The most secure data feeds on the market."/>
    <NavBox type="GUIDE" btnURL="/guides/dapis/just-the-code.html" title="Calling a dAPI - the basics" content="Code examples of a simple call to dAPIs."/>
    <NavBox type="GUIDE" btnURL="/guides/dapis/call-dapi-proxy/" title="Calling a dAPI - API3 Market" content="Using an API3 Market proxy contract and Remix."/>
    
  </div>

 <!-- BYOG -->
 <div class="api3-land-title">BYOG</div>
  <div class="api3-land-title-desc">Community single sourced dAPIs suitable for development and prototyping.
  </div>

  <div class="api3-css-nav-box-flex-row">
    <NavBox type="EXPLORE" btnURL="/" title="What is BYOG?" content="Single sourced dAPIs used for development that are shared by the community."/>
    <NavBox type="REFERENCE" btnURL="/" title="See config.json" content="Airnode configuration"/>

  </div>

</div>

<style>
.api3-land-title{
  font-size:xx-large;
}
.api3-land-title-desc{
  margin-top:15px;
  margin-bottom:10px;
  font-size:x-large;
  color:gray
}
</style>
