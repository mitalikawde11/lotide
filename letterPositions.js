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

const letterPositions = function(sentence) {
  // empty object
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    // skip the spaces
    if(sentence[i] === " ") { 
      continue;
    }
    // checking if the array for letter is already there
    if(results[sentence[i]]) {
      // pushing the index of letter
      results[sentence[i]].push(i);
    } else {
      // creating an array for letter if not already
      results[sentence[i]] = [i];
    }
     
  }
  return results;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);