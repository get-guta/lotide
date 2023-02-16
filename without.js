
const assertArraysEqual = require('./assertArraysEqual');

const without = function (array, excludeNums) {
  let selected = [];
  for (const arr of array) {
    if (!excludeNums.includes(arr)){
      selected.push(arr);
    }
  }
  return selected;
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "4"]); // => ["1", "2"]



