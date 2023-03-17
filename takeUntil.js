// Implement takeUntil

const assertArraysEqual = require('./assertArraysEqual');


/* ---------- takeUntil function ------------
  this function takes two parameters: 1) An array to work with
  2) the callback
  the function returns a slice of the array with elements taken from the
  beginning until the callbacks returns a truthy value.
*/

const takeUntil = function(array, callback) {
  let results = [];
  for(let ele of array) {
    if(callback(ele)) {
      return results;
    } else {
      results.push(ele);
    }
  }

  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

console.log('---');

const data3 = ["s", "b", "23", "", "t", "k", "t"];
const results3 = takeUntil(data3, x => x === "t");
assertArraysEqual(results3, ["s", "b", '23',""]);



module.exports = takeUntil;
