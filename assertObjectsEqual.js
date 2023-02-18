const eqObjects = require('./eqObjects');
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if(eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed:  ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed:  ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;
