
const without = function (array, excludeNums) {
  let selected = [];
  for (const arr of array) {
    if (!excludeNums.includes(arr)){
      selected.push(arr);
    }
  }
  return selected;
}

module.exports = without;


