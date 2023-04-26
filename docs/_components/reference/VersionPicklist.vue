<template>
  <span>
    <select @change="goToRoute" v-model="path" class="api3-version-select">
      <option v-for="vrs in versions" :key="vrs.path" :value="vrs.path">
        <span>{{ vrs.version }}</span>
        <!-- https://unicode-table.com/en/sets/arrow-symbols/#down-arrows -->
        <span v-if="path === vrs.path">&nbsp;&#9660;</span>
      </option>
      <optgroup label="Legacy documentation">
        <option v-for="vrs in versionsLegacy" :key="vrs.path" :value="vrs.path">
          <span>{{ vrs.version }}</span>
          <span v-if="path === vrs.path">&nbsp;&#9660;</span>
        </option>
      </optgroup>
    </select>
  </span>
</template>

<script>
import versionsArray from '../../.vitepress/versions';
import versionsLegacyArray from '../../.vitepress/versions-legacy';
import { useRouter, useData, useRoute } from 'vitepress';
import { watch } from 'vue';

// https://github.com/vuejs/vue-router/issues/3379

export default {
  name: 'VersionPicklist',
  data: () => ({
    path: undefined,
    lastPath: undefined,
    versions: [], // Do not use undefined or the template will error when loaded
    versionsLegacy: [], // Same as above
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
      this.lastPath = this.path;
    },
    setPickListData() {
      // Only for Airnode and OIS
      // slice() makes a copy of the original versions array
      if (this.path.indexOf('/reference/airnode/') > -1) {
        this.versions = versionsArray.versionsAirnode.slice();
        this.versionsLegacy = versionsLegacyArray.versionsAirnode.slice();
      } else if (this.path.indexOf('/reference/ois/') > -1) {
        this.versions = versionsArray.versionsOIS.slice();
        this.versionsLegacy = versionsLegacyArray.versionsOIS.slice();
      } else {
        this.versions = [];
        this.versionsLegacy = [];
      }
    },
    goToRoute() {
      if (this.path.indexOf('https://') === -1) {
        this.lastPath = this.path;
        this.goRouterFunc(this.path);
      } else {
        // Going to old docs
        var a = document.createElement('a');
        // Be careful adding target back in. MacOS in DEV is fine
        // but running a local build on localhost:8082 you get a pop-up blocked message.
        // a.target = '_oldDocs';
        a.href = this.path;
        a.click();

        // Set the path to lastPath
        // Used to set the select list tot he last "new docs" version
        // when going to the old docs.
        this.path = this.lastPath;
      }
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
