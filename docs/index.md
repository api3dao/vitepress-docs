---
layout: home

hero:
  name: API3
  text: Documentation
  tagline:
    API3 builds solutions that bridge the gap between off-chain data and
    on-chain applications with maximum security and minimal latency.
  image:
    src: /img/beacons.svg
    alt: API3
  actions:
    - theme: brand
      text: dAPI
      link: /guides/dapis/
    - theme: brand
      text: OEV Network
      link: /reference/oev-network/
    - theme: brand
      text: QRNG
      link: /reference/qrng/
    - theme: brand
      text: Airnode
      link: /reference/airnode/latest/understand/
    - theme: brand
      text: DAO Members
      link: /reference/dao-members/
---

<script>
export default {
    mounted() {
      // Since this page does not have the sidebar we need to make sure the reference menu is not highlighted
      const api3_navbarReferenceBtn = document.getElementById(
          'api3_Reference_Menu'
      );
      api3_navbarReferenceBtn.style.color = '';
    }
  }
</script>

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
