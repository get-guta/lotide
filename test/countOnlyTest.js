
const {object: assertObjectsEqual} = require('../assertObjectsEqual');
const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

firstNames = [
  "Karl", 
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertObjectsEqual(result1, {
  "Jason": 1,
  "Fang": 2
});
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Agouhanna"], undefined);