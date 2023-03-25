/**
 * See /dev/axios.md
 */

const axios = require('axios');
const fs = require('fs');

async function dapiChains() {
  const response = await axios.get(
    'https://db-api-prod.api3.org/api/docs-chains-reference'
  );
  console.log(response.data);
  const chains = response.data;

  fs.writeFileSync(
    'docs/reference/dapis/chains/chains.json',
    JSON.stringify(chains)
  );
}

console.log('\n----- Building Axios Scripts -----');

console.log(
  '> Building chains.json in docs/reference/dapis/chains/chains.json'
);
dapiChains();
