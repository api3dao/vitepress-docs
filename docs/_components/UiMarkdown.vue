<!-- https://github.com/vuejs/vuepress/issues/257 -->

<template>
  <div class="text-formatted" v-html="renderedMarkdown" />
</template>

<script>
import markdownIt from 'markdown-it';

export default {
  name: 'UiMarkdown',

  props: {
    markdown: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    let md = new markdownIt({ html: true }),
      renderedMarkdown = md.render(props.markdown);

    return {
      renderedMarkdown,
    };
  },
};
</script>
