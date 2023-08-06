/**
 * See /dev/axios-scripts.md
 */

const axios = require('axios');
const fs = require('fs');
const CHAINS = require('@api3/chains').CHAINS;
const versionsRef = require('../docs/.vitepress/versions.json');

/**
 * Builds the list of chains for the dAPIs docset
 */
async function dapiChains() {
  const response = await axios.get(
    'https://db-api-prod.api3.org/api/docs-chains-reference'
  );
  const chains = response.data;

  fs.writeFileSync(
    'docs/reference/dapis/chains/chains.json',
    JSON.stringify(chains)
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

    //console.log('\n=>', contractName, url, path);
    let arr = [];
    Object.keys(obj[contractName]).forEach((key) => {
      // Get the chain obj from @api3/chains. If undefined is returned then skip
      // the iD as it may no longer be available such as Rinkeby.
      const c = getChainInfo(key);

      // NLU chains: Ropsten, Rinkeby, POA Network Sokol, and Metis Stardust
      if (['3', '4', '42', '77', '588'].includes(key)) {
        return;
      } else if (!c) {
        const fullname = getChainInfo(key); //chainsRef[key].fullname;
        console.log(
          `   airnodeContractAddresses(): chainId: ${key} (${fullname}) was not found in API3/chains and has been omitted.`
        );
        return;
      }

      arr.push({
        id: key,
        fullname: c.name,
        alias: c.alias,
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
      `Error: ${contractName}
      failed to write file for path: ${path}
      from repo ${url}
      ${err.message}`
    );
    console.log('------------------');
  }
}

/**
 * Returns a chain object from @api3/chains.
 * If the chain is not found it returns undefined.
 * @param {*} id
 * @returns
 */
function getChainInfo(id) {
  const c = CHAINS.find((chain) => chain.id == id); // Could be string or number
  if (!c) {
    // handle bad id
    return undefined;
  }
  return c;
}

/**
 * Script runs from here
 */
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

  /**
   * There is a need to add the RequesterAuthorizerWithErc721 contract addresses
   * from the airnode-protocol-v1 repo. The repo is supposed to be migrated in the
   * monorepo. Will pull the contract from main only.
   */
  url =
    'https://raw.githubusercontent.com/api3dao/airnode-protocol-v1/main/deployments/references.json';
  airnodeContractAddresses('RequesterAuthorizerWithErc721', url, path);
});
console.log('------------------');
