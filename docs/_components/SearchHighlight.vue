<!--
NOTE: Nov 18th, 2022
  This component is on hold, the mounted() function is commented out.

  Each page has this component at the top of the page ready to use this
  component in the future.
-->

<template>
  <div v-show="1 === 2">SearchHighlight.vue</div>
</template>

<script>
import eventBus from '../.vitepress/theme/eventBus.ts';

export default {
  name: 'SearchHighlight',
  data: () => ({
    cnt: 0, // Used for display purposes in the console
  }),
  methods: {
    getTempNode(id) {
      const node = document.createElement('xy');
      node.setAttribute('id', id);
      return node;
    },
    updateNodes(cnt) {
      console.log(cnt, '>>>>>>>>>>>>>> START');
      let words = localStorage.getItem('search-words') || undefined;
      if (!words) {
        console.log('There are no words: return');
        return;
      }
      console.log('----- updateNodes() words >', words);
      words = words.split(' ');
      //console.log(words);

      let nodeList = window.document.querySelectorAll('main *');
      //console.log(nodeList);

      /* Outer most loop with 3 sub-loops
         1) Remove and hold the children in an array
         2) Highlight the words by updating the node, now less its children
         3) Add the children back to the node
      */
      for (let i = 0; i < nodeList.length; i++) {
        if (i < 5) continue; // Skip the first 5 nodes (0-4)
        let node = nodeList[i];

        // Do not highlight SELECT elements, gives error
        if (node.tagName === 'SELECT') continue;

        let children = [];
        // 1) Remove and hold the children in an array
        for (let i = node.children.length - 1; i > -1; i--) {
          const orgChildNode = node.children[i];
          if (node) {
            const id = (Math.random() + 1).toString(36).substring(2);
            const tempNode = this.getTempNode(id);
            node.replaceChild(tempNode, orgChildNode);
            children.push({ id: id, orgNode: orgChildNode });
          }
        }

        // 2) Highlight the words by updating the node, now less its children
        try {
          words.forEach((word) => {
            if (word.length < 3) return; // must be 3 characters or more
            let start = 0;
            while (start != -1) {
              start = node.innerText.toLowerCase().indexOf(word, start);
              if (start === -1) break;

              const orgWord = node.innerText.substr(start, word.length);
              const insert = `<span class="mklptqbc" style="border: solid 1px red;">${orgWord}</span>`;
              const insertLen = insert.length;
              // Update the node
              // This is important, note the use of nodeHTML below.
              // Use innerText to update innerHTML
              node.innerHTML =
                node.innerText.slice(0, start) +
                insert +
                node.innerText.slice(start + word.length);
              start = start + insertLen;
            }
          });
        } catch (err) {
          console.log('----- UPDATE node.innerHTML -----');
          console.error(err);
          console.error(node);
        }

        // 3) Add the children back to the node
        // The element.id is the tempNode created earlier
        try {
          children.forEach((temp) => {
            const el = document.getElementById(temp.id);
            node.replaceChild(temp.orgNode, el);
          });
        } catch (err) {
          console.log('----- ADD back child nodes -----');
          console.error(err);
          console.error(node);
        }
      }
      console.log(cnt, '>>>>>>>>>>>>>> END');
    },
  },
  beforeUnmount() {
    //eventBus().emitter.off('search-event');
  },
  mounted() {
    this.$nextTick(function () {
      //setTimeout(this.updateNodes, 10);
      // Event fired by SearchBtn.vue
      /*eventBus().emitter.on('search-event', (payload) => {
        console.log('----- eventBus().emitter.on');
        let spans = document.getElementsByClassName('mklptqbc');
        for (var i = spans.length; i--; ) {
          spans[i].replaceWith(document.createTextNode(spans[i].innerText));
        }
        this.updateNodes(this.cnt++);
      });*/
    });
  },
};
</script>
