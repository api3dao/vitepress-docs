---
title: DAO (Api3Template.sol)
sidebarHeader: Reference
sidebarSubHeader: DAO Members
pageHeader: Reference → DAO Members
path: /reference/dao-members/dao.html
outline: deep
tags:
  - dao
  - Aragon
  - Api3Template
  - Api3Template.sol
  - BaseTemplate
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

The API3 DAO contract is the core DAO contract, and it serves a coordinating and
setup role. It holds the admin role in API3's contracts including the DAO pool,
and it delegates some of this responsibility to the DAO's other contracts (its
voting apps and [Aragon Agents<ExternalLinkImage/>](https://aragon.org/agent)).

The base Aragon DAO template contract used by API3 DAO can be found
[here<ExternalLinkImage/>](https://github.com/aragon/dao-templates/blob/master/shared/contracts/BaseTemplate.sol).

See the
[Api3Template.sol<ExternalLinkImage/>](https://github.com/api3dao/api3-dao/tree/main/packages/dao/contracts)
contract code and the list of contracts it inherits from.

- BaseTemplate.sol
- Api3Voting.sol

<FlexEndTag/>
