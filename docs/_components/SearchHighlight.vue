<template></template>

<script>
import axios from 'axios';
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
        console.log('There are no words: return');
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
        //console.log('-------------------------------\n');
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
              //console.log(node.innerHTML.toLowerCase());
              start = node.innerHTML.toLowerCase().indexOf(word, start);
              if (start === -1) break;

              const orgWord = node.innerHTML.substr(start, word.length);
              const insert = `<span class="mklptqbc" style="border: solid 1px red;">${orgWord}</span>`;
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
        // console.log('>>> Add childrenNodes back to parent node.');
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
  beforeUnmount() {
    eventBus().emitter.off('search-event');
    console.log('beforeUnmount');
  },

  unmounted() {
    console.log('unmounted');
  },
  /*
    1. Makes a copy of the DOM (main element) to reset search 
       highlighting as it changes.
    2. Sets a event trap for the search-event when
       the user types into the search input field. 
  */
  mounted() {
    this.$nextTick(function () {
      console.log('>>> MOUNTED SearchHighlight.vue');

      // Make a copy of main element. It must be cloned to eliminate
      // its reference to the DOM.
      this.main = document.getElementsByTagName('main')[0];

      console.log(
        'loaded',
        document.getElementsByClassName('content-container')[0]
      );
      setTimeout(this.updateNodes, 10);

      eventBus().emitter.on('search-event', (payload) => {
        console.log('----- Event on fired in SearchHighlight.vue');
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

        let spans = document.getElementsByClassName('mklptqbc');
        console.log('span', spans);

        for (var i = spans.length; i--; ) {
          //spans[i].style.color = 'red';
          console.log('innerText', spans[i].innerText);
          const textNode = document.createTextNode(spans[i].innerText);
          spans[i].replaceWith(textNode);
        }
        setTimeout(this.updateNodes, 10);
        if (1 === 1) return;
        ///
        ///
        console.log(this.main);
        let contentContainerParent =
          document.getElementsByClassName('content-container')[0];
        console.log('content-container', contentContainerParent);
        console.log('this.main', this.main);
        let mainNode = document.getElementsByClassName('main')[0];
        //let clone = this.main.cloneNode(true);
        mainNode.remove();
        contentContainerParent.insertAdjacentElement('afterbegin', this.main);
        //contentContainerParent.appendChild(this.main); //(clone);

        //mainNode.replaceWith(clone);
        //let theNode = contentContainerParent.replaceChild(clone, mainNode);
        console.log(99, contentContainerParent);

        /*
        // This is a parent element to main (div class="content-container").
        let contentContainerParent =
          document.getElementsByClassName('content-container')[0];
        console.log('contentContainerParent', contentContainerParent);

        let vpDoc = document.getElementsByClassName('vp-doc')[0];
        console.log(vpDoc);

        // Get the current main element in the DOM
        let mainNode = document.getElementsByClassName('main')[0];
        //const clone2 = mainNode.cloneNode(true);
        ///console.log('clone2', clone2);

        // Clone this.main (element) to prevent references back to it
        // from replaceChild() function.
        const clone = this.main.cloneNode(true);
        console.log('clone', clone);

        // Resets the DOM back to its state when the page first loaded.
        let theNode = contentContainerParent.replaceChild(clone, mainNode);
        console.log(theNode);
        console.log('Done with event "on"');*/
        setTimeout(this.updateNodes, 10);
      });
    });
  },
};
</script>
