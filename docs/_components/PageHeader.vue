<!--
Writes out the $frontmatter.pageHeader above the $frontmatter.title
-->

<template>
  <div id="api3-pageHeader-path">
    <img
      src="/img/Folder-Dark.png"
      v-if="isDark"
      style="width: 3%; float: left; margin-top: 1px"
    />
    <img
      src="/img/Folder-Light.png"
      v-if="!isDark"
      style="width: 3%; float: left; margin-top: 1px"
    />
    <span style="margin-left: 5px">{{ frontmatter.pageHeader }}</span>
  </div>
</template>

<script>
import { useData } from 'vitepress';
import { watch } from 'vue';

export default {
  name: 'PageHeader',
  data: () => ({
    frontmatter: useData().frontmatter,
    isDark: undefined,
  }),
  mounted() {
    this.isDark = useData().isDark.value;
    // Changes the folder icon
    watch(useData().isDark, (dark) => {
      this.isDark = dark;
    });
  },
};
</script>

<style scoped>
#api3-pageHeader-path {
  opacity: 0.5;
  margin-bottom: 0px;
  font-weight: 500;
  margin-top: 0px;
}
</style>
