<!--
  This component displays a list of all dAPIs sorted by name.
-->

<template>
  <div>
    <hr />

    <!-- PANE: dAPI list -->
    <div v-show="showList">
      <span>
        <!-- prettier-ignore -->
        <i>Network:</i>
        <select
          id="networkPickList"
          class="dapis-network-picklist"
          @change="loadDapis()"
          v-if="chains"
        >
          <option
            v-for="chain in chains"
            v-bind:key="chain.name"
            :value="chain.name"
          >
            {{ chain.fullname }} - ({{ chain.id }})
          </option>
        </select>
      </span>
      <br />
      <!-- Filter  -->
      <i>Filter by:</i>
      <input
        id="searchText"
        spellcheck="false"
        class="dapis-list-filter-input"
        v-on:keyup="void find()"
        placeholder="must contain all"
      /><span style="margin-top: 4px; color: gray; font-size: medium">
        ({{ cnt }})</span
      >

      <!-- dAPIs -->
      <div class="dapi-flex-container">
        <div v-for="(item, index) in dAPIs" v-bind:key="index">
          <div v-show="item.show" v-on:click="togglePanes(item)">
            {{ item.name }}
            <div>
              {{ item.beacons.length }}
              <img
                src="/img/Beacons-active.png"
                width="17px"
                style="opacity: 40%; float: right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- PANE: details -->
    <div v-if="showDetails">
      <DapiDetails :dapi="dAPI" :chain="chain" />
    </div>

    <div style="padding: 155px" v-show="showSpinner">
      <img src="/img/spinner.gif" />
    </div>
    <div v-show="error" class="dapi-list-error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import chainsRef from '../../../../.vitepress/chains.json';

