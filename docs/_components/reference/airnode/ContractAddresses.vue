<!--
  This component displays a protocol contracts and their chains with addresses. If the chain
  is not listed in /docs/.vuepress/chains.json then any address related to it will not 
  appear in this component.

  Parameters:
  type: mainnet, testnet
  contractName: AirnodeRrpV0, RequesterAuthorizerWithAirnode, AccessControlRegistry
-->

<template>
  <div v-if="loaded === true">
    <!-- ERROR -->
    <p v-show="error !== null" class="contract-addresses-error">
      The Contract list failed to load: ({{ error }})
    </p>

    <!-- CONTRACT LIST -->
    <div v-show="error == null">
      <table>
        <th class="contract-addresses-heading">Chain</th>
        <th class="contract-addresses-heading">ID</th>
        <th class="contract-addresses-heading">Contract Address</th>
        <tr
          v-for="(item, index) in items"
          v-bind:key="index"
          v-show="type === item.type"
          v-bind:class="{
            contract_tr_highlight: item.important,
          }"
        >
          <td>
            {{ item.fullname }}
          </td>
          <td>
            {{ item.chainId }}
          </td>
          <td NOWRAP>
            <span
              :id="item.type + '-' + contractName + '-' + index"
              class="contract-addresses-address"
              >{{ item.address }}</span
            >
            <CopyIcon :text="item.address" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import chainsRef from '../../../.vitepress/chains.json';
export default {
  name: 'ContractAddresses',
  props: ['type', 'contractName', 'ignoreTabsSlot'],
  data: () => ({
    loaded: false,
    //showSpinner: true,
    error: null,
    contracts: [],
    chains: {},
    list: {},
    items: [],
  }),
  mounted() {
    console.log('this.ignoreTabsSlot', this.ignoreTabsSlot);
    //if (this.ignoreTabsSlot) return;
    this.$nextTick(async function () {
      console.log('----- MOUNTED ----- ContractAddresses -----');
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/airnode/master/packages/airnode-protocol/deployments/references.json'
        );

        // Build the list of chains for the contract and network type passed.
        // A few chains are important and need to be at the top of their list.
        const important = [1, 3, 4, 5, 42, 11155111];
        let importantArr = [];
        let notImportantArr = [];
        //console.log(response.data);
        for (const key in response.data[this.contractName]) {
          // Here the network is not in chainsRef list
          // Is it a testnet or mainnet, tell by its repo name
          if (!chainsRef[key]) {
            let network = 'mainnet';
            if (response.data.chainNames[key].indexOf('testnet') > -1) {
              network = 'testnet';
            }
            importantArr.push({
              address: response.data[this.contractName][key],
              chainId: parseInt(key),
              fullname: response.data.chainNames[key],
              type: network,
            });
            // Here the chain is in the chainsRef list
          } else if (chainsRef[key].type === this.type) {
            if (important.includes(parseInt(key))) {
              importantArr.push({
                address: response.data[this.contractName][key],
                chainId: parseInt(key),
                fullname: chainsRef[key].fullname,
                important: true,
                type: chainsRef[key].type,
              });
            } else {
              notImportantArr.push({
                address: response.data[this.contractName][key],
                chainId: parseInt(key),
                fullname: chainsRef[key].fullname,
                type: chainsRef[key].type,
              });
            }
          }
        }
        this.items = importantArr.concat(notImportantArr);
      } catch (err) {
        this.error = err.toString();
        console.error('error:', this.error);
      }

      // Page state
      //this.showSpinner = false;
      this.loaded = true;
    });
  },
};
</script>

<style scoped>
.contract-addresses-address {
  font-family: courier;
  font-size: small;
}
.contract-addresses-heading {
  text-align: left;
}
.contract-addresses-error {
  color: red;
}
.contract-addresses-table tr:nth-child(even) td {
  background: white;
}
.contract-addresses-copy-icon {
  margin-left: 5px;
  cursor: pointer;
  height: 11px;
}
.contract_tr_highlight td {
  background-color: #e5ecf9;
  color: black;
  /*-webkit-transition: all 1s linear;*/
}
</style>
