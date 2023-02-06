const eqArrays = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(array1, array2){
  if(eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed:  ${array1} !== ${array2}`);
  }
};


const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1)

assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[0]),['c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[0]),'Ground');

