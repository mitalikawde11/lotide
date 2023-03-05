const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

