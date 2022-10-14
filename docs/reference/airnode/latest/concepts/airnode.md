---
title: Airnode
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0 → Concepts and Definitions
path: /reference/airnode/latest/concepts/airnode.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

Airnode is a serverless oracle node implemented with a _"set and forget"_
[philosophy](../grp-providers/airnode/design-philosophy.md).

<!-- TODO: Link why should you use Airnode -->

An Airnode is capable of serving one or more APIs to
[requesters](./requester.md) (which are on-chain smart contracts) that request
data served by a particular Airnode. Each and every Airnode has a
[unique mnemonic](../grp-providers/guides/build-an-airnode/configuring-airnode.md#airnodewalletmnemonic)
identifying its wallet. This mnemonic is kept secret and Airnode is publicly
identified using the default [address](airnode.md#airnodeaddress) derived from
the mnemonic.

## `airnodeAddress`

An Airnode is identified by the default address of a BIP 44 wallet (with the
path `m/44'/60'/0'/0/0`) which is referred to as the `airnodeAddress`. This
address is same for all chains on which Airnode operates. The wallet mnemonic is
specified in the [secrets.env](../reference/deployment-files/secrets-env.md)
file when deploying the Airnode.

Use the admin CLI command
[derive-airnode-address](../reference/packages/admin-cli.md#derive-airnode-address)
to derive the `airnodeAddress` from the mnemonic for informational purposes.

```bash
npx @api3/airnode-admin derive-airnode-address \
--airnode-mnemonic "cricket elephant ..."

# outputs
Airnode address: 0xaBd9...
```

## `xpub`

The Airnode owner announces the _extended public key_ (`xpub` of the hardened
derivation path `m/44'/60'/0'`) off-chain. Then a sponsor derives a
[sponsor wallet](sponsor.md#sponsorwallet) for the Airnode using the `xpub` and
`airnodeAddress`. The sponsor wallet will then be used by the Airnode to fulfill
requests made by the sponsor's contracts.

Use the admin CLI command
[derive-airnode-xpub](../reference/packages/admin-cli.md#derive-airnode-xpub) to
get the `xpub` of an Airnode by passing the same mnemonic used to create the
`airnodeAddress`.

```bash
npx @api3/airnode-admin derive-airnode-xpub \
--airnode-mnemonic "cricket elephant ..."

# outputs
Airnode xpub: xpub6CUGRUo...
```

## Admin CLI: `generate-airnode-mnemonic`

The
[generate-airnode-mnemonic](../reference/packages/admin-cli.md#generate-airnode-mnemonic)
command is useful because it will generate a mnemonic as well as return the
`airnodeAddress` and `xpub`.

```sh
npx @api3/airnode-admin generate-airnode-mnemonic

# output
This mnemonic is created locally on your machine using "ethers.Wallet.createRandom" under the hood.
Make sure to back it up securely, e.g., by writing it down on a piece of paper:

############################## MNEMONIC ###############################

cricket elephant ...

############################## MNEMONIC ###############################

The Airnode address for this mnemonic is: 0xaBd9...
The Airnode xpub for this mnemonic is: xpub6CUGRUo...
```

## Verification

The `xpub` that the Airnode owner has announced is not verified on-chain. A
sponsor can verify the `xpub` off-chain. Use the admin CLI command
[verify-xpub](../reference/packages/admin-cli.md#verify-airnode-xpub) command
from the admin CLI.

```bash
npx @api3/airnode-admin verify-airnode-xpub \
--airnode-xpub xpub6CUGRUo... \
--airnode-address 0xaBd9...

# output
Airnode xpub is: VALID
```
