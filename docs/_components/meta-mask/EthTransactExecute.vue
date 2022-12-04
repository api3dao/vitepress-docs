<template>
  <div v-if="config" style="padding: 15px 5px 5px 5px; text-align: center">
    <div style="padding: 0px 8px 0px 25px; font-size: small; text-align: left">
      {{ config.description }}
    </div>
    <select class="api3-mm-picklist">
      <option
        v-for="item in config.deployments"
        :key="item.description"
        value="item.description"
      >
        Deploy: {{ item.description }}
      </option>
      <option
        v-for="item in config.requests"
        :key="item.description"
        value="item.description"
      >
        Request: {{ item.description }}
      </option>
    </select>
    <div style="margin-top: 20px; margin-bottom: 17px">
      <button class="api3-mm-submit-button">Submit</button>
    </div>
  </div>
</template>

<script>
//import config from `${ethConfig}`; //'../dev/using-metamask/ethConfig.json';
//import { readFileSync } from 'fs';

import config from '../../dev/using-metamask/ethConfig.json';
//import file from 'raw-loader!../../dev/using-metamask/HelloWorld.sol';

export default {
  name: 'EthTransactExecute',
  props: ['ethConfig'],
  data: () => ({
    config: undefined,
  }),
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
  },
  async mounted() {
    this.config = config;
    //console.log('MOUNTED EthTransactExecute', this.ethConfig);
    //console.log(JSON.stringify(config, undefined, 4));

    // https://www.digitalocean.com/community/tutorials/vuejs-file-reader-component
    /*const reader = new FileReader();
    console.log(reader);
    reader.onload = (e) => console.log(e.target.result);
    reader.readAsText('../dev/using-metamask/HelloWorld.sol');
    console.log(file);*/
  },
};
</script>

<style>
.api3-mm-picklist {
  font-size: medium;
  padding: 5px;
  color: gray;
  padding-left: 15px;
  border: 1px solid gray;
  border-radius: 5px;
  /* Do not change the below settings. These are needed
     for mobile devices to prevent horizontal scrolling
     of the viewport, excluding margin-top.
  */
  margin-left: 0px;
  margin-top: 15px;
  max-width: 300px;
}
.api3-mm-submit-button {
  border: steelblue solid 1px;
  border-radius: 0.3em;
  padding: 6px 10px 6px 10px;
  background-color: steelblue;
  color: white;
  font-size: large;
}
</style>
