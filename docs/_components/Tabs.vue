<!-- https://github.com/Jacobs63/vue3-tabs-component -->

<template>
  <div>
    <!-- Tabs -->
    <div class="tab">
      <button
        :id="index"
        class="tablinks"
        v-for="(tab, index) in tabs"
        v-bind:key="index"
        @click="openTab($event, index)"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Content Panes -->
    <div
      :id="index + '-content'"
      v-html="item"
      class="tabcontent"
      v-for="(item, index) in content"
      v-bind:key="index"
    />

    <!-- Hide the slot-->
    <span style="display: none">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data: () => ({
    tabs: [],
    content: [],
  }),
  mounted() {
    let tabChanged = false;
    this.$slots.default().forEach((element) => {
      //console.log(element);
      if (element.el.innerText.indexOf('@tab:') > -1) {
        this.tabs.push(element.el.innerText.split(':')[1]);
        tabChanged = true;
      } else if (tabChanged === true) {
        this.content.push(element.el.outerHTML);
        tabChanged = false;
        //console.log(element.el.outerHTML);
      } else {
        this.content[this.content.length - 1] += element.el.outerHTML;
        //console.log(element.el.outerHTML);
      }
    });
    this.$nextTick(() => {
      document.getElementById('0-content').style.display = 'block';
      document.getElementById(0).className += ' active';
    });
  },
  methods: {
    openTab(evt, tabIndex) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
      tablinks = document.getElementsByClassName('tablinks');
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
      }
      document.getElementById(tabIndex + '-content').style.display = 'block';
      evt.currentTarget.className += ' active';
    },
  },
};
</script>

<style scoped>
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  margin-left: 5px;
  /*background-color: #f1f1f1;*/
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 7px 14px;
  transition: 0.3s;
  font-size: 14px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
  color: black;
  font-weight: bold;
  /*border-radius:.4em;*/
}

/* Style the tab content */
.tabcontent {
  margin-left: 5px;
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>
