---
title: Coverage Policies
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/coverage-policies.html
outline: deep
tags:
  - dao
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

::: warning Please note the coverage policies are not fully implemented yet.
They will be implemented when a proposal with a quorum requirement of 50% has
been passed.

:::

API3 provides dAPI users with a quantifiable level of _security_ as on-chain
service coverage. Staked tokens in the DAO pool are used to cover potential
financial losses from dAPI malfunctions that the dAPI consumer might incur.
Thanks to that, two things become possible:

- Service coverage acts as a well-defined and trustless safety net in case of a
  dAPI malfunction.
- The coverage holds the governing parties responsible for dAPI malfunctions,
  thus incentivizing them to govern towards more secure dAPIs.

## Quantifiable and trustless security

API3 co-developed on-chain service coverage with Kleros that provides
quantifiable and trustless _security_ to dAPI users. This service coverage will
protect the dAPI user against damages caused by certain dAPI malfunctions up to
a payout limit. Note that even if API3 did not provide this service, the dAPI
user could have received on-chain service coverage using a third-party solution.
Such a solution would tend toward charging very high service coverage premiums
as they would not have access to the information and expertise to accurately
assess dAPI risks.

What the proposed service coverage is special because it is collateralized by
the funds staked by the governing parties of the API3 DAO into the DAO pool.
Therefore, it not only provides _security_ to the dAPI user, but also creates a
very strong incentive for dAPIs to be governed in a way that maximizes dAPI
_security_, which will further decrease service coverage costs.

## Claim Risks

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

## ClaimsManager

To insure against potential system failures, the DAO pool can empower special
`ClaimsManager` contracts to withdraw staked tokens directly. The approved
`ClaimsManager` contracts do this by calling
`payOutClaim(address recipient, uint256 amount)` in the DAO pool contract, which
transfers tokens from the DAO pool to the recipient. When this occurs, the total
number of staked tokens goes down, and pool share value goes down in turn. See
<a href="/api3-whitepaper-v1.0.3.pdf#page=31" target="_blank">Section 6.3,
_"Service coverage process"_</a><ExternalLinkImage/>, of the API3 whitepaper.
