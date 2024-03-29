const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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


// test code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); 

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); 

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);



module.exports = eqObjects;