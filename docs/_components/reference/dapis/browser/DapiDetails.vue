<!--
Displays an individual dAPI's details, hosts the component to
display the dAPI's value.
-->

<template>
  <div>
    <div class="dapi-detail-flex-container">
      <div class="dapi-detail-flex-left">
        <a href="javascript:void(0)" class="dapi-back-btn" v-on:click="goBack()"
          >←</a
        >
      </div>
      <div class="dapi-detail-flex-right">
        <div>{{ dapi.name }}</div>
      </div>
    </div>

    <div class="dapi-content-box">
      <i class="dapi-content-box-label">Network:</i>
      <span class="bcd-content-box-value"
        >{{ chain.fullname }} - ({{ chain.id }})</span
      >
    </div>
    <!-- Error -->
    <div v-if="error" class="dapi-list-error">{{ error }}</div>

    <!-- Value 
    Do not add to the DOM until the template is loaded. 
    The template _times param needs to be available. -->
    <div class="dapi-content-box" v-if="templatesLoaded">
      <DapiValue
        v-bind:dapi="dapi"
        v-bind:chain="chain"
        class="dapi-content-box-label"
      />
    </div>

    <!-- BEACONS -->
    <div class="dapi-content-box" v-if="templatesLoaded">
      <i class="dapi-content-box-label">Sourced Beacons:</i> ({{
        dapi.beacons.length
      }})
      <hr />
      <div v-for="item in dapi.beacons" v-bind:key="item.is">
        <div class="dapi-content-box-value" style="font-size: large">
          <b>{{ item.name }}</b>
        </div>
        <div class="dapi-content-box-value">
          Description: {{ item.description }}
        </div>
        <div class="dapi-content-box-value">
          Beacon ID: {{ item.beaconId }}<CopyIcon :text="item.beaconId" />
        </div>
        <div class="dapi-content-box-value">
          Template ID: {{ item.templateId }}<CopyIcon :text="item.templateId" />
        </div>
        <div class="dapi-content-box-value">
          Template:
          <pre><code>{{ item.template }}</code></pre>
        </div>

        <hr />
      </div>
    </div>
  </div>
</template>

<script>
//const axios = require('axios');
import axios from 'axios';

export default {
  name: 'DapiDetails',
  props: {
    dapi: {},
    chain: {},
  },
  data: () => ({
    templatesLoaded: undefined,
    error: undefined,
  }),
  mounted() {
    this.$nextTick(async function () {
      this.getTemplates();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },
  methods: {
    // Add the template to each Beacon in the dAPI.
    async getTemplates() {
      for (let i = 0; i < this.dapi.beacons.length; i++) {
        try {
          const beacon = this.dapi.beacons[i];
          let response = await axios.get(
            'https://operations-development.s3.amazonaws.com/latest/templates/' +
              beacon.templateId +
              '.json'
          );
          beacon.template = response.data;
        } catch (err) {
          this.error = 'Failed to load templates: ' + err.toString();
        }
      }
      // If the templates fail then the value will not be displayed.
      if (!this.error) this.templatesLoaded = true;
    },
    goBack() {
      // Do not pass any parameters
      this.$parent.togglePanes();
    },
  },
};
</script>

<style scoped>
.dapi-content-box {
  width: 97%;
  box-shadow: 2px 2px 5px lightgrey;
  border: 1px solid lightgrey;
  border-radius: 0.4em;
  padding: 6px;
  margin-bottom: 20px;
}

.dapi-content-box-label {
  margin-left: 5px;
}

.dapi-content-box-value {
  margin-left: 15px;
  font-family: courier;
  font-size: small;
  overflow-wrap: break-word;
}

.dapi-back-btn {
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
}

.dapi-detail-flex-container {
  height: 62px;
  display: flex;
  border-bottom: 1px solid gray;
  margin-bottom: 25px;
}

.dapi-detail-flex-left {
  margin-top: 9px;
  width: 58px;
  height: 6vh;
  font-size: x-large;
  font-weight: 600;
}

.dapi-detail-flex-right {
  margin-top: 14px;
  height: 6vh;
  font-size: xx-large;
}
</style>
