const assertArraysEqual = require('./assertArraysEqual');

const flatten = function (array) {
  let flat = [];
  for (let arr of array) {
    if (!Array.isArray(arr)) {
      flat.push(arr);
    } else {
      for (let a of arr) {
        flat.push(a);
      }
    }
  }
  return flat;

};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 5, 4, 6]);