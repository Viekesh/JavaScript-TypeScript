// A for loop in JavaScript is a programming construct that allows you to execute a block of code repeatedly until a specified condition is met. The syntax for a for loop is as follows.



// Syntax :

// for (initialization; condition; increment) {
    // block of code to be executed repeatedly
// }

// The initialization expression is executed once, before the first iteration of the loop. The condition expression is evaluated before each iteration of the loop. If the condition expression evaluates to true, the block of code is executed. If the condition expression evaluates to false, the loop terminates. The increment expression is executed after each iteration of the loop. It is typically used to update a counter variable.

// Here is an example of a for loop that prints the numbers from 1 to 10:

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// This loop will print the following output:

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// For loops are a powerful tool that can be used to execute code repeatedly. They are often used to iterate over arrays, objects, and other iterable objects.

// Here are some additional examples of for loops:

// To print the numbers from 1 to 100, you could use the following code:

for (var i = 1; i <= 100; i++) {
    console.log(i);
}

// To iterate over an array, you could use the following code:

var myArray = [1, 2, 3, 4, 5];

for (var i = 0; i < myArray.length; i++) {
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


