const assertEqual = require('./assertEqual');

function findKeyByValue(object, value) {
  let keys = Object.keys(object);
  for(let key of keys){
    if(object[key] === value){
      return key;
    }

  }
};

module.exports = findKeyByValue;