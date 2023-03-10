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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(array) {
  let flattened = [];
  for(let i = 0; i < array.length; i++) {
    const current = array[i];
    if(!Array.isArray(current)) {
      flattened.push(current);
    } else {
      for(let j = 0; j < current.length; j++) {
        flattened.push(current[j]);
      }
    }
  }
  return flattened;
}

const x = [1, 2, [3, 4], 5, [6]];
const words = ["banana", ["orange", "kiwi"], ["mango"], "apple"];
assertArraysEqual(flatten(x), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(words), ["banana", "orange", "kiwi", "mango", "apple"]);


