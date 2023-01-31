const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed:  ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arr1, arr2){
  let equality;
  for(let i = 0; i< arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      if( arr1[i] === arr2[j]){
        equality = true;
      }else{
        equality = false;
      }
    }
  }
  return equality;


};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual("Lighthuose Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Love", "Love");
assertEqual("Love", "Peace");
assertEqual(8, 18);