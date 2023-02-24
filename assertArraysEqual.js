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

assertArraysEqual([1, 2, 3],[1, 2, 3]);
assertArraysEqual([1, 2, 3],[1, 2, "3"]);
assertArraysEqual([4, 5],[4, 5, null]);
assertArraysEqual([1, 2, 3],[1, 2]);