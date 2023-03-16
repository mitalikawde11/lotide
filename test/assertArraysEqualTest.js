const assertArraysEqual = require('../assertArraysEqual')


assertArraysEqual([1, 2, 3],[1, 2, 3]);
assertArraysEqual([1, 2, 3],[1, 2, "3"]);
assertArraysEqual([4, null, 5],[4, null, 5]);
assertArraysEqual([5, 6, 7],[7, 6, 5]);
