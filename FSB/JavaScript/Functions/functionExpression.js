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



