---
title: Using MetaMask
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
path: /dev/using-metamask/
outline: deep
tags:
head:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Some of the guides use MetaMask with the Goerli testnet. The
[EthTransact.vue](https://github.com/api3dao/vitepress-docs/blob/main/docs/_components/EthereumWallet.vue)
component is used to guide the reader and establish a connection between
MetaMask and the browser's `ethereum` object created by MetaMask. It can then
execute transactions on the Goerli network.

1. The reader will be prompted to unlock MetaMask using the MetaMask extension
   button in the upper right hand corner of their browse.
2. Once unlocked, the status of MetaMask will be display showing the account
   number and chain. The Ethereum provider becomes available as
   `window.ethereum`.
3. If the user uses MetaMask to switch accounts or networks the component will
   auto update.
4. The component will only execute transactions on the Goerli network if a
   configuration file is passed to it. Otherwise it acts only as a MetaMask
   status component.

## Usage

Simply add the `<EthTransact/>` component to any markdown page. Without the
optional `ethConfig` parameter the component only shows the status of MetaMask.
Open MetaMask to lock, then unlock it. Notice that the component automatically
updates to reflect the lock status of MetaMask.

<EthTransact/>

## Activate Transactions

To activate the transaction capabilities of the component a single parameter is
required.

- `ethConfig`: (optional) A configuration file that contains instructions on
  what type of transactions the component should make.

```html
<EthereumWallet ethConfig="./ethConfig.json" />
```

Below is an example of a configuration file to activate transactional
capabilities is in JSON format.

<<< @/dev/using-metamask/ethConfig.json

- `deployments`: An array of deployments that deploys one or more contracts to
  Goerli. The resulting contract addresses can be saved to `localStorage`.

  - `description`: A very short description. It should be unique so the reader
    can difereentuate between deployments.
  - `path`: Path to the compiled contract file.
  - `output`: The result returned from the deployment can be outputted three
    ways.
    - `console`: The full results are placed into the browser's console.
    - `view`: The abridged results are display at the bottom of the component.
    - `localStorage`: The contract address is extracted from the results and
      placed into the browser's localStorage.

- `execute`: Execute a function for a specified contract address, usually saved
  for the guide in `localStorage` after it was deployed.
  - More here when ready
  -

## Example Markdown

Below is a sample of a typical markdown page using the component with the
optional parameter to activate the transactional capabilities of the component.

```md
---
title: Using MetaMask
...: ...
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

<EthereumWallet ethConfig="./ethConfig.json"/>
```

## Try It

Note the status of the MetaMask display below. With MetaMask unlocked, the
component will display a form allowing the reader to execute transactions
relative to the guide, if transaction have been activated.

This mini guide will deploy the `HelloWorld.sol` contract and then access its
public string `greet`.

<<< @/dev/using-metamask/HelloWorld.sol.js

<EthTransact ethConfig="./ethConfig.json"/>

<!-- styles for this page only -->
<style>
.app3-button-meta-mask-submit{
    border:steelblue 1px solid;
    padding:5px 10px 5px 10px;
    border-radius:.3em;
    background-color:steelblue;
    color:white;
    font-size:medium;
}
.api3-meta-mask-form-box{
  border:solid gray 1px;padding:15px;width:200px;text-align:center;
}
</style>
