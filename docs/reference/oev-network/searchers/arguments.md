---
title: Argument and Constants
sidebarHeader: Reference
sidebarSubHeader: OEV Network
pageHeader: Reference → OEV Network → Searchers → Argument Reference
path: /reference/oev-network/searchers/arguments.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

### Proxy Address

dApps use a proxy address to read the latest data point from a dAPI. The
[API3 Market](https://market.api3.org) lists the proxy addresses for dAPIs
across all chains.

### Condition and Condition Value

The condition is the execution condition for the bid. Bids fulfill the condition
when the latest off-chain data point from the dAPI satisfies the condition when
compared to the condition value.

For example, if the condition is `LTE` (less than or equal to) and the condition
value is `50000`, the bid will be fulfilled if the latest off-chain data point
from the dAPI is less than or equal to `50000`.

### bidTopic - Bytes32

The `bidTopic` is a constant value used by auctioneer to filter bids that
pertain to a specific auctioneer instance. That is to say, different versions of
the auctioneer will have different bid topics.

Currently, there is only a single auctioneer instance with bid topic
`0x76302d70726f642d61756374696f6e6565720000000000000000000000000000`

### bidDetails - Bytes

The `bidDetails` are the encoded parameters for the bid. The parameters are
[proxy address](#proxy-address), [condition](#condition-and-condition-value),
[condition value](#condition-and-condition-value), updater address and a nonce.

```javascript
const { AbiCoder, hexlify } = require('ethers');
const abiCoder = new AbiCoder();

const BID_CONDITIONS = [
  { onchainIndex: 0n, description: 'LTE' },
  { onchainIndex: 1n, description: 'GTE' },
];

const conditionValue = 50000;
const updaterAddress = '<searcher address doing the update>';
const condition = BID_CONDITIONS.find((c) => c.description === 'LTE');
const bidDetails = abiCoder.encode(
  ['address', 'uint256', 'int224', 'address', 'bytes32'],
  [
    proxyAddress,
    condition.onchainIndex,
    conditionValue,
    updaterAddress, // The address of the wallet that will update the data feed
    hexlify(randomBytes(32)), // Random nonce to differentiate bids
  ]
);
```

<FlexEndTag />;
