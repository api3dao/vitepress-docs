---
title: Voting (Api3Voting.sol)
sidebarHeader: Reference
sidebarSubHeader: DAO Members
pageHeader: Reference → DAO Members
path: /reference/dao-members/voting.html
outline: deep
tags:
  - dao
  - voting
  - vote
  - Aragon
  - Api3Voting
  - Api3Voting.sol
  - BaseTemplate
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

API3's voting app implements a simple quorum-based voting mechanism with:

- a minimum required voting power to create a new proposal (defined in the Pool
  contract)
- a minimum required quorum for passing a proposal (after a waiting period)
- a quorum percentage to pass a proposal instantly

Proposals include an execution script, which can be executed if the proposal
passes.

The API3 DAO has installed two instances of its voting app, primary and
secondary versions, along with two Aragon Agents that they control. The primary
commands a larger treasury and can update all DAO settings, while the secondary
commands a much smaller treasury and can update some of the DAO settings.

See the
[Api3Voting.sol](https://github.com/api3dao/api3-dao/blob/main/packages/api3-voting/contracts/Api3Voting.sol)<ExternalLinkImage/>
contract code and the Aragon contracts it inherits from.

- BaseTemplate

## Key Functions

| Signature                                                                                                             | Description                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `newVote(bytes _executionScript, string _metadata, bool _castVote, bool _executesIfDecided) returns (uint256 voteId)` | Create a new proposal in the DAO. Requires a minimum percentage of voting power (currently 0.1%). |
| `vote(uint256 _voteId, bool _supports, bool _executesIfDecided)`                                                      | Vote yes or no on an existing proposal.                                                           |
| `executeVote(uint256 _voteId)`                                                                                        | Execute a proposal, if it is ready for execution.                                                 |

A proposal is ready for execution if:

> 1. the proposal hasn't already been executed, and
> 2. greater than 50% of all voting power has voted "yes" on the proposal,

OR

> 1. the proposal hasn't already been executed, and
> 2. the proposal's voting period has ended, and
> 3. the total "yes" vote exceeds the "no" vote, and
> 4. at least 50% (for Primary voting app proposals) or 15% (for Secondary
>    voting app proposals) of all voting power has voted "yes" on the proposal.
