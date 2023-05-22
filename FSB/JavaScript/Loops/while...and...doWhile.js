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

// important difference in do...while loop is that the do...while loop execute your code in block atleast one times because here the condition is validated after the code has been executed atleast once. Whereas in the case of the regular while loop the condition is validated first before the code block can be executed.

// lets look at the while loop, here we'll use an array of odd numbers.

// we created counter variable m and an array oddNums.

// let m = 1;
// const oddNums = [];

// Now we can express the while loop where we'll set our counter to be less than 40 because we want odd number from 1 to 40 and inside we use "push" to insert the current value of our counter variable "m" into the array before incrementing the counter by two.

// while (m < 40) {
//   oddNums.push(m);
//   m += 2;
// }

// console.log(oddNums.toString(), ": while");

// So, the first time this runs "m" will be one. It will be inserted into the array then the addition assignment operator will set "m" to 3 and the loop runs again. The condition is again satisfied and it keeps running like that. When the condition turns falsy, the loop ceases to run and terminates.

// Also notice the using of "toString()" method to output the contents of the array as a comma separated string.

while (m < 1) {
  oddNums.push(m);
  m += 2;
}

console.log(oddNums.toString(), ": (m < 1), while...loop");

// If we set "m" to less than 1, in which case the condition is never truthy, you'll notice our code block never run at all and our array stays empty.


// Now for the do...while loop we replicate the exact same setup. Notice how the code block appear after the "do" keyword followed by the condition. The overall outcome the while and do...while appears to be the same in this example

// let n = 1;
// const oddNumsAgain = [];

// do{
//   oddNumsAgain.push(n);
//   n += 2;
// } while (n < 40);

// console.log(oddNumsAgain.toString(), ": do...while");

// But notice what happens if we set the condition is "m" less than one, which will never evaluate as truthy. In the case of our "while" loop, the code block never runs, but in the case of do...while the code block was executed once before the codition check, which failed, hence the loop never iterated. This is why you do get 1.

// let n = 1;
// const oddNumsAgain = [];

// do{
//   oddNumsAgain.push(n);
//   n += 2;
// } while (n < 1);

// console.log(oddNumsAgain.toString(), ": (n < 1) do...while");

// The initial value of counter variable "n".

// And just like all the loop we can use "break" keyword to focibly exit the loop.

let n = 1;
const oddNumsAgain = [];

do{
  oddNumsAgain.push(n);
  if(n === 15) {
    break;
  }
  n += 2;
} while (n < 40);

console.log(oddNumsAgain.toString(), ": (n < 40) do...while");

// So, for instance if we want to stop when n hits 15, we use "if" block and breaks the loop once it hits 15.

// ex : print even numbers using "while" loop and odd numbers using "do...while" loop

let a = 0, b = 1;

const evenNumbers = [], oddNumbers = [];

while(a <= 100) {
  evenNumbers.push(a);
  a += 2;
}

console.warn(`Even Numbers from 0 to 100 : ${evenNumbers.toString()}`);

do {
  oddNumbers.push(b);
  b += 2;
} while( b <= 100);

console.warn(`Odd Numbers from 0 to 100 : ${oddNumbers.toString()}`);



// "while" loop :

// The syntax of while loop looks as follows:
// let n = 0
// while(condition){
// statement
// }

// As demonstrated, condition is Evaluated before executing the statement


// "do...while" loop :
// The syntax of do..while loop looks as follows:
// let n = 0
// do{
// statement
// } while(condition)
// As demonstrated, condition is Evaluated after executing the statement.


