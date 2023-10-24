"use strict"



// source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Arrow functions are more concise. Arrow functions have a shorter syntax than regular functions, which
// can make your code more readable and easier to maintain.For example, the following regular function can
// be rewritten as a more concise arrow function:

// Ex. 1:

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const addResult = (a, b) => a + b;

console.log("Ex. 1:", addResult(1, 2));

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as
// methods.

// Arrow functions cannot be used as constructors. Calling them with new throws a "TypeError". They also
// don't have access to the new.target keyword.

// Arrow functions cannot use yield within their body and cannot be created as generator functions.

// Ex. 2:
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log("Ex. 2:", materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]



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



// Rest parameters, default parameters, and destructuring within params are supported, and always require
// parentheses:

// (a, b, ...r) => expression
// (a = 400, b = 20, c) => expression
// ([a, b] = [10, 20]) => expression
// ({ a, b } = { a: 10, b: 20 }) => expression



// Arrow functions can be async by prefixing the expression with the async keyword.

// async param => expression
// async (param1, param2, ...paramN) => {
//     statements
// }



// In an expression body, only a single expression is specified, which becomes the implicit return value.
// In a block body, you must use an explicit return statement.

const func = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
    return x + y;
};
// with block body, explicit "return" needed






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

let result1 = sum(5, 7);
console.log(result1); // 12



// "this" with arrow function

// Inside a regular function, this keyword refers to the function where it is called.

// However, "this" is not associated with arrow functions. Arrow function does not have its own "this". So
// whenever you call "this", it refers to its parent scope. For example,



// Arrow Function with Promises and Callbacks :
// Arrow functions provide better syntax to write promises and callbacks. For example,

