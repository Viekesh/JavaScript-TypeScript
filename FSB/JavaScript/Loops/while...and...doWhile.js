"use strict";

// Loops can execute a block of code as long as a specified condition is true.

// while (condition) {
  // code block to be executed
// }

// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

// ex 1: In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }
// console.log(text);


// ex 2:

// let n = 0;

// while (n < 3) {
//   n++;
//   console.log(n);
// }


// ex 3: The following while loop iterates as long as n is less than three.

// let a = 0;
// let x = 0;

// while (a < 3) {
//   a++;
//   x += a;

//   console.log("a is :", a);
//   console.log("x is :", x);
// }

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






// do...while loop

// The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.

// The do...while is used when you want to run a code block at least one time.


let numb = "";
let c = 0;

do {
  numb += c;
  c++;
} while (c < 5);

console.log(numb);

// The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.

// The do...while is used when you want to run a code block at least one time.

// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.


let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);


// Syntax :


// do
  // statement
// while (condition);


// Statement :
// A statement that is executed at least once and is re-executed each time the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ /* ... */ }) to group those statements.


// condition :
// An expression evaluated after each pass through the loop. If condition evaluates to true, the statement is re-executed. When condition evaluates to false, control passes to the statement following the do...while.

// Note: Use the break statement to stop a loop before condition evaluates to false.

// ex : In the following example, the do...while loop iterates at least once and reiterates until i is no longer less than 5.

let output = "";
let d = 0;
do {
  d += 1;
  output += `${d} `;
} while (d > 0 && d < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(output);