const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  return arr.slice(1);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const names = ["Sam"];
console.log(tail(names));
assertEqual(names.length, 1);
const abc = [];
console.log(tail(abc));
assertEqual(abc.length, null);


