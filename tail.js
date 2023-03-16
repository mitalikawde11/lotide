// tail function should returns the "tail" of an array: 
// everything except for the first item (head) of the provided array.
// function should not modify the array that is passed in. It should return a new array.


const tail = function(arr) {
  return arr.slice(1);
};



module.exports = tail;
