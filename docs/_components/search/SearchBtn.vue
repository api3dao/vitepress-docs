<!-- Opens a search modal (SearchBox.vue) as its parent. 
-->

<template>
  <teleport to="body">
    <div
      class="api3-search-modal"
      style="user-select: none"
      v-show="isModalActive"
    >
      <button @click="isModalActive = !isModalActive" style="float: right">
        <div style="font-size: 28pt; font-weight: 600; transform: scaleY(0.7)">
          X
        </div>
      </button>
      <br />
      <SearchBox />
    </div>
  </teleport>
  <span>
    <button
      class="api3-search-btn"
      style="user-select: none"
      @click="isModalActive = !isModalActive"
    >
      🔍
    </button>
  </span>
</template>

<script>
import readFile from 'fs';
import Document from 'flexsearch';
import fs from 'fs';
import chainsRef from '../../.vitepress/chains.json';

// https://stackoverflow.com/questions/69760524/flexsearch-export-and-import-document-index-issue/69853828#69853828
export default {
  name: 'SearchBtn',
  components: {
    //SearchBox2,
  },
  data: () => ({
    showModal: false,
    isModalActive: false,
    //showSearchIcon: false,
  }),
  methods: {
    openModal() {
      this.showModal = !this.showModal;
    },
    onChildClick() {
      // The modal will send a msg to close when user clicks outside the modal
      console.log('Closing the search dialog');
      this.showModal = false;
    },
  },
  watch: {
    $route($event) {},
  },
  mounted() {
    this.$nextTick(function () {
      console.log('Search btn mounted');
      // If not the landing page show the search icon.
      //if (this.$route.path !== '/') this.showSearchIcon = true;
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
