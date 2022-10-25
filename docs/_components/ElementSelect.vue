<!--
2022-07-16 wkande
Used to highlight an element in a list of instructions.<template>
Example: Select the button < Compile > in the Remix IDE.
Where < Compile > will be inserted into the content.
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
  color: brown;
  font-weight: 500;
  white-space: nowrap;
}
</style>
