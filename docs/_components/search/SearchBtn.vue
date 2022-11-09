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
import * as indexes from './index-imports.js';
import frontmatter from '../../.vitepress/frontmatterIds.json';
import axios from 'axios';

// https://stackoverflow.com/questions/69760524/flexsearch-export-and-import-document-index-issue/69853828#69853828
export default {
  name: 'SearchBtn',
  components: {
    //SearchBox2,
  },
  data: () => ({
    showModal: false,
    isModalActive: false,
    index: undefined,
    results: [],
    map: undefined,
  }),
  methods: {
    search(el) {
      //console.log('>', el.target.value);
      this.results = [];
      let ids = this.index.search({
        query: el.target.value,
        index: ['content'],
        limit: 100,
        suggest: true,
        bool: 'and',
      });
      //console.log('ids', ids.length);
      ids.forEach((id) => {
        this.results.push({ id: id, frontmatter: frontmatter[id] });
        //console.log(id, frontmatter[id].title);
      });
    },
    async openModal() {
      this.isModalActive = true;
      if (this.index) return;
      // Declare the index
      this.index = new Index({
        tokenize: 'full',
      });
      const response = await axios.get(
        'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/.vitepress/search-latest-index/map.json'
      );
      console.log(1, response);
      this.index.import('cfg', indexes.cfg);
      this.index.import('ctx', indexes.ctx);
      this.index.import('map', response.data);
      this.index.import('reg', indexes.reg);

      /*axios
        .get(
          'https://raw.githubusercontent.com/api3dao/vitepress-docs/main/docs/.vitepress/search-latest-index/map.json'
        )
        .then(function (response) {
          // handle success
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {});*/

      // Reassemble the map.json file
      /*console.log(1, typeof indexes.map1, indexes.map1);
      this.map = JSON.parse(
        indexes.map1 +
          indexes.map2 +
          indexes.map3 +
          indexes.map4 +
          indexes.map5 +
          indexes.map6 +
          indexes.map7 +
          indexes.map8 +
          indexes.map9
      );
      console.log(this.map);*/
      // Load the indexed files
    },
  },
  watch: {
    $route($event) {},
  },
  async mounted() {
    this.$nextTick(function () {
      console.log('Search btn mounted');

      /**let one = import('../../.vitepress/frontmatterIds.json');
      console.log(one);
      import('../../.vitepress/frontmatterIds.json').then((mod) => {
        console.log(mod);
      });*/
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
