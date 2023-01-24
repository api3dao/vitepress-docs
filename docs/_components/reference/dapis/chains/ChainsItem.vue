<!--
  This component displays an individual dAPI chain.
-->

<template>
  <div>
    <div class="bc-chains-name">
      <!--img :src="chain.logoPath" /-->
      <a :href="chain.explorerUrl"
        >{{ chain.fullname }} <ExternalLinkImage />
      </a>
    </div>

    <div style="float: right; margin-top: -23px; font-size: small">
      {{ chain.nativeToken }} -- {{ chain.explorerUrl }}
    </div>

    <div class="bc-chains-id">
      Id: <b>{{ chain.id }}</b>
    </div>

    <!-- Contract list -->
    <div
      class="bc-chains-contract-address"
      v-for="contract in chain.contracts"
      v-bind:key="contract.id"
    >
      {{ contract.name }}: <span>{{ contract.address }}</span
      ><CopyIcon :text="contract.address" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChainsItem',
  props: ['chain'],
};
</script>

<style>
.bc-chains-name {
  font-size: large;
  font-weight: bold;
  cursor: pointer;
}
.bc-chains-id {
  font-size: small;
}
.bc-chains-contract-address {
  font-family: courier;
  font-size: small;
}
</style>
