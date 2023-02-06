const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
 if(keys1.length !== keys2.length){
  return false;
}
else{
  for(let k of keys1){
    // if(keys1[k] !== keys2[k]){
    //   return false;
    // }
   if(Array.isArray(object1[k]) && Array.isArray(object2[k])){
      if(!eqArrays(object1[k], object2[k])){
        return false;
      }
      }else if(object1[k] !== object2[k]){
        return false;
      }

    }

  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if(eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed:  ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed:  ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); // => false