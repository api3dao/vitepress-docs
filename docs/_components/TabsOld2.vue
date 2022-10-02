<!--
Tab set for all pages. Uses the default slot. Any child 
Vue Components in hte slot must contain their own ID unique 
to the page it is on.

@params: none

Example:

    <Tabs>

    @tab:By Category

    <BlogPosts show="byCategories" id="tab2-blog-post-1"/>

    @tab:By Date

    <BlogPosts show="byDates" id="tab2-blog-post-2"/>

    </Tabs>
-->

<template>
  <!-- Tabs -->
  <div class="tab">
    <div v-html="test" />
    <button
      :id="tab.id"
      v-for="(tab, index) in tabs"
      v-bind:key="index"
      @click="openTab(tab)"
    >
      {{ tab.label }}
    </button>
  </div>
  <div
    style="
      padding: 7px;
      margin-top: -2px;
      border: solid 1px gray;
      border-radius: 7px;
    "
  >
    <slot></slot>
  </div>
</template>

<script>
import BlogPosts from './explore/BlogPosts.vue';

export default {
  name: 'TabsOld2',
  data: () => ({
    tabs: [],
    knownElements: ['div', 'p', 'img', 'ol', 'ul'],
    test: 'Blog: ',
  }),

  mounted() {
    //console.log('----- SLOTs -----');
    //console.log(BlogPosts.outerHTML);
    //console.log(this.$slots);
    let currentTabIndex; // local only, to track the index of the tab to add its elements
    //console.log('+++++++ BEGIN LOOP +++++++');
    //console.log(this.knownElements);
    for (let i = 0; i < this.$slots.default().length; i++) {
      let element = this.$slots.default()[i];
      //console.log(1, i, element);
      // tabs
      if (element.children && element.children.indexOf('@tab:') === 0) {
        //console.log(2, 'Is a tab');
        const arr = element.children.split(':'); // tabId @tab:<label>
        const random = Math.random().toString(36).slice(2, 9);
        const tab = { id: random, label: arr[1], elements: [] };
        this.tabs.push(tab);
        currentTabIndex = this.tabs.length - 1;
        element.el.outerHTML = '';
        element.el.innerText = '';
      }
      // knownElements
      else if (element.type && this.knownElements.includes(element.type)) {
        //console.log(3, 'Is a known element:', element.type);
        const type = element.type;
        const random = Math.random().toString(36).slice(2, 9);
        //console.log(3.1, element.el.outerHTML);
        this.test += element.el.outerHTML;
        element.el.outerHTML = element.el.outerHTML.replace(
          '<' + type,
          '<' + type + ' style="display:none;" id="' + random + '" '
        );
        //console.log(3.2);
        this.tabs[currentTabIndex].elements.push(random);
      }
      // Vue components, hopefully
      else if (element.type && element.type.name) {
        console.log(4, 'is Vue component', element.$el);
        this.tabs[currentTabIndex].elements.push(element.props.id);
      }
      //console.log('-------------------');
    }
    //console.log('>>> END TAB LOOP');
    this.$nextTick(() => {
      this.openTab(this.tabs[0]);
    });
  },
  methods: {
    openTab(tab) {
      console.log('openTab', tab);
      console.log(this.tabs);
      //console.log(this.tabs);
      // Hide all elements
      for (let i = 0; i < this.tabs.length; i++) {
        const elements = this.tabs[i].elements;
        //console.log(22, elements);
        for (let x = 0; x < elements.length; x++) {
          //console.log(22.1, elements[x]);
          //console.log(22.2, document.getElementById(elements[x]));
          document.getElementById(elements[x]).style.display = 'none';
          //console.log(22.2, 'end');
        }
      }
      // Show elements of tab passed
      for (let i = 0; i < tab.elements.length; i++) {
        document.getElementById(tab.elements[i]).style.display = 'block';
      }
      // Clear check mark from tabs
      for (let i = 0; i < this.tabs.length; i++) {
        document.getElementById(this.tabs[i].id).innerText = this.tabs[i].label;
      }

      // Set check mark to active tab
      document.getElementById(tab.id).innerText = '✔︎ ' + tab.label;
    },
  },
};
</script>

<style scoped>
/* Style the tab */
.tab {
  overflow: hidden;
  border: none;
  margin-left: 10px;
  margin-top: 19px; /* space between text above */
}

/* Style the buttons inside the tab */
.tab button {
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-left: solid 1px gray;
  border-right: solid 1px gray;
  border-top: solid 1px gray;
  outline: none;
  cursor: pointer;
  padding: 2px 14px;
  transition: 0.3s;
  font-size: 16px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #f1f1f1;
  color: black;
}
</style>
