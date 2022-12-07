<template>
  <div v-if="config" style="padding: 15px 5px 5px 5px; text-align: center">
    <div
      style="padding: 0px 8px 0px 25px; font-size: small; text-align: center"
    >
      {{ config.description }}
    </div>
    <div style="margin-top: 20px; margin-bottom: 17px">
      <button @click="request()" class="api3-mm-submit-button">
        {{ config.button }}
      </button>
    </div>
  </div>
</template>

<script>
//import config from `${config}`; //'../dev/using-metamask/config.json';
//import { readFileSync } from 'fs';

//import config from '../../dev/using-metamask/config.json';
//import file from 'raw-loader!../../dev/using-metamask/HelloWorld.sol';

export default {
  name: 'EthTransactExecute',
  props: ['config'],
  data: () => ({}),
  methods: {
    // The main methods to load the status of MetaMask when unlocked
    // Gets the account and chain
    async deploy() {
      try {
        // Get the accounts array
        let response = await ethereum.request({
          method: '?????',
        });
      } catch (err) {
        console.log('----- Error > deploy -----');
        console.error(err);
      }
    },
    request() {
      alert('This is not working as yet.');
    },
  },
  async mounted() {},
};
</script>

<style>
.api3-mm-submit-button {
  border: steelblue solid 1px;
  border-radius: 0.3em;
  padding: 6px 10px 6px 10px;
  background-color: steelblue;
  color: white;
  font-size: large;
}
</style>
