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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // creating an object1Key as an array of all the keys of the object1 
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  // can't use the length property over object
  // so comparing it by object keys array  
  if(object1Keys.length !== object2Keys.length) {
    return false;
  }
  // iterate over object values
  for(let key of object1Keys) {
    // check if the key value of both object is an array or not 
    if((Array.isArray(object1[key]) === true) && (Array.isArray(object2[key]) === true)) {
      // call the eqArrays function to compare both objects key arrays are equal or not
      const eqArraysResult = eqArrays(object1[key], object2[key]);
      if(eqArraysResult !== true) {
        return false;
      }
    } else {
      // if not array then check the primitive values
      if(object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); 

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });