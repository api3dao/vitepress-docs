/**
 * See /dev/axios-scripts.md
 */

const axios = require('axios');
const fs = require('fs');
const chainsRef = require('../docs/.vitepress/chains.json');

const versionsRef = require('../docs/.vitepress/versions.json');

async function dapiChains() {
  const response = await axios.get(
    'https://db-api-prod.api3.org/api/docs-chains-reference'
  );
  const chains = response.data;

  fs.writeFileSync(
    'docs/reference/dapis/src/chains.json',
    JSON.stringify(chains)
  );
}

async function contractAddresses(contractName, vrs, path) {
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/api3dao/airnode/' +
        vrs +
        '/packages/airnode-protocol/deployments/references.json'
    );
    const obj = response.data;

    let arr = [];
    Object.keys(obj[contractName]).forEach((key) => {
      arr.push({
        id: key,
        fullname: chainsRef[key].fullname,
        shortname: obj.chainNames[key],
        contractName: contractName,
        contractAddress: obj[contractName][key],
      });
    });

    fs.writeFileSync(
      'docs' + path + 'src/' + contractName + '.json',
      JSON.stringify(arr)
    );
  } catch (err) {
    console.error(
      `Error:
      failed to write file for path: ${path}
      using vrs: ${vrs}
      ${err.message}`
    );
    console.log('------------------');
  }
}

console.log('\n----- Building Axios based script files -----');

console.log('> Building chains.json in docs/reference/dapis/chains/');
dapiChains();

console.log('> Building Airnode version specific contract address files');
versionsRef.versionsAirnode.forEach((el) => {
  let path = el.path;
  let vrs = el.version;
  let msg = '';

  // Is the version the "/next" release?
  // If so then use the /latest version, but the path of /next.
  if (el.version === versionsRef.airnodeNext) {
    vrs = versionsRef.airnodeLatest;
    path = el.path;
    msg = '(This is /next so using version from /latest)';
  }

  console.log('  ✺ path:', path, '▶︎', 'vrs:', vrs, '▶︎', msg);
  contractAddresses('AirnodeRrpV0', vrs, path);
  contractAddresses('RequesterAuthorizerWithAirnode', vrs, path);
  contractAddresses('AccessControlRegistry', vrs, path);
});
console.log('------------------');
