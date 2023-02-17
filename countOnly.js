

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let countNames = {};
  for( let item of allItems){ 
    if(itemsToCount[item] === true){
      if(countNames[item]){
        countNames[item] += 1;
      }else{
        countNames[item] = 1;
      }
      
    }
    
  }
  return countNames;
};


module.exports = countOnly;

