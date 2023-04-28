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

      <form action="" v-show="isIndexLoaded">
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
      <SearchResults v-if="isIndexLoaded" :results="results" />
      <!--img
        v-show="!isIndexLoaded"
        src="/img/circle-loading-gif.webp"
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 10%;
        "
      /-->
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
    isModalActive: false, // template uses this to hide overlay
    isIndexLoaded: false,
    index: undefined,
    results: undefined,
    isDark: false,
  }),
  setup() {
    return {
      sendEvent: () => {
        eventBus().emitter.emit('search-event', { time: new Date() });
      },
    };
  },
  methods: {
    /**
     * Run search, triggered by keypress
     */
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

      let ids = this.index.search({
        query: val.toLowerCase(),
        index: ['content'],
        limit: 100,
      });

      // Build results set
      ids.forEach((id) => {
        this.results.push({ id: id, frontmatter: frontmatter[id] });
      });
    },
    /**
     * Opens the search overlay, load index
     */
    async openModal() {
      document.getElementById('search-value').value = '';
      this.results = [];

      this.isModalActive = true;
      if (!this.index) this.buildIndex('latest');
    },
    /**
     * Close the search overlay, clear index
     */
    hideModal() {
      localStorage.removeItem('search-words');
      this.isModalActive = false;
      this.index = undefined;
      this.isIndexLoaded = false;
    },
    /**
     * Build the index by name
     * @param {*} name
     */
    async buildIndex(name) {
      this.index = new Index({
        tokenize: 'full',
      });
      let cfg,
        ctx,
        map,
        reg = undefined;
      console.log('buildIndex() MODE', import.meta.env.MODE);
      if (import.meta.env.MODE === 'development') {
        cfg = await axios.get(`/indexes/${name}/cfg.json`);
        ctx = await axios.get(`/indexes/${name}/ctx.json`);
        map = await axios.get(`/indexes/${name}/map.json`);
        reg = await axios.get(`/indexes/${name}/reg.json`);
      } else {
        cfg = await axios.get(
          `https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/public/indexes/${name}/cfg.json`
        );
        ctx = await axios.get(
          `https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/public/indexes/${name}/ctx.json`
        );
        map = await axios.get(
          `https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/public/indexes/${name}/map.json`
        );
        reg = await axios.get(
          `https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/public/indexes/${name}/reg.json`
        );
      }

      this.index.import('cfg', cfg.data);
      this.index.import('ctx', ctx.data);
      this.index.import('map', map.data);
      this.index.import('reg', reg.data);
      this.isIndexLoaded = true;
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
