---
title: The DAO Pool
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → DAO Members
path: /explore/dao-members/dao-pool.html
outline: deep
tags:
  - dao
---

<PageHeader/>

# {{$frontmatter.title}}

The API3 DAO has a single staking pool called the **DAO pool**. Staking API3
tokens in the pool will grant representation and staking rewards, but at the
same time, the staked tokens will be used as collateral to pay out service
coverage claims as needed. To do this, the pool focuses on three token utilities
and implements service coverage which, by design, balances rewards and risks
through responsible governance.

## Tokens

API3 is the native token of the API3 project. The API3 ecosystem is a single
token environment. Check out the Medium post
[API3 Tokenomics Update](https://medium.com/api3/api3-tokenomics-update-f032d6e49b30)<ExternalLinkImage/>
for an in-depth overview on API3 tokenomics.

### Unstaked Tokens

Unstaked tokens are simply owned by an entity and do not generate revenue or
have voting rights. They are subject to market value and inflation.

### Staked Tokens

Staked API3 tokens are used as collateral for the on-chain service coverage that
will provide quantifiable and trustless security guarantees to dAPI users. These
mechanics will remove the need for a central authority at the ecosystem level.

Staking simply means you are placing API3 tokens into the DAO pool. When staking
tokens to the DAO pool you gain access to weekly staking rewards but also share
in the risk of service coverage. You are also granted voting rights on active
DAO proposals and inflationary rewards.

To stake your tokens see [Staking Tokens](/reference/dao-members/staking.md).
You can stake as many times as you’d like. Your percentage of all the tokens in
the DAO pool are directly related to your percentage of the rewards and the
risks. If you stake 10% of the pool you earn 10% of rewards and will pay 10% of
service coverage claims.

## Token Utilities

Decentralized governance requires well-balanced incentive mechanisms that
accurately model both positive and negative outcomes. In other words, the
governing entities should be rewarded for good results and penalized for bad
ones. The API3 token is designed to facilitate this through three main
utilities:

_Main utilities of the API3 token._

> <img src="../assets/images/dao-pool-token-utils.png" width="200"/>
>
> 1. [Staking](dao-pool.md#staking): Grants membership in the API3 DAO and
>    rights to [inflationary rewards](dao-pool.md#inflationary-rewards).
> 1. [Collateral](dao-pool.md#collateral): Backs service coverage that protect
>    users from damages caused by dAPI malfunctions.
> 1. [Governance](dao-pool.md#governance): Grants direct representation in the
>    API3 DAO.

Note that it is critical for these three utilities to coincide. All governing
entities must receive staking rewards for them to govern in a way that maximizes
revenue. All governing entities must have their funds used as collateral for
them to govern in a way that minimizes **_security_** risks. "_Security_" refers
to a "guarantee or reliability of dAPI service"

Reference <a href="/api3-whitepaper-v1.0.3.pdf#page=25" target="_blank">section
5.4 _"API3 Tokenomics"_</a><ExternalLinkImage/> of the API3 whitepaper.

### Staking

The staking utility incentivizes participation in the DAO and alignment of
incentives. By staking your API3 tokens into the DAO pool, you receive
governance voting rights and take part in providing API3 users with quantifiable
_security_ in the form of service coverage. The DAO pool also grants you
inflationary rewards and exposes you to the risk of service coverage claims.

> <img src="../assets/images/dao-pool-staking.png" width="350"/>
>
> <p class="diagram-line" style="color:gray;margin-top:25px;">Staked tokens in the DAO pool grant 
> governance voting rights, inflationary rewards and are used to fund the coverage 
> service which exposes staked tokens to the risks of service coverage claims.</p>

**Benefits:**

- Generates inflationary rewards by decreasing the circulating supply of API3
  tokens through revenue burn from service coverage fees.
- Improved token inflation protection compared to unstaked tokens.
- Voting privileges on DAO proposals.

**Risks:**

- Staked tokens in the DAO pool are used to cover potential financial losses
  from dAPI malfunctions that the dAPI consumer might incur.

To stake your tokens, see the guide
[Staking Tokens](/guides/dap-members/staking.md). You can stake as many times as
you’d like. Your percentage of all the tokens in the DAO pool are directly
related to your percentage of the rewards and the risks. If you stake 10% of the
pool you earn 10% of rewards and will pay 10% of service coverage claims.

### Collateral

The collateral utility has the participants share the DAO's operational risk and
incentivizes them to minimize it.

If staking tokens only yielded rewards, the sole governance incentive would be
to maximize the revenue. This would be done by increasing the number of dAPI
users aggressively, and the amount that is secured by the dAPIs with it. Doing
so puts excessive pressure on a dAPI which is more likely to malfunction due to
an attack. Therefore, this is not a sustainable governance strategy for
decentralized data feeds.

Exposing the governing parties to the risk would align their incentives with
that of the DAO. The governing parties need to be penalized when a dAPI
malfunction occurs using an onchain service coverage that provides dAPI users
with quantifiable and trustless security guarantees. The
[Service Coverage](dao-pool.md#service-coverage) uses staked tokens of the DAO
pool as collateral, which means that when a dAPI malfunction is confirmed
through the dispute resolution protocol, user damages will be covered from the
pool's staked tokens.

Reference <a href="/api3-whitepaper-v1.0.3.pdf#page=27" target="_blank">section
5.4.2 _"Collateral"_</a><ExternalLinkImage/> of the API3 whitepaper.

### Governance

The governance utility gives the participants the ability to enact and manage
staking and collateral.

The only way to gain representation in the DAO is to stake API3 tokens in the
pool. Staked tokens give their holders the right to take part in the governance
of the API3 ecosystem through the DAO. To vote token holders must stake their
API3 tokens in the pool, which also gives them access to weekly staking rewards
but also share in the risk of service coverage.

All governing parties will be exposed to all risks and rewards of API3, and will
govern to optimize them. Inflationary rewards and the staked tokens being used
as collateral will create a positive feedback loop in terms of governance
quality. Initial token holders will have to stake and expose themselves to risk
if they do not want to lose value to inflation. If they misgovern and lose
collateral through service coverage claims, these tokens will get returned to
the open market, from where they will be acquired by new governing parties. In
contrast, if initial token holders govern well and cause token scarcity in the
market, the representation distribution will be protected. In other words,
governance tokens being used as collateral results in a robust Darwinian
structure that improves itself and is able to recover from failures.

## Monetization

In general the industry standard for API provider subscription fees are commonly
paid monthly or annually, as this scheme suits both API providers and their
clients. API3 follows the same scheme for dAPIs.

### dAPI monetization

To gain access to a dAPI, a dApp will pay a recurring subscription fee, which
may be fixed or customized for the dApp based on a specific use case. These
prices will be determined by the respective team, and will include a premium if
the dApp wants to receive [Service Coverage](dao-pool.md#service-coverage). The
payment can be made in any cryptocurrency, which will be received by the DAO in
API3 tokens through a liquidity pool-based decentralized exchange.

### API provider compensation

API providers will be compensated periodically at fixed rates, which will fit
their existing pricing models. This will be done using stable coins wherever
possible, some API providers categorically reject handling cryptocurrency as
payment. In such cases, the DAO will provide a grant that will be paid out in
return of the proof that the API provider is compensated in fiat by the grantee.

## Rewards

API3 aims to set up, maintain, and [monetize](dao-pool.md#monetization) dAPIs at
scale. Its success in doing so can be estimated by its total revenue, as this
will increase with the number of dAPIs and the amount of funds secured by them.
API3 generates revenue through subscription fees and service coverage fees. The
fees can be made in any cryptocurrency, which will be received by the DAO in
API3 tokens through a liquidity pool-based decentralized exchange. To align the
governance incentives with API3’s success, combined with the inflationary
rewards, the net revenue to the DAO will result in burning of API3 tokens. This
mechanic will produce positive staking incentives using inflationary rewards and
claim risks rather than revenue sharing.

> <img src="../assets/images/dao-pool-staking-2.png" width="450"/>
>
> <p>Fees from revenue are burned. Inflationary rewards are distributed by the DAO. Service coverage claims are paid to dAPI covered entities from the pool of staked tokens.</p>

### Earning Rewards

Earning rewards is simple: everyone who owns shares of the DAO pool (everyone
who has staked API3 tokens into the DAO pool contract) will earn rewards as they
are added to the DAO pool. When you schedule tokens to be unstaked, you stop
earning rewards for those tokens.

Remember that when you stake, you receive non-transferable pool shares equal to
the current total number of issued shares divided by the total number of tokens
staked. Since the reward adds additional tokens to the pool, the "price" for one
share will not always be one token.

### Inflationary Rewards

In essence, inflationary rewards force token holders to stake and preserve the
value of their tokens. However, staking is risky due to the funds being used as
collateral for [Service Coverage](dao-pool.md#service-coverage), and forces the
staker to participate in governance to ensure that the risk is minimized. As a
combination of the two, an inflationary governance token used as collateral
forces all token holders to participate in governance, which is ideal because it
maximizes the decentralization of governance. Inflationary rewards are paid
weekly by an implicit and automatic process through an on-chain contract.
Furthermore, inflationary rewards are vested for a year, which results in
governing parties sharing the project’s long term interests.

<!--
> ![dao-pool-staking-2](../assets/images/token-weekly-emission.png)

As a result the change in the total supply of API3 tokens is illustrated below.

> ![dao-pool-staking-2](../assets/images/token-total-supply.png)
> -->

### Reward Calculation And Distribution

The staking reward will float to have the total staked amount reach equilibrium
at the target. In other words, the staking reward will increase while the staked
amount is below the target, and vice versa. It will not have a pre-determined
schedule.

Reward amount is represented as APR (annual percentage rate). You can derive APY
(annual percentage yield) using an
[online calculator](https://www.aprtoapy.com/)<ExternalLinkImage/>. There is a
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
> [smart contract source](https://github.com/api3dao/api3-dao/blob/main/packages/pool/contracts/RewardUtils.sol#L24)
> for more information)<ExternalLinkImage/>.

In addition, each time `mintReward` is called, the annual percentage (the reward
rate) is updated up or down by the APR update step size (1%), according to
whether the total number of staked tokens is above or below its target. The
initial target is 50%, so if the total number of staked tokens is less than 50%
of the total token supply when `mintReward` is called, APR will be raised by 1%
for the next reward payout (and vice versa). Thus, APR will constantly be
adjusted, but it will always stay between a designated maximum and minimum.

:::tip Example

Rewards Distribution User X stakes 600 tokens and user Y stakes 400, so there is
a 60% (X) 40% (Y) split ownership in the 1000 token DAO pool. For a particular
week the reward payout is 1% (10 total tokens) and the pool is now 1010 tokens.
X at 60% now has 606 tokens and Y has 404. Remember that the 10 reward tokens
will not vest for a period of one year.

:::

### Reward Withdrawal

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

## Service Coverage

::: warning Please note Service Coverage products are not implemented yet.

Before they are, a proposal with a 50% quorum requirement will have to be passed
for them to go active

:::

API3 provides dAPI users with a quantifiable level of _security_ in the form of
an on-chain service coverage. Staked tokens in the DAO pool are used to cover
potential financial losses from dAPI malfunctions that the dAPI consumer might
incur. This accomplishes two goals.

- Service coverage acts as a well-defined and trustless safety net in case of a
  dAPI malfunction.
- It holds the governing parties responsible for dAPI malfunctions, and thus
  incentivizes them to govern towards more secure dAPIs.

API3 co-developed an on-chain service coverage with Kleros that provides
quantifiable and trustless _security_ to dAPI users. This service coverage will
protect the dAPI user against damages caused by certain dAPI malfunctions up to
a payout limit. Note that even if API3 did not provide this service, the dAPI
user could have received on-chain service coverage using a third party solution.
Such a solution would tend towards charging very high service coverage premiums,
as they would not have access to the information and expertise to accurately
assess dAPI risks.

The proposed service coverage is special in the way that it is collateralized by
the funds staked by the governing parties of the API3 DAO into the DAO pool.
Therefore, it not only provides _security_ to the dAPI user, but also creates a
very strong incentive for dAPIs to be governed in a way that dAPI _security_ is
maximized, which will further decrease service coverage costs.

### Claim Risks

The staked tokens in the pool are used as collateral for service coverage
claims. Any payout results in the reduction of the total token count in the
pool. The reduction is charged against each entity's percentage of tokens in the
pool.

::: tip Claim Risks Example

User X and Y both stake 500 API3 tokens, so each has 50% ownership in a 1000
token DAO pool. There is a service coverage claim payout of 3.4 tokens and the
pool is now 996.6 tokens. X and Y now own 498.3 tokens each based on their 50%
ownership.

:::

### ClaimsManager

To insure against potential system failures, the DAO pool can empower special
`ClaimsManager` contracts to withdraw staked tokens directly. Approved
`ClaimsManager` contracts do this by calling
`payOutClaim(address recipient, uint256 amount)` in the DAO pool contract, which
transfers tokens from the DAO pool to the recipient. When this occurs, the total
number of staked tokens goes down, and pool share value goes down in turn.
Reference <a href="/api3-whitepaper-v1.0.3.pdf#page=31" target="_blank">section
6.3 _"Service coverage process"_</a><ExternalLinkImage/> of the API3 whitepaper.
