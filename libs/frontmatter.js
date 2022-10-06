// https://coderrocketfuel.com/article/recursively-list-all-the-files-in-a-directory-using-node-js

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises');

//joining path of directory
const directoryPath = path.join(__dirname, '../docs');
const matter = require('gray-matter');
const { mainModule } = require('process');
let mdFiles = [];
let frontmatterArray = [];

async function getAllFiles(dirPath, arrayOfFiles) {
  //console.log('#3 dirPath', dirPath)
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else if (file.endsWith('.md')) {
      mdFiles.push(path.join(dirPath, '/', file));
    }
  });
  //console.log('+++++ END getAllFiles() +++++')
  //return arrayOfFiles
}

async function getFrontmatter(dirPath) {
  for (i = 0; i < mdFiles.length; i++) {
    const file = mdFiles[i];
    console.log('>', file);
    try {
      let f = await fsp.readFile(file, 'utf8');
      let frontmatter = {};
      if (matter(f).data.title.toLowerCase())
        frontmatter.title = matter(f).data.title;
      if (matter(f).data.sidebarHeader)
        frontmatter.sidebarHeader = matter(f).data.sidebarHeader.toLowerCase();

      frontmatter.path = file;
      frontmatterArray.push(frontmatter);
      await validate(frontmatter);
    } catch (err) {
      console.log('>>>', err);
    }
  }
}

async function validate(frontmatter) {
  if (!frontmatter.sidebarHeader) {
    console.error(frontmatter.path);
    console.error('   missing sidebarHeader >', frontmatter.sidebarHeader);
  }
}

async function main() {
  console.log('\n> directoryPath', directoryPath);
  await getAllFiles(directoryPath + '/explore');
  await getAllFiles(directoryPath + '/guides');
  await getAllFiles(directoryPath + '/reference');
  console.log('> mdFiles', mdFiles.length);
  console.log('> calling getFrontmatter()');
  await getFrontmatter();
  //console.log(frontmatterArray)

  try {
    fs.writeFileSync(
      directoryPath + '/_components/search/frontmatter.json',
      JSON.stringify(frontmatterArray)
    );
  } catch (err) {
    console.error(err);
  }

  // Test find
  // Search Words: uides build
  // https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
  const word = 'guides';
  const word2 = 'journey';
  const word3 = 'about';
  console.log('----- quides -----');
  console.log(
    frontmatterArray.filter((x) => x.sidebarHeader.indexOf(word) > -1)
  );
  console.log('----- journey -----');
  console.log(
    frontmatterArray.filter(
      (x) => x.title.indexOf(word2) > -1 && x.title.indexOf(word3) > -1
    )
  );
}

main();
