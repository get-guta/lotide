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

const middle = function (arr) {
  let mid;
  let res = [];
  mid = arr.length / 2;
  if (Number.isInteger(mid)) {
    res.push(arr[mid - 1]);
    res.push(arr[mid]);
  } else {
    mid = Math.floor(mid);
    res = [arr[mid]];
  }
  return res;
};

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2, 3])); 
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4,]));
