<!--
Shows itself when a versioned docset (Airnode or OIS) is 
not displaying its latest version.
Each page in a versioned docset adds this component under its title.

WARNING: Do not place HTML comment lines inside paragraph elements.
-->

<template>
  <div v-if="show" class="version-warning-box">
    This is an older version of {{ docSet }}. See the
    <a class="version-warning-link" :href="docSetPath">latest</a>.
  </div>
</template>

<script>
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
      if (this.path.indexOf('/reference/airnode/v') > -1) {
        this.docSet = 'Airnode';
        this.docSetPath = '/reference/airnode/latest/';
        this.show = true;
      } else if (this.path.indexOf('/reference/ois/v') > -1) {
        this.docSet = 'Airnode';
        this.docSetPath = '/reference/ois/latest/';
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
  max-width: 400px;
  font-size: small;
}
</style>

<!--style lang="stylus">

@media (max-width: $MQMobile)
  .version-list
    margin-right -25px
</style-->
