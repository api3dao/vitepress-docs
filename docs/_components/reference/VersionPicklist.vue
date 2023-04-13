<template>
  <span v-if="versions.length > 1">
    <select @change="goToRoute" v-model="path" class="api3-version-select">
      <option v-for="vrs in versions" :key="vrs.path" :value="vrs.path">
        <!--  Only show /next if in DEV (isDev) -->
        <span v-if="isDev">{{ vrs.version }}</span>
        <!-- https://unicode-table.com/en/sets/arrow-symbols/#down-arrows -->
        <span v-if="path === vrs.path">&nbsp;&#9660;</span>
      </option>
    </select>
  </span>
  <!-- This can be removed when OIS has more than one version -->
  <span v-else-if="versions.length === 1"> {{ versions[0].version }}</span>
</template>

<script>
import versionsArray from '../../.vitepress/versions';
import { useRouter, useData, useRoute } from 'vitepress';
import { watch } from 'vue';

//https://github.com/vuejs/vue-router/issues/3379

export default {
  name: 'VersionPicklist',
  data: () => ({
    path: undefined,
    isDev: undefined,
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
        this.versions = versionsArray.versionsAirnode.slice(); // slice makes a copy of the org array
      } else if (this.path.indexOf('/reference/ois/') > -1) {
        this.versions = versionsArray.versionsOIS.slice(); // slice makes a copy of the org array
      } else this.versions = [];
      // Alter the version array for DEV vrs PROD
      // For now OIS only has one version (this.versions.length > 1), can remove it later
      if (
        window.location.href.indexOf('localhost:') === -1 &&
        this.versions.length > 1
      ) {
        // If PROD remove /next for Airnode and OIS
        // The top of the array will always be the /next version.
        this.versions.shift();
      } else {
        // If Dev the array stays as is
        this.isDev = true;
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
