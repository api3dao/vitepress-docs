<template>
  <div v-if="error" class="api3-nav-box" style="color: red">
    Did not find the nav box: <code>{{ type }} - {{ id }}</code>
  </div>
  <div
    v-else-if="box"
    :class="[{ api3_nav_box_border: theme.isDark }]"
    class="api3-nav-box"
  >
    <a :href="box.btnURL">
      <!-- BUTTON -->
      <button
        :v-if="btnStyles"
        class="api3-nav-box-btn"
        :style="{
          'background-color': btnStyles.backgroundColor,
          color: btnStyles.color,
          border: btnStyles.border,
          opacity: '0.8',
        }"
      >
        <div
          style="margin-top: -3px; font-weight: 700; font-family: Comic Sans MS"
        >
          {{ type }} <span v-if="type == 'REPO'">➚</span>
        </div>
      </button>

      <!-- TITLE -->
      <div style="margin-top: 10px; font-size: medium; font-weight: 600">
        {{ box.title }}
      </div>
      <!-- CONTENT -->
      <div style="font-size: small; padding-left: 10px; color: gray">
        {{ box.content }}
      </div>
    </a>
  </div>
</template>

<script>
import { useRouter, useData } from 'vitepress';
import explore from '../.vitepress/nav-boxes/nav-boxes-explore.json';
import guide from '../.vitepress/nav-boxes/nav-boxes-guides.json';
import reference from '../.vitepress/nav-boxes/nav-boxes-reference.json';
import repo from '../.vitepress/nav-boxes/nav-boxes-repos.json';

export default {
  name: 'NavBox',
  props: ['type', 'id'],
  data: () => ({
    router: useRouter(),
    theme: useData(),
    error: undefined,
    btnStyles: {
      backgroundColor: undefined,
      color: undefined,
      border: undefined,
    },
    box: undefined,
  }),
  mounted() {
    this.$nextTick(async function () {});
    if (this.type === 'EXPLORE') {
      this.box = explore[this.id];
      this.btnStyles = {
        backgroundColor: 'lightgrey',
        color: 'black',
        border: 'solid 0px lightgrey',
      };
    } else if (this.type === 'GUIDE') {
      this.box = guide[this.id];
      this.btnStyles = {
        backgroundColor: 'lightblue',
        color: 'black',
        border: 'solid 0px black',
      };
    } else if (this.type === 'REFERENCE') {
      this.box = reference[this.id];
      this.btnStyles = {
        backgroundColor: '#C1E1C1',
        color: 'black',
        border: 'solid 0px black',
      };
    } else if (this.type === 'REPO') {
      this.box = repo[this.id];
      this.btnStyles = {
        backgroundColor: 'pink',
        color: 'black',
        border: 'solid 0px black',
      };
    }
    if (!this.box) {
      this.error = true;
    }
  },
};
</script>

<style scoped>
.api3-nav-box {
  width: 200px;
  min-height: 115px;
  border: lightgrey solid 2px;
  border-radius: 0.3em;
  padding: 7px;
  margin-bottom: 15px;
  margin-right: 25px;
}

.api3-nav-box-btn {
  min-width: 77px;
  border: solid 1px black;
  padding-left: 10px;
  padding-right: 10px;
  height: 19px;
  border-radius: 1.3em;
}
.api3_nav_box_border {
  border: solid 1px gray;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>
