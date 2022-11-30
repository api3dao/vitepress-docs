// 1. Import packages
const fs = require('fs');
const solc = require('solc');

// 2. Get path and load contract
// Path from the _components directory
const source = fs.readFileSync('./HelloWorld.sol', 'utf8');

// 3. Create input object
const input = {
  language: 'Solidity',
  sources: {
    'HelloWorld.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};
// 4. Compile the contract
const tempFile = JSON.parse(solc.compile(JSON.stringify(input)));
const contractFile = tempFile.contracts['HelloWorld.sol']['HelloWorld'];
console.log(contractFile);
fs.writeFileSync('myFile.json', tempFile);

// 5. Export contract data
module.exports = contractFile;
