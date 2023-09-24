const fs = require('fs');
const AdmZip = require('adm-zip');
const jsdiff = require('diff');

const filePairs = [
  {
    configPath: 'docs/guides/airnode/deploy-airnode/deploy-aws/src/config.json',
    zipFilePath: 'docs/public/zip-files/quick-start-aws.zip',
  },
  {
    configPath: 'docs/guides/airnode/deploy-airnode/deploy-gcp/src/config.json',
    zipFilePath: 'docs/public/zip-files/quick-start-gcp.zip',
  },
  {
    configPath:
      'docs/guides/airnode/deploy-airnode/deploy-container/src/config.json',
    zipFilePath: 'docs/public/zip-files/quick-start-container.zip',
  },
];

// Function to compare the contents of config.json in a file and a zip archive
function compareConfigContents(configPath, zipFilePath) {
  // Read the contents of config.json from a file
  const configFileContent = fs.readFileSync(configPath, 'utf8');

  // Read the contents of config.json from the zip archive
  const zip = new AdmZip(zipFilePath);
  const zipConfigEntry = zip.getEntry('config.json');
  if (!zipConfigEntry) {
    throw new Error(`config.json not found in ${zipFilePath}`);
  }
  const zipConfigContent = zipConfigEntry.getData().toString('utf8');

  // Compare the contents
  if (configFileContent === zipConfigContent) {
    console.log(
      `Contents of config.json in ${configPath} and ${zipFilePath} are identical.`
    );
  } else {
    hasDifference = true;
    const differences = jsdiff.diffLines(configFileContent, zipConfigContent);

    process.stdout.write(
      `Error: Contents of config.json in \x1b[31m${configPath}\x1b[0m and \x1b[32m${zipFilePath}\x1b[0m differ.\n\n`
    );
    differences.forEach((part) => {
      if (part.added || part.removed) {
        const color = part.added ? '\x1b[32m' : '\x1b[31m';
        process.stdout.write(color + part.value + '\x1b[0m');
      }
    });

    console.log('\n'); // Add a newline to separate output for each pair
  }
}

// Loop through the file pairs and compare their contents
let hasDifference = false;
for (const pair of filePairs) {
  compareConfigContents(pair.configPath, pair.zipFilePath);
}

process.exit(hasDifference ? 1 : 0);
