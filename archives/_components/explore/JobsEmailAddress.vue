<!--
Creates a contact tag that when clicked shows an email address.
Only use v-if (not v-show) so the email is not in the DOM until 
a human clicks the tag.
-->

<template>
  <span>
    <a
      href="javascript:void(0)"
      class=""
      v-if="showAddress === false"
      @click="showButton"
    >
      <span class="btnText">Contact Us →</span>
    </a>

    <span v-if="showAddress === true">
      Please email us at
      <a v-bind:href="'mailto:' + e1 + '@' + e3 + '.' + e2"
        >{{ e1 }}@{{ e3 }}.{{ e2 }}</a
      >.
    </span>
  </span>
</template>

<script>
export default {
  name: 'JobsEmailAddress',
  data: () => ({
    e1: 'jobs',
    e2: 'org',
    e3: 'api3',
    showAddress: false,
  }),
  methods: {
    showButton() {
      this.showAddress = true;
    },
  },
};
</script>
