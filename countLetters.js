const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  const result = {};
  // split the string where ' '(space) occurs
  // join the string without any space
  const newStr = inputString.split(' ').join('');
  if(newStr) {
    for(let letter of newStr) {
      // if letter is already in the result object then increment that letter count by 1
      // else initialize that letter in result obj by 1
      if(result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
}

const result2 = countLetters("Lighthouse in the house");
console.log(result2);
assertEqual(result2["s"], 2);
assertEqual(result2["L"], 1);
assertEqual(result2["h"], 4);
