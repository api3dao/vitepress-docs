---
title: Verify Airnode Addresses
sidebarHeader: Reference
sidebarSubHeader: Airnode
pageHeader: Reference → Airnode → v0.12 → Verify Airnode Addresses
path: /reference/airnode/next/developers/verify-airnode-addresses.html
version: v0.12
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

An Airnode is owned and operated by an API provider. Every Airnode has a unique
on-chain
[`airnodeAddress`](/reference/airnode/next/concepts/airnode.md#airnodeaddress)
created and known by its API provider. API providers normally announce their
Airnode addresses in the form of a DNS `TXT` record within their DNS
registration, which also serves to prove ownership. An Airnode's address is the
same for all chains.

The key for the `TXT` record is `chainapi-verification-keys` and is an array of
Airnode addresses owned by the API provider. Below is an example of the Airnode
for
[dxFeed<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=dxfeed.com#TXT-Records).

![dxfeed-txt-record](../assets/images/txt-record-dxfeed.png)

## API providers

- Coinpaprika: https://coinpaprika.com/
- dxFeed: https://dxfeed.com/
- Finage: https://finage.co.uk/
- Finnhub: https://finnhub.io/
- Kaiko: https://www.kaiko.com/
- NewChangeFX: https://www.newchangefx.com/
- Nodary: https://nodary.io/docs/data-feeds/
- TraderMade: https://tradermade.com/
- **twelve**data: https://twelvedata.com/

## API provider `txt` records

The following list of links go to the DNS lookup at DigitalOcean.

- [Coinpaprika<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=coinpaprika.com#TXT-Records)
- [dxFeed<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=dxfeed.com#TXT-Records)
- [Finage<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=finage.co.uk#TXT-Records)
- [Finnhub<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=finnhub.io#TXT-Records)
- [Kaiko<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=kaiko.com#TXT-Records)
- [NewChangeFX<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=newchangefx.com#TXT-Records)
- [Nodary<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=nodary.io#TXT-Records)
- [TraderMade<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=tradermade.com#TXT-Records)
- [twelvedata<ExternalLinkImage/>](https://www.digitalocean.com/community/tools/dns?domain=twelvedata.com#TXT-Records)

<FlexEndTag/>
