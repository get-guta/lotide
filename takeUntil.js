const eqArrays = function (arr1, arr2) {

  // if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw Error('params must be typeof array');
  // if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    } 
  }
  return true
};

const assertArraysEqual = function(array1, array2){
  if(eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed:  ${array1} !== ${array2}`);
  }
};
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(!callback(item)){ 
      results.push(item);
    }else{
      return results;
    }
  }
  
  
   
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood']);