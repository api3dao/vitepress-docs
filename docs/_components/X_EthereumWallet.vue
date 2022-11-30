<template>
  <div style="width: 250px">
    <button
      class="api3-metamask-connect-button"
      v-if="!browserHasEthereum"
      onclick="window.location.href = 'https://metamask.io/download/';"
    >
      Please install MetaMask
    </button>
    <!-- Unlock button -->
    <button
      class="api3-metamask-connect-button"
      style="color: white !important"
      v-if="metaMaskStatus === 1 && browserHasEthereum"
      @click="eth_requestAccounts()"
    >
      Unlock MetaMask
    </button>

    <!-- Box-->
    <div v-if="metaMaskStatus > 1" class="api3-metamask-box">
      <!-- Box banner -->
      <div class="api3-metamask-box-banner">MetaMask</div>

      <!-- MetaMask busy, manual unlock needed -->
      <div v-if="metaMaskStatus === 3" style="color: red">
        It appears MetaMask is busy and remains locked. Please open MetaMask
        using its button in the upper right hand corner and unlock it.
      </div>
      <!-- MetaMask is unlocked -->
      <div v-if="metaMaskStatus === 2">
        <div>
          <div v-if="accounts">
            - {{ accounts[0].substr(0, 10) }}...{{ accounts[0].substr(38) }}
          </div>
          <div v-if="chain">
            - {{ chain.network.fullname }} ({{ chain.id }})
          </div>
          <div
            v-if="chain.id !== 5 && chain.id !== 11155111"
            style="color: red; font-size: small; font-weight: bold"
          >
            Please use MetaMask and switch to Goerli or Sepolia for this guide.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chainsRef from '../.vitepress/chains.json';

export default {
  name: 'EthereumWallet',
  props: ['elementIds'],
  data: () => ({
    browserHasEthereum: undefined,
    metaMaskStatus: 1, // 1=locked, 2=unlocked, 3=busy
    accounts: undefined, // The first account from MetaMask in the account array which only ever has one row
    chain: undefined, // { id: <decimal>, network: <object> },
  }),
  methods: {
    // The main methods to load the status of MetaMask when unlocked
    // Gets the account and chain
    async eth_requestAccounts() {
      try {
        // Get the accounts array
        this.accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        // Get the chain
        let chain = await ethereum.request({
          method: 'eth_chainId',
        });
        const id = parseInt(chain, 16);
        this.chain = { id: id, network: chainsRef[id] };

        this.metaMaskStatus = 2; // must be at the bottom until data for HTML is populated
      } catch (err) {
        console.log('----- Error > eth_requestAccounts -----');
        this.metaMaskStatus = 3;
        console.error(err);
      }
      this.setStateForElementIds();
    },
    /// Set the props elementIds as enabled or disabled
    setStateForElementIds() {
      this.elementIds.forEach((element) => {
        let el = document.getElementById(element);
        if (this.metaMaskStatus === 2) {
          el.disabled = false;
          el.style.opacity = 1.0;
        } else {
          el.disabled = true;
          el.style.opacity = 0.4;
        }
      });
    },
  },
  async mounted() {
    if (window.ethereum) {
      this.browserHasEthereum = true;
      const lockFlag = await ethereum._metamask.isUnlocked();
      if (lockFlag === false) {
        this.metaMaskStatus = 1;
      } else {
        this.eth_requestAccounts();
      }
    }

    this.setStateForElementIds();

    if (window.ethereum) {
      // Setup MetMask events
      ethereum.on('accountsChanged', async (data) => {
        // The user has locked MetaMask
        if (data.length === 0) {
          this.metaMaskStatus = 1;
          this.chain = undefined;
          this.accounts = undefined;
        } else {
          // Do not call "this.eth_requestAccounts()""
          // Set the accounts
          this.accounts = data;
          // Update the chain
          let chain = await ethereum.request({
            method: 'eth_chainId',
          });
          const id = parseInt(chain, 16);
          this.chain = { id: id, network: chainsRef[id] };
          this.metaMaskStatus = 2;
        }
        this.setStateForElementIds();
      });

      ethereum.on('chainChanged', (data) => {
        const id = parseInt(data, 16);
        this.chain = { id: id, network: chainsRef[id] };
      });
    }
  },
};
</script>

<style>
.api3-metamask-connect-button {
  border: steelblue solid 1px;
  border-radius: 0.3em;
  padding: 6px 10px 6px 10px;
  background-color: steelblue;
  color: white;
  font-size: large;
}
.api3-metamask-box {
  border: gray solid 1px;
  padding: 10px;
  border-radius: 0.3em;
}
.api3-metamask-box-banner {
  text-align: center;
  font-weight: bold;
  background-color: steelblue;
  border-radius: 0.3em;
  margin-bottom: 5px;
  color: white !important;
}
</style>
