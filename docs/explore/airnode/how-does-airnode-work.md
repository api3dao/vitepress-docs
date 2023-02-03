---
title: Implementation
sidebarHeader: Explore
sidebarSubHeader:
pageHeader: Explore → Airnode
path: /explore/airnode/implementation.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

# How does Airnode work?

## Brining off-chain data on-chain

Airnode is a serverless oracle node implemented with a “set and forget”
philosophy. It consists of two parts:

1. The off-chain **Airnode** (“the node”) that is self-hosted or deployed as
   cloud provider functions (AWS or GCP).
2. The on-chain **protocol contract** AirnodeRrpV0.sol. This is often referred
   to as the oracle smart contracts.

> <img src="../assets/images/summary-airnode-2-parts.png" width="350px">

Airnode is designed with mechanisms that eliminate both on-chain and off-chain
concerns of API providers. The set-and-forget framework of Airnode is all about
its ease of implementation.

::: info Read more For a technical overview of the software, see
[Getting to know Airnode](https://medium.com/api3/getting-to-know-airnode-162e50ea243e)<ExternalLinkImage/>.
:::

## Airnode Configuration Files

The Airnode is defined by a file name
[config.json](/reference/airnode/latest/deployment-files/config-json.md). It is
the central element feeding data to beacons, the components that supply on-chain
dAPIs with data behind the scenes.

- See [Understanding Airnode](/reference/airnode/latest/understand/) to learn
  how Airnode is defined by `config.json`.
- See
  [Deployment Files](/reference/airnode/latest/deployment-files/config-json.md)
  to view the available configurations fields for `config.json`.
- See
  [config.json](/reference/airnode/latest/deployment-files/examples/config-json.md)
  to view an example file.

## Blockchain (RPC) Providers

An oracle node requires access to a node on a blockchain (such as Ethereum) to
be able to listen for request events and send transactions to fulfill requests.
The Airnode model minimizes the node operation effort using managed services
wherever possible.

It is thus assumed that the typical user makes use of Ethereum providers such as
Infura, Alchemy, etc. The number of such services is only expected to grow, so
designing a solution depending on these is not expected to cause a problem in
the future.

As an example, the Infura provider allows for making 100,000 calls per day for
free. An oracle that doesn't get any requests makes less than 3,000 calls per
day (2 calls per minute), which allows the user to keep an oracle online for
free, and upgrade to a paid plan once it gains traction.

Although the expectation is that the user will be using an Ethereum provider,
nothing prevents API providers from using a private Ethereum node. Furthermore,
Airnode is designed to allow the usage of multiple Ethereum providers
simultaneously. This is achieved by treating all of the integrated providers
individually. The operations of an Airnode thus cannot be disrupted reliably
unless all of its providers are malicious. Therefore, using multiple Ethereum
providers is a better strategy to achieve the highest possible availability than
using a private Ethereum node.-->

# Technical Characterists of Airnode

## Statelessness

Typically, oracle nodes persistently track the blockchain and the state of the
requests they receive (i.e. the present stage of their fulfillment), either in
memory or in a database. In terms of systems, they are not memoryless. However,
such approach comes with many disadvantages:

1. The database becomes a single point of failure, and redundancy is costly and
   complicated to orchestrate.
2. Any on-chain anomalies (block reorganization, ommer blocks etc.) result in
   the chain's and node's states losing synchronization, which is difficult to
   fix.
3. Highly stateful applications have many edge cases that are difficult to
   completely cover by tests. Therefore, debilitating bugs are bound to slip
   through.

These disadvantages result in an unstable oracle node, which is the essential
reason why traditional oracle nodes require _professional node operators_ that
need to be on call 24/7 in case of incidents. Since this is not a realistic
requirement for first-party oracles, an oracle node designed for these oracles
has to be stateless.

However, there's another way to approach state keeping for oracle nodes: since
the node on a given blockchain (such as Ethereum) used by the oracle node
already keeps the state on its behalf, there is no need for the node itself to
keep its state. Duplicating the state would create twice as many points of
failure (and it would be enough for one of them to fail to cause total failure).
Therefore, the oracle node should depend on the blockchain node to keep its
state, which should be reflected in the way in which the oracle node's protocol
is designed

### Non-idempotent operations

An API operation is idempotent if calling it multiple times has the same effect
as calling it once. For example, using a GET operation of an exchange's API to
get the exchange rate between ETH and USD is typically an idempotent operation.
It will not make any difference at the API server-side if we call it once or
several times.

In contrast, using a POST operation of a remittance service provider API to send
$100 to another party would be a non-idempotent operation. Each call would send
an additional $100, which means that using the operation multiple times would
have a different effect than using it once.

Stateless oracle nodes cannot "remember" if they already made an API call
associated with a given request, and, under certain conditions, they may repeat
it. At present, this is not an issue since oracles are only used for performing
idempotent operations. In the future, however, Airnode intends to support
non-idempotent operations as well. We are currently researching alternative
methods of achieving this while protecting the resiliency provided by
statelessness.

## Fully-serverless stack

Although serverless functions are better known for scaling automatically even
with extreme concurrent usage (which may also come in handy in a bright future),
Airnode uses it for different reasons:

- Serverless functions are stateless. This means that whatever problem occurs in
  an invocation, the next invocation will start with a clean slate. This
  provides great resiliency against bugs, be it from Airnode itself from the API
  or Ethereum node). In other words, the oracle node _turns itself off and on
  again_ very frequently, which automatically fixes most potential problems.
- Serverless functions are fully managed. They provide the closest possible
  experience to the _set-and-forget_ philosophy.
- Serverless functions are priced on-demand. Especially considering that Airnode
  will not require major concurrent usage, this will result in great
  cost-efficiency (and even let the user stay below free tier
  ([AWS](https://aws.amazon.com/free)<ExternalLinkImage/>,
  [GCP](https://cloud.google.com/free)<ExternalLinkImage/>) limits).
- Bare serverless functions are easy to port across cloud providers (e.g., using
  [Terraform Framework](https://www.terraform.io/)<ExternalLinkImage/>),
  especially when their cloud provider-specific dependencies are limited.

## Approach to security

For an optimal, hands-off user experience, Airnode should utilize fully managed
services whenever possible. To allow this to be done securely, the node is
designed defensively.

There are two external parties that Airnode interacts with:

- **APIs:** Although Airnode is designed for first-party oracles, it considers
  serving data from third-party APIs as a valid usage scenario. In this case,
  calls made to all APIs are contained in separate serverless function
  invocations so that they cannot induce node-level failure.
- **Blockchain nodes:** Similarly, using blockchain nodes that are run by
  third-party service providers is considered as a valid usage scenario. To
  ensure maximum availability, Airnode uses all providers simultaneously (and
  not through a Quorum-based consensus or behind a load balancer), which is
  possible thanks to its unique stateless design. The interactions with each
  provider are contained in a separate serverless function invocation so that a
  malicious provider cannot induce node-level failure.

In addition, the protocol is implemented in a way that a blockchain service
provider cannot tamper with the parameters of a request, but only deny service.
Note that this is not the case with alternative solutions, as they treat the
blockchain service provider as a trusted party.

Cloud hosting is recommended over hosting on-premises due to the superior
availability of serverless functions, and also for their set-and-forget
qualities. As a precaution, redundancy on multiple cloud providers can be
provisioned easily and virtually at no cost thanks to the fully-serverless
design of Airnode.
