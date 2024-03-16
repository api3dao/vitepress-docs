---
title: API3 DAO
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → DAO Members
path: /explore/dao-members/index.html
outline: deep
tags:
  - dao
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

API3 delegates much of its governance to the vote of a Decentralized Autonomous
Organization (DAO). API3 is a collaborative effort to build, manage and monetize
dAPIs at scale. To achieve delegated governance and apportion grants in a fully
decentralized way, the incentives and processes of the participants are
reconciled through the governance, security, and
[value capture utilities](/explore/dao-members/dao-pool.md#token-utilities) of
the API3 token and its powers in the API3 DAO.

The API3 project has a completely open, decentralized and direct governance
model. Any API3 token holder can stake in the DAO pool and obtain direct voting
abilities in the DAO smart contract and thus participate in many aspects of the
governance of the project directly. In addition, stakers receive immutably-coded
[inflationary rewards](/explore/dao-members/rewards.md) and any additional
benefits that the DAO may decide on in the future. The staked API3 tokens will
back an on-chain [Service Coverage](/explore/dapis/using-dapis.md) as collateral
to provide dAPI users with quantifiable and trustless security guarantees.

The DAO votes on high-level matters such as staking incentives and
collateralization (parameters of the DAO smart contract itself), as well as
grant proposals that directly transfer DAO treasury assets to teams working in
support of API3.

> <img src="../assets/images/06-a-API3_DAO-Op1.png" width="450"/>

## DAO Contributors Structure

The organizational structure of contributors which receive grants from the DAO
is often comprised of hierarchical teams and subDAOs both of which manage,
streamline, and secure the success of their deliverables to API3.

### Hierarchical Teams

More granular tasks are conducted through hierarchical team structures for
scalable governance.

A best-practice workflow is to form off-chain teams and apply for grants to
execute one-time projects or time-defined operations that will benefit API3. The
team makes the grant application with a multisig that has the team members
assigned as users, and the DAO permissionlessly transfers the grant to the
multisig if the grant proposal is accepted and passed by the DAO contract logic.

This team-based governance scheme is scalable in terms of gas costs, as it
requires fewer proposals to be voted on at the DAO level. It is also more
scalable in practical terms, as it does not require the constant attention of
all governing parties to a wide variety of minute details. Furthermore, it
allows critical operations such as dAPI management to be executed swiftly and
based on expert opinion. As API3 operations expand, this governance hierarchy
may demand additional layers in the form of subDAOs.

To learn more about hierarchical team structures
<a href="/api3-whitepaper-v1.0.3.pdf#page=22" target="_blank"> see Section 5.3
of the API3 Whitepaper</a>.

### subDAO

The DAO is leveraged to selectively allocate funds and decisions in line with
the mission of API3. When a task reaches a scale that can no longer be fulfilled
by a team, it is assigned to a subDAO.

> <img src="../assets/images/dao-subdao-teams.png" width="350"/>

## Principles

API3 focuses on two principles for effective governance:

- Least Privilege
- Transparency

### Least Privilege

To limit the amount of damage a malicious or incompetent team may cause, each
team's authority must be constrained to a bare minimum, which is also known as
the “principle of least privilege”. For example, a dAPI management team should
never be able to completely recompose a dAPI that is under use, but should only
be able to switch individual oracles in and out with a long enough cool-down
period to discourage abuse of authority. Similarly, milestones and deliverables
should be utilized to grant teams only the funds needed to carry out their
specific responsibilities.

### Transparency

Each team is expected to produce sufficiently detailed progress reports that
enable the DAO's participants to evaluate team performance with respect to
proposed goals. These public reports have the additional benefit of increased
accountability as dAPI users and the general public can audit API3 operations.

<FlexEndTag/>
