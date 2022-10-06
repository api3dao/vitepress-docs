<template>
  <span v-if="versions.length > 1">
    <select @change="goToRoute" v-model="path" class="api3-version-select">
      <option v-for="vrs in versions" :key="vrs.path" :value="vrs.path">
        {{ vrs.version }}
        <!-- https://unicode-table.com/en/sets/arrow-symbols/#down-arrows -->
        <span v-if="path === vrs.path">&#9660;</span>
      </option>
    </select>
  </span>
  <span v-else-if="versions.length === 1"> {{ versions[0].version }}</span>
</template>

<script>
import versions from '../../.vitepress/versions';
import { useRouter, useData, useRoute } from 'vitepress';
import { watch } from 'vue';
import globalSearch from '../../.vitepress/theme/index.js';

//https://github.com/vuejs/vue-router/issues/3379

export default {
  name: 'VersionPicklist',
  data: () => ({
    path: undefined,
    versions: [], // Do not use undefined or the template wil error when loaded
    goRouterFunc: useRouter().go,
  }),
  mounted() {
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
        this.versions = versions.versionsAirnode;
      } else if (this.path.indexOf('/reference/ois/') > -1) {
        this.versions = versions.versionsOIS;
      } else this.versions = [];
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
