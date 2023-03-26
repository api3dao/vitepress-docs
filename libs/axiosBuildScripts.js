/**
 * See /dev/axios.md
 */

const axios = require('axios');
const fs = require('fs');
const chainsRef = require('../docs/.vitepress/chains.json');

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

async function contractAddresses(contractName) {
  const response = await axios.get(
    'https://raw.githubusercontent.com/api3dao/airnode/master/packages/airnode-protocol/deployments/references.json'
  );
  const obj = response.data;
  // Create a file for each contract
  let arr = [];
  Object.keys(obj[contractName]).forEach((key) => {
    // These chains get listed (and highlighted) first in display tables.
    // They are considered important.
    let important = ['1', '3', '4', '5', '43', '11155111'].includes(key);

    arr.push({
      id: key,
      fullname: chainsRef[key].fullname,
      shortname: obj.chainNames[key],
      type: chainsRef[key].type,
      contractName: contractName,
      contractAddress: obj[contractName][key],
      important: important,
    });
  });

  fs.writeFileSync(
    'docs/reference/airnode/latest/src/' + contractName + '.json',
    JSON.stringify(arr)
  );
}

console.log('\n----- Building Axios Scripts -----');

console.log('> Building chains.json in docs/reference/dapis/chains/');
dapiChains();

console.log(
  '> Building contract addresses files in docs/reference/airnode/latest/src/'
);
contractAddresses('AirnodeRrpV0');
contractAddresses('RequesterAuthorizerWithAirnode');
contractAddresses('AccessControlRegistry');
