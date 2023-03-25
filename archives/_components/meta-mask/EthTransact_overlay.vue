<template>
  <div style="width: 330px">
    <!-- Box-->
    <div class="api3-box-mm">
      <img
        src="/img/meta-mask-header2.png"
        style="border-bottom: 2px solid gray"
      />

      <!-- MetaMask.isUnLocked -->
      <div if="status.unlocked" class="api3-lock-status-mm">Unlocked</div>

      <!-- No MetaMask installed -->
      <div v-if="!browserHasEthereum" style="text-align: center; padding: 15px">
        Please
        <a href="https://metamask.io/download/" target="metamask"
          >install MetaMask</a
        >
        with a compatible browser.
      </div>

      <!-- Only ethereum browser now (no Safari) -->
      <div v-else-if="browserHasEthereum">
        <!-- MetaMask.isLocked -->
        <div v-if="!status.unlocked" class="api3-open-mm">
          Unlock MetaMask
          <br />

          <div style="font-size: small">
            Use the MetaMask button in browser toolbar.
          </div>
          <img
            src="/img/meta-mask-ext-btn.png"
            style="border: 1px solid gray; margin: auto"
          />
        </div>

        <!-- MetaMask status issues -->
        <EthTransactStatus
          v-if="(!status.hasAccount || !status.validChain) && status.unlocked"
          :status="status"
          :accounts="accounts"
          :chain="chain"
        />

        <!-- unlocked, has an account and chain is Goerli -->
        <div v-else>
          <!-- Account -->
          <div v-if="accounts" class="api3-account-mm">
            {{ accounts[0].substr(0, 7) }}...<span
              style="text-decoration: underline"
              >{{ accounts[0].substr(38) }}</span
            >
            <div
              style="font-size: x-small; font-weight: normal; margin-top: -5px"
            >
              Use MetaMask to change the account and / or network.
            </div>
          </div>

          <!-- Chain -->
          <div v-if="status.unlocked && chain" class="api3-chain-mm">
            {{ chain.network.fullname }} ({{ chain.id }})
          </div>

          <!-- Transactions -->
          <div v-if="config && status.unlocked">
            <div style="border-top: solid 2px gray" />
            <EthTransactExecute :config="config" />
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
  props: ['config'], // Configure file for transactions, undefined if transactions are no needed
  data: () => ({
    browserHasEthereum: false,
    status: {
      unlocked: false, // MetaMask is unlocked
      hasAccount: false, // There is a connected account
      validChain: false, // The chain must be Goerli
    },
    accounts: undefined, // The first account from MetaMask in the account array which only ever has one row
    chain: undefined, // { id: <decimal>, network: <object> },
  }),
  methods: {
    async getAccounts() {
      this.status.unlocked = await ethereum._metamask.isUnlocked();
      const accounts = await ethereum.request({
        method: 'eth_accounts',
      });
      console.log('> (overlay) getAccounts', accounts);
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
      console.log('> (overlay) getChain', this.chain.id);
      if (this.chain.id === 5) {
        this.status.validChain = true;
      } else {
        this.status.validChain = false;
      }
    },
  },
  async mounted() {
    if (window.ethereum) {
      this.browserHasEthereum = true;
      console.log('(overlay) WARNING below is OK: wkande Dec 2nd, 2022');
      this.status.unlocked = await ethereum._metamask.isUnlocked();
      //if (this.status.unlocked) {

      //}
      //setTimeout(setup, 10);
      //function setup() {
      this.getAccounts();
      this.getChain();
      //}
    }
    // Setup MetMask events
    if (window.ethereum) {
      console.log('(overlay) Setting up events');
      ethereum.on('accountsChanged', async (data) => {
        console.log('-----> (overlay) accountsChanged');
        this.getAccounts();
        this.getChain();
      });
      ethereum.on('chainChanged', (data) => {
        console.log('-----> (overlay) chainChanged');
        this.getChain();
      });
      ethereum.on('message', (data) => {
        console.log('-----> (overlay) message');
        console.log(message);
      });
    }
  },
};
</script>

<style>
.api3-box-mm {
  border: gray solid 2px;
  padding: 0px;
  border-radius: 0.3em;
}
.api3-open-mm {
  text-align: center;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 18px;
}
.api3-account-mm {
  font-size: small;
  margin-left: 21px;
  font-weight: bold;
  margin-top: 10px;
}
.api3-chain-mm {
  float: right;
  font-size: small;
  margin-top: -43px;
  margin-right: 18px;
  font-weight: bold;
}
.api3-lock-status-mm {
  margin-top: -32px;
  color: white;
  font-size: small;
  position: relative;
  margin-left: 248px;
}
</style>
