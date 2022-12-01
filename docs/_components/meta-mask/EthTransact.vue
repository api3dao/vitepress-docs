<template>
  <div style="width: 330px">
    <!-- Box-->
    <div class="api3-metamask-box">
      <img
        src="/img/meta-mask-header2.png"
        style="border-bottom: 2px solid gray"
      />

      <!-- MetaMask not installed -->
      <div v-if="!browserHasEthereum" style="text-align: center">
        Please
        <a href="https://metamask.io/download/" target="metamask"
          >install MetaMask</a
        >.
        <div style="font-size: small">
          MetaMask compatible browser is required.
        </div>
      </div>
      <div v-else>
        <!-- MetaMask.isLocked -->
        <div v-if="!isUnlocked" class="api3-unlock-meta-mask">
          Please unlock MetaMask.
          <div class="api3-lock-status-meta-mask" style="margin-top: -67px">
            Locked
          </div>
        </div>

        <!-- MetaMask.isUnlocked -->
        <div v-else>
          <div class="api3-lock-status-meta-mask" style="margin-top: -32px">
            Unlocked
          </div>

          <!-- Account -->
          <div v-if="chain" class="api3-account-meta-mask">
            {{ accounts[0].substr(0, 7) }}...{{ accounts[0].substr(38) }}
          </div>

          <!-- Chain -->
          <div v-if="chain" class="api3-chain-meta-mask">
            {{ chain.network.fullname }} ({{ chain.id }})
          </div>

          <!-- Goerli warning -->
          <div
            v-if="chain && chain.id !== 5"
            class="api3-goerli-only-meta-mask"
          >
            <hr style="margin-top: -1px" />
            Please use MetaMask and switch to the Goerli network for this guide.
          </div>

          <!-- Transactions -->
          <div v-if="ethConfig && chain && chain.id === 5">
            <div style="border-top: solid 2px gray" />
            <EthTransactExecute :ethConfig="ethConfig" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chainsRef from '../../.vitepress/chains.json';

export default {
  name: 'EthTransact',
  props: ['ethConfig'], // Configure file for transactions, undefined if transactions are no needed
  data: () => ({
    browserHasEthereum: undefined,
    metaMaskStatus: 1, // 1=locked, 2=unlocked, 3=busy
    isUnlocked: undefined,
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
    },
  },
  async mounted() {
    if (window.ethereum) {
      this.browserHasEthereum = true;
      console.log('YES: we are using ethereum._metamask.isUnlocked()');
      this.isUnlocked = await ethereum._metamask.isUnlocked();
      if (this.isUnlocked === false) {
        this.metaMaskStatus = 1;
      } else {
        this.eth_requestAccounts();
      }
    }

    if (window.ethereum) {
      // Setup MetMask events
      ethereum.on('accountsChanged', async (data) => {
        // The user has locked MetaMask
        if (data.length === 0) {
          this.metaMaskStatus = 1;
          this.isUnlocked = false;
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
          this.isUnlocked = true;
        }
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
.api3-metamask-box {
  border: gray solid 2px;
  padding: 0px;
  border-radius: 0.3em;
}
.api3-unlock-meta-mask {
  text-align: center;
  font-weight: 500;
  margin-top: 10px;
  color: red;
  margin-bottom: 8px;
}
.api3-account-meta-mask {
  font-size: small;
  margin-left: 21px;
  font-weight: bold;
}
.api3-goerli-only-meta-mask {
  padding: 0px 10px 5px 10px;
  font-weight: 500;
  color: red;
  margin-bottom: 8px;
}
.api3-chain-meta-mask {
  float: right;
  font-size: small;
  margin-top: -25px;
  margin-right: 18px;
  font-weight: bold;
}
.api3-lock-status-meta-mask {
  color: white;
  font-size: small;
  position: absolute;
  margin-left: 260px;
}
</style>
