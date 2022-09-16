<template>
  <div style="font-weight: 400; font-size: large">
    <span style="font-size: small">📂</span> {{ text }}
    <div style="margin-left: 9px; font-size: small" v-show="subText">
      {{ subText }} <VersionPicklist v-show="show" />
    </div>
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
    api3_navbarGuidesBtn: undefined,
    api3_navbarReferenceBtn: undefined,
  }),
  mounted() {
    console.log('===== SidebarHeader MOUNTED =====');
    const { page } = useData();
    const { path } = useRoute();
    this.showVersions(path);
    this.setHeader(page._value.frontmatter);
    this.setReferenceBtnState(page._value.relativePath);

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
       * This ended up being the best location to do this. api3_navbarGuidesBtn might be returned to null
       * after the 404 page is presented which does not have a sidebar and when returning to the SPA
       * api3_navbarGuidesBtn might have been returned to null so thus the first check below.
       */
      if (!this.api3_navbarGuidesBtn) {
        this.api3_navbarGuidesBtn = document.getElementById('api3_Guides_Menu');
        this.api3_navbarReferenceBtn = document.getElementById(
          'api3_Reference_Menu'
        );
      }

      this.api3_navbarGuidesBtn.style.color = '';
      this.api3_navbarReferenceBtn.style.color = '';

      if (relativePath.indexOf('reference/') === 0) {
        this.api3_navbarReferenceBtn.style.color = '#42b883';
      } else if (relativePath.indexOf('guides/') === 0) {
        this.api3_navbarGuidesBtn.style.color = '#42b883';
      }
    },
    showVersions(path) {
      if (
        path.indexOf('reference/airnode/') > -1 ||
        path.indexOf('reference/ois/') > -1
      ) {
        this.show = true;
      } else this.show = undefined;
    },
    setHeader(frontmatter) {
      this.text = frontmatter.sidebarHeader;
      this.subText = frontmatter.sidebarSubHeader;
    },
  },
};
</script>
