/*
  Implement afunction flatten which will take in an array containing elements including nested arrays of elements, 
  and return a "flattened" version of the array. (only handle one level of nesting.)
*/

const assertArraysEqual = require('./assertArraysEqual');


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


module.exports = flatten;


