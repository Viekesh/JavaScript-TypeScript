"use strict";

// Variables is like a bucket which holds data. These bucket holds all kinds of data type and structures.
// We give the name to each of the variable to maintain its uniqueness and differentiate to one variable on another.
// We use this name to access the contents of the bucket throught the program in JavaScript.

// Variable names cannot contain spaces and special character's except underscore and they cannot begin with the number.

// The equal to sign "=" which is called an assignment operator assigns the value which is on the right hand side
// and assign it to the left which is our variable.

// The 'use strict' directive enables strich mode in JavaScript. This is the mode which fixes the certain issues
// with the language such as preventing certain silent error's and promoting optimizations within JavaScript engines.



let pi = 3.1412;
console.log("The value of pi is: ", pi);



let numOfepi = 22;
let costOfMilkShake = 12.60;
let distanceToTheMoon = 384400;

// In JavaScript we use underscore to sepearate the number's, just like we write long numbers on the paper using comma ",".
let distanceToTheSun = 149_600_000;

// Or
// We can also use this notation also "1.989 * 10 to the power 30" "e" here simple means 10^30.
let massOfSun = 1.989e30;



// Assignment Operator
// The assignment operator (=) assigns the value to a variable.
// Assignment Ope assigns value to JavaScript Variables.

let x = 5;
let y = 2;
let z = x + y;



// There are different types of operators
// Arithmatic Ope
// Assignment Ope
// Comparison Ope
// String Ope
// Logical Ope
// Bitwise Ope
// Ternary Ope
// Type Ope


// Arithmatic operators are:
// + Addition
// * Multiplication
// / Division
// - Subractjion
// ** Exponentiation
// % Modulus (Division Operator)
// ++ Increment Ope
// -- Decrement Ope



// Addition
let a1 = 3;
let a2 = (100 + 50) * a1;
a2 += a1;
console.log("a2: ", a2);

// Multiplication
let a3 = 3;
let a4 = (100 * 50) * a3;
a4 *= a3;
console.log("a4: ", a4);

// Division
let a5 = 3;
let a6 = (100 / 50) * a5;
a6 /= a5;
console.log("a6: ", a6);

// Subraction
let a7 = 3;
let a8 = (100 - 50) * a7;
a8 -= a7;
console.log("a7: ", a8);

// Exponentiation
let a9 = 3;
let a10 = (100 ** 50) * a9;
a10 **= a9;
console.log(a10);

// Increment
let a11 = 3;
let a12 = (100 + 50) * a11;
a12++;
console.log("a12: ", a12);
console.log("a12: ", ++a12);

// Decrement
let a13 = 3;
let a14 = (100 - 50) * a13;
a14--;
console.log("a14: ", a14);
console.log("a14: ", --a14);



// Comparison Ope
// equal to (==);
// equal value and equal type (===)
// not equal (!=)
// not equal value and not equal type (!==)
// greater than (>)
// less than (<)
// greater than or equal to (>=)
// less than or equal to (<=)
// ternary Ope (?, :)



