const assertEqual = function(actual, expected) {
  let fail = String.fromCodePoint(0x1F621);
  let pass = String.fromCodePoint(0x1F600);
  if (actual == expected) {
    console.log(`${pass} Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed:  ${actual} !== ${expected}`);
  }

};

const arrayHead = function(arr){
  return arr[0];
};

assertEqual(arrayHead([5,7,9]), 5);
assertEqual(arrayHead(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(arrayHead([]),undefined);
assertEqual(arrayHead([5]),5);

console.log("========================");
assertEqual("Lighthuose Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Love", "Love");
assertEqual("Love", "Peace");
assertEqual(8, 8);
assertEqual(8, 18);
