<!--
Shows itself when a versioned doc set (Airnode or OIS) is 
not displaying its latest version.
Each page in a versioned doc set adds this component under its title.

WARNING: Do not place HTML comment lines inside paragraph elements.
-->

<template>
  <div v-if="show" class="version-warning-box">
    This is an older version of {{ docSet }}. Try
    <a class="version-warning-link" :href="docSetPath">{{ docSetVersion }}</a>
    which is the latest version.
  </div>
</template>

<script>
import { versionsAirnode, versionsOIS } from '../.vitepress/versions.json';
import { useRoute } from 'vitepress';

export default {
  name: 'VersionWarning',
  data: () => ({
    show: false,
    docSet: undefined,
    docSetVersion: undefined,
    docSetPath: undefined,
    path: useRoute().path,
  }),
  methods: {
    parseRoute() {
      const arr = this.path.split('/');
      if (
        arr[2] === 'airnode' &&
        versionsAirnode
          .map((x) => x.path)
          .indexOf('/reference/airnode/' + arr[3] + '/') !== 0
      ) {
        this.docSet = 'Airnode';
        this.docSetVersion = versionsAirnode[0].label;
        this.docSetPath = versionsAirnode[0].path;
        this.show = true;
      } else if (
        arr[2] === 'ois' &&
        versionsOIS
          .map((x) => x.path)
          .indexOf('/reference/ois/' + arr[3] + '/') !== 0
      ) {
        this.docSet = 'OIS';
        this.docSetVersion = versionsOIS[0].version;
        this.docSetPath = versionsOIS[0].path;
        this.show = true;
      }
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.parseRoute();
    });
  },
};
</script>

<style scoped>
.version-warning-link {
  text-decoration: underline;
  color: white;
  font-weight: bold;
}
.version-warning-box {
  margin: 0px -19px 19px 0px;
  padding: 3px 8px 3px 8px;
  text-align: center;
  color: white;
  background-color: #7963b2;
  border-radius: 0.4em;
  max-width: 500px;
  font-size: small;
}
</style>

<!--style lang="stylus">

@media (max-width: $MQMobile)
  .version-list
    margin-right -25px
</style-->
