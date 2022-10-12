---
title: Template
sidebarHeader: Reference
sidebarSubHeader: Airnode
version: v1.0
basePath: /airnode/latest/concepts/
outline: deep
tags:
---

<VersionWarning/>

<PageHeader>v1.0 → Concepts and Definitions </PageHeader>

# {{$frontmatter.title}}

An oracle request has many parameters. It is very common for
[requesters](requester.md) (e.g., a data feed) to make repeated requests with
the exact same parameters. In such instances, it is wasteful to pass all of
these parameters repeatedly.

Templates are on-chain records of request parameters that the requesters can
refer to while making requests. Additional advantages are reducing boilerplate
code required to make a request, improving UX and allowing large parameter
payloads (e.g., off-chain computation specifications) at no additional gas cost.

```solidity
struct Template {
    address airnode;
    bytes32 endpointId;
    bytes parameters;
}
```

### templateId

Each template is identified by a `templateId`, which is the hash of its
contents. This allows Airnode to fetch templates with a static call, and verify
that the received parameters are not tampered with.

```solidity
templateId = keccak256(abi.encodePacked(
  airnode,
  endpointId,
  parameters
));
```
