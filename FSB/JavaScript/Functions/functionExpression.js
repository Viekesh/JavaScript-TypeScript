"use strict";



// The "function" keyword can be used to define a function inside an expression. You can also define
// functions using the function declaration or the arrow syntax.



// Syntax:

// const functionName = function (parameters) {
//   // function body
// };

// The functionName is optional, and if it is omitted, the function will be anonymous. Anonymous
// functions are often used as callback functions.

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



// Ex. 1:

const add = function (a, b) {
    return a + b;
};

const sum = add(1, 2);

console.log(`Ex. 1:, ${sum}`);



// Ex. 2:

const getArea = function (width, height) {
    return width * height;
}

console.warn(getArea(12, 15));



// Ex. 3:

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



// Ex. 4:

// Function expressions can be used to create more complex functions, such as functions that take other
// functions as arguments or that return functions as values.

const execute = function (fn) {
    fn();
};

execute(() => {
    console.log("Ex. 4:, ", 'Hello!');
});



const square = function () {
    return function (x) {
        return x * x;
    };
};

const squareFunction = square();
const squaredValue = squareFunction(5);

console.log("Ex. 4:", squaredValue);



// Function expressions can also be used to create higher-order functions. Higher-order functions are
// functions that take other functions as arguments or that return functions as values.

// For example, the following function expression is a higher-order function that takes a function as an
// argument and returns a new function that is a composition of the two functions:

// Ex. 6:

const compose = function (fn1, fn2) {
    return function (...args) {
        return fn2(fn1(...args));
    };
};


const addOne = function (x) {
    return x + 1;
};


const multiplyByTwo = function (x) {
    return x * 2;
};

const addOneThenMultiplyByTwo = compose(multiplyByTwo, addOne);

const result = addOneThenMultiplyByTwo(5);

console.log(`Ex 6: ${result}`);



//.