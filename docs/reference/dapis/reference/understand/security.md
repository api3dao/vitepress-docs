---
title: Security
pageHeader: dAPIs → Reference
outline: deep
---

<PageHeader/>

# Security

dAPIs are structured to provide first-party data to smart contracts. API3, or
any other middleman, cannot interrupt the flow of off-chain data to a smart
contract that consumes an API provider's data when using a dAPI.

## Airnode

An Airnode is the off-chain bridge between an API provider's data and the
on-chain beacon values that dAPIs read from. dApp developers need not trust API3
as all Airnodes are owned and operated by an API provider.

## Signed data

Functionality associated with an API provider's Airnode gets signed data from
the API provider's operation and the signature is checked on-chain. Therefore
API3, or any other middleman, cannot alter data from API providers.

## `secrets.env`

Each API provider has deployed their Airnode using a `secrets.env` file that
API3 cannot access. Therefore the Airnode operates under the complete autonomy
of the API provider who's signed data is used to update the data feed values
sourced by the
[Api3ServerV1sol](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/api3-server-v1/Api3ServerV1.sol)
contract.

## Open source

API3 provides 100% of its code as open source and commissions third-party audits
of such. Anyone can read, review, and audit the
[repositories](https://github.com/api3dao) found in GitHub under the
organization for API3. Consider reading through API3 source code to verify
claims of security. Questions, jump on
[Discord](https://discord.com/channels/758003776174030948/765618225144266793).

## Decentralized DAO

Also consider the decentralized nature of the API3 DAO. Decentralized and
autonomous DAOs are not controlled by any central authority, which makes them
more resistant to censorship. API3 is a true DAO that operates transparently
with regards to all of its management practices.
