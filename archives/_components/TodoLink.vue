<!--
  This component displays a TODO: specific to
  the fixing of an incomplete link <a/>. Usually
  because the target doc or section is not ready.
-->

<template>
  <span style="background-color: pink"
    >Fix link below, old value: <code>{{ comment }}</code></span
  >
</template>

<script>
export default {
  name: 'TodoLink',
  props: ['comment'],
  data: () => ({
    chainName: '',
  }),
  mounted() {
    this.$nextTick(async function () {
      //this.chainName = chainsRef[this.chainId].fullname;
    });
  },
};
</script>
