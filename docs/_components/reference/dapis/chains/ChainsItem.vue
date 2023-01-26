<!--
  This component displays an individual chain.
-->

<template>
  <div>
    <div class="bc-chains-name">
      <a :href="chain.explorerUrl"
        >{{ chain.fullName }} <ExternalLinkImage
      /></a>
    </div>

    <div style="float: right; margin-top: -28px; font-size: small">
      {{ chain.nativeToken }}
    </div>

    <div class="bc-chains-id">
      Id: <b>{{ chain.id }}</b>
    </div>

    <!-- Contracts -->
    <div class="bc-chains-contract-address">
      AirnodeRrpV0: <span>{{ chain.contracts['AirnodeRrpV0'] }}</span
      ><CopyIcon :text="chain.contracts['AirnodeRrpV0']" /> <br />DapiServer:
      <span>{{ chain.contracts['DapiServer'] }}</span
      ><CopyIcon :text="chain.contracts['DapiServer']" />
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
