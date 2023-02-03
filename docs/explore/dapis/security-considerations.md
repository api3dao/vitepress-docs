---
title: Security Considerations
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → dAPIs
path: /explore/dapis/security-considerations.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

dAPIs are available as either self-funded or managed data feed products. Self-funded dAPIs are sourced from a single API provider and allow API3 to spin up any data on any chain without much overhead. Network fees for the self-funded dAPIs are paid from a respective sponsor wallet. Once funds are available on this wallet, updates on the associated dAPI will begin automatically (given the Airnode invocation restrictions). In the same way, the dAPI will stop being updated if the required funds for updates are not sufficiently available anymore. Sponsor wallets can be funded by anybody and the API3 Market is providing an intuative interface to check the status of respective self-funded dAPIs and fund them accordingly. Self-funded dAPIs provide developers with the tools to try out data feed services with minimal associated costs and no upfront commitment before committing to managed dAPIs. API3 does not recommend using self-funded dAPIs in a production environment. Read more in our security considerations. 

## General dAPI considerations

