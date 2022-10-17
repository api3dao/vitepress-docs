<!--
  This component displays an individual chain.
-->

<template>
  <div>
    <div class="bc-chains-name">
      <a :href="chain.explorerUrl">{{ chain.fullname }} </a
      ><ExternalLinkImage />
    </div>
    <!--div class="bc-chains-short-name">({{ chain.name }})</div-->
    <div class="bc-chains-id">
      Id: <b>{{ chain.id }}</b>
    </div>

    <!-- Contract list -->
    <div
      class="bc-chains-contract-address"
      v-for="(address, key) in chain.contracts"
      v-bind:key="address"
    >
      {{ key }}: <span>{{ address }}</span
      ><CopyIcon :text="address" />
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
  margin-bottom: 5px;
  cursor: pointer;
}
.bc-chains-short-name {
  font-size: small;
  margin-bottom: 3px;
}
.bc-chains-id {
  font-size: small;
}
.bc-chains-contract-address {
  font-family: courier;
  font-size: small;
  margin-top: 3px;
}
</style>
