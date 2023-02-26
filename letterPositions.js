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

const letterPositions = function(sentence) {
  // empty object
  const results = {};
  for(let i = 0; i <sentence.length; i++) {
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