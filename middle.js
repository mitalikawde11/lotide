// Implement middle which will take in an array and return the middle-most element(s) of the given array.
// The middle function should return an array with only the middle element(s) of the provided array. 
// For arrays with one or two elements, there is no middle. Return an empty array.

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



module.exports = middle;