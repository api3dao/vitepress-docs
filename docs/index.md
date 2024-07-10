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

![Auction Cycle](https://res.cloudinary.com/practicaldev/image/fetch/s--Ij0eKVIW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/77oanfb0c05w88jlmc8s.jpg){data-zoomable}

<!--div>
    <img data-zoomable src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ij0eKVIW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/77oanfb0c05w88jlmc8s.jpg"/>
    </div-->

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

.api3-land-box{
  display: flex;
  flex-wrap: wrap;
  padding-bottom:30px;

}
.api3-land-desc{
  font-size:x-large;
  color:gray; line-height: 1.4;
}
.api3-land-code-image{
  flex: 0 600px;
  ;
}
.api3-land-button-feeds{
  margin-top:30px;
  margin-right:20px;
  font-size:large;
  border-radius:4px;
  width:200px;
  border:#4169E1 solid 1px;
  padding:7px;
  background-color:#4169E1;
}
.api3-land-button{
  margin-top:30px;
  font-size:large;
  border-radius:4px;
  width:200px;
  border:gray solid 1px;
  padding:7px;
}

.api3-land-links{
  color:gray !important;
  text-decoration:none !important;
}
</style>

<!-- DESCRIPTION and CODE IMAGE-->
<!--div style="margin-top:50px;"/>

<div class="api3-land-box">
  <div style="flex: 0 500px;margin-right:30px;">
    <h1>API3 Docs</h1><br/>
    <div class="api3-land-desc" ><b>API3</b> builds solutions that
          bridge the gap between off-chain data and on-chain applications with maximum
          security and minimal latency.
    </div>
    <div style="display: flex;padding-bottom:30px !important">
    <a style="color:white;text-decoration: none;" href="/reference/dapis/understand/">
        <button type="button" class="api3-land-button-feeds">
          Data Feeds
        </button>
       </a>
       <a class="api3-land-links" href="/reference/oev-network/">
        <button type="button" class="api3-land-button">
          OEV Network
        </button>
       </a>
    </div>
  </div>
  <div class="api3-land-code-image">
    <div>
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ij0eKVIW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/77oanfb0c05w88jlmc8s.jpg"/>
    </div>
  </div>
</div-->
