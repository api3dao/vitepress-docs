<template></template>

<script>
import Emitter from 'tiny-emitter';
var emitter = new Emitter();

import eventBus from '../.vitepress/theme/eventBus.ts';

export default {
  name: 'SearchHighlight',
  setup() {},
  data: () => ({
    main: undefined,
  }),
  methods: {
    getTempNode(id) {
      const node = document.createElement('xy');
      node.setAttribute('id', id);
      return node;
    },
    updateNodes() {
      console.log(1, '>>>>> updateNodes() <<<<<');
      let words = localStorage.getItem('search-words') || undefined;
      console.log(2, 'words', words);

      if (!words) {
        console.log('skinny word: return');
        return;
      }

      words = words.split(' ');
      console.log(3, words);
      let nodeList = window.document.querySelectorAll('main *');

      console.log(nodeList);

      for (let i = 0; i < nodeList.length; i++) {
        // Skip the first 5 nodes (0-4)
        if (i < 5) continue;
        //else if (i === 6) return;

        let node = nodeList[i];
        //console.log('>>> tagName', node.tagName);

        // Do not highlight SELECT elements, gives error
        if (node.tagName === 'SELECT') continue;
        let children = [];

        // Remove and hold the children in an array
        console.log('-------------------------------\n');
        for (let i = node.children.length - 1; i > -1; i--) {
          const orgChildNode = node.children[i];
          if (node) {
            const id = (Math.random() + 1).toString(36).substring(7);
            const tempNode = this.getTempNode(id);
            node.replaceChild(tempNode, orgChildNode);
            children.push({ id: id, orgNode: orgChildNode });
          }
        }

        // Highlight the words by updating the node, now less its children
        try {
          words.forEach((word) => {
            if (word.length < 3) return; // must be 3 characters or more
            let start = 0;
            while (start != -1) {
              start = node.innerHTML.toLowerCase().indexOf(word, start);
              if (start === -1) break;

              const orgWord = node.innerHTML.substr(start, word.length);
              const insert = `<span style="border:solid 1px red;">${orgWord}</span>`;
              const insertLen = insert.length;
              // update the node
              node.innerHTML =
                node.innerHTML.slice(0, start) +
                insert +
                node.innerHTML.slice(start + word.length);
              start = start + insertLen;
            }
          });
        } catch (err) {
          console.log('----- UPDATE node.innerHTML -----');
          console.error(err);
          console.error(node);
        }

        // Add the children back to the node
        try {
          children.forEach((element) => {
            const el = document.getElementById(element.id);
            node.replaceChild(element.orgNode, el);
          });
        } catch (err) {
          console.log('----- ADD back child nodes -----');
          console.error(err);
          console.error(node);
        }
      }
      console.log('DONE highlighting ++++++++++++++++++++++++');
    },
  },

  mounted() {
    this.$nextTick(function () {
      console.log('>>> MOUNTED SearchHighlight.vue');

      // Make a copy of main element

      let main = document.getElementsByTagName('main')[0];
      const clone = main.cloneNode(true);

      this.main = clone;
      eventBus().emitter.on('search-event', (payload) => {
        console.log('----- Event on fired in SearchHighlight.vue');
        let mainParent =
          document.getElementsByClassName('content-container')[0];

        let mainNode = document.getElementsByClassName('main')[0];

        const clone = this.main.cloneNode(true);
        mainParent.replaceChild(clone, mainNode);

        this.updateNodes();
      });

      setTimeout(this.updateNodes, 10);
    });
  },
};
</script>
