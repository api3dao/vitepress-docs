<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { withBase } from 'vitepress';
import { useData } from './composables/data';
import { useLangs } from './composables/langs';
import versions from '../../../../../docs/.vitepress/versions';

const { site } = useData();
const { localeLinks } = useLangs({ removeCurrent: false });

// Shows the content body
const showMsg = ref<number>(0);
// Used to remap to older docs and to show sub content within the content body
const legacyURL = ref<string>();

const root = ref('/');

onMounted(() => {
  let pathName = window.location.pathname;

  // Translate Airnode /latest and /next from versions in the path
  for (var i = 0; i < versions.versionsAirnode.length; i++) {
    const element = versions.versionsAirnode[i];
    if (pathName.indexOf('/reference/airnode/' + element.version + '/') > -1) {
      let newPath = pathName.replace(element.version, element.alias);
      window.location.replace(newPath);
      return false;
    }
  }

  // Translate OIS /latest and /next from versions in the path
  for (var i = 0; i < versions.versionsOIS.length; i++) {
    const element = versions.versionsOIS[i];
    if (pathName.indexOf('/reference/ois/' + element.version + '/') > -1) {
      let newPath = pathName.replace(element.version, element.alias);
      window.location.replace(newPath);
      return false;
    }
  }

  // Now show the body content since the /latest and /next translation was not needed
  showMsg.value++;

  // Did the reader sent a URL for OIS or Airnode in old-doc.api3.org
  // prettier-ignore
  const legacyVrs = ['/pre-alpha','/v0.2','/v0.3','/v0.4','/v0.5','/v0.6',
    '/v0.7','/v0.8','/v0.9','/v0.10','/v1.0','/v0.1','/v1.2','/v1.4',
  ];
  legacyVrs.forEach((element) => {
    if (pathName.indexOf(element) > -1) {
      legacyURL.value =
        'https://old-docs.api3.org' + pathName + window.location.hash;
      return false;
    }
  });

  // The following was originally part of the VitePress code
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
  <!-- Added showMsg next line -->
  <div class="NotFound" v-if="showMsg === 1">
    <p class="code">404</p>
    <h1 class="title">PAGE NOT FOUND</h1>
    <div class="divider" />

    <!-- GO TO LEGACY DOCS -->
    <blockquote class="quote" v-if="legacyURL">
      <hr />
      The URL send appears to be a page from the legacy documentation. The
      button below should take you there.
      <div class="action">
        <a class="link" :href="legacyURL" aria-label="Airnode latest release">
          Legacy Documentation
        </a>
      </div>
      <br />
      <hr />

      Otherwise try these popular sections in the API3 Technical Documentation.
    </blockquote>

    <blockquote class="quote" v-else>
      But if you don't change your direction, and if you keep looking, you may
      end up where you are heading.
    </blockquote>

    <div class="action">
      <a class="link" :href="withBase(root)" aria-label="go to home">
        Take me home
      </a>
    </div>
    <!-- Added Airnode button -->
    <div class="action">
      <a
        class="link"
        href="/reference/airnode/latest/"
        aria-label="Airnode latest release"
      >
        Airnode latest release
      </a>
    </div>
    <!-- Added OIS button -->
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
