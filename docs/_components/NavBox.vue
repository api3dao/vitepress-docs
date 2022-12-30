<template>
  <div
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
        {{ type }}
      </div>
    </button>

    <!-- CONTENT -->
    <div style="margin-top: 10px; font-size: medium; font-weight: 600">
      {{ title }}
    </div>
    <div style="font-size: small; padding-left: 10px">
      {{ content }}
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vitepress';
import { useData } from 'vitepress';

export default {
  name: 'NavBox',
  props: ['type', 'btnURL', 'title', 'content'],
  data: () => ({
    router: useRouter(),
    theme: useData(),
    btnStyles: {
      backgroundColor: undefined,
      color: undefined,
      border: undefined,
    },
  }),
  methods: {
    navigate() {
      console.log('navigate');
      this.router.go(this.btnURL);
    },
  },
  mounted() {
    this.$nextTick(async function () {});
    if (this.type === 'EXPLORE')
      this.btnStyles = {
        backgroundColor: 'lightgrey',
        color: 'black',
        border: 'solid 0px lightgrey',
      };
    else if (this.type === 'GUIDE')
      this.btnStyles = {
        backgroundColor: 'lightblue',
        color: 'black',
        border: 'solid 0px black',
      };
    else if (this.type === 'REFERENCE')
      this.btnStyles = {
        backgroundColor: '#C1E1C1',
        color: 'black',
        border: 'solid 0px black',
      };
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
