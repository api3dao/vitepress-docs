<template>
  <span style="user-select: none">
    <!-- https://unicode-table.com/en/sets/arrow-symbols/#down-arrows -->
    <!-- prettier-ignore -->
    <span
      v-if="showVersions"
      style="cursor: pointer"
      @click="showVersions = !showVersions">
      {{ selectedVersion }}&nbsp;&#9660;
    </span>
    <!-- prettier-ignore -->
    <span v-else style="cursor: pointer" @click="showVersions = !showVersions">
      {{ selectedVersion }}
      <span style="transform: rotate(270deg); display: inline-block">
        &#9660;
      </span>
    </span>

    <div v-if="showVersions">
      <div v-for="(v, index) in versions" :key="index">
        <a :href="v.path">{{ v.version }}</a>
      </div>
      <i>Legacy Documentation</i>
      <div
        v-for="(v, index) in versionsLegacy"
        :key="index"
        style="margin-left: 10px"
      >
        <a :href="v.path" target="_oldDocs">{{ v.version }}</a>
      </div>
    </div>
  </span>
</template>

<script>
import versionsArray from '../../.vitepress/versions';
import versionsLegacyArray from '../../.vitepress/versions-legacy';
import { useData, useRoute } from 'vitepress';
import { watch } from 'vue';

// https://github.com/vuejs/vue-router/issues/3379

export default {
  name: 'VersionPicklist',
  data: () => ({
    path: undefined,
    lastPath: undefined,
    selectedVersion: '',
    versions: [], // Do not use undefined or the template will error when loaded
    versionsLegacy: [], // Same as above
    showVersions: false,
    toggleIcon: '&#5125;', // &#9660;
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
      this.lastPath = this.path;
    },
    setPickListData() {
      // Only for Airnode and OIS
      // slice() makes a copy of the original versions array

      if (this.path.indexOf('/reference/airnode/') > -1) {
        this.versions = versionsArray.versionsAirnode.slice();
        this.versionsLegacy = versionsLegacyArray.versionsAirnode.slice();
        this.versions.forEach((element) => {
          if (this.lastPath === element.path) {
            this.selectedVersion = element.version;
          }
        });
      } else if (this.path.indexOf('/reference/ois/') > -1) {
        this.versions = versionsArray.versionsOIS.slice();
        this.versionsLegacy = versionsLegacyArray.versionsOIS.slice();
        this.versions.forEach((element) => {
          if (this.lastPath === element.path) {
            this.selectedVersion = element.version;
          }
        });
      } else {
        this.versions = [];
        this.versionsLegacy = [];
      }

      // Alter the version array for PROD only.
      // For PROD remove "/next" for Airnode and OIS
      // The top of the versions array will always be the /next version
      // if present at all.
      if (
        window.location.href.indexOf('localhost:') === -1 &&
        this.versions.length > 0 &&
        this.versions[0].path.indexOf('/next') !== -1
      ) {
        this.versions.shift();
      }
    },
  },
};
</script>

<style scoped></style>
