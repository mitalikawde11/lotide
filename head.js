// head function should return the first item in the array.
// this should not return the first element as an array, simply return the element itself.

const assertEqual = require('./assertEqual');

const head = function(arr) {
  return arr[0];
};


module.exports = head;