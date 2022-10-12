<!--
Tab set for all pages. Uses the default slot. Any child 
Vue Components in the slot must be added to the template 
below.


knownElements: ['div', 'p', 'img', 'ol', 'ul', 'table']
All HTML elements that are used need to be added to knownElements.
Otherwise they are ignored.
-->

<template>
  <!-- Never show the slot, it is needed to force components 
       to load the this.$slots array. MUST: use v-show. -->
  <div v-show="show">
    <slot></slot>
  </div>

  <!-- Tabs -->
  <div class="tab">
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
    <div :id="tab.paneId" v-for="(tab, index) in tabs" :key="index">
      <div v-for="(element, index) in tab.elements" :key="index">
        <div v-if="element.toString().startsWith('<')" v-html="element"></div>

        <!-- Start components listing here -->
        <!-- BlogPosts has 1 prop: show -->
        <BlogPosts
          v-else-if="element.type.name === 'BlogPosts'"
          :show="element.props['show']"
        >
        </BlogPosts>
        <!-- ContractAddresses has 2 props: type and contractName -->
        <ContractAddresses
          v-else-if="element.type.name === 'ContractAddresses'"
          :type="element.props['type']"
          :contractName="element.props['contractName']"
        >
        </ContractAddresses>
        <!-- End of components listing -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data: () => ({
    show: false,
    tabs: [],
    knownElements: ['div', 'p', 'img', 'ol', 'ul', 'table'],
  }),

  mounted() {
    let currentTabIndex; // local only, to track the index of the tab to add its elements
    console.log('----- MOUNTED ----- Tabs -----');
    for (let i = 0; i < this.$slots.default().length; i++) {
      let element = this.$slots.default()[i];
      //console.log(element);
      if (element.children && element.children.indexOf('@tab:') === 0) {
        //console.log('> tab');
        //console.log(element);
        const arr = element.children.split(':'); // tabId @tab:<label>
        const tabId = Math.random().toString(36).slice(2, 9);
        const paneId = Math.random().toString(36).slice(2, 9);
        const tab = {
          id: tabId,
          label: arr[1],
          elements: [],
          paneId: paneId,
        };
        this.tabs.push(tab);
        currentTabIndex = this.tabs.length - 1;
      }
      // knownElements
      else if (element.type && this.knownElements.includes(element.type)) {
        //console.log('> known element');
        //console.log(element);
        const random = Math.random().toString(36).slice(2, 9);
        this.tabs[currentTabIndex].elements.push(element.el.outerHTML);
      }
      // Vue components, hopefully
      else if (element.type && element.type.name) {
        //console.log('> component');
        //console.log(element);
        this.tabs[currentTabIndex].elements.push(element);
      }
    }
    this.$nextTick(() => {
      this.openTab(this.tabs[0]);
    });
  },
  methods: {
    openTab(tab) {
      // Hide all paneIds
      for (let i = 0; i < this.tabs.length; i++) {
        document.getElementById(this.tabs[i].paneId).style.display = 'none';
      }
      // Show the tab's pane
      document.getElementById(tab.paneId).style.display = 'block';
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
