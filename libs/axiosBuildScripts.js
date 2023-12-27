/**
 * See /dev/axios-scripts.md
 */

const axios = require('axios');
const fs = require('fs');
const CHAINS = require('@api3/chains').CHAINS;
const versionsRef = require('../docs/.vitepress/versions.json');

/**
 * Builds the list of chains for /reference/dapis
 */
async function dapiChains() {
  const repo = await axios.get(
    'https://raw.githubusercontent.com/api3dao/airnode-protocol-v1/main/deployments/references.json'
  );
  const repoData = repo.data;

  let list = {};
  Object.entries(CHAINS).forEach((element) => {
    const id = element[1].id;
    const chain = CHAINS.find((x) => x.id === id);

    const contractList = {
      Api3ServerV1: repoData.Api3ServerV1[id],
      AccessControlRegistry: repoData.AccessControlRegistry[id],
      OwnableCallForwarder: repoData.OwnableCallForwarder[id],
      ProxyFactory: repoData.ProxyFactory[id],
    };

    // Use the obj only if the contract for api3serverV1 is present
    if (contractList.Api3ServerV1) {
      list[chain.alias] = {
        id: id,
        alias: chain.alias,
        name: chain.name,
        nativeToken: chain.symbol,
        testnet: chain.testnet,
        explorerUrl: chain.explorer.browserUrl,
        contracts: contractList,
      };
    }
  });

  fs.writeFileSync(
    'docs/reference/dapis/chains/chains.json',
    JSON.stringify(list)
  );
}

/**
 * Build the list of contract addresses for multiple
 * chains for the Airnode docset, and for each version.
 * @param {*} contractName
 * @param {*} url
 * @param {*} path
 */
async function airnodeContractAddresses(contractName, url, path) {
  try {
    const response = await axios.get(url);
    const obj = response.data;

    let arr = [];
    Object.keys(obj[contractName]).forEach((key) => {
      // Get the chain obj from @api3/chains. If undefined is returned then skip
      // the ID as it is no longer be available such as Rinkeby.
      const c = CHAINS.find((chain) => chain.id == key) || undefined;
      if (c) {
        arr.push({
          id: key,
          fullname: c.name,
          alias: c.alias,
          contractName: contractName,
          contractAddress: obj[contractName][key],
        });
      }
    });

    fs.writeFileSync(
      'docs' + path + 'src/' + contractName + '.json',
      JSON.stringify(arr)
    );
  } catch (err) {
    console.error(
      `Error: ${contractName}
      failed to write file for path: ${path}
      from repo ${url}
      ${err.message}`
    );
    console.log('------------------');
  }
}

/* Start the script here */
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
  let url =
    'https://raw.githubusercontent.com/api3dao/airnode/' +
    vrs +
    '/packages/airnode-protocol/deployments/references.json';
  airnodeContractAddresses('AirnodeRrpV0', url, path);
  airnodeContractAddresses('RequesterAuthorizerWithAirnode', url, path);
  airnodeContractAddresses('AccessControlRegistry', url, path);

  // AirnodeRrpV0DryRun was added in v0.12
  if (vrs !== 'v0.11') {
    airnodeContractAddresses('AirnodeRrpV0DryRun', url, path);
  }
});
console.log('------------------');
