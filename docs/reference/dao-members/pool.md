---
title: Pool (Api3Pool.sol)
sidebarHeader: Reference
sidebarSubHeader: DAO Members
pageHeader: Reference → DAO Members
path: /reference/dao-members/pool.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

The API3 Pool contract is where API3 token holders can stake their tokens to
acquire voting power in the DAO. Stakers receive rewards in API3 tokens and can
optionally delegate their voting power to another user.

::: info Paying coverage claims

The DAO pool contract (API3Pool.sol) will also be used to pay coverage claims
out of the DAO pool. This functionality has not been implemented to-date.

:::

See the list of
[pool contracts<ExternalLinkImage/>](https://github.com/api3dao/api3-dao/tree/main/packages/pool/contracts)
and specifically the
[API3Pool.sol<ExternalLinkImage/>](https://github.com/api3dao/api3-dao/blob/main/packages/pool/contracts/Api3Pool.sol)
contract for an understanding of the contract inheritance structure:

- TimelockUtils.sol
- ClaimUtils.sol
- StakeUtils.sol
- TransferUtils.sol
- DelegationUtils.sol
- RewardUtils.sol
- GetterUtils.sol
- StateUtils.sol

## Key Functions

### Depositing, Staking, Unstaking and Withdrawing

| Signature                                         | Description                                                                                                                                                                                                                                                       |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `depositRegular(uint256 amount)`                  | Deposits your API3 tokens into the pool. Tokens must be deposited before they can be staked.                                                                                                                                                                      |
| `stake(uint256 amount)`                           | Stakes deposited API3 tokens. Staked tokens will earn rewards, grant voting power (and may be slashed if there is a claim on the pool—not yet implemented).                                                                                                       |
| `depositAndStake(address source, uint256 amount)` | Deposits and stakes API3 tokens in one transaction.                                                                                                                                                                                                               |
| `scheduleUnstake(uint256 shares)`                 | Schedules staked tokens to be unstaked. In order to unstake API3 tokens, members must first schedule an unstake and wait the scheduled period before unstaking (currently ~1 week). Tokens scheduled to be unstaked no longer grant voting power or earn rewards. |
| `unstake(address userAddress) returns(uint256)`   | Unstakes API3 tokens, allowing them to be withdrawn from the pool (unstaking and withdrawing are separate steps). Can only be called after scheduling an unstake and waiting the scheduled amount of time.                                                        |
| `withdrawRegular(uint256 amount)`                 | Withdraws your API3 tokens from the Pool contract.                                                                                                                                                                                                                |
| `unstakeAndWithdraw(address destination)`         | Unstakes and withdraws tokens in one transaction.                                                                                                                                                                                                                 |

### Timelock

| Signature                                                                                                                    | Description                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `function deposit(address source, uint256 amount, address userAddress)`                                                      | Callable only by the Timelock Manager contract. Deposits tokens on behalf of a user.                                                                                                                              |
| `function depositWithVesting(address source, uint256 amount, address userAddress, uint256 releaseStart, uint256 releaseEnd)` | Callable only by the Timelock Manager contract. Deposits tokens on a vesting schedule on behalf of a user. These vesting tokens cannot be withdrawn by the user until they have vested, but they _can_ be staked. |
| `function updateTimelockStatus(address userAddress, address timelockManagerAddress)`                                         | Updates the vesting status of a user's deposited vesting tokens (i.e. unlocks tokens) according to the schedule in the Timelock Manager contract.                                                                 |

### Voting Power

| Signature                                                | Description                                                                                                                                                                   |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userVotingPowerAt(address userAddress, uint256 _block)` | Returns a user's current voting power (0 if they have delegated it).                                                                                                          |
| `delegateVotingPower(address delegate)`                  | Delegates a member's voting power, as decided by their share of the staking pool, to another address. It is not necessary to undelegate before redelegating to a new address. |
| `undelegateVotingPower()`                                | Undelegates a member's voting power.                                                                                                                                          |

### Other

| Signature                                        | Description                                                                                                                          |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `mintReward()`                                   | Distributes new API3 tokens into the staking pool, where they can be unstaked and withdrawn by members using their share of the pool |
| `payOutClaim(address recipient, uint256 amount)` | A special function callable only by approved claims manager contracts to pay out claims directly from the pool.                      |

<FlexEndTag/>
