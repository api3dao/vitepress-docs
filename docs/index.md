---
layout: home
---

<script setup>
	import { onMounted, computed } from 'vue'


	const isMobile = computed(() => {
		return window.innerWidth < 768
	})

	const isTablet = computed(() => {
		return window.innerWidth < 1024 && window.innerWidth >= 768
	})

	const isDesktop = computed(() => {
		return window.innerWidth >= 1024
	})

	




onMounted(() => {
      // Since this page does not have the sidebar we need to make sure the reference menu is not highlighted
      const api3_navbarReferenceBtn = document.getElementById(
          'api3_Reference_Menu'
      );
      api3_navbarReferenceBtn.style.color = '';
})
</script>

<div class='home-hero' >
  <div class='text-content' >
	 <h1 
	 :class="{'font-heading-3': isMobile, 'font-heading-3': isTablet, 'font-heading-2': isDesktop}"
	 > 
	 	<span :class="{'font-subtitle-12': isMobile, 'font-subtitle-9': isTablet, 'font-subtitle-12': isDesktop}">API3</span>
	 	Docs
	 </h1>
	 <p :class="{'font-body-6': isMobile, 'font-body-3': isTablet, 'font-body-6': isDesktop}" v-if="!isDark">
		API3 builds solutions that bridge the gap between off-chain data and
		on-chain applications with maximum security and minimal latency.
	 </p>
	<div  class="actions">
	<a   class="VPButton medium brand" href="/guides/dapis/">
	dAPI
	</a>
	<a   class="VPButton medium brand outline" href="/reference/oev-network/">OEV Network
	</a>
	</div>
  </div>

  <div class='code'>

```solidity
pragma solidity ^0.8.0;

import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";

contract DataFeedReaderExample {
  address public ETH_USD_PROXY =
    0xa47Fd122b11CdD7aad7c3e8B740FB91D83Ce43D1;
  function readDataFeed()
    public
    view
    returns (int224 value, uint32 timestamp)
  {
    (value, timestamp) =
      Iproxy(ETH_USD_PROXY).read();
  }
}
```

  </div>

</div>

<style scoped>
span.font-subtitle-12 {
	display: block;
}



</style>
