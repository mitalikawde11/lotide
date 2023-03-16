const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


const num1 = [1, 2, 3, 4, 5];
const num2 = [1];
const num3 = [6, 5, 8, 2];
const num4 = [1, 3, , 4];
const num5 = [1, 2];
assertArraysEqual(middle(num1), [3]);
assertArraysEqual(middle(num2), []);
assertArraysEqual(middle(num3), [5, 8]);
assertArraysEqual(middle(num4), [3, undefined]);
assertArraysEqual(middle(num5), []);