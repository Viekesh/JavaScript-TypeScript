


// "let" and "const" keyword :
// The "let" and "const" keywords, it allows you to declare a variable with block scope.
// A variable is a named space in the memory, which stores the values.
// Block scope is nothing but a section where the variables get declared by using
// "let" and "const" keywords. Whether it is a "function()", a block "{}" or a global (script).

// The names of the variable are known as identifiers.
// There are some rules that you should keep in mind while naming an identifier. These rules are as follows:
    // It can contain numbers and alphabets.
    // You cannot start the name of the variable with a number.
    // Keywords cannot be used as the name of the variable.
    // Identifiers do not contain spaces and special characters except the dollar ($) symbol and underscore (_).

// In typescript it declared with its type, means if you declare any variable by using 
// "let" and "const" keyword so you have to give its type along with it.

// String :

let greetings : string = "Hello, Vikesh";
console.log(greetings);

// Output :
// Hello, Vikesh



// Numbers :

let num : number = 1.3;
console.log(num);

// Output :
// 1.3


// Boolean :

let blnvalue : boolean = true;
console.log(blnvalue);

// Output :
// true

// In some cases where we dont use "typescript" syntax, word of types or when typescript
// doesn't know what value is come up later after executing this function or anything else in
// the future it puts there "any" word, that is something called get out of like typescript syntax

// This "export{}" is temporarity used to remove red line (error) on greetings (variables).
export{};