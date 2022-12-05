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

# {{$frontmatter.title}}

For a technical overview of the software, see
[Getting to know Airnode](https://medium.com/api3/getting-to-know-airnode-162e50ea243e)<ExternalLinkImage/>.

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
