<!--
@params
pillLabels: Array of labels in an order to display left to right.
callback:   Callback function in hte parent component to call
            with the index of the pillLabels array selected.

Blue colors
https://www.schemecolor.com/little-blue-pill.php
https://colorswall.com/palette/21972
-->

<template>
  <button
    v-for="(label, index) in pillLabels"
    v-bind:key="index"
    class="api3-pill-button api3-pill-default"
    :class="{
      'api3-pill-default': selectedIndex === index,
      'api3-pill': selectedIndex !== index,
    }"
    @click="
      selectedIndex = index;
      callback(index);
    "
  >
    {{ label }}
  </button>

  <hr style="margin-top: 0px; border-color: lightgrey; border-width: 1.5px" />
</template>

<script setup>
import { useData } from 'vitepress';

const { theme } = useData();
console.log('theme:', theme);
</script>

<script>
import { useData } from 'vitepress';
export default {
  name: 'PillButtons',
  props: { pillLabels: undefined, callback: undefined },
  data: () => ({
    selectedIndex: 0,
    mode: useData.data,
  }),
};
</script>

<style scoped>
/*.api3-pill-button:hover {
  background-color: #f1f1f1;
}*/
.api3-pill-default {
  background-color: #ddd; /*rgb(51, 160, 111); #87ab69;*/
  color: black;
  /*border-top: solid 3px gray;*/
}
.api3-pill {
  background-color: #ddd;
  color: gray;
  /*border-top: none;*/
}
.api3-pill-button {
  /*background-color: #87ab69;*/ /*#b0cfb1; #7dabe8; #ddd;*/

  font-size: medium;
  font-weight: 500;
  /*color: white;*/ /* black;*/
  padding: 1px 10px 1px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 10px 0px 0px;
  cursor: pointer;
  border-radius: 4px 4px 0px 0px;
}
</style>
