<!--
Writes out hte $frontmatter.pageHeader about the $frontmatter.title
-->

<template>
  <div id="api3-sidebar-path">
    <span style="font-size: small">📂&nbsp;</span>
    <span>{{ frontmatter.pageHeader }}</span>
  </div>
</template>

<script>
import { useData } from 'vitepress';
export default {
  name: 'PageHeader',
  data: () => ({
    frontmatter: useData().frontmatter,
  }),
};
</script>

<style scoped>
#api3-sidebar-path {
  opacity: 0.5;
  margin-bottom: 0px;
  font-weight: 500;
}
</style>
