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
      text: Data Feeds
      link: /guides/dapis/
    - theme: brand
      text: OEV Network
      link: /reference/oev-network/
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

![Auction Cycle](https://res.cloudinary.com/practicaldev/image/fetch/s--Ij0eKVIW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/77oanfb0c05w88jlmc8s.jpg){data-zoomable}
