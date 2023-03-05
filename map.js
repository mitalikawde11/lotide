// Implement map function

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

//------ map function --------
// map function takes two arguments: 1) An array to map  2) A callback function

const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item)); // pushing the result of callbacks into results array
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); // callback fun. as 2nd argument
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // Passed

const words2 = ["apple", " ", "banana", "mango", "null"];
const results2 = map(words2, word => word[0]);
assertArraysEqual(results2, ["a", " ", "b", "m", "n"]); // Passed

const words3 = ["dog", "", "123 ", true, "cat"];
const results3 = map(words3, word => word[0]);
assertArraysEqual(results3, ["d", undefined, "1", undefined,  "c"]); //Passed