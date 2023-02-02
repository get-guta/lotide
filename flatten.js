const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed:  ${array1} !== ${array2}`);
  }
};

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