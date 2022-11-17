"use strict";
exports.__esModule = true;
var myNum = function (num) {
    return num + 2;
};
console.log(myNum(3));
var getUpper = function (name) {
    return name.toUpperCase();
};
console.log(getUpper("vikesh"));
var signUpAdmin = function (name, email, isPaid, password) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid === void 0) {
        isPaid === false;
    }
    return { name: name, email: email, isPaid: isPaid, password: password };
};
console.log(signUpAdmin("Vikesh", "techVikesh@dev", true, 123));
// If you don't use "export{}" :
// The error "Cannot redeclare block-scoped variable" occurs, when we redeclare a variable
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
