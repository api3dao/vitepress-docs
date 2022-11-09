---
title: Monorepo Examples
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → Airnode
path: /guides/airnode/monorepo-examples.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

There are examples of various Airnode functionality in the
[airnode-examples package](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples)<ExternalLinkImage/>
of the Airnode monorepo:

- [authenticated-coinmarketcap](https://github.com/api3dao/airnode/blob/v0.8/packages/airnode-examples/integrations/authenticated-coinmarketcap)<ExternalLinkImage/> -
  cryptocurrency price request using
  [authentication](/reference/airnode/latest/understand/api-security.md#airnode-authentication-security-schemes).
- [coingecko](https://github.com/api3dao/airnode/blob/v0.8/packages/airnode-examples/integrations/coingecko)<ExternalLinkImage/> -
  unauthenticated cryptocurrency price request.
- [coingecko-post-processing](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/integrations/coingecko-post-processing)<ExternalLinkImage/> -
  demonstration of the [post-processing](/reference/ois/latest/processing.md)
  feature.
- [coingecko-pre-processing](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/integrations/coingecko-pre-processing)<ExternalLinkImage/> -
  demonstration of the [pre-processing](/reference/ois/latest/processing.md)
  feature.
- [coingecko-signed-data](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/integrations/coingecko-signed-data)<ExternalLinkImage/> -
  demonstration of
  [signed data](/reference/airnode/latest/understand/http-gateways.md) retrieval
  for beacon updates.
- [coingecko-template](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/integrations/coingecko-template)<ExternalLinkImage/> -
  demonstration of
  [template](/reference/airnode/latest/developers/using-templates.md) requests.
- [coingecko-testable](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/integrations/coingecko-testable)<ExternalLinkImage/> -
  demonstration of how to test the endpoint using the
  [HTTP gateway](/reference/airnode/latest/understand/http-gateways.md).
- [failing-example](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/integrations/failing-example)<ExternalLinkImage/> -
  demonstration of Airnode error handling through an invalid request.
- [relay-security-schemes](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/integrations/relay-security-schemes) -
  demonstration of how to
  [relay multiple request metadata](/reference/airnode/latest/understand/api-security.md#relayed-meta-data-security-schemes)
  like chain ID and sponsor address to the API endpoint.
- [weather-multi-value](https://github.com/api3dao/airnode/tree/v0.8/packages/airnode-examples/integrations/weather-multi-value)<ExternalLinkImage/> -
  authenticated weather request
  [encoding multiple parameters](/reference/ois/latest/reserved-parameters.md#encoding-multiple-values)
  including the transaction timestamp, time of sunset, temperature, and a
  description of the weather.
