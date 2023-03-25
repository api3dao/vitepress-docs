<template>
  <div style="font-weight: 400; font-size: large">
    <img
      src="/img/Folder-Dark.png"
      v-if="isDark"
      style="width: 11%; float: left"
    />
    <img
      src="/img/Folder-Light.png"
      v-if="!isDark"
      style="width: 11%; float: left"
    />
    <span style="margin-left: 5px">{{ text }}</span>
    <div style="font-size: small; margin-left: 28px" v-show="subText">
      {{ subText }} <VersionPicklist v-show="show" />
    </div>
    <div
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
    show: undefined,
    api3_navbarReferenceBtn: undefined,
    isDark: undefined,
  }),
  mounted() {
    const { page } = useData();
    const { path } = useRoute();
    this.showVersions(path);
    this.setHeader(page._value.frontmatter);
    this.setReferenceBtnState(page._value.relativePath);

    this.isDark = useData().isDark.value;

    // Changes the folder icon
    watch(useData().isDark, (dark) => {
      this.isDark = dark;
    });
    // Adjust the sub header based on hte page selected
    watch(page, (currentPage) => {
      this.showVersions(currentPage.relativePath);
      this.setHeader(currentPage.frontmatter);
      this.setReferenceBtnState(currentPage.relativePath);
    });
  },
  methods: {
    setReferenceBtnState(relativePath) {
      /**
       * Menus in the navbar get text color changed when an item in them is selected.
       * This ended up being the best location to do this. api3_navbarReferenceBtn might be returned to null
       * after the 404 page is presented which does not have a sidebar and when returning to the SPA
       * api3_navbarReferenceBtn might have been returned to null so thus the first check below.
       */
      if (!this.api3_navbarReferenceBtn) {
        this.api3_navbarReferenceBtn = document.getElementById(
          'api3_Reference_Menu'
        );
      }

      this.api3_navbarReferenceBtn.style.color = '';

      if (relativePath.indexOf('reference/') === 0) {
        this.api3_navbarReferenceBtn.style.color = '#42b883';
      }
    },
    showVersions(path) {
      if (
        path.indexOf('reference/airnode/') > -1 ||
        path.indexOf('reference/ois/') > -1
      ) {
        this.show = true;
      } else {
        this.show = undefined;
      }
    },
    setHeader(frontmatter) {
      this.text = frontmatter.sidebarHeader;
      this.subText = frontmatter.sidebarSubHeader;
    },
  },
};
</script>
