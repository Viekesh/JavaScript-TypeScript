

// Functions :

// JavaScript function is a block of code which is used to perform a particular task.
// TypeScript also adds new capabilities to the JavaScript functions to make them easier to work with.

// To begin, just as in JavaScript, TypeScript functions can be created both as a named function or
// as an anonymous function. This allows you to choose the most appropriate approach for your application,
// whether you’re building a list of functions in an API or a one-off function to hand off to another function.

// To quickly recap what these two approaches look like in JavaScript:

// Named function
// function add(x, y) {
//   return x + y;
// }
 
// Anonymous function
// let myAdd = function (x, y) {
//   return x + y;
// };


// Typing the funtion

const add = (x : number, y : number) : number => {
    return x + y;
};

console.log(add(2, 3));


// We can add types to each of the parameters and then to the function itself to add a return type.
// TypeScript can figure the return type out by looking at the return statements, so we can also optionally
// leave this off in many cases.

const myAdd = (x : number, y : number) : number => {
    return x + y;
}

console.log(myAdd(5, 7));


// The code inside the function will execute when "something" invokes (calls) the function:
    // When an event occurs (when a user clicks a button)
    // When it is invoked (called) from JavaScript code
    // Automatically (self invoked)


// When JavaScript reaches a "return" statement, the function will stop executing.

// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":

// Calculate the product of two numbers, and return the result:

const myfun = (a : number, b : number) : number => {
    return a * b;
}

let x = myfun(3, 3);

console.log(x);

// Output
// 9

// Why Functions?
// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, to produce different results.

const toCelcius = (fahrenheit : number) : number => {
    return (5/9) * (fahrenheit - 32);
}

console.log(toCelcius(3));

// Accessing a function without "()" will return the function definition instead of the function result:
// Or in TypeScript without "()" will return function name instead of the function result



// const getUpper = (name : string) : string => {
//     return name.toUpperCase();
// };
// console.log(getUpper("vikesh"));


// const signUpAdmin = (name : string, email : string, isPaid : boolean, password : number) => {
//     if(isPaid === void 0) {
//         isPaid === false;
//     }
//     return {name, email, isPaid, password};
// };
// console.log(signUpAdmin("Vikesh", "techVikesh@dev", true, 123));

export{};


// If you don't use "export{}" :
// The error occurs ("Cannot redeclare block-scoped variable"), when we redeclare a variable
// in the same block or when TypeScript uses global typings, which interfere with local variable
// names. To solve the error, only declare a variable once in a block and use ES modules.
// The error "Cannot redeclare block-scoped variable" occurs when we redeclare a variable in the
// same block or when TypeScript uses global typings, which interfere with local variable names. 
// To solve the error, only declare a variable once in a block and use ES modules.

// In this file the "mynum" variable is declared somewhere in the typing for the DOM library,
// So the global type declaration clashes with the local variable declaration

// You can solve the error by converting your file to the ES module, try to use "export{}"

// The export {} line marks the file as an external module. A module is a file that
// contains at least 1 "import" or "export" statement.

// You can also solve the error by renaming the variable.


