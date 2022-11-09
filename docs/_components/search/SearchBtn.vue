<!-- Opens a search modal (SearchBox.vue) as its parent. 
-->

<template>
  <teleport to="body">
    <div
      class="api3-search-modal"
      style="user-select: none"
      v-show="isModalActive"
    >
      <button @click="isModalActive = false" style="float: right">
        <div style="font-size: 24pt; transform: scaleY(0.7)">X</div>
      </button>
      <form action="">
        <input
          placeholder="minimum 3 characters"
          autocomplete="off"
          spellcheck="false"
          v-on:keyup="search($event)"
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
      </form>
      <SearchResults v-show="results" :results="results" />

      <!--div style="font-size: small" v-for="(item, key) in results" :key="key">
        {{ item.frontmatter.title }}<br />
        {{ item.frontmatter.pageHeader }}
      </div-->
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
import Index from 'flexsearch';
import * as indexesDev from './indexes-all-dev.js';
import frontmatter from '../../.vitepress/frontmatterIds.json';
import axios from 'axios';

// https://stackoverflow.com/questions/69760524/flexsearch-export-and-import-document-index-issue/69853828#69853828
export default {
  name: 'SearchBtn',
  data: () => ({
    showModal: false,
    isModalActive: false,
    index: undefined,
    results: [],
  }),
  methods: {
    search(el) {
      this.results = [];
      let ids = this.index.search({
        query: el.target.value,
        index: ['content'],
        limit: 100,
        suggest: true,
        bool: 'and',
      });
      ids.forEach((id) => {
        this.results.push({ id: id, frontmatter: frontmatter[id] });
      });
    },
    async openModal() {
      this.isModalActive = true;
      if (this.index) return;
      // Declare the index
      this.index = new Index({
        tokenize: 'full',
      });
      console.log(window.location.href);
      if (window.location.href.indexOf('5173') > 0) {
        this.index.import('cfg', indexesDev.cfg);
        this.index.import('ctx', indexesDev.ctx);
        this.index.import('map', indexesDev.map);
        this.index.import('reg', indexesDev.reg);
      } else {
        console.log('Pulling the indexes from remote repo');
        console.time();
        let response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/cfg.json'
        );
        this.index.import('cfg', response.data);
        response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/ctx.json'
        );
        this.index.import('ctx', response.data);
        response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/map.json'
        );
        this.index.import('map', response.data);
        response = await axios.get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/indexes/all/reg.json'
        );
        this.index.import('reg', response.data);
        console.timeEnd();
      }
    },
  },
  watch: {
    $route($event) {},
  },
  async mounted() {
    this.$nextTick(function () {
      console.log('Search btn mounted');
    });
  },
};
</script>

<style scoped>
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
