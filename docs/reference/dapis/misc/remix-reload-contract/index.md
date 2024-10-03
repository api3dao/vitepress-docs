---
title: Remix Reload Contract
pageHeader: dAPIs → Miscellaneous
outline: deep
---

<PageHeader/>

# Remix Reload Contract

Some of the guides use the Remix IDE. When you close the Remix IDE or change
workspaces, Remix will lose track of any deployed contracts. This guide will
step you through the process to reload a deployed contract in order to interact
with it again.

## 1. Compile the contract

Select the desired contract in the **FILE EXPLORER** pane. The contract's source
code must be the same as when it was deployed. If you have changed the code,
redeploy it.

Switch to the **SOLIDITY COMPILER** pane. Select the **Compile** button which
should include the name of the contract in its label.

## 2. Reload the contract

Switch to the **DEPLOY & RUN TRANSACTION** pane. Select "Injected Provider -
MetaMask" from the **ENVIRONMENT** pick list. Be sure that MetaMask is set to
the same network and account the contract was deployed with.

Verify the proper contract is selected in the **CONTRACT** pick list.

You will need the contract address that was created when the contract was first
deployed. Hopefully you added it to the `addresses.txt` file found in the **FILE
EXPLORER** pane. If not use MetaMask to get the transaction ID from the
contract's deployment. Use the ID on the appropriate blockchain explorer (such
as [Polygon Mumbai](https://mumbai.polygonscan.com/)) to get the contract's
address.

Enter the contract address to the right of the **At Address** button then select
the button. The contract should now appear below under **Deployed Contracts**.
If you interact with the contract and it consistently returns errors, you
probably did not use the correct contract address.

## YouTube Video

Watch this short video that explains the above steps in more detail.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_bPAEltRhrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
