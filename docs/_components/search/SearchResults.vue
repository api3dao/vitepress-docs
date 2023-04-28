<template>
  <div style="user-select: none">
    <div style="float: right; font-size: x-small">
      Found: {{ results.length }}
    </div>
    <div v-if="results.length === 100" style="font-size: x-small">
      Max allowed (100)
    </div>
    <div v-else>&nbsp;</div>
    <div style="padding: 5px">
      <a
        v-for="(item, key) in results"
        :key="key"
        :href="item.frontmatter.path"
        style="font-size: small; width: 100%"
      >
        <hr style="border-top: 1px solid gray; border-bottom: none" />
        <span>
          <span style="float: right; font-size: xx-small">{{ key + 1 }}</span>
          <div
            v-if="item.frontmatter.title.length < 30"
            class="api3-search-item"
            style="color: green; font-size: medium"
          >
            {{ item.frontmatter.title }}
          </div>
          <div
            v-else
            class="api3-search-item"
            style="color: green; font-size: medium"
          >
            {{ item.frontmatter.title.substring(0, 26) + '...' }}
          </div>
          <div style="line-height: 1.4; font-size: x-small; margin-top: -4px">
            {{ item.frontmatter.pageHeader }}
          </div>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: ['results'],
  data() {
    return {
      //v: Vue.version,
      /* vitepress docs:build has issue with localStorage 9-9-2022
      will need to load these in mount()
      */
      query: undefined, //localStorage.getItem('search_query') || '',
      scrollY: undefined, //localStorage.getItem('scrollY'),
      focused: false,
      focusIndex: 0,
      suggestionsCnt: 0,
      cntLimit: undefined,
      path: undefined,
    };
  },
  computed: {
    showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length;
    },
    suggestions() {
      // This needs to be here so when "this.basePath"  changes this function fires
      /*if (this.path) {
      }
      const query = this.query.trim().toLowerCase();

      // This prevents excessive filtering when now
      // looking thru "All Documentation" .
      if (!this.path) {
        this.setPath();
      }

      // Store the query
      if (query.length < 3) {
        localStorage.setItem('search_query', '');
        return;
      }
      localStorage.setItem('search_query', query);

      const { pages } = this.$site; // Load the site pages
      pages.sort(this.sortByPath); // Sort the pages by their path

      const max =
        this.$site.themeConfig.searchMaxSuggestions || SEARCH_MAX_SUGGESTIONS; // Max allowed results set

      const res = []; // Add filtered pages to this array, to be returned
      const words = query.split(' '); // Array of words from the query string
      let headerObj = {
        header: { title: undefined, cnt: undefined, position: undefined },
      };

      this.cntLimit = undefined;
      this.suggestionsCnt = 0;
      let lastHeaderObj = undefined; // Needed by filter functions
      let lastCnt = 0; // Needed by filter functions
      const path = this.path;

      // LOOP thru pages
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) {
          this.cntLimit = true;
          break;
        }

        const p = pages[i];

        // Skip the landing page
        if (p.path === '/') continue;

        // Filter by path
        if (this.path === '/' && this.basePaths[p.frontmatter.basePath]);
        else if (this.path === p.frontmatter.basePath);
        else continue;

        // HEADER WORK: If reader selected "All Documentation" add a
        // header to the list for each docSetName as it changes. So
        // only for this.path === '/'.
        if (this.path === '/') {
          const docSetName = p.frontmatter.docSetName || 'Unknown';
          if (headerObj.header.title != docSetName) {
            // Create the next header
            headerObj = {
              header: { title: docSetName, cnt: 0, position: res.length },
            };
            res.push(headerObj);
            lastHeaderObj = headerObj;
          }
        }

        words.some(checkTitle);
        words.some(checkHeaders);

        // Does the title contain any words (OR)
        function checkTitle(word) {
          if (p.title.toLowerCase().indexOf(word.toLowerCase()) > -1) {
            if (path === '/') res[lastHeaderObj.header.position].header.cnt++;
            lastCnt++;
            res.push({
              level: 0,
              page: p,
              folder: p.frontmatter.folder,
              pageTitle: p.title,
              path: p.path,
              docSetName: p.frontmatter.docSetName || 'Unknown',
              basePath: p.frontmatter.basePath || 'basePath unknown',
            });
            return 1;
          }
          return 0;
        }

        // Do the page frontmatter headers contain any words (OR)
        function checkHeaders(word) {
          if (p.headers) {
            p.headers.forEach((h) => {
              if (h.title.toLowerCase().indexOf(word.toLowerCase()) > -1) {
                if (path === '/')
                  res[lastHeaderObj.header.position].header.cnt++;
                lastCnt++;
                res.push({
                  p_path: p.path,
                  level: h.level,
                  path: p.path + '#' + h.slug,
                  folder: p.frontmatter.folder,
                  headerTitle: h.title,
                  pageTitle: p.title,
                  docSetName: p.frontmatter.docSetName || 'Unknown',
                  basePath: p.frontmatter.basePath || 'basePath unknown',
                });
                return 1;
              }
            });
          }
          return 0;
        }
      }
      this.suggestionsCnt = lastCnt;
      //console.log(res);
      return res;*/
    },
  },

  mounted() {},

  beforeDestroy() {
    document.removeEventListener('keydown', this.onHotkey);
  },

  methods: {
    onClickOutside(url, event) {
      this.$emit('clicked'); // goes to parent method
    },
    // FROM CHILD, a new path has been selected
    // Called by child "SearchBoxSelect2.vue" component's "picklist"
    updatePathFromChild(path) {
      this.path = path;
    },
    // Sorts the pages by their path
    sortByPath(a, b) {
      if (b.path > a.path) {
        return -1;
      }
      if (b.path < a.path) {
        return 1;
      }
      return 0;
    },
    setPath() {
      const docSet = this.$route.path.split('/');
      if (['airnode', 'ois'].includes(docSet[1])) {
        this.path = '/' + docSet[1] + '/' + docSet[2];
      } else {
        this.path = '/' + docSet[1];
      }
    },
    onHotkey(event) {
      if (
        event.srcElement === document.body &&
        SEARCH_HOTKEYS.includes(event.key)
      ) {
        this.$refs.input.focus();
        event.preventDefault();
      }
    },
    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--;
        } else {
          this.focusIndex = this.suggestions.length - 1;
        }
      }
    },
    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++;
        } else {
          this.focusIndex = 0;
        }
      }
    },
  },
};
</script>

