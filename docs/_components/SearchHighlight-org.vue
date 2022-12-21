<!--
The component highlights text that is typed into the 
SearchBtn.vue component. Each page has this component at the top of the page.
-->

<template>
  <div v-show="1 === 2">SearchHighlight.vue</div>
</template>

<script>
import eventBus from '../.vitepress/theme/eventBus.ts';

export default {
  name: 'SearchHighlight',
  data: () => ({
    rn: [], // An array of updated nodes
    words: [], // The search words found in localStorage
  }),
  methods: {
    updateDOM() {
      // Are there words?
      const wordStr = localStorage.getItem('search-words') || undefined;
      if (wordStr === undefined) return;
      this.words = wordStr.split(' ');

      // First call the function textNodesUnder() to find textNodes
      let nodeList = document.querySelectorAll('main *');
      for (let i = 0; i < nodeList.length; i++) {
        if (i < 6) continue; // Skip the first 7 nodes
        textNodesUnder(nodeList[i], nodeList[i], this.rn, this.words);
      }

      // Next set highlighted nodes
      try {
        this.rn.forEach((row) => {
          //console.log(row.spanNode);
          row.parentNode.replaceChild(row.spanNode, row.textNode);
        });
      } catch (err) {
        console.error('set DOM errors');
        console.error(err);
      }

      function getRandomStr() {
        return (Math.random() + 1).toString(36).substring(7);
      }

      // https://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page
      function textNodesUnder(node, parentNode, rn, words) {
        for (node = node.firstChild; node; node = node.nextSibling) {
          if (node.nodeType == 3) {
            // textNodes only

            // Create a new parent span element to hold
            // the textNode.textContent with highlighted words.
            // Does not mean it is needed unless a word is found,
            // thus the swapIt variable.
            const span = document.createElement('span');
            const id = getRandomStr();
            span.setAttribute('id', id);
            let swapArr = []; // objs to swap out for swapStr
            let swapStr = (' ' + node.textContent).slice(1); // becomes the innerHTML of the above span element

            // Check for each word
            let swapIt = false;
            for (let i = 0; i < words.length; i++) {
              const word = words[i];
              if (word.length < 3) {
                console.log('----- +++++ -----');
                continue;
              }

              let start = 0;
              while (start != -1) {
                start = swapStr.toLowerCase().indexOf(word, start);
                if (start === -1) {
                  break;
                }

                const swapId = getRandomStr();

                // Get the original word
                const orgWord = swapStr.substr(start, word.length);
                const insert = `<span class="api3-hight-light">${orgWord}</span>`;

                swapArr.push({ swapId: swapId, obj: insert });

                // Need to add the swapId where the orgWord is
                swapStr = swapStr.replace(orgWord, swapId);

                // Instructs that the span be added to teh swapArr
                swapIt = true;
              }
            }
            // Add new span to swapArr
            if (swapIt) {
              swapIt = false;
              swapArr.forEach((child) => {
                swapStr = swapStr.replace(child.swapId, child.obj);
              });
              span.innerHTML = swapStr; //swapStr;
              rn.push({
                parentNode: parentNode,
                textNode: node,
                spanNode: span,
              });
            }
          }
        }
      }
    },
    revertDOM() {
      // Revert nodes
      try {
        console.log('search > revertDOM()');
        this.rn.forEach((row) => {
          row.parentNode.replaceChild(row.textNode, row.spanNode);
        });
      } catch (err) {
        console.error('revertDOM() error');
        console.error(err);
      } finally {
        this.rn = [];
      }
    },
  },
  beforeUnmount() {
    eventBus().emitter.off('search-event');
  },
  mounted() {
    this.$nextTick(function () {
      console.log('search highlighted rows', this.rn.length);
      this.revertDOM();
      this.updateDOM();

      // Event fired by SearchBtn.vue
      eventBus().emitter.on('search-event', (payload) => {
        this.revertDOM();
        this.updateDOM();
      });
    });
  },
};
</script>

<style>
.api3-hight-light {
  border: red solid 1px;
  border-radius: 3px;
}
</style>
