<!--
-->

<template>
  <!-- COPY ICON 
    The style applied (style="opacity: 60%; width: 12px") is very
    important. If included in the class it will work on the dev 
    server but not on a production build.
  -->
  <div style="display: inline-block; width: 18px">
    <img
      :id="iconId"
      v-on:click="copyText()"
      src="/img/copy.png"
      class="contract-addresses-copy-icon"
      style="opacity: 60%; width: 12px"
    />
  </div>
</template>

<script>
export default {
  name: 'CopyIcon',
  props: ['text'],
  data: () => ({
    iconId: undefined,
  }),
  methods: {
    copyText() {
      var copyIcon = document.getElementById(this.iconId);
      copyIcon.style.opacity = '100%';
      copyIcon.style.width = '20px';
      window.setTimeout(this.setCopiedTimeout, 700, copyIcon);

      if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        navigator.clipboard.writeText(this.text);
    },
    setCopiedTimeout(element) {
      element.style.opacity = '60%';
      element.style.width = '12px';
    },
  },
  mounted() {
    this.$nextTick(async function () {
      this.iconId = Math.floor((1 + Math.random()) * 0x10000000)
        .toString(16)
        .substring(1);
    });
  },
};
</script>

<style scoped>
.contract-addresses-copy-icon {
  margin-left: 5px;
  cursor: pointer;
  height: 11px;
}
</style>
