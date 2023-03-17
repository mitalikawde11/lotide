const assertEqual = require('./assertEqual');

/* Implement the countLetters function which takes in a sentence (as a string) 
   and then return a count of each of the letters in that sentence. */

const countLetters = function(inputString) {
  const result = {};
  if(inputString) {
    
    for(let letter of inputString) {
      // if letter is already in the result object then increment that letter count by 1
      // else initialize that letter in result obj by 1
      if(letter === " ") {
        continue;
      }

      if(result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
      
    }
  }

  return result;
}

// test code
const result2 = countLetters("Lighthouse in the house");
console.log(result2);
assertEqual(result2["s"], 2);
assertEqual(result2["L"], 1);
assertEqual(result2["h"], 4);


module.exports = countLetters;