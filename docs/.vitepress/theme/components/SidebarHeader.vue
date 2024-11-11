<template>
  {{ subText }}
  <div style="font-weight: 400; font-size: large">
    <div style="font-size: small" v-show="subText">
      {{ subText }} <VersionPicklist v-show="showVersionPickList" />
    </div>
    <div
      v-show="subText"
      style="width: 207px; margin-top: 5px; border-bottom: solid 1px lightgrey"
    ></div>
  </div>
</template>

<script>
import { useData, useRoute } from 'vitepress';
import { watch } from 'vue';

export default {
  name: 'SideBarHeader',
  data: () => ({
    text: undefined,
    subText: undefined,
    showVersionPickList: undefined,
    isDark: undefined,
  }),
  mounted() {
    const { page } = useData();
    const { path } = useRoute();
    this.showVersions(path);
    this.setHeader(page._value.frontmatter);

    this.isDark = useData().isDark.value;

    // Changes the folder icon
    watch(useData().isDark, (dark) => {
      this.isDark = dark;
    });
    watch(page, (currentPage) => {
      this.showVersions(currentPage.relativePath);
      this.setHeader(currentPage.frontmatter);
    });
  },
  methods: {
    showVersions(path) {
      if (
        path.indexOf('reference/airnode/') > -1 ||
        path.indexOf('reference/ois/') > -1
      ) {
        this.showVersionPickList = true;
      } else {
        this.showVersionPickList = undefined;
      }
    },
    setHeader(frontmatter) {
      this.text = frontmatter.sidebarHeader;
      this.subText = frontmatter.sidebarSubHeader;
    },
  },
};
</script>
