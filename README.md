# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mitalik/lotide`

**Require it:**

`const _ = require('@mitalik/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the head of an array.
* `tail(array)`: returns the tail of an array.
* `middle(array)`: returns the middle element(s) of an array.
* `assertArraysEqual(actual array, expected array)`: test for array equality between actual and expected parameters. 
* `assertEqual(actual, expected)`: test for equality between actual and expected parameters (for primitive value).
* `assertObjectsEqual(actual, expected)`: test for object equality between actual and expected parameters.
* `countLetters(inputString)`: count number of occurances for each letter in a given inputString.
* `countOnly(stringArray, ObjectSpecifyingWhatToCount)`: return counts object for a specific subset of those items.
* `eqArrays(array1, array2)`: returns true or false based on the equality between two arrays. 
* `eqObjects(object1, object2)`:  returns true or false based on the equality between two objects.
* `findKey(object, callbackFunction)`: returns the first key in object for which the callback returns a truthy value, if not then return undefined.
* `findKeyByValue(object, value)`: return the first key in object which contains the given value.
* `flatten(array)`: returns a flattened version of the given nested array (only handle one level of nesting).
* `letterPositions(string)`: returns an object of all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: returns a new array based on the results of the callback function.
* `takeUntil(array, callback)`: returns a slice of the array with elements taken from the beginning until the callbacks returns a truthy value.
* `without(sourceArray, itemsToRemove)`: returns a subset of a given array, removing unwanted elements.