<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { withBase } from 'vitepress';
import { useData } from './composables/data';
import { useLangs } from './composables/langs';
// wkande: May 2023: Added next import
import versions from '../../../../../docs/.vitepress/versions';

const { site } = useData();
const { localeLinks } = useLangs({ removeCurrent: false });
// wkande: May 2023: Added showMsg next line -->
const showMsg = ref<number>(0);

const root = ref('/');

// wkande: May 2023: Added function below
// To prevent flicker when redirecting, hide the content body (msg)
function showMessage() {
  // wkande: May 2023: https://vuedose.tips/the-101-guide-to-script-setup-in-vue-3
  showMsg.value++;
}

onMounted(() => {
  let pathName = window.location.pathname;

  // wkande: May 2023: Airnode /latest and /next
  for (var i = 0; i < versions.versionsAirnode.length; i++) {
    const element = versions.versionsAirnode[i];
    if (pathName.indexOf('/reference/airnode/' + element.version + '/') > -1) {
      let newPath = pathName.replace(element.version, element.alias);
      window.location.replace(newPath);
      return false;
    }
  }

  // wkande: May 2023: OIS /latest and /next
  for (var i = 0; i < versions.versionsOIS.length; i++) {
    const element = versions.versionsOIS[i];
    if (pathName.indexOf('/reference/ois/' + element.version + '/') > -1) {
      let newPath = pathName.replace(element.version, element.alias);
      window.location.replace(newPath);
      return false;
    }
  }

  // wkande: May 2023: Added function call below
  showMessage();

  const path = window.location.pathname
    .replace(site.value.base, '')
    .replace(/(^.*?\/).*$/, '/$1');
  if (localeLinks.value.length) {
    root.value =
      localeLinks.value.find(({ link }) => link.startsWith(path))?.link ||
      localeLinks.value[0].link;
  }
});
</script>

<template>
  <!-- wkande: May 2023: Added showMsg next line -->
  <div class="NotFound" v-if="showMsg === 1">
    <p class="code">404</p>
    <h1 class="title">PAGE NOT FOUND</h1>
    <div class="divider" />
    <blockquote class="quote">
      But if you don't change your direction, and if you keep looking, you may
      end up where you are heading.
    </blockquote>

    <div class="action">
      <a class="link" :href="withBase(root)" aria-label="go to home">
        Take me home
      </a>
    </div>
    <!-- wkande: May 2023: Added Airnode button -->
    <div class="action">
      <a
        class="link"
        href="/reference/airnode/latest/"
        aria-label="Airnode latest release"
      >
        Airnode latest release
      </a>
    </div>
    <!-- wkande: May 2023: Added OIS button -->
    <div class="action">
      <a
        class="link"
        href="/reference/ois/latest/"
        aria-label="OIS latest release"
      >
        OIS latest release
      </a>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition: border-color 0.25s, color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-dark);
  color: var(--vp-c-brand-dark);
}
</style>
