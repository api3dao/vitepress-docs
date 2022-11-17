---
title: Staking Tokens
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → DAO Members
path: /guides/dao-members/staking.html
outline: deep
tags:
  - dao
  - staking
  - deposit
  - withdraw
  - unstake
  - guides
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Staking API3 tokens in the [DAO pool](/explore/dao-members/dao-pool.md) makes
you eligible for rewards and governance rights.

<!----- Deposit and Withdraw ----->

## Deposit and Withdraw

Before tokens can be staked you must deposit them in the DAO pool. Doing so will
remove them from your wallet and place them into the DAO pool under the control
of its smart contracts. Deposited tokens show as WITHDRAWABLE can be removed
from the DAO pool at any time and returned to your wallet. Watch the
[Deposit and Withdraw](./videos.md#deposit-and-withdraw) video.

Be sure your wallet is connected to your browser using mainnet, see
[Preparing to use the Dashboard](./#preparing-to-use-the-dashboard).

### Deposit

1. Click the **_Deposit_** button.
   > If this is your first deposit you will need to authorize the DAO pool smart
   > contract first. Use step #2 then step #3. Otherwise skip to step #3.
2. (First time depositors) Enter the number of tokens to deposit and click the
   **_Approve_** button. Give approval to your digital wallet to proceed.
3. Enter the number of tokens to deposit and click the **_Deposit_** button.
   > Note that deposited tokens are not staked. They will not earn rewards or
   > grant you governance rights.

---

### Withdraw

You can only withdraw tokens that are not staked as shown in the **Balance**
box. The max amount that can be withdrawn is displayed as WITHDRAWABLE.

1. Click the **_Withdraw_** link.
2. Enter the number of tokens to withdraw (or select the **Max** link) and click
   the **_Withdraw_** button.
   > The tokens withdrawn are returned to your wallet.

<!----- Stake & Earn ----->

## Stake & Earn

When you stake your deposited tokens you will be granted the right to create and
vote on proposals. In addition you will earn rewards. Rewards are updated every
seven days and are proportional to the number of tokens you have staked in the
DAO pool (as a percentage of the DAO pool). Watch the
[Stake and Earn](./videos.md#stake-and-earn) video.

1. Click the **_Stake_** button.
   > The tokens available to stake depends on the number deposited and are
   > available to withdraw as displayed in the **Balance** box as WITHDRAWABLE.
2. Enter the number of tokens to stake (or select the **Max** link) and click
   the **_Stake_** button.

The DAO uses an adaptive reward system to incentivize staking. Rewards are
updated every seven days and are proportional to the amount of tokens that you
have staked. Rewards will increase to incentivize staking when the pool runs low
and decrease to reduce token emissions when the pool is well funded. To see the
current funding status, you can see the percentage of target met which is
calculated by the total amount staked divided by the staking target.

## Unstake and Claim

Unstake tokens and claims rewards. To incentivize governance responsibilities
and protect the DAO's long term interest, rewards are locked for one year. You
can unstake your tokens at any time but you can only claim rewards after the one
year locking period ends. Note that unstaking will revoke your most recent
weekly reward payment. To protect the DAO from proposal spam, unstaking is
subject to a seven day waiting period. Watch the
[Unstake and Claim](./videos.md#unstake-and-claim) video.

1. Click the **_Initiate Unstake_** link.
2. Enter the number of tokens to unstake (or select the **Max** link) and click
   the **_Initiate Unstaking_** button.
3. Confirm the transaction by clicking the **Initiate Unstaking** button in the
   popup.

After confirming the transaction, the interface will display the pending unstake
and a count down timer in the **Pending** box. During this time the **Unstake &
Withdraw** link and the **Unstake** button will be disabled.

When the seven day waiting period is over, you are ready to complete the unstake
process.

- **Unstake & Withdraw** link: This option will immediately unstake your tokens
  and deposit them into your digital wallet.

OR

- **Unstake** button: This option will unstake the tokens and place them into
  the **Balance** box (as deposited tokens) on the dashboard. From here you can
  use the **Withdraw** link to move the tokens to your digital wallet at any
  time or stake them again.

::: warning Seven day wait period

To protect the DAO from proposal spam, unstaking is subject to a seven day
waiting period.

:::
