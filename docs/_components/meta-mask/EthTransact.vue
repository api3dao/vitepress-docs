<template>
  <!-- Box-->
  <div class="api3-mm-box">
    <!-- Banner -->
    <div>
      <img
        src="/img/metamak-fox-head.png"
        style="width: 12%; float: left; margin-left: 5px; margin-top: -2px"
      />
      <div v-if="!status.error">
        <!-- No MetaMask installed -->
        <!-- prettier-ignore -->
        <div v-if="!browserHasEthereum" style="text-align: center; padding: 15px">
          Please <a href="https://metamask.io/download/" target="metamask"> 
          install MetaMask</a><br/>with a compatible browser.
        </div>
        <div v-else-if="!config" class="api3-mm-banner">
          <span style="margin-left: -39px">MetaMask</span>
        </div>
        <div v-else-if="config" class="api3-mm-banner">
          <span style="margin-left: -30px">{{ config.header }}</span>
        </div>
      </div>
      <div v-else class="api3-mm-error-msg">{{ status.errorMsg }}</div>
    </div>

    <!-- Connect Wallet -->
    <div
      v-if="browserHasEthereum && !status.unlocked"
      style="text-align: center"
    >
      <button class="api3-mm-connect-btn" @click="openMetaMask()">
        Connect Wallet
      </button>
    </div>

    <!-- Popup is already open -->
    <div
      v-if="status.popupIsOpen"
      style="text-align: center; margin-bottom: 15px"
    >
      MetaMask is already open, try<br />looking behind your browser window.
    </div>

    <!-- Only ethereum browser now (no Safari) -->
    <div v-else-if="browserHasEthereum && !status.error">
      <!-- MetaMask status sub-header -->
      <EthTransactStatus
        v-if="(!status.hasAccount || !status.validChain) && status.unlocked"
        :status="status"
        :accounts="accounts"
        :chain="chain"
      />

      <!-- unlocked, has an account and chain is Goerli -->

      <!-- Account -->
      <div v-if="accounts" class="api3-account-meta-mask">
        {{ accounts[0].substr(0, 7) }}...<span
          style="text-decoration: underline"
          >{{ accounts[0].substr(38) }}</span
        >
        <div style="font-size: x-small; font-weight: normal; margin-top: -5px">
          Open MetaMask to change the account.
        </div>
      </div>

      <!-- Chain -->
      <div v-if="status.unlocked && chain" class="api3-chain-meta-mask">
        {{ chain.network.fullname }} ({{ chain.id }})
      </div>

      <!-- Transactions -->
      <div v-if="config && status.unlocked">
        <div style="border-top: solid 2px gray" />
        <EthTransactExecute :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
import chainsRef from '../../.vitepress/chains.json';
//import c from '/dev/using-metamask/src/configRequest.json';

export default {
  name: 'EthTransact',
  props: ['configPath'], // Configure file for transactions, undefined if transactions are not needed
  data: () => ({
    browserHasEthereum: false,
    status: {
      unlocked: false, // MetaMask is unlocked
      hasAccount: false, // There is a connected account
      validChain: false, // The chain must be Goerli
      popupIsOpen: false, // The -32002 error
      error: false, // There was an error that cannot be recovered from
      errorMsg: undefined,
    },
    config: undefined,
    accounts: undefined, // The first account from MetaMask in the account array which only ever has one row
    chain: undefined, // { id: <decimal>, network: <object> },
  }),
  methods: {
    async openMetaMask() {
      try {
        // Using wallet_requestPermissions rather than eth_requestAccounts
        // to bring the popup back after a -32003 error
        // https://github.com/MetaMask/metamask-extension/issues/10085
        this.status.popupIsOpen = false;
        await ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }],
        });
        this.getAccounts(); // Use to actually get the accounts array
      } catch (err) {
        if (err.code === -32002) {
          this.status.popupIsOpen = true;
        }
        console.log(err);
      }
    },
    async getAccounts() {
      this.status.popupIsOpen = false;
      this.status.unlocked = await ethereum._metamask.isUnlocked();
      const accounts = await ethereum.request({
        method: 'eth_accounts',
      });
      console.log('> getAccounts', accounts);
      if (accounts.length === 0) {
        this.status.hasAccount = false;
        this.accounts = undefined;
      } else {
        this.status.hasAccount = true;
        // Do not call "this.eth_requestAccounts()""
        this.accounts = accounts; // Set the accounts
      }
    },
    async getChain() {
      let chain = await ethereum.request({
        method: 'eth_chainId',
      });
      const id = parseInt(chain, 16);
      this.chain = { id: id, network: chainsRef[id] };
      console.log('> getChain', this.chain.id);
      if (this.chain.id === 5) {
        this.status.validChain = true;
      } else {
        this.status.validChain = false;
      }
    },
  },
  async mounted() {
    // Get the config file if any
    this.$nextTick(async function () {
      console.log('----- MOUNTED', this.configPath);
      try {
        if (this.configPath) {
          // The ignore tells Vite to ignore its warning during builds
          // for dynamic imports.
          this.config = await import(/* @vite-ignore */ this.configPath);
          console.log('this.config.header >', this.config.header);
        }

        if (window.ethereum) {
          this.browserHasEthereum = true;
          console.log('WARNING below is OK: wkande Dec 2nd, 2022');
          this.status.unlocked = await ethereum._metamask.isUnlocked();
          if (this.status.unlocked) {
            this.getAccounts();
            this.getChain();
          }
        }
        // Setup MetMask events
        if (window.ethereum) {
          ethereum.on('accountsChanged', async (data) => {
            console.log('-----> (popup) accountsChanged');
            this.getAccounts();
            this.getChain();
          });
          ethereum.on('chainChanged', (data) => {
            console.log('-----> (popup) chainChanged');
            this.getChain();
          });
        }
      } catch (err) {
        console.log(err);
        this.status.error = true;
        this.status.errorMsg = err.toString();
      }
    });
  },
};
</script>

<style>
.api3-mm-box {
  border: gray solid 2px;
  padding: 0px;
  border-radius: 0.3em;
  max-width: 400px;
}
.api3-mm-banner {
  text-align: center;
  font-size: large;
  padding: 10px;
  border-bottom: solid 2px gray;
}
.api3-mm-connect-btn {
  margin-top: 15px;
  margin-bottom: 20px;
  color: white;
  font-size: large;
  padding: 7px;
  border-radius: 0.3em;
  background-color: steelblue;
  border: 2px solid steelblue;
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
.api3-chain-meta-mask {
  float: right;
  font-size: small;
  margin-top: -43px;
  margin-right: 18px;
  font-weight: bold;
}
.api3-lock-status-meta-mask {
  margin-top: -30px;
  color: white;
  font-size: small;
  position: absolute;
  margin-left: 248px;
}
.api3-mm-error-msg {
  color: red;
  padding-left: 70px;
}
</style>
