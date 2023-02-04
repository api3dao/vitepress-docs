---
title: Getting started with API3
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → About our journey!
path: /explore/introduction/index.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

## The API3 DAO

[API3<ExternalLinkImage/>](https://api3.org) is a collaborative project to
deliver traditional API services to smart contract platforms in a decentralized
and trust-minimized way. It is governed by a decentralized autonomous
organization (DAO), namely the API3 DAO.

The goal of API3 is to provide developers with an easy way to access off-chain
resources from within their smart contracts, without having to worry about the
security and trust implications of doing so.

## Introduction

API3 believes DeFi & Web3 can change the financial landscape with the right
infrastructure and access to meaningful real world data. We aim to facilitate
the true impact of smart contract applications by making a wide range of useful
data easily accessible and scalable within smart contract functions.

Within this introduction of API3 we will explore;

- APIs within the blockchain
- Airnode & First-party oracles
- Data feeds: Decentralized APIs (dAPIs)
- API3 Market: Oracle tooling

If you wish to view a detailed discussion of the API3 project, read the
[API3 Whitepaper<ExternalLinkImage/>](https://github.com/api3dao/api3-whitepaper/blob/master/api3-whitepaper.pdf).

## APIs in Web3

An API is used to communicate with a specific application to receive services or
data from it. It is often a well-defined and documented protocol one can use to
interact with an application programmatically. This has led to Web2 developers
integrating APIs to build increasingly complex and capable applications.

In the context of decentralized applications, this definition is quite useless,
and even misguiding. Instead, we should see APIs as channels businesses use to
monetize their data and services.

::: tip See the article

[APIs: The Digital Glue<ExternalLinkImage/>](https://medium.com/api3/apis-the-digital-glue-7ac87566e773)
for a more complete background on APIs.

:::

## The API Connectivity Problem

<!--The fact that a smart contract cannot access API data not presently on the blockchain is commonly known as _the oracle problem_.--> Smart contracts operating on a blockchain are limited in their access to off-chain data, this phenomenon is referred to as the ‘Oracle Problem.' This is only worth consideration because it includes not being able to call the paid APIs described above.

All the game theoretic and cryptographic methods proposed for various oracle
solutions essentially aim to provide smart contracts access to these paid APIs.
Therefore, it would be more accurate to define the problem at hand as _the API
connectivity problem_.

As you read about API3 offerings, you will discover that this redefinition will
have ripple effects across the entire solution, from how the ecosystem is built
to the lowest levels of the protocol.

Additionally, existing oracle solutions fall short because they fail to make
this distinction, resulting in inferior solutions that depend on third-party
oracles and ecosystems that exclude API providers. As such, API3 belives the
oracle problem is ill-posed, instead we are faced with an API Connectivity
Problem.

::: tip See the article

[The API Connectivity Problem](https://medium.com/api3/the-api-connectivity-problem-bd7fa0420636)<ExternalLinkImage/>
for a more relative information.

:::

## Airnode

API3’s Airnode has been designed so API providers can easily run their own
oracle nodes. It is an open source tool that allows them to provide their data
on-chain, without an intermediary, to any decentralized app (dApp) interested in
their services.

Through simplifying how an API provider can monetize their data within Web3,
hundreds of Airnodes have been deployed. Once an API has had Airnode deployed
protocols serve this data on-chain.

<!--These include the Request-Response or
Publish-Subscribe protocols and depend on the data type and the decentralized
applications (dApp) use case.-->

> <img src="../assets/images/oracle-map.png" width="450"/>

To ensure API3 provided developers with an easy way to access off-chain
resources from within their smart contract, Airnode also has range of common
features built into it. These include functions such as pre & post processing or
authentication, to name a few.

::: tip Learn

Read more on how [Airnode works](/explore/airnode/api-connectivity-problem.md).

:::

### Summary

Enabling the oracle to be operated by the API Provider data itself means
requested data is served on-chain directly from the source. Thus at its core,
Airnode brings the ability for API providers to easily run their own
[first-party oracle](/explore/introduction/first-party.md) nodes.
