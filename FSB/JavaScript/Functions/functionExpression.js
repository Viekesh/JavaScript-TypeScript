"use strict";



// The "function" keyword can be used to define a function inside an expression.

// You can also define functions using the function declaration or the arrow syntax.

// ex 1:

const getArea = function (width, height) {
    return width * height;
}

console.warn(getArea(12, 15));



// Syntax :

// function (param0) {
//     statements
// }
// function (param0, param1) {
//     statements
// }
// function (param0, param1, /* … ,*/ paramN) {
//     statements
// }

// function name(param0) {
//     statements
// }
// function name(param0, param1) {
//     statements
// }
// function name(param0, param1, /* … ,*/ paramN) {
//     statements
// }

// "param" means parameters



// ex 2:

const foo = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
};

let str = '';
for (const val of foo()) {
    str = str + val;
}

console.log(str);



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


