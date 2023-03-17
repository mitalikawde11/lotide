/* Implement the function findKeyByValue which takes in an object and a value.
   It should scan the object and return the first key which contains the given value. 
   If no key with that given value is found, then it should return undefined.
*/

const assertEqual = require('./assertEqual');


const findKeyByValue = function(obj, value) {
  // loop over the keys return by Object.keys(obj) 
  for(let key of Object.keys(obj)) {
    // check if the value of obj[key] === value
    if(obj[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");


module.exports = findKeyByValue;