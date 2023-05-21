"use strict";

// Loops can execute a block of code as long as a specified condition is true.

// while (condition) {
  // code block to be executed
// }

// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

// ex 1: In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

let text = "";
let i = 0;
while (i < 10) {
  text += "The number is " + i;
  i++;
}
console.log(text);


// ex 2:

let n = 0;

while (n < 3) {
  n++;
  console.log(n);
}


// ex 3: The following while loop iterates as long as n is less than three.

let a = 0;
let x = 0;

while (a < 3) {
  a++;
  x += a;

  console.log("a is :", a);
  console.log("x is :", x);
}

// Each iteration, the loop increments n and adds it to x. Therefore, x and n take on the following values:

// After the first pass: n = 1 and x = 1
// After the second pass: n = 2 and x = 3
// After the third pass: n = 3 and x = 6
// After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.



// ex 4: Using an assignment as a condition
// In some cases, it can make sense to use an assignment as a condition — but when you do, there's a best-practice syntax you should know about and follow.

// Consider the following example, which iterates over a document's comments, logging them to the console.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// check above link for ex 4.