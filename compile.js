const path = require('path');
const fs = require('fs');
const solc = require('solc');

const currentDir = path.resolve(__dirname, 'hello.sol');
const source = fs.readFileSync(currentDir, 'UTF-8');

// module.exports = solc.compile(source, 1).contracts[':Hello']

var input = {
    language: 'Solidity',
    sources: {
        'hello.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output.contracts)

// exports.get = output.contracts['hello.sol'][':SimpleStorage'].get;
// exports.bytecode = output.contracts['hello.sol']['Hello'].evm.bytecode.object;