export default {
  name: 'DapiList',
  data: () => ({
    showList: false,
    showDetails: false,
    showSpinner: true,
    error: undefined,
    chains: undefined,
    dAPIs: [],
    beacons: {},
    data: [],
    dAPI: undefined, // Sets data for DapiDetails.vue via togglePanes()
    chain: undefined, // Sets data for DapiDetails.vue via togglePanes()
    cnt: 0,
    scrollY: 0, // Remember Y position when going to details pane
  }),
  mounted() {
    this.$nextTick(function () {
      this.init();
    });
  },
  methods: {
    async init() {
      const responseChains = await axios.get(
        'https://operations-development.s3.amazonaws.com/latest/chains.json '
      );
      this.chains = responseChains.data;
      this.chains = this.sortChainsByName(this.chains);

      // Add local chains reference data
      for (const chain in this.chains) {
        const id = this.chains[chain].id;
        this.chains[chain].type = chainsRef[id].type;
        this.chains[chain].name = chain;
        if (chainsRef[id].fullname) {
          this.chains[chain].fullname = chainsRef[id].fullname;
        } else {
          this.chains[chain].fullname = chain + '*';
        }
        delete this.chains[chain].fullName; // Replaced by fullname
      }

      // Need delay to set network picklist into DOM
      setTimeout(async () => {
        let element = document.getElementById('networkPickList');
        element.value =
          localStorage.getItem('dapi-network') || 'polygon-testnet';
        await this.loadBeacons();
        await this.loadBeaconSets();
        this.loadDapis();
      }, 1);
    },
    async loadBeacons() {
      const response = await axios.get(
        'https://operations-development.s3.amazonaws.com/latest/apis.json'
      );
      for (var provider in response.data) {
        for (var beacon in response.data[provider].beacons) {
          const id = response.data[provider].beacons[beacon].beaconId;
          this.beacons[id] = response.data[provider].beacons[beacon];
        }
      }
    },
    async loadBeaconSets() {
      // Beacon sets are not available as of June 6th, 2022
    },
    async loadDapis() {
      this.showList = false;
      this.error = undefined;
      this.showSpinner = true;
      this.dAPIs = [];
      const network = document.getElementById('networkPickList').value;
      localStorage.setItem('dapi-network', network);
      try {
        const responseDapis = await axios.get(
          'https://operations-development.s3.amazonaws.com/latest/dapis/' +
            network +
            '.json'
        );
        // Construct a dAPI complex object
        for (var dAPI in responseDapis.data) {
          const datafeedId = responseDapis.data[dAPI]; // Get the dAPI's beacon/setId
          const beacon = this.beacons[datafeedId];
          let content = dAPI + ' ';

          // Future use: not sure how to determine NOT a beacon set.
          let beacons = [];
          // Single beacon
          if (!beacon.beacons) {
            beacons.push(beacon);
            //content += beacon.beaconId + '' + beacon.description;
          }
          // Beacon set
          else {
          }

          let obj = {
            name: dAPI,
            show: true,
            beacons: beacons,
            content: content,
          };
          this.dAPIs.push(obj);
        }
        this.dAPIs.sort(this.sortByName);
        this.cnt = this.dAPIs.length;
        this.showSpinner = false;
        this.showList = true;
      } catch (err) {
        console.error(err.toString());
        if (err.toString().indexOf('403') > -1) {
          this.error = 'There are currently no dAPIs on this network.';
        } else {
          this.error = err.toString();
        }
      }
      this.showSpinner = false;
      this.showList = true;
    },
    togglePanes(dapi) {
      // If dapi (param) is undefined then this was called by DapiDetails.vue component
      if (dapi) {
        this.scrollY = window.scrollY;
        // Set data for detail pane (dAPI and Chain)
        this.dAPI = dapi;
        const network = localStorage.getItem('dapi-network');
        this.chain = this.chains[network];
      }

      // Toggle the panes
      this.showList = !this.showList;
      this.showDetails = !this.showDetails;

      // Return to last scroll position if dapiList pane active
      if (!this.showDetails) {
        setTimeout(() => {
          window.scrollBy(0, this.scrollY);
        }, 10);
      }
    },
    sortByName(a, b) {
      if (b.name.toLowerCase() > a.name.toLowerCase()) {
        return -1;
      }
      if (b.name.toLowerCase() < a.name.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    /// Sorts the chains json object by its root keys which is the chain names.
    sortChainsByName(o) {
      return Object.keys(o)
        .sort()
        .reduce((r, k) => ((r[k] = o[k]), r), {});
    },
    find() {
      this.cnt = 0;
      let text = this.$el.querySelector('#searchText').value.toLowerCase();
      const arr = text.split(' ');

      this.dAPIs.forEach((dapi) => {
        arr.forEach((str) => {
          if (str.length === 0) {
            dapi.show = true;
            this.cnt++;
          } else if (dapi.content.toLowerCase().indexOf(str) > -1) {
            dapi.show = true;
            this.cnt++;
          } else {
            dapi.show = false;
          }
        });
      });
    },
    /*getGrafanaUrl(id) {
      return (
        'https://monitor.api3.org/d-solo/SDapXdy7z/documentation-dashboard?orgId=1&var-chainId=4&var-beaconId=' +
        id +
        '&theme=light&panelId=2'
      );
    },
    getGrafanaDeviationUrl(id) {
      return (
        'https://monitor.api3.org/d-solo/SDapXdy7z/documentation-dashboard?var-chainId=4&orgId=1&theme=light&panelId=3&var-beaconId=' +
        id
      );
    },*/
  },
};
</script>

<style>
.dapi-list-error {
  padding: 55px;
  color: red;
}
.dapis-list-filter-input {
  margin-top: 10px;
  margin-left: 3px;
  font-size: large;
  width: 265px;
  max-width: 265px;
  border: 1.5px solid lightgrey;
  border-radius: 5px;
  padding: 3px;
}
.dapi-flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
}

.dapi-flex-container > div > div {
  min-width: 205px;
  max-width: 205px;
  width: 205px;
  height: 23px;
  border: 1px solid lightgrey;
  border-radius: 0.3em;
  margin: 8px 8px 8px 5px;
  padding: 5px;
  overflow: auto;
  color: #50c878;
  font-size: 11pt;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 2px 2px 4px lightgrey;
}
.dapi-flex-container > div > div:hover {
  cursor: pointer;
}
/** The beacon cnt and image */
.dapi-flex-container > div > div > div {
  float: right;
  margin-top: -5px;
  font-size: small;
  padding: 5px 5px 5px 10px;
  font-weight: 500;
  font-family: courier;
  color: gray;
}
.dapis-network-picklist {
  font-size: medium;
  color: gray;
  border: 1.5px solid gray;
  border-radius: 5px;
  /* Do not change the below settings. These are needed
     for mobile devices to prevent horizontal scrolling
     of the viewport, excluding margin-top.
  */
  margin-left: 0px;
  max-width: 250px;
}
</style>
