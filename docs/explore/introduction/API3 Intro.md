---
title: Solving the API connectivity problem
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → About our journey!
path: /explore/introduction/connectivity-problem.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# Getting started with API3

## The API3 DAO

[API3 <ExternalLinkImage/>](https://api3.org) is a collaborative project to deliver traditional API services to smart contract platforms in a decentralized and trust-minimized way. It is governed by a decentralized autonomous organization (DAO), namely the API3 DAO. The goal of API3 is to provide developers with an easy way to access off-chain resources from within their smart contracts, without having to worry about the security and trust implications of doing so.


## Introduction 

API3 believes DeFi can change the financial landscape with the right infrastructure and access to meaningful real world data. We aim to facilitate the true impact of DeFi by making a wide range of useful data easily accessible and scalable within smart contract functions. 

Within this intro we will explore;
- APIs within the blockchain 
- First-party oracles and API3’s Airnode
- API3 data feeds: Decentralized APIs (dAPIs)
- Developer tooling such as the API3 Market

If you wish to view a detailed discussion of the API3 project, read the [API3 Whitepaper<ExternaLinkImage/>](https://github.com/api3dao/api3-whitepaper/blob/master/api3-whitepaper.pdf).

# Solving the API Connectivity Problem

## APIs in Web3

An API is used to communicate with a specific application to receive services or data from it. It is often a well-defined and documented protocol one can use to interact
with an application programmatically. This has led to Web2 developers integrating APIs to build increasingly complex and capable applications. 

> <img src="../assets/images/OracleMap.png" width="450"/>

 In the context of decentralized applications, this definition is quite useless, and even misguiding. Instead, we should see APIs as channels businesses use to monetize their data and services.

 ::: tip
See the article, [APIs: The Digital Glue<ExternalLinkImage/>](https://medium.com/api3/apis-the-digital-glue-7ac87566e773) for a more complete background on APIs. 


## The API Connectivity Problem 

The fact that a smart contract cannot access API data not presently on the blockchain is commonly known as _the oracle problem_. This is only worth
consideration because it includes not being able to call the paid
APIs described above. 

All the game theoretic and cryptographic methods proposed
for various oracle solutions essentially aim to provide smart contracts access
to these paid APIs. Therefore, it would be more accurate to define the problem
at hand as _the API connectivity problem_. 


As you read about API3 offerings, you
will discover that this redefinition will have ripple effects across the entire
solution, from how the ecosystem is built to the lowest levels of the protocol.

Additionally, as existing oracle solutions fall short because they fail to make this distinction, resulting in inferior solutions that depend on third-party oracles and ecosystems that exclude API providers. As such, API3 belives the oracle problem is ill-posed, instead we are faced with an API Connectivity Problem. 


::: tip
See the article, [The API Connectivity Problem](https://medium.com/api3/the-api-connectivity-problem-bd7fa0420636)<ExternalLinkImage/>
for a more relative information.
:::

## Airnode 

API3’s Airnode has been designed so API providers can easily run their own oracle nodes. It is an open source tool that allows them to provide their data on-chain, without an intermediary, to any decentralized app (dApp) interested in their services. 

Through simplfying how an API provider can monetize their data within Web3, hundreds of Airnodes have been deployed. Once an API has had Airnode deployed, commonly used protocols to serve this data on-chain include the Request-Response or Publish-Subscribe protocols. These protocols are selected depending on the data type being served on-chain and the decentralized applications use case. 

To ensure API3 provided developers with an easy way to access off-chain resources from within their smart contract, Airnode also has range of advanced features built into it. These include functions such as pre & post processing or autentication, to name a few. 

::: Learn
Learn more about how Airnode works, [https://vitepress-docs.web.app/explore/airnode/what-is-airnode.html]
:::

Enabling the oracle to be operated by the API Provider data itself means requested data is served on-chain directly from the source. Thus at its core, Airnode brings the ability for API providers to easily run their own first-party oracle nodes. 

--point to 'first-party oracles'--

