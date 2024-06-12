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
      text: Explore
      link: /explore/introduction/
    - theme: brand
      text: Guides
      link: /guides/
    - theme: brand
      text: DAO Members
      link: /explore/dao-members/
    - theme: alt
      text: Airnode Reference
      link: /reference/airnode/latest/understand/
    - theme: alt
      text: dAPIs Reference
      link: /reference/dapis/understand/
    - theme: alt
      text: OIS Reference
      link: /reference/ois/latest/
    - theme: alt
      text: QRNG Reference
      link: /reference/qrng/
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
