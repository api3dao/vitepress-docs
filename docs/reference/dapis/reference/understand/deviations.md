---
title: Deviation thresholds
pageHeader: dAPIs → Reference
outline: deep
---

<PageHeader/>

# Deviation thresholds

A deviation threshold value is used to update the on-chain value of a dAPI's
beacon or beacon set. When the on-chain value deviates (by an established
percentage) from the off-chain value, the on-chain value is updated.

## Update Interval

[Airnode-Feed](https://github.com/api3dao/signed-api/tree/main/packages/airnode-feed)
periodically checks for any deviation between the on-chain value of a dAPI's
beacon or beacon set verses the off-chain signed data provided by related API
providers. The deviation threshold check runs continuously based on a
configuration value set in `updateInterval`. Most configurations are set using
30 to 60 seconds.

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

Testnet dAPIs are available on the API3 Market with multiple deviation
thresholds and [heartbeat](/dapis/reference/understand/deviations.md#heartbeat)
settings.

| Deviation | Heartbeat |
| --------- | --------- |
| 0.25%     | 24 hours  |
| 0.5%      | 24 hours  |
| 1%        | 24 hours  |
| 5%        | 24 hours  |

## Mainnet dAPIs

Mainnet dAPIs are available on the API3 Market with multiple deviation
thresholds and [heartbeat](/dapis/reference/understand/deviations.md#heartbeat)
settings.

| Deviation | Heartbeat |
| --------- | --------- |
| 0.25%     | 24 hours  |
| 0.5%      | 24 hours  |
| 1%        | 24 hours  |
| 5%        | 24 hours  |
