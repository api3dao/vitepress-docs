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
        />
      </form>
      <SearchResults v-show="results" :results="results" />
    </div>
  </teleport>
  <span>
    <button
      class="api3-search-btn"
      style="user-select: none"
      @click="openModal()"
    >
      <img src="/img/Magnifier-Dark.png" v-if="isDark" style="width: 40%" />
      <img src="/img/Magnifier-Light.png" v-if="!isDark" style="width: 40%" />
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
/**
 * Directly importing the local files for the indexes will break the VitePress build.
 * It seems that it has issue importing large files like map.json.
 * Keep this note and the comments import lines below for future
 * reference while this is explored with the VitePress team.
 * Use axios to get the indexes, thus VitePress (via Vite) will not try and load them.
 */

import frontmatter from '../../.vitepress/frontmatterIds.json';
import axios from 'axios';
import eventBus from '../../.vitepress/theme/eventBus.ts';

import { useData } from 'vitepress';
import { watch } from 'vue';

export default {
  name: 'SearchBtn',
  data: () => ({
    showModal: false,
    isModalActive: false,
    indexAll: undefined,
    indexLatest: undefined,
    results: [],
    useIndexAll: false,
    isDark: undefined,
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
      let checkbox = false;

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
      if (checkbox === false) {
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
      this.results = [];

      this.isModalActive = true;
      if (!this.indexLatest) this.buildIndexLatest();
      //if (!this.indexAll) this.buildIndexAll();
    },
    hideModal() {
      localStorage.removeItem('search-words');
      this.isModalActive = false;
    },
    async buildIndexAll() {
      this.indexAll = new Index({
        tokenize: 'full',
      });
      //console.log('buildIndexAll() MODE', import.meta.env.MODE);

      let cfg = await axios.get('/indexes/all/cfg.json');
      let ctx = await axios.get('/indexes/all/ctx.json');
      let map = await axios.get('/indexes/all/map.json');
      let reg = await axios.get('/indexes/all/reg.json');

      this.indexAll.import('cfg', cfg.data);
      this.indexAll.import('ctx', ctx.data);
      this.indexAll.import('map', map.data);
      this.indexAll.import('reg', reg.data);
    },
    async buildIndexLatest() {
      this.indexLatest = new Index({
        tokenize: 'full',
      });
      let cfg,
        ctx,
        map,
        reg = undefined;
      //console.log('buildIndexLatest() MODE', import.meta.env.MODE);
      if (import.meta.env.MODE === 'development') {
        cfg = await axios.get('/indexes/latest/cfg.json');
        ctx = await axios.get('/indexes/latest/ctx.json');
        map = await axios.get('/indexes/latest/map.json');
        reg = await axios.get('/indexes/latest/reg.json');
      } else {
        cfg = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/public/indexes/latest/cfg.json'
        );
        ctx = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/public/indexes/latest/ctx.json'
        );
        map = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/public/indexes/latest/map.json'
        );
        reg = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/public/indexes/latest/reg.json'
        );
      }

      this.indexLatest.import('cfg', cfg.data);
      this.indexLatest.import('ctx', ctx.data);
      this.indexLatest.import('map', map.data);
      this.indexLatest.import('reg', reg.data);
    },
  },

  async mounted() {
    // Used by the search icon
    this.isDark = useData().isDark.value;

    this.$nextTick(function () {
      localStorage.removeItem('search-words');
    });

    // Changes the search icon
    watch(useData().isDark, (dark) => {
      this.isDark = dark;
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
  overflow-y: auto;
  width: 300px !important;
  height: 700px;
  padding: 10px;
  border: solid 1px gray;
  border-radius: 7px;
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
