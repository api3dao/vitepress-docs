const { readFileSync } = require('fs');
var file = require('file');

// https://stackoverflow.com/questions/66222342/cheerio-loop-through-children-and-call-html

const cheerio = require('cheerio');

const markup = `<body><ul id="js-frameworks">
                    <li class="vue">Vue.js ⚡</li>
                    <li class="react">React</li>
                    <li class="svelte">Svelte</li>
                    <li class="angular">Angular</li>
                </ul>
                <div>Hello</div></body>`;
/* Note - variable name is declared as '$' to bring the familiarity of JQuery to cheerio */

// 'docs/.vitepress/dist/guides/airnode/quick-start-aws/index.html'
// 'docs/.vitepress/dist/explore/test.html'
const htmlString = readFileSync(
  'docs/.vitepress/dist/guides/airnode/quick-start-aws/index.html',
  'utf8'
);

const $ = cheerio.load(htmlString);

//console.log($.root());

//  TRY THIS TOMORROW https://www.npmjs.com/package/textversionjs

var children = $('body').first().children(); // Select all children
for (var i = 0; i < children.length; i++) {
  console.log('>>>>>>>>>>', ' ' + $(children[i]).text() + ' ' : ''); // Get jquery object from dom element
}
