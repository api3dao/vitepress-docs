<!--
Provide a sidebar path as an indicator to the page'<style scoped>
location in the sidebar.
</style>
-->

<template>
  <div id="api3-sidebar-path">
    <span style="font-size: small">📂&nbsp;</span
    >{{ frontmatter.sidebarHeader }}
    <span v-if="frontmatter.sidebarSubHeader">
      →
      {{ frontmatter.sidebarSubHeader }}
    </span>
    <span v-if="$slots.default"> → </span>
    <slot></slot>
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
  font-weight: 900;
}
</style>
