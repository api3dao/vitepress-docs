<template>
  <div style="user-select: none">
    <span style="margin-left: 8px; font-size: x-small"
      >Pages found: {{ found }}</span
    >
    <span v-if="found > 100" style="font-size: x-small">
      - <b>Max allowed 100</b></span
    >
    <span v-else>&nbsp;</span>
    <div style="padding: 5px">
      <div v-for="(item, key) in results">
        <!-- The v-if below prevents the link if the item does not have frontmatter.
          This can happen on stage previews because the frontmatter.json file is local
          to the repo and the index files are read from the main branch. Should the indexes not get 
          updated on a regular basis and .md file get deleted then they will still be in the 
          index files.
        -->
        <a
          v-if="item.frontmatter"
          :key="key"
          :href="item.frontmatter.path"
          style="font-size: small; width: 100%"
        >
          <hr style="border-top: 1px solid gray; border-bottom: none" />
          <span>
            <span style="float: right; font-size: xx-small">{{ key + 1 }}</span>
            <div
              v-if="item.frontmatter.title.length < 30"
              class="api3-search-item"
              style="color: green; font-size: medium"
            >
              {{ item.frontmatter.title }}
            </div>
            <div
              v-else
              class="api3-search-item"
              style="color: green; font-size: medium"
            >
              {{ item.frontmatter.title.substring(0, 26) + '...' }}
            </div>
            <!-- prettier-ignore -->
            <div style="line-height: 1.4; font-size: x-small; margin-top: -4px">
            {{ item.frontmatter.pageHeader }}
          </div>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: ['found', 'results'],
};
</script>

<style>
.api3-search-item:hover {
  text-decoration: underline;
}
.api3-searchbox {
  font-size: medium;
  padding: 0px 10px 10px 10px;
  border-radius: 0.2em;
  background: transparent;
  width: 300px !important;
  height: 700px;
  background: transparent;
  box-shadow: 2px 2px 20px 1px;
  overflow-y: auto;
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
}

.select {
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;
}
</style>
