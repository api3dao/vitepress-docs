<script setup lang="ts">
import { useData } from 'vitepress';
import { useSidebar } from '../composables/sidebar.js';
import VPImage from './VPImage.vue';

const { site, theme } = useData();
const { hasSidebar } = useSidebar();
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" :href="site.base">
      <slot name="nav-bar-title-before" />
      <VPImage class="logo" :image="theme.logo" />
      <template v-if="theme.siteTitle">{{ theme.siteTitle }}</template>
      <template v-else-if="theme.siteTitle === undefined">{{
        site.title
      }}</template>
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
.VPNavBarTitle {
  flex-shrink: 0;
  border-bottom: 1px solid transparent;
}

@media (min-width: 960px) {
  .VPNavBarTitle.has-sidebar {
    margin-right: 32px;
    width: calc(var(--vp-sidebar-width) - 64px);
    border-bottom-color: var(--vp-c-divider-light);
    background-color: var(--vp-c-bg-alt);
  }
}

.title {
  display: flex;
  align-items: center;
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
}

:deep(.logo) {
  margin-right: 8px;
  /* wkande: Sept 2022: Changed the height, was 24px  */
  height: 40px;
  /* wkande: Sept 2022: Added margin-left */
  margin-left: -7px;
}
</style>
