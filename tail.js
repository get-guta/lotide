const assertEqual = function(actual, expected) {
  let fail = String.fromCodePoint(0x1F621);
  let pass = String.fromCodePoint(0x1F600);
  if (actual === expected) {
    console.log(`${pass} Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed:  ${actual} !== ${expected}`);
  }

};
const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i <= arr.length; i++) {
    newArr = arr[i];
  }
  return newArr;


};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
console.log("=========================================");
assertEqual("Lighthuose Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Love", "Love");
assertEqual("Love", "Peace");
assertEqual(8, 8);
assertEqual(8, 18);