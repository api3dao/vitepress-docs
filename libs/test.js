const { readFileSync } = require('fs');
var file = require('file');
var colors = require('colors');
const { parse } = require('node-html-parser');

let paths = ['docs/.vitepress/dist/guides/airnode/quick-start-aws/index.html'];

/**
 * Callback for file.walkSync, add each
 * @param {*} dirPath
 * @param {*} dirs
 * @param {*} files
 */
function tempCB(dirPath, dirs, files) {
  paths.push({ dir: dirPath, files: files });
}
function loadHtmlFiles() {
  file.walkSync('./docs/.vitepress/dist', tempCB);
  console.log('----- END WALK SYNC -----');
  for (let i = 0; i < arr.length; i++) {
    //extractContent(arr[i]);
  }
}

//loadHtmlFiles();

function extractContent() {
  //const arrFiles = dir.files;
  const skipFiles = [
    './docs/.vitepress/dist/index.html',
    './docs/.vitepress/dist/team.html',
    './docs/.vitepress/dist/404.html',
  ];
  for (let x = 0; x < paths.length; x++) {
    const path = paths[x];

    console.log('\n***********************************\n' + path);

    //const path = dir.dir + '/' + file;

    if (path.includes('.html') && skipFiles.indexOf(path) === -1) {
      const htmlString = readFileSync(path, 'utf8');

      ////// NODE PARSER////////
      const root = parse(htmlString);

      root.querySelectorAll('body').forEach((element) => {
        let text = element.structuredText.replace(/(\r\n|\n|\r)/gm, ' ');
        const txt = text.split('__VP_HASH_MAP__ =')[0];

        const txt2 = txt.split('Table of Contents for current page')[1];

        let txt3 = txt2.split(
          'Released under the MIT License. Copyright © 2019-present API3'
        )[0];
        // Remove 📂
        txt3 = txt3.replace('  📂 ', '');
        // The "Next page" and "Previous page" (footer) can be removed
        txt3 = txt3.replace('Next page', '');
        txt3 = txt3.replace('Previous page', '');
        txt3 = txt3.replace('★ ', '');

        //console.log(txt3);

        //console.log('----- STRUCTURED HTML -----');
        const elCode = parse(txt3);
        console.log(elCode.querySelectorAll('code').length);

        // Extract code blocks (```) from page. Inline code blocks get parsed
        // bu now-html-parser. Multi line code blocks are not getting parsed. This
        // might have something with the way vitepress nests the blocks. Not sure.
        //elCode.querySelectorAll('code').forEach((el) => {
        let codeElements = elCode.querySelectorAll('code');
        for (let i = 0; i < codeElements.length; i++) {
          let el = codeElements[i];
          console.log('\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n', el.outerHTML);
          console.log('...', el.structuredText);
          // Remove code blocks
          txt3 = txt3.replace(el.outerHTML, ''); //el.structuredText);
          //const start = txt3.indexOf('<code');
          //const end = txt3.indexOf('</code>') + 7;

          // CHEERIO TUTORIAL
          // https://blog.logrocket.com/parsing-html-nodejs-cheerio/

          //console.log(start, end);

          //console.log(txt3.slice(start, end + 7));
          //const replaceText = txt3.slice(start, end);
          //console.log('...', replaceText);
          //txt3 = txt3.replace(replaceText, ''); //el.structuredText);
          //console.log(txt3);
        }
        console.log('----- FINAL -----');
        console.log('\n' + txt3);
        console.log(
          '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'
        );
        console.log(
          '+++++++++++++++++++++++ END +++++++++++++++++++++++++++++++'
        );
        console.log(
          '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'
        );
      });
    }
  }
}

extractContent();
