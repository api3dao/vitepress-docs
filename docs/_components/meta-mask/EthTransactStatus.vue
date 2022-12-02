<template>
  <div style="padding: 5px 20px 20px 20px">
    <div
      style="
        font-size: large;
        text-align: center;
        border-bottom: solid gray 1px;
        padding-bottom: 5px;
      "
    >
      Status
    </div>

    <!--
      status: {
        unlocked: false, // MetaMask is unlocked
        hasAccount: false, // There is a connected account
        validChain: false, // The chain must be Goerli
      }
    -->

    <!-- status.validChain -->
    <div v-if="chain && status.validChain">
      <span style="color: green; margin-right: 15px">✔︎</span><b>Chain</b>:
      {{ chain.network.fullname }}
    </div>
    <div v-else-if="chain">
      <span style="color: red; margin-right: 17px">✖︎</span
      ><b>Invalid Chain</b>: ({{ chain.network.fullname }}) Open Metamask and
      switch to the Goerli network.
    </div>

    <!-- status.hasAccount -->
    <div v-if="status.hasAccount && accounts">
      <span style="color: green; margin-right: 15px">✔︎</span><b>Account</b>:
      {{ accounts[0].substr(0, 7) }}...{{ accounts[0].substr(38) }}
    </div>
    <div v-else>
      <span style="color: red; margin-right: 17px">✖︎</span><b>No account</b>;
      open Metamask and connect an account for the Goerli network.
    </div>
  </div>
</template>

<script>
import chainsRef from '../../.vitepress/chains.json';

export default {
  name: 'EthTransactStatus',
  props: ['status', 'accounts', 'chain'],
  methods: {},
  async mounted() {},
};
</script>

<style></style>
