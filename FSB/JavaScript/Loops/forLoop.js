"use strict";






// A for loop in JavaScript is a programming construct that allows you to execute a block of code repeatedly until a specified condition is met. The syntax for a for loop is as follows.



// Syntax :

// for (initialization; condition; increment) {
    // block of code to be executed repeatedly
// }

// The initialization expression is executed once, before the first iteration of the loop. The condition expression is evaluated before each iteration of the loop. If the condition expression evaluates to true, the block of code is executed. If the condition expression evaluates to false, the loop terminates. The increment expression is executed after each iteration of the loop. It is typically used to update a counter variable.

// Here is an example of a for loop that prints the numbers from 1 to 10:

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// This loop will print the following output:

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// For loops are a powerful tool that can be used to execute code repeatedly. They are often used to iterate over arrays, objects, and other iterable objects.

// Here are some additional examples of for loops:

// To print the numbers from 1 to 100, you could use the following code:

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// To iterate over an array, you could use the following code:

let myArray = [1, 2, 3, 4, 5];

console.log('myArray :', myArray[3]);
console.log('the length of my array :', myArray.length);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// To iterate over an object, you could use the following code:



let myObject = {
    name: "John Doe",
    age: 30
};

for (let key in myObject) {
    console.log(key + ": " + myObject[key]);
}

// For loops are a versatile tool that can be used to execute code repeatedly in a variety of situations.


// What is the purpose of "continue" keyword?
// "continue" keyword is used to terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration. (it is used to restart the loop)



// ex. 1 : programme to display text 5 times

const n = 5;

// looping from i = 1 to 5;

for(let i = 1; i<=n; i++){
    console.log("javascript 'for loop'")
}

// 1st	i = 1      n = 5      true      javascript 'for loop' is printed. i is increased to 2.
// 1st	i = 2      n = 5      true      javascript 'for loop' is printed. i is increased to 3.
// 1st	i = 3      n = 5      true      javascript 'for loop' is printed. i is increased to 4.
// 1st	i = 4      n = 5      true      javascript 'for loop' is printed. i is increased to 5.
// 1st	i = 5      n = 5      true      javascript 'for loop' is printed. i is increased to 6.
// 1st	i = 6      n = 5      true      javascript 'for loop' is printed. i the loop is terminated.






// ex 2: program to display sum of natural number

let sum = 0;
const a = 100;

// looping from i = 1 to a
// in each iteration i is increased by 1

for(i = 0; i<=a; i++) {
    sum+=i; // sum = sum + i
}

console.log("sum :", sum);


// Initially the value of sum is 0.
// Then, a for loop is iterated from i = 1 to 100.
// In each iteration, i is added to sum and its value is increased by 1.
// When i becomes 101, the test condition is false and sum will be equal to 0 + 1 + 2 + ... + 100.


// The above program to add sum of natural numbers can also be written as

let sum1 = 0;
const b = 100;

// looping from i = b to 1
// in each iteration, i is decreased by 1
for(let i = b; i >= 1; i-- ) {
    // adding i to sum in each iteration
    sum += i; // sum = sum + i
}

console.log('sum:',sum);



// This program also gives the same output as the Example 3.
// You can accomplish the same task in many different ways in programming;
// programming is all about logic.
// Although both ways are correct, you should try to make your code more readable.


