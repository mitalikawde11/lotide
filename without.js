const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(const num of arr1) {
    if(arr1[num] !== arr2[num]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
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

