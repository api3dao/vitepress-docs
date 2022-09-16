<template>
  <span>
    <!-- https://unicode-table.com/en/sets/arrow-symbols/#down-arrows -->
    <select @change="goToRoute" v-model="path" class="api3-version-select">
      <option v-for="vrs in versions" :key="vrs.path" :value="vrs.path">
        {{ vrs.label }}
        <span v-if="path === vrs.path">&#9660;</span>
      </option>
    </select>
  </span>
</template>

<script>
import versions from './versions';
import { useRouter, useData, useRoute } from 'vitepress';
import { watch } from 'vue';
import globalSearch from '../../.vitepress/theme/index.js';

//https://github.com/vuejs/vue-router/issues/3379

export default {
  name: 'VersionPicklist',
  data: () => ({
    path: undefined,
    versions: undefined,
    goRouterFunc: useRouter().go,
  }),
  mounted() {
    console.log('globalSearch', globalSearch);
    // Watch for page change and alter the picklist as needed
    const { page } = useData();
    watch(page, (currentPage) => {
      const p = currentPage.relativePath;
      this.parsePath('/' + p);
      this.setPickListData();
    });
    const { path } = useRoute();
    this.parsePath(path);

    this.$nextTick(function () {
      this.setPickListData();
    });
  },
  methods: {
    parsePath(p) {
      // Set this.path to the new path
      const arr = p.split('/');
      this.path = '/' + arr[1] + '/' + arr[2] + '/' + arr[3] + '/';
    },
    setPickListData() {
      if (this.path.indexOf('/reference/airnode/') > -1) {
        this.versions = versions.airnode;
      } else if (this.path.indexOf('/reference/ois/') > -1) {
        this.versions = versions.ois;
      }
    },
    goToRoute() {
      this.goRouterFunc(this.path);
    },
  },
};
</script>

<style scoped>
.api3-version-select {
  cursor: pointer;
  width: 100px;
  font-size: small;
  padding-left: 3px;
  background-color: transparent;
}
</style>
