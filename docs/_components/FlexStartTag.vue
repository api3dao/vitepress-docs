<!--
  VERY IMPORTANT
  Changes to this component may severely impact the
  /libs/flexBuildIndexes.js script. The script uses this 
  component's HTML as a parse marker to extract the page content
  below the title and before the footer of the page it is in.
-->

<template>
  <span class="api3-flex-start-tag">FLEX_START_TAG</span>
</template>

<script>
export default {
  name: 'FlexStartTag',
};
</script>

<style scoped>
.api3-flex-start-tag {
  display: none;
}
</style>
