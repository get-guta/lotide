const assertEqual = require('./assertEqual');
const findKey = function(object, callback){
  let keys = Object.keys(object);
  for (const item of keys) {
    if(callback(object[item])){
      return item;      
    }    
  }
};
module.exports = findKey;

