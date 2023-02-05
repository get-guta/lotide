

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
const letterPositions = function(sentence) {
  
  const  result= {};
  
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if(char !== " "){
      if(result[char]){
        result[char].push(i);
      }else{
        result[char] = [i];
      }

    }
  }

  return result;
};



assertArraysEqual(letterPositions("hello").l, [2, 3]);