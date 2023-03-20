---
title: Chain Providers
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.11 → Concepts and Definitions
path: /reference/airnode/latest/concepts/chain-providers.html
version: v0.11
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

Chain providers provide access to an evm on behalf of an API provider. Your
Airnode will interact with one or more chain providers and respond to requests.
You can use multiple chain providers for each chain and declare multiple chains
each with one of more chain providers. Below are some of the chain providers you
might use.

- [Pocket](https://www.pokt.network/)
- [Infura](https://infura.io)
- [Alchemy](https://www.alchemy.com/)

## One Chain: One Provider

As an example the `chains` field declares its use of _Sepolia_ blockchain with
id 11155111. The `type` is set to _evm_ which is the only type currently
supported by Airnode. It then applies an arbitrary name for the blockchain
provider "infuraSepolia" in the `providers` array.

```json
"chains": [
  {
    "authorizers": {
      "requesterEndpointAuthorizers": [
        "0xf18c105D0375E80980e4EED829a4A68A539E6178"
      ],
      "crossChainRequesterAuthorizers": [],
       "requesterAuthorizersWithErc721": [],
       "crossChainRequesterAuthorizersWithErc721": []
    },
    "authorizations": {
        "requesterEndpointAuthorizations": {}
      },
    "contracts": {
      "AirnodeRrp": "0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"
    },
    "id": "11155111",
    "providers": {
      "infuraSepolia": {
        "url": "${INFURA_SEPOLIA_PROVIDER_URL}"
      }
    },
    "type": "evm",
    "options": {
      "fulfillmentGasLimit": 500000,
      "gasPriceOracle": [
        {
          "gasPriceStrategy": "latestBlockPercentileGasPrice",
          "percentile": 60,
          "minTransactionCount": 20,
          "pastToCompareInBlocks": 20,
          "maxDeviationMultiplier": 2,
        },
        {
          "gasPriceStrategy": "providerRecommendedGasPrice",
          "recommendedGasPriceMultiplier": 1.2,
        },
        {
          "gasPriceStrategy": "providerRecommendedEip1559GasPrice",
          "baseFeeMultiplier": 2,
          "priorityFee": {
            "value": 3.12,
            "unit": "gwei",
          }
        },
        {
          "gasPriceStrategy": "constantGasPrice",
          "gasPrice": {
            "value": 10,
            "unit": "gwei"
          }
        }
      ],
    },
    "maxConcurrency": 100
  }
],
```

## One Chain: Multiple Providers

Multiple providers can be used per chain. Simply add another object to
`providers`. In this case both blockchain providers will have the same chain
`id` and `type`.

```json
"chains": [
  {
    "authorizers": {
      "requesterEndpointAuthorizers": [
        "0xf18c105D0375E80980e4EED829a4A68A539E6178"
      ],
      "crossChainRequesterAuthorizers": [],
       "requesterAuthorizersWithErc721": [],
       "crossChainRequesterAuthorizersWithErc721": []
    },
    "authorizations": {
        "requesterEndpointAuthorizations": {}
      },
    "contracts": {
      "AirnodeRrp": "0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"
    },
    "id": "11155111",
    "providers": {
      "infuraSepolia": {
        "url": "${INFURA_SEPOLIA_PROVIDER_URL}"
      },
      "alchemySepolia": {
        "url": "${ALCHEMY_SEPOLIA_PROVIDER_URL}"
      }
    },
    "type": "evm",
    "options": {
      "fulfillmentGasLimit": 500000,
      "gasPriceOracle": [
        {
          "gasPriceStrategy": "latestBlockPercentileGasPrice",
          "percentile": 60,
          "minTransactionCount": 20,
          "pastToCompareInBlocks": 20,
          "maxDeviationMultiplier": 2,
        },
        {
          "gasPriceStrategy": "providerRecommendedGasPrice",
          "recommendedGasPriceMultiplier": 1.2,
        },
        {
          "gasPriceStrategy": "providerRecommendedEip1559GasPrice",
          "baseFeeMultiplier": 2,
          "priorityFee": {
            "value": 3.12,
            "unit": "gwei",
          }
        },
        {
          "gasPriceStrategy": "constantGasPrice",
          "gasPrice": {
            "value": 10,
            "unit": "gwei"
          }
        }
      ],
    },
    "maxConcurrency": 100
  }
],
```

## Multiple Chains: Multiple Providers

Not as complicated as it sounds. First create two or more chain objects were
each has a unique `id` and `type` and a list of `providers` for each.

```json
"chains": [
  {
    "authorizers": {
      "requesterEndpointAuthorizers": [
        "0xf18c105D0375E80980e4EED829a4A68A539E6178"
      ],
      "crossChainRequesterAuthorizers": [],
       "requesterAuthorizersWithErc721": [],
       "crossChainRequesterAuthorizersWithErc721": []
    },
    "authorizations": {
        "requesterEndpointAuthorizations": {}
      },
    "contracts": {
      "AirnodeRrp": "0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"
    },
    "id": "11155111",
    "providers": {
      "infuraSepolia": {
        "url": "${INFURA_SEPOLIA_PROVIDER_URL}"
      },
      "alchemySepolia": {
        "url": "${ALCHEMY_SEPOLIA_PROVIDER_URL}"
      }
    },
    "type": "evm",
    "options": {
      "fulfillmentGasLimit": 500000,
      "gasPriceOracle": [
        {
          "gasPriceStrategy": "latestBlockPercentileGasPrice",
          "percentile": 60,
          "minTransactionCount": 20,
          "pastToCompareInBlocks": 20,
          "maxDeviationMultiplier": 2,
        },
        {
          "gasPriceStrategy": "providerRecommendedGasPrice",
          "recommendedGasPriceMultiplier": 1.2,
        },
        {
          "gasPriceStrategy": "providerRecommendedEip1559GasPrice",
          "baseFeeMultiplier": 2,
          "priorityFee": {
            "value": 3.12,
            "unit": "gwei",
          }
        },
        {
          "gasPriceStrategy": "constantGasPrice",
          "gasPrice": {
            "value": 10,
            "unit": "gwei"
          }
        }
      ],
    },
    "maxConcurrency": 100
  },
  {
    "authorizers": {
      "requesterEndpointAuthorizers": [
        "0xf18c105D0375E80980e4EED829a4A68A539E6178"
      ],
      "crossChainRequesterAuthorizers": [],
       "requesterAuthorizersWithErc721": [],
       "crossChainRequesterAuthorizersWithErc721": []
    },
    "authorizations": {
        "requesterEndpointAuthorizations": {}
      },
    "contracts": {
      "AirnodeRrp": "0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"
    },
    "id": "11155111",
    "providers": {
      "infuraSepolia": {
        "url": "${INFURA_SEPOLIA_PROVIDER_URL}"
      }
    },
    "type": "evm",
    "options": {
      "fulfillmentGasLimit": 500000,
      "gasPriceOracle": [
        {
          "gasPriceStrategy": "latestBlockPercentileGasPrice",
          "percentile": 60,
          "minTransactionCount": 20,
          "pastToCompareInBlocks": 20,
          "maxDeviationMultiplier": 2,
        },
        {
          "gasPriceStrategy": "providerRecommendedGasPrice",
          "recommendedGasPriceMultiplier": 1.2,
        },
        {
          "gasPriceStrategy": "providerRecommendedEip1559GasPrice",
          "baseFeeMultiplier": 2,
          "priorityFee": {
            "value": 3.12,
            "unit": "gwei",
          }
        },
        {
          "gasPriceStrategy": "constantGasPrice",
          "gasPrice": {
            "value": 10,
            "unit": "gwei"
          }
        }
      ],
    },
    "maxConcurrency": 100
  }
],
```
