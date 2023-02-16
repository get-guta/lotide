
const middle = function (arr) {
  let mid;
  let res = [];
  mid = arr.length / 2;
  if (Number.isInteger(mid)) {
    res.push(arr[mid - 1]);
    res.push(arr[mid]);
  } else {
    mid = Math.floor(mid);
    res = [arr[mid]];
  }
  return res;
};

module.exports = middle;