<style>
.api3-search-item:hover {
  text-decoration: underline;
}
.api3-searchbox {
  font-size: medium;
  padding: 0px 10px 10px 10px;
  border-radius: 0.2em;
  background: transparent;
  /*position: absolute;
  right: 10px;
  top: 50px;*/
  width: 300px !important;
  height: 700px;

  background: transparent;
  box-shadow: 2px 2px 20px 1px;
  overflow-y: auto;
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
}

.select {
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;
}
</style>

<!--style lang="stylus">

.sb-tab
  border none
  padding 0
  background none
  color #50c878
  font-size medium
  font-weight 600
  cursor pointer
  margin-top 12px
  .sb-tab-selected
    padding-bottom 3px
    color black
    border-bottom solid black 2px

.sb-show-path{
  font-size x-large
  height: 2rem
}
.sb-search-input-box

  input
    width 12rem
    cursor text
    height 1.5rem
    color lighten($textColor, 25%)
    display inline-block
    border 2px solid darken($borderColor, 10%)
    border-radius 2rem
    font-size 1.2rem
    line-height 2rem
    padding 0.3rem 0.5rem .4rem 2rem
    outline none
    transition all .2s ease
    background #fff url(./search.svg) 0.6rem 0.6rem no-repeat
    background-size 1.2rem

@media (max-width: $MQMobile)
  .sb-search2-modal
    width 300px
    margin-left calc(100% - 90vw)
</style-->
