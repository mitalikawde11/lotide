// require(import) asserEqual and tail file
const assertEqual = require('../assertEqual');
const tail = require('../tail');



const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const names = ["Sam", "2"];
tail(names);
assertEqual(names.length, 2);

const abc = [];
tail(abc);
assertEqual(abc.length, 0);