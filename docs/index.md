---
layout: home

hero:
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
<div style="margin-top:50px;"/>

<div class="api3-land-box">
<hr/>
  <div style="flex: 0 500px;margin-right:30px;"> 
    <div class="api3-land-desc" ><b>API3</b> builds solutions that
          bridge the gap between off-chain data and on-chain applications with maximum
          security and minimal latency. 
    </div>
    <div style="display: flex;padding-bottom:30px !important">
       <button type="button" class="api3-land-button-feeds">
        <a style="color:white;text-decoration: none;" href="/reference/dapis/understand/">Data Feeds</a>
       </button>
       <button type="button" class="api3-land-button">
        <a class="api3-land-links" href="/reference/oev-network/">OEV Network</a>
       </button>
    </div>
  </div>
  <div class="api3-land-code-image">
    <div>
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ij0eKVIW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/77oanfb0c05w88jlmc8s.jpg"/>
    </div>
  </div>
</div>

<!-- LINK -->
<hr/>
[This section appears to be the top menu bar from the main api3.org page.]

<div class="api3-land-box">

  <div  style="flex: 0 200px;margin-right:30px;margin-top:15px">
     DEVELOPERS
     <br/><br/><a class="api3-land-links" href="">Data feeds</a>
     <br/><br/><a class="api3-land-links" href="">QRNG</a>
     <br/><br/><a class="api3-land-links" href="">Web3 APIs</a>
  </div>
  <div  style="flex: 0 200px;margin-right:30px;margin-top:15px">
     DATA PROVIDERS
     <br/><br/><a class="api3-land-links" href="">Airnode</a>
     <br/><br/><a class="api3-land-links" href="">API3 Alliance</a>
     
  </div>
  <div style="flex: 0 200px;margin-right:30px;margin-top:15px">
     <b>DAO</b>
     <div style="padding-left:7px;">
      <a class="api3-land-links" href="">Overview</a>
      <br/><a class="api3-land-links" href="">Dashboard</a>
      <br/><a class="api3-land-links" href="">Tracker</a>
      <br/><a class="api3-land-links" href="">Docs - ???</a>
      <br/><a class="api3-land-links" href="">Forum</a>
     </div>
  </div>
  <div style="flex: 0 200px;margin-right:30px;margin-top:15px">
     RESOURCES
     <br/><br/><a class="api3-land-links" href="">Docs - ???</a>
     <br/><br/><a class="api3-land-links" href="">Articles - ???</a>
     <br/><br/><a class="api3-land-links" href="">Whitepapers - ???</a>
     <br/><br/><a class="api3-land-links" href="">Overview</a>
  </div>
  <div style="flex: 0 200px;margin-right:30px;margin-top:15px">
     PARTICIPATE
     <br/><br/><a class="api3-land-links" href="">GitHub</a>
     <br/><br/><a class="api3-land-links" href="">Open Bank Project -???</a>
     <br/><br/><a class="api3-land-links" href="">Open Positions - ???</a>
     <br/><br/><a class="api3-land-links" href="">Contact - ???</a>
  </div>
</div>
