<template>
  <div
    v-if="box"
    :class="[{ api3_nav_box_border: theme.isDark }]"
    class="api3-nav-box"
    v-on:click="navigate()"
  >
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
        {{ box.btn }}
      </div>
    </button>

    <!-- CONTENT -->
    <div style="margin-top: 10px; font-size: medium; font-weight: 600">
      {{ box.title }}
    </div>
    <div style="font-size: small; padding-left: 10px">
      {{ box.content }}
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vitepress';
import { useData } from 'vitepress';
import boxes from '../.vitepress/nav-boxes.json';

export default {
  name: 'NavBox',
  props: ['id', 'btn', 'btnURL', 'title', 'content'],
  data: () => ({
    router: useRouter(),
    theme: useData(),
    btnStyles: {
      backgroundColor: undefined,
      color: undefined,
      border: undefined,
    },
    box: undefined,
  }),
  methods: {
    navigate() {
      if (this.box.btn === 'REPO') {
        location.href = this.box.btnURL;
      } else {
        this.router.go(this.box.btnURL);
      }
    },
  },
  mounted() {
    this.$nextTick(async function () {});
    this.box = boxes[this.id];
    if (this.box.btn === 'EXPLORE')
      this.btnStyles = {
        backgroundColor: 'lightgrey',
        color: 'black',
        border: 'solid 0px lightgrey',
      };
    else if (this.box.btn === 'GUIDE')
      this.btnStyles = {
        backgroundColor: 'lightblue',
        color: 'black',
        border: 'solid 0px black',
      };
    else if (this.box.btn === 'REFERENCE')
      this.btnStyles = {
        backgroundColor: '#C1E1C1',
        color: 'black',
        border: 'solid 0px black',
      };
    else if (this.box.btn === 'REPO')
      this.btnStyles = {
        backgroundColor: 'pink',
        color: 'black',
        border: 'solid 0px black',
      };
  },
};
</script>

<style scoped>
.api3-nav-box {
  width: 240px;
  min-height: 115px;
  border: lightgrey solid 2px;
  border-radius: 0.3em;
  padding: 7px;
  margin-bottom: 15px;
  margin-right: 25px;
}
.api3-nav-box:hover {
  cursor: pointer;
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
</style>
