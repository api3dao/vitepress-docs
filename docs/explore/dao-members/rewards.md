---
title: Inflationary Rewards
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → DAO Members
path: /explore/dao-members/rewards.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

API3 aims to set up, maintain, and
[monetize](/explore/dao-members/dao-pool.md#monetization) dAPIs at scale. Its
success in doing so can be estimated by its total revenue, as this will increase
with the number of dAPIs and the amount of funds secured by them. API3 generates
revenue through subscription fees and service coverage fees. The fees can be
made in any cryptocurrency, which will be received by the DAO in API3 tokens
through a liquidity pool-based decentralized exchange. To align the governance
incentives with API3’s success, combined with the inflationary rewards, the net
revenue to the DAO will result in burning of API3 tokens. This mechanic will
produce positive staking incentives using inflationary rewards and claim risks
rather than revenue sharing.

> <img src="../assets/images/08-Inflationary_Rewards.png" width="450"/>

> <p>Fees from revenue are burned. Inflationary rewards are distributed by the DAO. Service coverage claims are paid to dAPI covered entities from the pool of staked tokens.</p>

## Earning Rewards

Earning inflationary rewards is simple: everyone who owns shares of the DAO pool
(everyone who has staked API3 tokens into the DAO pool contract) will earn
rewards as they are added to the DAO pool. When you schedule tokens to be
unstaked, you stop earning rewards for those tokens.

Remember that when you stake, you receive non-transferable pool shares equal to
the current total number of issued shares divided by the total number of tokens
staked. Since the reward adds additional tokens to the pool, the "price" for one
share will not always be one token.

## Financial Attraction of Rewards

In essence, inflationary rewards entice token holders to stake and preserve the
value of their tokens. However, staking is risky due to the funds being used as
collateral for service [coverage policies](/explore/dapis/using-dapis.md), and
encourages the staker to participate in governance to ensure that the risk is
minimized. As a combination of the two, an inflationary governance token used as
collateral attracts all token holders to participate in governance, which is
ideal because it maximizes the decentralization of governance. Inflationary
rewards are paid weekly by an implicit and automatic process through an on-chain
contract. Furthermore, inflationary rewards are vested for a year, which results
in governing parties sharing the project’s long term interests.

<!--
> ![dao-pool-staking-2](../assets/images/token-weekly-emission.png)

As a result the change in the total supply of API3 tokens is illustrated below.

> ![dao-pool-staking-2](../assets/images/token-total-supply.png)
> -->

## Reward Calculation And Distribution

The staking reward will float to have the total staked amount reach equilibrium
at the target. In other words, the staking reward will increase while the staked
amount is below the target, and vice versa. It will not have a pre-determined
schedule.

Reward amount is represented as APR (annual percentage rate). You can derive APY
(annual percentage yield) using an
[online calculator<ExternalLinkImage/>](https://www.aprtoapy.com/). There is a
governable "APR update step", which is the step size each week the APR will be
updated with. Also there are governable minimum and maximum APR values, but
these (especially maximum APR) are there as safety measures and should not
affect rewards in day-to-day operation. In general, governing the stake target
will be the primary tool for regulating rewards.

Rewards are added as staked API3 tokens into the DAO pool each time the
`mintReward` function is called. `mintReward` is callable by anyone, once per
"epoch" (and single epoch length is 1 week). When it is called, an amount of
API3 tokens is minted and added to the DAO pool:

> ```
> rewardAmount = totalStakedTokens * APR * epochLengthInSeconds / yearInSeconds / 100
> ```
>
> (see the
> [smart contract source<ExternalLinkImage/>](https://github.com/api3dao/api3-dao/blob/main/packages/pool/contracts/RewardUtils.sol#L24)
> for more information).

In addition, each time `mintReward` is called, the annual percentage (the reward
rate) is updated up or down by the APR update step size (1%), according to
whether the total number of staked tokens is above or below its target. The
initial target is 50%, so if the total number of staked tokens is less than 50%
of the total token supply when `mintReward` is called, APR will be raised by 1%
for the next reward payout (and vice versa). Thus, APR will constantly be
adjusted, but it will always stay between a designated maximum and minimum.

:::info Example

Rewards Distribution User X stakes 600 tokens and user Y stakes 400, so there is
a 60% (X) 40% (Y) split ownership in the 1000 token DAO pool. For a particular
week the reward payout is 1% (10 total tokens) and the pool is now 1010 tokens.
X at 60% now has 606 tokens and Y has 404. Remember that the 10 reward tokens
will not vest for a period of one year.

:::

## Reward Withdrawal

Rewards withdrawals are baked into default withdrawals, except that rewards are
locked for 1 year after minting. As a staker, your pool shares will always
reflect a proportional right to the pool of staked tokens, including any rewards
that have been minted. When you unstake and withdraw your tokens, you will
receive:

- your tokens,
- plus any share of the rewards you earned,
- minus rewards that were added to the pool within the last year, which will
  remain staked.

_To summarize reward withdrawal:_ you will not be able to withdraw your rewards
for a year. Since rewards get paid out every week, you can think of this as a
rolling unlock (the rewards you receive this week will get unlocked 1 year
later, the rewards you will receive next week will get unlocked 1 year 1 week
later, etc.) This 1 year-lock is the secret sauce to good decentralized
governance, it essentially aligns the incentives of the stakers/governors with
the ones of the DAO/project/token for a whole year.

<FlexEndTag/>
