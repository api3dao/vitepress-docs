---
title: Verify dAPI sources
pageHeader: dAPIs → Reference
outline: deep
---

<PageHeader/>

# Verify dAPI sources

[Datafeed values are stored on-chain](/dapis/reference/understand/#values-stored-on-chain)
within the
[`Api3ServerV1.sol`](https://github.com/api3dao/airnode-protocol-v1/tree/79b509f0e88a96fa4ea3cd576685051d37c9a504/contracts/api3-server-v1)
contract and are updated on the basis of `beaconIds`.

A `beaconId` for each dAPI is derived from the hash of the provider's Airnode
address and `templateId`.

A `templateId` is a hash of one of the Airnode's `endpointId` and encoded
parameters.

The dAPI team is running Airseekers which are primarily responsible for updating
the `beaconId` based on the specification of the dAPI. Providers also update the
`beaconId` at a higher deviation threshold/heartbeat as a fallback.

To verify that the Airnode address of a `beaconId` belongs to the provider
listed in the market, refer to the specific feed on the
[API3 Market](https://market.api3.org/).

## Verifying beaconId

The `templateId` is calculated by taking the hash of the `encodedParameters` and
`endpointId`.

Following is an `ethers.js` v5 script to derive the `templateId` (you need
[`@airnode-abi`](https://www.npmjs.com/package/@api3/airnode-abi) installed):

```javascript
import { encode } from '@api3/airnode-abi';
import { ethers } from 'ethers';

const encodedParameters = encode(decodedParameters);
const templateId = ethers.utils.solidityKeccak256(
  ['bytes32', 'bytes'],
  [endpointId, encodedParameters]
);
```

Once derived the `beaconId` is the hash of the Airnode address and `templateId`:

```javascript
import { ethers } from 'ethers';

const beaconId = ethers.utils.solidityKeccak256(
  ['address', 'bytes32'],
  [AirnodeAddress, templateId]
);
```

## Verifying beaconSetId

Beacon sets are a collection of `beaconIds` that provide the aggregated median
value of the underlying `beaconIds`. The `beaconSetId` is a hash of all the
underlying `beaconIds` and points to the datafeed containing the median value.
Following is an ethers.js v5 script to derive the `beaconSetId`.

```javascript
import { ethers } from 'ethers';

const beacons = [beaconId1, beaconId2, beaconId3];
const sortedBeacons = beacons.sort();

const beaconSetId = ethers.utils.keccak256(
  ethers.utils.defaultAbiCoder.encode(['bytes32[]'], [sortedBeacons])
);
```
