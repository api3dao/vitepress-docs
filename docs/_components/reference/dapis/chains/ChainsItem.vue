<!--
  This component displays an individual chain.
-->

<template>
  <div class="api3-bc-chains-name">
    <a :href="chain.explorerUrl"
      >{{ chain.fullName }} <ExternalLinkImage />

      <div class="api3-bc-chain-token">
        {{ chain.nativeToken }}
      </div>

      <div class="api3-bc-chains-id">
        Id: <b>{{ chain.id }}</b>
      </div>

      <!-- Contracts -->
      <!--div class="bc-chains-contract-address">
      AirnodeRrpV0: <span>{{ chain.contracts['AirnodeRrpV0'] }}</span
      ><CopyIcon :text="chain.contracts['AirnodeRrpV0']" />
      <br />DapiServer:
      <span>{{ chain.contracts['DapiServer'] }}</span
      ><CopyIcon :text="chain.contracts['DapiServer']" />
    </div-->
    </a>
  </div>
</template>

<script>
export default {
  name: 'ChainsItem',
  props: ['chain'],
};
</script>

<style>
.api3-bc-chains-name {
  font-size: large;
  font-weight: bold;
  margin-bottom: 5px;
  cursor: pointer;
}
.api3-bc-chains-short-name {
  font-size: small;
  margin-bottom: 3px;
}
.api3-bc-chain-token {
  float: right;
  margin-top: -7px;
  font-size: small;
  color: gray;
}

.api3-bc-chains-id {
  font-size: small;
  color: gray;
}
/*.api3-bc-chains-contract-address {
  font-family: courier;
  font-size: small;
  margin-top: 3px;
}*/
</style>
