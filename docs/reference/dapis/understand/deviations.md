---
title: Deviation thresholds
sidebarHeader: Reference
sidebarSubHeader: dAPIs
pageHeader: Reference → dAPIs → Understanding dAPIs
path: /reference/dapis/understand/deviations.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

A deviation threshold value is used to update the on-chain value of a dAPI's
beacon or beacon set. When the on-chain value deviates (by an established
percentage) from the off-chain value, the on-chain value is updated.

## Update Interval

Functionality within [Airnode](/reference/airnode/latest/understand/) is
responsible to check for any deviation between the on-chain value of a dAPI's
beacon or beacon set verses the off-chain signed data provided by related API
providers. The deviation threshold check runs continuously based on a
configuration value set in `updateInterval`. Most configurations are set using
30 to 60 seconds with the later being the more popular.

## Heartbeat

If a dAPI's value has not been updated for a certain amount of time (known as
the heartbeat) the dAPI value is forcibly updated. For example:

- A dAPI's value was last updated at noon on Tuesday to <u>23.01</u>.
- On Wednesday at 11:14 am the off-chain value changed to <u>23.02</u>. This did
  not trigger an update because the deviation threshold of 1% for <u>23.01</u>
  would be <u>23.2401</u>.
- Between Wednesday 11:15 am and noon the off-chain value remained at
  <u>23.02</u>, no additional updates had been made because the deviation
  threshold was not triggered.
- At noon on Wednesday the off-chain value is still <u>23.02</u>, but because
  the heartbeat is set to 24 hours, a forced on-chain update of <u>23.02</u> is
  made as an update had not been triggered since noon on Tuesday.

## Testnet dAPIs

Testnet dAPIs are only available on the API3 Market with a deviation threshold
of 1% and a [heartbeat](/reference/dapis/understand/deviations.md#heartbeat) of
24 hours.

| Deviation | Heartbeat |
| --------- | --------- |
| 1%        | 24 hours  |

## Mainnet dAPIs

Mainnet dAPIs will be available on the API3 Market with multiple deviation
thresholds and [heartbeat](/reference/dapis/understand/deviations.md#heartbeat)
settings.

| Deviation | Heartbeat |
| --------- | --------- |
| 0.25%     | 24 hours  |
| 0.5%      | 24 hours  |
| 1%        | 24 hours  |

<FlexEndTag/>
