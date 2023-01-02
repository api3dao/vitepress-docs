---
layout: home

hero:
  name: API3
  text: dAPI data feeds powered by Airnode
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

<!-- OUTER BOX for Getting Started -->
<div style="padding:0px 50px 00px 50px;max-width:1260px;margin:auto;">

  <div style="font-size:xx-large;text-align:center;font-weight:500;margin-bottom:15px;">Getting Started</div>
  <hr style="margin-bottom:22px;border-bottom:solid 1px gray;"/>

  <!-- dAPIs -->
  <div class="api3-land-title">dAPIs</div>
  <div class="api3-land-title-desc">Continuously updated streams of off-chain data, such as the latest cryptocurrency, stock and commodity prices.
  </div>
  <div class="api3-css-nav-box-flex-row">
    <NavBox id="_what-are-dapis"/>
    <NavBox id="_dapi-just-the-code"/>
    <NavBox id="_call-dapi-proxy"/>
    <NavBox id="_call-dapi-server"/>
  </div>

  <!-- BYOG -->
  <div class="api3-land-title">BYOG</div>
  <div class="api3-land-title-desc">Community single sourced dAPIs suitable for development and prototyping.</div>
  <div class="api3-css-nav-box-flex-row">
    <NavBox id="_what-is-byog"/>
  </div>

  <!-- AIRNODE -->
  <div class="api3-land-title">Airnode</div>
  <div class="api3-land-title-desc">Airnode is a  serverless first-party oracle node implemented with a "set and forget" philosophy</div>
  <div class="api3-css-nav-box-flex-row">
    <NavBox id="_airnode-configure-json"/>
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
