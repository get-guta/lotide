const assertEqual = require('./assertEqual');

function findKeyByValue(object, value) {
  let keys = Object.keys(object);
  for(let key of keys){
    if(object[key] === value){
      return key;
    }

  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");