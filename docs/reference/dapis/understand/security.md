---
title: Security
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs
path: /reference/dapis/understand/security.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

dApp developers need not trust API3 as all Airnodes (which provide datafeed
values) are owned and operated by an API provider. Each API provider has
deployed their Airnode using a `secrets.env` file that API3 does not possess.
Therefore the Airnode operates under the complete autonomy of the API provider
who's signed data is used to update the datafeed values sourced by the
[Api3ServerV1sol<ExternalLinkImage/>](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/dapis/Api3ServerV1.sol)
contract. API3 cannot alter values from API providers.

Also consider the decentralized nature of the API3 DAO. A true DAO that operates
transparently with regards to all of its management practices. All
[API3 source code<ExternalLinkImage/>](https://github.com/orgs/api3dao/repositories?type=all)
is open sourced and can be verified by anyone. Consider reading through API3
source code to verify claims of security. Questions, jump on
[Discord](https://discord.com/channels/758003776174030948/765618225144266793).
