"use strict";

// Flattening the array refers to the process of concatenating together contents from all sub-arrays at one common level. This can be achieved using the Array.flat() method. There is also the Array.flatMap() method which runs a filter function before flattening the resultant array.

// notice an array of nested arrays containing x and y coordinates. We need to compute the distance between the pairs of x and y coordinates and we also need to display coordinates which are even numbers.

const coords = [
    [
        [2, 5],
        [6, 4],
    ],
    [
        [3, 2],
        [5, 2],
    ],
    [
        [5, 12],
        [15, 3],
    ],
    [
        [4, 12],
        [13, 5],
    ],
];

const calcDistance = ([x1, y1], [x2, y2]) => Number(Math.hypot(x2 - x1, y2 - y1).toPrecision(5));

// First up, let’s find the even numbers.

const findEven = coords.flat(2).filter((elem) => elem % 2 === 0);

// First up, let’s find the even numbers.

// Next up, let’s compute the distance between the pairs of Arrays and produce a single array of resulting values. This calls for using the Array.flatMap() method as shown below. Modify the contents of the computeDistance constant as shown.

const computeDistance = coords.flatMap(([p1, p2]) => calcDistance(p1, p2));

console.log(`Even Coordinates : ${findEven}`);

console.log(`Distance Between Points : ${computeDistance}`);

// That’s it. You’ve just used Array.flat() and Array.flatMap().



// What is the array.flat method?

// Array.flat() is used to flatten the nested arrays.


// What will be the output of following?
const numbers = [1,[2,3],[4,[5,6]]]
const flattenedArray = numbers.flat()
console.log(flattenedArray)

// Array.flat() flattens the array and by default the depth is 1. Hence it returns the flattened array till depth 1



// .