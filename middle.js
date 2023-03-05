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

const middle = function(array) {
  let midArr = [];
  if(array.length > 2) {
    const mid = Math.floor(array.length / 2);
    if((array.length % 2) === 0) {
      midArr.push(array[mid - 1]);
      midArr.push(array[mid]);
  } else {
      midArr.push(array[mid]);
    }
  }
  return midArr;
}
const num1 = [1, 2, 3, 4, 5];
const num2 = [1];
const num3 = [1, 2, 3, 4];
const num4 = [1, 3];
assertArraysEqual(middle(num1), [3]);
assertArraysEqual(middle(num2), []);
assertArraysEqual(middle(num3), [2, 3]);
assertArraysEqual(middle(num4), []);