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
3. If the reader uses MetaMask to switch accounts or networks, the component
   will auto update.
4. The component will only execute transactions on the Goerli network if a
   configuration file is passed to it. Otherwise it acts only as a MetaMask
   status component.

## Usage

Simply add the `<EthTransact/>` component to any markdown page. Without the
optional `config` parameter the component only shows the status of MetaMask.
Open MetaMask to lock, then unlock it. Notice that the component automatically
updates to reflect the lock status of MetaMask.

<EthTransact/>

## Activate Transactions

To activate the transaction capabilities of the component a single parameter is
required.

- `configPath`: (optional) The path to a configuration file that contains
  instructions on what type of transaction the component should make. Use the
  full path from the project root.

```html
<EthTransact config="/dev/using-metamask/src/configDeploy.json" />
```

The configuration file must provide the `action` field to activate transactional
capabilities. There are two types of actions.

- `action:deploy`: Deploys a contract and places its address into
  `localStorage`.
- `action:request`: Makes a request of the deployed contract using the contract
  address from `localStorage`.

### `action:deploy`

Use `action:deploy` to deploy a contract onto the Goerli network. The returned
address will be added to `localStorage` for use when making requests to it.

<<< @/dev/using-metamask/src/configDeploy.json

- `header`: Text that is rendered in the header of the component.
- `description`: A very short description rendered in the body of the component.
  It should be unique so the readers can understand the purpose of the action.
- `action`: The directive or purpose of the component. Use `deploy` to deploy a
  contract.
- `button`: The text used for the button in the component body.
- `paths`: TODO: Not sure about this one yet, abi and bytecode maybe
  - `abi`:
  - `bytecode`:
- `localStorageRootKey`: Serves two purposes. Two components should use the same
  key when they work together. This key is a storage object for their combined
  output.

### `action:request`

Use `action:request` to makes requests of a previously deployed contract address
found in `localStorage` using the `localStorageRootKey` of a related component
that deployed the contract.

<<< @/dev/using-metamask/src/configRequest.json

- `header`: Text that is rendered in the header of the component.
- `description`: A very short description rendered in the body of the component.
  It should be unique so the readers can understand the purpose of the action.
- `action`: The directive or purpose of the component. Use `request` to make a
  request of a previously deployed contract. The contract address is pulled from
  `localStorage` using the `localStorageRootKey`;
- `button`: The text used for the button in the component body.
- `localStorageRootKey`: Serves two purposes. Two components should use the same
  key when they work together. This key is a storage object for their combined
  output.

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

<EthTransact configPath="/dev/using-metamask/src/configDeploy.json"/>
```

## Try It

Note the status of the MetaMask display below in each step below. With MetaMask
unlocked and using the Goerli network, the component will first deploy a
contract (Step #1) and then get thee value of its `greet` variable (Step #2).

This mini guide will deploy the `HelloWorld.sol` contract and then access its
public string `greet`.

### Step #1: Deploy Contract

This step will deploy the `HelloWorld.sol` contract onto the GOERLI network.

<<< @/dev/using-metamask/src/HelloWorld.sol.js

Using the dialog below, select the Deploy button. The dialog will interact with
MetaMask to deploy the contract.

<EthTransact configPath="/dev/using-metamask/src/configDeploy.json"/>

### Step #2: Retrieve `greet` variable

This step will get the value of the `greet` variable from the previously
deployed `HelloWorld.sol` contract.

<EthTransact configPath="/dev/using-metamask/src/configRequest.json"/>
