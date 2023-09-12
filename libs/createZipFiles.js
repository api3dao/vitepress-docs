const fs = require('fs');
const AdmZip = require('adm-zip');

const filePairs = [
  {
    srcPath: 'docs/guides/airnode/deploy-airnode/deploy-aws/src',
    zipFilePath: 'docs/public/zip-files/quick-start-aws.zip',
  },
  {
    srcPath: 'docs/guides/airnode/deploy-airnode/deploy-gcp/src',
    zipFilePath: 'docs/public/zip-files/quick-start-gcp.zip',
  },
  {
    srcPath: 'docs/guides/airnode/deploy-airnode/deploy-container/src',
    zipFilePath: 'docs/public/zip-files/quick-start-container.zip',
  },
];

// loop through the file pairs and create a zip file for all of the files in srcPath and save it to zipFilePath
for (const pair of filePairs) {
  const zip = new AdmZip();
  const files = fs.readdirSync(pair.srcPath);
  console.log(`Creating zip file from: ${pair.srcPath}`);
  for (const file of files) {
    console.log(`\tAdding file: ${file}`);
    zip.addLocalFile(`${pair.srcPath}/${file}`);
  }
  console.log(`Writing zip file to: ${pair.zipFilePath}\n`);
  zip.writeZip(pair.zipFilePath);
}
