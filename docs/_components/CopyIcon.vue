<!--
-->

<template>
  <span style="display: inline-block; max-width: 58px">
    <a
      :id="iconId"
      href="javascript:void(0)"
      class="contract-addresses-copy-icon"
      v-on:click="copyText()"
    >
      ❏
    </a>
  </span>
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
      copyIcon.innerHTML = 'Copied';
      copyIcon.style.fontSize = 'small';
      window.setTimeout(this.setCopiedTimeout, 700, copyIcon);

      if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        navigator.clipboard.writeText(this.text);
    },
    setCopiedTimeout(element) {
      element.style.fontSize = 'large';
      element.innerText = '❏';
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
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 9px;
  font-size: large;
}
</style>
