<script setup lang="ts">
import { useData } from '../composables/data';
import { useSidebar } from '../composables/sidebar';
import { useLangs } from '../composables/langs';
import { normalizeLink } from '../support/utils';
import VPImage from './VPImage.vue';

const { site, theme } = useData();
const { hasSidebar } = useSidebar();
const { currentLang } = useLangs();
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" :href="normalizeLink(currentLang.link)">
      <slot name="nav-bar-title-before" />
      <VPImage v-if="theme.logo" class="logo" :image="theme.logo" />
      <template v-if="theme.siteTitle">{{ theme.siteTitle }}</template>
      <template v-else-if="theme.siteTitle === undefined">{{
        site.title
      }}</template>
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: var(--vp-nav-height);
  /* wkande: Sept 2022: Changed the font-size, was 16px  */
  font-size: 22px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

.title:hover {
  opacity: 0.6;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  margin-right: 8px;
  /* wkande: Sept 2022: Changed the height, was 24px  */
  height: 35px;
  /* wkande: Sept 2022: Added margin-left */
  margin-left: -22px;
}
</style>
