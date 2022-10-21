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

# {{$frontmatter.title}}

_See the article,
[Getting to know Airnode](https://medium.com/api3/getting-to-know-airnode-162e50ea243e)<ExternalLinkImage/>
for a technical overview of the software._

## Statelessness

Oracle nodes typically keep persistent track of the blockchain and the state of
the requests they receive (i.e., at what stage of fulfillment they are at),
either in-memory or in a database. In systems terminology, they are not
memoryless. Doing so comes with many disadvantages:

1. The database becomes a single point of failure. Orchestrating redundancy is
   costly and not trivial.
2. Any anomaly that happens on the blockchain (block reorgs, ommer blocks, etc.)
   results in the oracle node state to fall out of sync with the chain, which is
   not trivial to correct.
3. A highly stateful application has many edge cases. These are difficult to
   cover with tests completely and are likely to result in bugs that
   incapacitate the node.

These disadvantages result in an unstable oracle node, which is the essential
reason why traditional oracle nodes require _professional node operators_ that
need to be ready to respond to incidents 24/7. Since this is not a realistic
requirement for first-party oracles, an oracle node that is designed for
first-party oracles has to be stateless.

Another way to look at keeping oracle node state is this: The blockchain (e.g.,
Ethereum) node that the oracle node uses already keeps the state on behalf of
the oracle node. The duplication of this responsibility also duplicates the
points of failure (where failure in either of them results in total failure).
Then, the oracle node should depend on the blockchain node to keep its state,
which requires the protocol to be designed to fit this scheme.

### Non-idempotent operations

An API operation is idempotent if calling it multiple times has the same effect
as calling it once. For example, using a GET operation of an exchange API to get
the ETH/USD price data is typically an idempotent operation. Calling it once or
more will not make any difference at the API server-side. In contrast, using a
POST operation of a remittance service provider API to send $100 to another
party would be a non-idempotent operation. Each call would send an additional
$100, and thus using the operation multiple times would have a different effect
than using it once.

The oracle node being stateless means that it would not be able to "remember" if
it has made an API call associated with a request, and may repeat it under
certain conditions. This is not an issue at the moment, because presently,
oracles are only used for idempotent operations. The aim is for Airnode to
support non-idempotent operations as well. There is research into alternative
methods to achieve this while protecting the resiliency that statelessness
provides.

## Fully-serverless stack

Although serverless functions are better known for scaling automatically even
with extreme concurrent usage (which may also come in handy in a bright future),
Airnode uses it for different reasons:

- Serverless functions are stateless. This means that whatever problem occurs in
  an invocation, the next invocation will start with a clean slate. This
  provides great resiliency against internal (from Airnode itself) or external
  (from the API, Ethereum node) bugs. In other words, the oracle node _turns
  itself off and on again_ very frequently, which automatically fixes the
  majority of the potential problems.
- Serverless functions are fully managed. They provide the closest experience to
  _set-and-forget_ possible.
- Serverless functions are priced on-demand. Especially considering that Airnode
  will not require major concurrent usage, this will result in great
  cost-efficiency (and even let the user stay below free tier
  ([AWS](https://aws.amazon.com/free)<ExternalLinkImage/>,
  [GCP](https://cloud.google.com/free)<ExternalLinkImage/>) limits).
- Bare serverless functions are easy to port across cloud providers (e.g., using
  [Terraform Framework](https://www.terraform.io/)<ExternalLinkImage/>),
  especially when their cloud provider-specific dependencies are limited.

## Approach to security

For an optimally hands-off user experience, Airnode should utilize fully-managed
services whenever possible. To allow this to be done securely, the node is
designed in a defensive way.

There are two external parties that Airnode interacts with:

- **APIs:** Although Airnode is designed for first-party oracles, it considers
  serving data from third-party APIs as a valid usage scenario. In this case,
  calls made to all APIs are contained in separate serverless function
  invocations so that they cannot induce node-level failure.
- **Blockchain nodes:** Similarly, using blockchain (e.g., Ethereum) nodes run
  by third party service providers is considered as a valid usage scenario.
  Airnode uses all providers simultaneously (i.e., not through a Quorum-based
  consensus or behind a load balancer) for maximum availability, which is made
  possible by its unique stateless design. The interactions made with each
  provider is contained in a separate serverless function invocation so that a
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
