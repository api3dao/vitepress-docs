---
title: Contract Addresses
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.11
path: /reference/airnode/latest/index.html
version: v0.11
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

Use the contract addresses listed in the tables below to interact with Airnode
on EVM-compatible blockchains. Additional addresses will be added as contracts
are deployed, but feel free to
[submit a GitHub issue<ExternalLinkImage/>](https://github.com/api3dao/airnode/issues)
requesting a new deployment.

## AirnodeRrpV0

<!--------------------------------------->

### • mainnets

<!--ContractAddresses type="mainnet" contractName="AirnodeRrpV0"/-->
<table>
<th class="contract-addresses-heading">Chain</th><th class="contract-addresses-heading">ID</th><th class="contract-addresses-heading">Contract Address</th>
<!-- important -->
<tr v-for="(chain, index) in AirnodeRrpV0" class="contract_tr_highlight">
    <td v-if="chain.important && chain.type ==='mainnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="chain.important && chain.type ==='mainnet'">{{chain.id}}</td>
    <td v-if="chain.important && chain.type ==='mainnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
<!-- not important -->
<tr v-for="(chain, index) in AirnodeRrpV0">
    <td v-if="!chain.important && chain.type ==='mainnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="!chain.important && chain.type ==='mainnet'">{{chain.id}}</td>
    <td v-if="!chain.important && chain.type ==='mainnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
</table>

### • testnets

<!--ContractAddresses type="testnet" contractName="AirnodeRrpV0"/-->
<table >
<th class="contract-addresses-heading">Chain</th><th class="contract-addresses-heading">ID</th><th class="contract-addresses-heading">Contract Address</th>
<!-- important -->
<tr v-for="(chain, index) in AirnodeRrpV0" class="contract_tr_highlight">
    <td v-if="chain.important && chain.type ==='testnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="chain.important && chain.type ==='testnet'">{{chain.id}}</td>
    <td v-if="chain.important && chain.type ==='testnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
<!-- not important -->
<tr v-for="(chain, index) in AirnodeRrpV0">
    <td v-if="!chain.important && chain.type ==='testnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="!chain.important && chain.type ==='testnet'">{{chain.id}}</td>
    <td v-if="!chain.important && chain.type ==='testnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
</table>

## RequesterAuthorizerWithAirnode

<!--------------------------------------->

### • mainnets

<!--ContractAddresses type="mainnet" contractName="RequesterAuthorizerWithAirnode"/-->
<table>
<th class="contract-addresses-heading">Chain</th><th class="contract-addresses-heading">ID</th><th class="contract-addresses-heading">Contract Address</th>
<!-- important -->
<tr v-for="(chain, index) in RequesterAuthorizerWithAirnode" class="contract_tr_highlight">
    <td v-if="chain.important && chain.type ==='mainnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="chain.important && chain.type ==='mainnet'">{{chain.id}}</td>
    <td v-if="chain.important && chain.type ==='mainnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
<!-- not important -->
<tr v-for="(chain, index) in RequesterAuthorizerWithAirnode">
    <td v-if="!chain.important && chain.type ==='mainnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="!chain.important && chain.type ==='mainnet'">{{chain.id}}</td>
    <td v-if="!chain.important && chain.type ==='mainnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
</table>

### • testnets

<!--ContractAddresses type="testnet" contractName="RequesterAuthorizerWithAirnode"/-->
<table >
<th class="contract-addresses-heading">Chain</th><th class="contract-addresses-heading">ID</th><th class="contract-addresses-heading">Contract Address</th>
<!-- important -->
<tr v-for="(chain, index) in RequesterAuthorizerWithAirnode" class="contract_tr_highlight">
    <td v-if="chain.important && chain.type ==='testnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="chain.important && chain.type ==='testnet'">{{chain.id}}</td>
    <td v-if="chain.important && chain.type ==='testnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
<!-- not important -->
<tr v-for="(chain, index) in RequesterAuthorizerWithAirnode">
    <td v-if="!chain.important && chain.type ==='testnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="!chain.important && chain.type ==='testnet'">{{chain.id}}</td>
    <td v-if="!chain.important && chain.type ==='testnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
</table>

## AccessControlRegistry

<!--------------------------------------->

### • mainnets

<!--ContractAddresses type="mainnet" contractName="AccessControlRegistry"/-->
<table>
<th class="contract-addresses-heading">Chain</th><th class="contract-addresses-heading">ID</th><th class="contract-addresses-heading">Contract Address</th>
<!-- important -->
<tr v-for="(chain, index) in AccessControlRegistry" class="contract_tr_highlight">
    <td v-if="chain.important && chain.type ==='mainnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="chain.important && chain.type ==='mainnet'">{{chain.id}}</td>
    <td v-if="chain.important && chain.type ==='mainnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
<!-- not important -->
<tr v-for="(chain, index) in AccessControlRegistry">
    <td v-if="!chain.important && chain.type ==='mainnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="!chain.important && chain.type ==='mainnet'">{{chain.id}}</td>
    <td v-if="!chain.important && chain.type ==='mainnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
</table>

### • testnets

<!--ContractAddresses type="testnet" contractName="AccessControlRegistry"/-->
<table >
<th class="contract-addresses-heading">Chain</th><th class="contract-addresses-heading">ID</th><th class="contract-addresses-heading">Contract Address</th>
<!-- important -->
<tr v-for="(chain, index) in AccessControlRegistry" class="contract_tr_highlight">
    <td v-if="chain.important && chain.type ==='testnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="chain.important && chain.type ==='testnet'">{{chain.id}}</td>
    <td v-if="chain.important && chain.type ==='testnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
<!-- not important -->
<tr v-for="(chain, index) in AccessControlRegistry">
    <td v-if="!chain.important && chain.type ==='testnet'" style="max-width:150px;">{{chain.fullname}}</td>
    <td v-if="!chain.important && chain.type ==='testnet'">{{chain.id}}</td>
    <td v-if="!chain.important && chain.type ==='testnet'" class="contract-addresses-address" NOWRAP>{{chain.contractAddress}}
        <CopyIcon :text="chain.contractAddress" />
    </td>
</tr>
</table>

## RequesterAuthorizerWithErc721

Coming soon.

<FlexEndTag/>

<script setup lang="ts">
    import AirnodeRrpV0 from './src/AirnodeRrpV0.json';
    import AccessControlRegistry from './src/AccessControlRegistry.json';
    import RequesterAuthorizerWithAirnode from './src/RequesterAuthorizerWithAirnode.json';
</script>

<style scoped>
.contract-addresses-address {
  font-family: courier;
  font-size: small;
}
.contract-addresses-heading {
  text-align: left;
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
