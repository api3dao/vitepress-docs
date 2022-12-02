<template>
  <div style="width: 330px">
    <!-- Box-->
    <div class="api3-metamask-box">
      <img
        src="/img/meta-mask-header2.png"
        style="border-bottom: 2px solid gray"
      />

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
        <div v-if="!status.unlocked" class="api3-unlock-meta-mask">
          Please unlock MetaMask.
        </div>

        <!-- MetaMask.isUnLocked -->
        <div v-else-if="status.unlocked" class="api3-lock-status-meta-mask">
          Unlocked
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
          <div v-if="accounts" class="api3-account-meta-mask">
            {{ accounts[0].substr(0, 7) }}...<span
              style="text-decoration: underline"
              >{{ accounts[0].substr(38) }}</span
            >
            <div
              style="font-size: x-small; font-weight: normal; margin-top: -5px"
            >
              Use MetaMask to change the account.
            </div>
          </div>

          <!-- Chain -->
          <div v-if="status.unlocked && chain" class="api3-chain-meta-mask">
            {{ chain.network.fullname }} ({{ chain.id }})
          </div>

          <!-- Transactions -->
          <div v-if="ethConfig">
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
        console.log('-----> accountsChanged');
        //console.log(ethereum.selectedAddress);

        this.getAccounts();
        this.getChain();
      });
      ethereum.on('chainChanged', (data) => {
        console.log('-----> chainChanged');
        this.getChain();
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
</style>
