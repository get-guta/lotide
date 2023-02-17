

const flatten = function (array) {
  let flat = [];
  for (let arr of array) {
    if (!Array.isArray(arr)) {
      flat.push(arr);
    } else {
      for (let a of arr) {
        flat.push(a);
      }
    }
  }
  return flat;

};

module.exports = flatten;