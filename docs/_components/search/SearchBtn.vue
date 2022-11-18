<template>
  <teleport to="body">
    <div
      class="api3-search-modal"
      style="user-select: none"
      v-show="isModalActive"
    >
      <button @click="hideModal()" style="float: right">
        <div style="font-size: 24pt; transform: scaleY(0.7)">X</div>
      </button>

      <form action="">
        <input
          placeholder="min 3 characters each word"
          autocomplete="off"
          spellcheck="false"
          v-on:keyup="search()"
          style="
            border: 1px solid gray;
            border-radius: 0.3em;
            width: 225px;
            font-size: medium;
            padding-left: 5px;
            padding-right: 5px;
          "
          type="text"
          id="search-value"
        /><br />
        <input
          type="checkbox"
          id="checkBox"
          @click="search()"
          class="api3-search-checkbox"
        />
        <label for="indexType" style="font-size: small">
          Include older Airnode and OIS versions
        </label>
      </form>
      <SearchResults v-show="results" :results="results" />
      <br />
    </div>
  </teleport>
  <span>
    <button
      class="api3-search-btn"
      style="user-select: none"
      @click="openModal()"
    >
      🔍
    </button>
  </span>
</template>

<script>
/*
  Runs a search against the FlexSearch index.
  1. This component is persistent as it overlays the main layout
  2. The user must type a minimum of 3 characters per word
  3. Use event bus to notify SearchHighlight.vue
  https://dev.to/sanchithasr/how-to-communicate-between-components-in-vue-js-kjc
*/
import Index from 'flexsearch';
import * as filesAll from './indexes-all.js';
import * as filesLatest from './indexes-latest.js';
import frontmatter from '../../.vitepress/frontmatterIds.json';
import axios from 'axios';
import eventBus from '../../.vitepress/theme/eventBus.ts';

export default {
  name: 'SearchBtn',
  data: () => ({
    showModal: false,
    isModalActive: false,
    indexAll: undefined,
    indexLatest: undefined,
    results: [],
    useIndexAll: false,
  }),
  setup() {
    return {
      sendEvent: () => {
        eventBus().emitter.emit('search-event', { time: new Date() });
      },
    };
  },
  methods: {
    search() {
      let val = document.getElementById('search-value').value;
      let checkbox = document.getElementById('checkBox');

      console.log('----- search()', val);
      console.log('checked', checkbox.checked);

      this.results = [];
      if (val.length < 3) {
        localStorage.removeItem('search-words');
        this.sendEvent();
        return;
      }

      // Store the search words into localStorage
      localStorage.setItem('search-words', val.toLowerCase());
      this.sendEvent();

      // indexLatest (default)
      let ids;
      if (checkbox.checked === false) {
        ids = this.indexLatest.search({
          query: val.toLowerCase(),
          index: ['content'],
          limit: 100,
        });
      }
      // indexAll
      else {
        ids = this.indexAll.search({
          query: val.toLowerCase(),
          index: ['content'],
          limit: 100,
        });
      }

      // Build results set
      ids.forEach((id) => {
        this.results.push({ id: id, frontmatter: frontmatter[id] });
      });
    },
    async openModal() {
      document.getElementById('search-value').value = '';

      this.isModalActive = true;
      if (!this.indexAll) this.buildIndexAll();
      if (!this.indexLatest) this.buildIndexLatest();
    },
    hideModal() {
      localStorage.removeItem('search-words');
      this.isModalActive = false;
    },
    async buildIndexAll() {
      this.indexAll = new Index({
        tokenize: 'full',
      });
      if (window.location.href.indexOf(':5173') > 0) {
        console.log('Pulling files from local repo');
        this.indexAll.import('cfg', filesAll.cfg);
        this.indexAll.import('ctx', filesAll.ctx);
        this.indexAll.import('map', filesAll.map);
        this.indexAll.import('reg', filesAll.reg);
      } else {
        console.log('Pulling files from remote repo');
        let response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/cfg.json'
        );
        this.indexAll.import('cfg', response.data);
        response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/ctx.json'
        );
        this.indexAll.import('ctx', response.data);
        response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/map.json'
        );
        this.indexAll.import('map', response.data);
        response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/reg.json'
        );
        this.indexAll.import('reg', response.data);
      }
    },
    async buildIndexLatest() {
      this.indexLatest = new Index({
        tokenize: 'full',
      });
      if (window.location.href.indexOf(':5173') > 0) {
        console.log('Pulling files from local repo');
        this.indexLatest.import('cfg', filesLatest.cfg);
        this.indexLatest.import('ctx', filesLatest.ctx);
        this.indexLatest.import('map', filesLatest.map);
        this.indexLatest.import('reg', filesLatest.reg);
      } else {
        console.log('Pulling the files from remote repo');
        let response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/cfg.json'
        );
        this.indexLatest.import('cfg', response.data);
        response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/ctx.json'
        );
        this.indexLatest.import('ctx', response.data);
        response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/map.json'
        );
        this.indexLatest.import('map', response.data);
        response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/reg.json'
        );
        this.indexLatest.import('reg', response.data);
      }
    },
  },

  async mounted() {
    this.$nextTick(function () {
      console.log('Search btn mounted');
      localStorage.removeItem('search-words');
    });
  },
};
</script>

<style scoped>
.api3-search-checkbox {
  transform: scale(1.4);
  border-color: black;
  margin-top: 10px;
}
.api3-search-modal {
  /*background: #aaaaaa;*/
  /*box-shadow: 2px 2px 10px 1px;*/
  overflow-y: auto;
  width: 300px !important;
  height: 700px;
  padding: 10px;
  border: solid 1px gray;
  border-radius: 7px;
  /*background-color: lightgrey;*/
  background-color: inherit;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
}

.api3-search-btn {
  font-size: 17pt;
  margin-top: 6px;
  margin-right: 15px;
}
</style>
