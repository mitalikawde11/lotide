// Implement without which will return a subset of a given array, removing unwanted elements.

const assertArraysEqual = require('./assertArraysEqual');


const without = function(sourceArr, itemsToRemoveArr) {
  const filteredArr = sourceArr.filter((elm) => { return !itemsToRemoveArr.includes(elm) });
  return filteredArr;
};

const num = [1, 3, 2, 1, 5];
const words = ["hello", "world", "lighthouse"];
const mix = [1, "abc", 8, "xyz"];
without(num, [1,2]);
assertArraysEqual(num, [1, 3, 2, 1, 5]);
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
without(mix, ["abc", 1]);
assertArraysEqual(mix, [1, "abc", 8, "xyz"])


module.exports = without;

