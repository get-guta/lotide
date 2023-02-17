 assertArraysEqual = require('../assertArrayEqual');
 map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1)

assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[0]),['c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[0]),'Ground');
