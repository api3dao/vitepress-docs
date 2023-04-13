<template>
  <span v-if="versions.length > 1">
    <select @change="goToRoute" v-model="path" class="api3-version-select">
      <option v-for="vrs in versions" :key="vrs.path" :value="vrs.path">
        <span>{{ vrs.version }}</span>
        <!-- https://unicode-table.com/en/sets/arrow-symbols/#down-arrows -->
        <span v-if="path === vrs.path">&nbsp;&#9660;</span>
      </option>
    </select>
  </span>
  <span v-else-if="staticVersion"> {{ staticVersion }}</span>
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
    versions: [], // Do not use undefined or the template wil error when loaded
    staticVersion: undefined, // For Airnode  and OIS, if only one version put the version from frontmatter here
    goRouterFunc: useRouter().go,
  }),
  mounted() {
    // Watch for page change and alter the picklist as needed
    const { page } = useData();
    watch(page, (currentPage) => {
      const p = currentPage.relativePath;
      this.parsePath('/' + p);
      this.setPickListData();
      this.setStaticVersion(currentPage.frontmatter);
    });

    const { path } = useRoute();
    this.parsePath(path);

    this.$nextTick(function () {
      this.setPickListData();
      this.setStaticVersion(page._value.frontmatter); // passes the page frontmatter
    });
  },
  methods: {
    parsePath(p) {
      // Set this.path to the new path
      const arr = p.split('/');
      this.path = '/' + arr[1] + '/' + arr[2] + '/' + arr[3] + '/';
    },
    /**
     * If Airnode or OIS only has one version then the static version from frontmatter
     * must be displayed. /next is not considered a version released in PROD, only in DEV.
     * @param {*} frontmatter
     */
    setStaticVersion(frontmatter) {
      this.staticVersion = undefined;
      // Only Airnode and OIS
      if (
        this.path.indexOf('/reference/airnode/') > -1 ||
        this.path.indexOf('/reference/ois/') > -1
      ) {
        // Must have more than one version OR populate static version display
        if (this.versions.length < 2) {
          this.staticVersion = frontmatter.version;
        }
      }
    },
    setPickListData() {
      // Only for Airnode and OIS
      // slice() makes a copy of the original versions array
      if (this.path.indexOf('/reference/airnode/') > -1) {
        this.versions = versionsArray.versionsAirnode.slice();
      } else if (this.path.indexOf('/reference/ois/') > -1) {
        this.versions = versionsArray.versionsOIS.slice();
      } else this.versions = [];

      // Alter the version array for PROD only
      // For PROD remove "/next" for Airnode and OIS
      // The top of the versions array will always be the /next version.
      // TEMP: For now OIS only has one version (this.versions.length > 1),
      // so can remove the code (this.versions.length > 1) later
      if (
        window.location.href.indexOf('localhost:') === -1 &&
        this.versions.length > 1
      ) {
        this.versions.shift();
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
