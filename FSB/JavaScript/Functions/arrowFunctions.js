"use strict"



// source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// let's see different types of functions

// Arrow Functions

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods. Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword. Arrow functions cannot use yield within their body and cannot be created as generator functions.


// ex 3:

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));



// Arrow Function Syntax :

// () => expression

// param => expression

//     (param) => expression

//         (param1, paramN) => expression

//             () => {
//     statements
// }

// param => {
//     statements
// }

// (param1, paramN) => {
//     statements
// }

// let myFunction = (arg1, arg2, ...argN) => {
    // statement(s)
// }



// Arrow functions can be async by prefixing the expression with the async keyword.

async param => expression
async (param1, param2, ...paramN) => {
    statements
}



// source : https://www.programiz.com/javascript/arrow-function
// function expression
let x = function (x, y) {
    return x * y;
}

// using arrow functions
let c = (a, b) => a * b;



// ex :  Arrow Function with No Argument
let greet = () => console.log('Hello');
greet(); // Hello



// ex : Arrow Function with One Argument
let greet1 = x => console.log(x);
greet1('Hello'); // Hello 



// ex : Arrow Function as an Expression
let age = 5;

let welcome = (age < 18) ?
  () => console.log('individual is an less than 18 years old') :
  () => console.log('indivudyak is an more than 18 years old');

welcome(); // Baby



// ex :  Multiline Arrow Functions
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); // 12



// "this" with arrow function

// Inside a regular function, this keyword refers to the function where it is called.

// However, "this" is not associated with arrow functions. Arrow function does not have its own "this". So whenever you call "this", it refers to its parent scope. For example,



// Arrow Function with Promises and Callbacks :
// Arrow functions provide better syntax to write promises and callbacks. For example,

