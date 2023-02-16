const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual("Lighthuose Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Love", "Love");
assertEqual(8, 18);