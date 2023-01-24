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
import chainsRef from '../../../../.vitepress/chains.json';

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
        const response = await axios.get(
          'https://db-api-prod.api3.org/api/docs-chains-reference'
        );
        this.chains = this.sortByName(response.data);

        // Add local chains reference data
        for (const chain in this.chains) {
          const id = this.chains[chain].id;
          this.chains[chain].type = chainsRef[id].type;
          this.chains[chain].name = chain;
          if (chainsRef[id].fullname) {
            this.chains[chain].fullname = chainsRef[id].fullname;
          } else {
            this.chains[chain].fullname = chain + '*';
          }
          delete this.chains[chain].fullName; // Replaced by fullname
        }

        // Sort by fullname
        this.chains = this.sortByName(this.chains);

        // Hardcode contract for polygon-testnet
        this.chains['polygon-testnet'].contracts[
          'SelfServeDapiServerWhitelister'
        ] = '0x78D95f27B068F36Bd4c3f29e424D7072D149DDF3';

        var keys = [];
        for (var k in this.chains) keys.push(k);
        this.chainsCnt = keys.length;
      } catch (err) {
        console.error(err.toString());
        this.error = err.toString();
      }
      this.showSpinner = false;
      this.loaded = true;
    },
    /// Sorts the chains json object by its root keys which is the chain names.
    sortByName(o) {
      return Object.keys(o)
        .sort()
        .reduce((r, k) => ((r[k] = o[k]), r), {});
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
  margin-bottom: 20px;
  max-width: 620px;
}
</style>
