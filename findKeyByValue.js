//find object keys by value
function findKeyByValue(object, value) {
  return Object.keys(object).find(
    function(key) {return object[key] === value;
  });
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed:  ${actual} !== ${expected}`);
  }

};

assertEqual(findKeyByValue({a:2, b:5, c:6}, 5), "b");
