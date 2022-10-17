<!--
Gets the dAPI's's on-chain value from https://api.api3labs.link/operations.
-->

<template>
  <div>
    <div>
      <a
        href="javascript:void(0);"
        v-on:click="getDapiValue()"
        v-show="!loadingSpinner"
      >
        <img
          width="25px"
          style="float: right; margin-right: 10px; opacity: 0.8"
          src="/img/refresh-icon.png"
      /></a>
    </div>

    <!-- Current value -->
    <div>
      <!-- Error -->
      <div v-show="err" class="dapi-value-err">{{ err }}</div>
      <i>Current value:</i> <b>{{ value }}</b>
      <img
        v-show="loadingSpinner"
        width="68px"
        style="opacity: 0.7"
        src="/img/marching-balls.gif"
      />
      <div class="dapi-current-value-dttm">
        Date: {{ date }} <br />Time: {{ time }} <br />
      </div>
    </div>

    <!-- Raw value -->
    <div style="margin-top: 15px"><i>Raw value:</i></div>
    <pre
      style="background-color: white; margin-left: -9px; margin-top: -15px"
    ><code style="color:gray;font-size: small;">{{raw}}</code></pre>

    <!-- Last 5 values-->
    <div style="margin-top: -25px">
      <div style="margin-bottom: 5px">
        <i>Last five values:</i>
        <img
          v-show="loadingLastFiveSpinner"
          width="68px"
          style="opacity: 0.7"
          src="/img/marching-balls.gif"
        />
      </div>
      <ul
        class="dapi-five-values-dttm"
        v-for="(item, i) in lastFiveValues"
        v-bind:key="i"
      >
        <li>{{ item.value }} {{ item.date }} @{{ item.time }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
//const axios = require('axios');
import axios from 'axios';

export default {
  name: 'DapiValue',
  props: ['dapi', 'chain'],
  data: () => ({
    loadingSpinner: true,
    loadingLastFiveSpinner: true,
    value: undefined,
    date: undefined,
    time: undefined,
    _times: undefined,
    lastFiveValues: [],
    raw: {},
    err: null,
  }),
  mounted() {
    this.$nextTick(async function () {
      this.getDapiValue();
    });
  },
  methods: {
    convertToDate(str) {
      // Multiply by 1000 since JS timestamps need milliseconds and UNIX delivers in seconds.
      return new Date(str * 1000).toDateString();
    },
    convertToTime(str) {
      // Multiply by 1000 since JS timestamps need milliseconds and UNIX delivers in seconds.
      return new Date(str * 1000).toTimeString();
    },
    computeValue(str) {
      if (this._times) return str / this._times;
      return str;
    },
    async getDapiValue() {
      try {
        this.loadingSpinner = true;
        this.loadingLastFiveSpinner = true;
        this.value = undefined;
        this.date = undefined;
        this.time = undefined;
        this._times = undefined;
        this.err = undefined;
        this.lastFiveValues = [];

        // Current value
        // https://explorer-api.api3.org/beacons/on_chain_value?chainId=137&dapiName=ADA%2FUSD
        const res2 = await axios.get(
          'https://explorer-api.api3.org/beacons/on_chain_value/',
          {
            params: {
              chainId: this.chain.id,
              dapiName: this.dapi.name,
            },
          }
        );
        // Displayed in the HTML
        this.raw = res2.data;

        // Look for a embedded response error
        if (res2.data.err) {
          this.err = res2.data.err.toString();
        }
        // The response should now contain valid data
        else {
          // Convert the hex value
          // Get the decimal value by trimming off the '0x' and then parsing the
          // remaining portion using parseInt(something, 16):
          this.value = parseInt(
            res2.data.beaconResponse[0].hex.substring(2),
            16
          );

          /**  TODO:
           *    Apply the reserved parameter _times.
           */
          // Update this.value based on the reserved parameter _times, if any.
          // First be sure there is a template loaded.
          if (!this.dapi.beacons[0].template) {
            throw new Error('The template was not present.');
          } else {
            // Look for _times in the decoded parameters
            const decodedParametersArr =
              this.dapi.beacons[0].template.decodedParameters.filter(
                (character) => character.name === '_times'
              );
            if (decodedParametersArr.length !== 0) {
              // The decodedParametersArr field contains the value of _times
              this._times = decodedParametersArr[0].value;
              this.value = this.computeValue(this.value);
            }
          }

          // Current DTTM
          const timestamp = res2.data.beaconResponse[1];
          this.date = this.convertToDate(timestamp);
          this.time = this.convertToTime(timestamp);
          this.loadingSpinner = false; // Current value ready for display

          // Last 5 transactions
          const resTx = await axios.get(
            'https://explorer-api.api3.org/beacons/last_transactions',
            {
              params: {
                chainId: this.chain.id,
                dapiName: this.dapi.name,
              },
            }
          );
          resTx.data.every((element) => {
            const v = parseInt(element.parsedLog.args[1].hex.substring(2), 16);
            const d = parseInt(element.parsedLog.args[2].hex.substring(2), 16);
            this.lastFiveValues.push({
              value: this.computeValue(v),
              date: this.convertToDate(d),
              time: this.convertToTime(d),
            });
            if (this.lastFiveValues.length > 4) {
              return false;
            }
            return true;
          });
        }

        this.loadingLastFiveSpinner = false;
      } catch (error) {
        this.err = error;
        this.loadingSpinner = false;
        this.loadingLastFiveSpinner = false;
      }
    },
  },
};
</script>

<style>
.dapi-value-err {
  font-family: courier;
  margin-left: 11px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: red;
  font-size: small;
}
.dapi-current-value-dttm {
  font-family: courier;
  margin-left: 17px;
  margin-top: 4px;
  font-size: small;
}
.dapi-five-values-dttm {
  margin-left: 17px;
  margin-bottom: 5px;
  font-size: small;
  font-family: courier;
}
</style>
