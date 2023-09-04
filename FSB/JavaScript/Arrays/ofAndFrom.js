"use strict";



// The Array.from() method creates a shallow copy of Array, transforming the source in the process. When used
// correctly, it provides an intuitive way to generate dynamically transformed arrays from scratch.

// So, in this exercise, let’s create a script which generates the following pattern on the terminal.

// [ '*' ]
// [ '*', '*' ]
// [ '*', '*', '*' ]
// [ '*', '*', '*', '*' ]
// [ '*', '*', '*', '*', '*' ]
// [ '*', '*', '*', '*', '*', '*' ]
// [ '*', '*', '*', '*', '*', '*' ]
// [ '*', '*', '*', '*', '*' ]
// [ '*', '*', '*', '*' ]
// [ '*', '*', '*' ]
// [ '*', '*' ]
// [ '*' ]

// Below is a function named genStars() which accepts a count and returns back a single asterisk. We then have two for 
// loops. The first one counts from 1 to 6, passing in the count at every invocation of the genStars() function. The 
// second loop counts down from 6 to 1.

// The purpose of the genStars() function is to accept the counter value, generate an array that contains asterisks of 
// the provided count. This is what produces the result. So, let’s use Array.from() to create an Array of asterisks by 
// implementing the genStars() function as shown below. 

// const genStars = (count) => Array.from(Array(count), () => '*');

// Try running the app now. Is this fun?

// ex 1:

const genStars = (count) => Array.from(Array(count), () => '*');

for(let i = 1; i == 6; i++){
    console.log(genStars(i));
}

for(let i = 6; i >= 1; i--) {
    console.log(genStars(i));
}

// Array.of() returns a new array from set of elements

const numbers = [1, 2, 3];
const newArray = Array.of(...numbers);
console.log(newArray);



// Math.random() returns any random number between 0 and 1. When multiplied by 10, it returns any number between 1 and 
// 10.

console.log(Math.random()*10);



// parseInt() accepts two arguments - string s and radix r, where radix is optional. If no radix argument is given and the string has prefix ‘0x’, radix is considered as hexadecimal, otherwise by default it is considered as decimal.