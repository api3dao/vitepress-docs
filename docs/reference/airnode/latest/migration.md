---
title: Migration Guide
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v1.0
path: /reference/airnode/latest/migration.html
version: v1.0
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

::: danger TODO:

Not sure this should be in Guides as it is a reference doc more than a how-to.

Also this is an older migration guide for `v0.8`.

:::

The following guide assumes a valid v0.8.x `config.json` file. All changes
listed below will need to be implemented in order to migrate to Airnode v0.9.0.
This document is written in a way that will preserve existing behaviour with
earlier Airnode versions.

The document also mentions changes of the user facing services related to
Airnode, such as airnode-deployer, airnode-admin and more.

## Summary

1. `ois[n].oisFormat` updated to "1.2.0".

2. `nodeSettings.nodeVersion` updated to "0.9.0".

3. `airnode-deployer remove-with-deployment-details` now accepts a full
   `--airnode-address` argument instead of the short airnode address
   (`--airnode-address-short`).

4. We recommend using _Sepolia_ and _Goerli_ testnets instead of _Rinkeby_,
   _Ropsten_, and _Kovan_.

## Details

1. `ois[n].oisFormat`

Updated to "1.2.0"

```diff
{
-  "oisFormat": "1.1.2"
+  "oisFormat": "1.2.0"
}
```

2. `nodeSettings.nodeVersion`

Updated to "0.9.0"

```diff
{
-  "nodeVersion": "0.8.1"
+  "nodeVersion": "0.9.0"
}
```

3. `airnode-deployer remove-with-deployment-details` accepts `--airnode-address`
   parameter

In Airnode 0.9. the `airnode-deployer` underwent an internal refactor to improve
cloud provider deployments. The only user facing change is that the deployer
uses the full Airnode address instead of the shortened one when executing the
`remove-with-deployment-details` command.

```diff
- docker run -it --rm \
-   -v "$(pwd):/app/config" \
-   api3/airnode-deployer:0.8.0 remove-with-deployment-details \
-   --airnode-address-short abd9eaa \
-   --stage dev \
-   --cloud-provider gcp \
-   --projectId myAirnode101 \ ← GCP only
-   --region us-east1
+ docker run -it --rm \
+   -v "$(pwd):/app/config" \
+   api3/airnode-deployer:0.9.0 remove-with-deployment-details \
+   --airnode-address 0xabd9eaa588B6818Ac4C32c5e9b31962E351Cd39F \
+   --stage dev \
+   --cloud-provider gcp \
+   --projectId myAirnode101 \ ← GCP only
+   --region us-east1
```

4. Recommended testnets to use are now _Sepolia_ and _Goerli_

The _Rinkeby_, _Ropsten_, and _Kovan_ testnets have been deprecated and will be
removed. Etherscan has also discontinued or is in the process of discontinuing
their blockchain explorer for each. You can read more details on the
[ethereum blog](https://blog.ethereum.org/2022/06/21/testnet-deprecation)<ExternalLinkImage/>.
