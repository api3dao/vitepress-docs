<!--
2022-07-16 wkande
Used to highlight an element in a list of instructions.
Example: Select the button <ElementSelect text="Compile"/> in the Remix IDE.
Where < Compile > will be inserted into the content.

This link has good HTML colors that look sharp on a black background:<template>
https://dev.to/finnhvman/which-colors-look-good-on-black-and-white-2pe6
-->

<template>
  <span class="element-select"> {{ text }} </span>
</template>

<script>
export default {
  name: 'ElementSelect',
  props: ['text'],
};
</script>

<style>
.element-select {
  color: #dd3322;
  font-weight: 500;
  white-space: nowrap;
}
</style>
