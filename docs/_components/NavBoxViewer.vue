<template>
  <div class="api3-css-nav-box-flex-row">
    <div v-for="(box, id) in list" v-bind:key="id">
      <code style="font-size: x-small">{{ id }} - {{ type }}</code>
      <NavBox v-bind:type="type" v-bind:id="id" style="'solid 1px black" />
    </div>
  </div>
</template>

<script>
import explore from '../.vitepress/nav-boxes/nav-boxes-explore.json';
import guide from '../.vitepress/nav-boxes/nav-boxes-guides.json';
import reference from '../.vitepress/nav-boxes/nav-boxes-reference.json';
import repo from '../.vitepress/nav-boxes/nav-boxes-repos.json';

export default {
  name: 'NavBoxViewer',
  props: ['type'],
  data: () => ({
    list: null,
  }),
  mounted() {
    this.$nextTick(async function () {});

    if (this.type === 'EXPLORE') this.list = explore;
    else if (this.type === 'GUIDE') this.list = guide;
    else if (this.type === 'REFERENCE') this.list = reference;
    else if (this.type === 'REPO') this.list = repo;
    console.log(this.type);
    console.log(this.list);
  },
};
</script>
