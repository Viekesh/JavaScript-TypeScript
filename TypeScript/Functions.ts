


const myNum = (num : number) : number => {
    return num + 2;
};
console.log(myNum(3));


const getUpper = (name : string) : string => {
    return name.toUpperCase();
};
console.log(getUpper("vikesh"));


const signUpAdmin = (name : string, email : string, isPaid : boolean = false, password : number) => {
    if(isPaid === void 0) {
        isPaid === false;
    }
    return {name, email, isPaid, password};
};
console.log(signUpAdmin("Vikesh", "techVikesh@dev", true, 123));

// If you don't want to give "isPaid" parameter value, simply type default value "false"


export{};


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


