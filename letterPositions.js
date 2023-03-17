const assertArraysEqual = require('./assertArraysEqual');

/*  implement a function letterPositions which will return all the indices (zero-based positions) 
    in the string where each character is found.
    For each letter, instead of returning just one number to represent its number of occurrences, 
    multiple numbers may be needed to represent all the places in the string that it shows up. */

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

// test cases
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);


module.exports = letterPositions;