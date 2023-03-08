<!--
  This component displays a list of all chains sorted by name.
-->

<template>
  <div v-if="loaded === true">
    <p v-show="error !== null" class="bc-chains-list-error">
      The chain list failed to load: ({{ error }})
    </p>
    <div v-show="!error">
      <div style="margin-top: 4px; font-size: small">
        Chains: ({{ chainsCnt }})
      </div>
      <hr />

      <!-- Start chain list -->
      <div class="bc-chains-box" v-for="chain in chains" v-bind:key="chain.id">
        <ChainsItem :chain="chain" />
      </div>
    </div>
  </div>
  <div v-else style="padding-left: 155px">
    <img src="/img/spinner.gif" v-show="showSpinner" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChainsList',
  data: () => ({
    loaded: false,
    showSpinner: true,
    error: null,
    chains: undefined,
    chainsCnt: Number,
  }),
  mounted() {
    this.$nextTick(function () {
      this.loadChainsFromRepo();
    });
  },
  methods: {
    async loadChainsFromRepo() {
      try {
        // March 8th, 2023
        // https://db-api-prod.api3.org/api/docs-chains-reference
        // The production endpoint is broken, Aaron said to use stage for now. There is an issue
        // as a reminder to switch back in hte future.
        // When making the switch back to prod, be sure to change "api3-docs" as well.
        const response = await axios.get(
          'https://db-api-staging.api3.org/api/docs-chains-reference'
        );
        this.chains = response.data;
        this.chainsCnt = Object.keys(this.chains).length; //keys.length;
      } catch (err) {
        console.error(err.toString());
        this.error = err.toString();
      }
      this.showSpinner = false;
      this.loaded = true;
    },
  },
};
</script>

<style>
.bc-chains-list-error {
  color: red;
}
.bc-chains-box {
  overflow-wrap: anywhere;
  padding-top: 5px;
  padding-left: 16px;
  padding-right: 5px;
  padding-bottom: 10px;
  border: solid lightgrey 1px;
  border-radius: 0.5em;
  margin-bottom: 15px;
  max-width: 620px;
}
</style>
