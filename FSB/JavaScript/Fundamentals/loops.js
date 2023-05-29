"use strict";






// When dealing with data, you often need to implement iterative execution of tasks. For instance, displaying a list of emails, songs, sending a message to multiple people.

// In fact, lists are the most common example of situations where a set of tasks were performed to display data or process data that came in a data structure such as an array.

// And that is where we enter the world of loops. 

// Loops

// Loops are programming constructs that allow us to iteratively execute code based on anything from a fixed number of iterations, to the number of elements in an array or an object to conditional iteration. 

// Loops are as essential as conditionals and functions. They’re core building blocks of an application and that goes for all languages including JavaScript.

// Conceptually speaking, loops can have three core features.

// 1. counter :
// It counts the number of times your code has been executed.

// 2. condition :
// It keeps the check of the counter and terminates the loop when the condition is satisfied.

// 3. iterator :
// It increments the counter, there by making the loop advance forward.



// Example for loops

// A machine that packs chocolates in a factory. It has a counter that keeps a check on the number of chocolates packed, and you might have set a condition to produce 100 batches of 10 chocolates each and the iterator would ensure it produces 10 chocolates per batch before it increments the batch counter by 1.

// JavaScript offers you a number of ways to iteratively execute your code. The most fundamental ones include the for loop which is something you’ll find in most programming languages and we have slight variations of the for loop in the for-of and the for-in loop and we also have the while and do-while loop.

// common types of loop :

// for loop
// while loop
// do...while loop

// So, loops are essential constructs and it is impossible to do anything tangible without bringing them in at some point or the other in your code.






// for loop :

// When it comes to loops and iterative execution of code, the for loop is probably the first one that comes to mind.

// And it’s not just JavaScript, almost every language has some kind of a for loop in its arsenal. It is truly one of the most common control flow statements that allow you to specify and initialize a counter, describe a condition, which decides when to terminate the loop, and the logic to increment the counter at every run or iteration of the for loop.

// Let’s look at the most fundamental implementation of the for loop which goes like this. Notice the three expressions separated by semi-colons.

let sum;

for(let x = 1; x <= 12; x++) {
    console.log(`On the ${x} day of christmas`);
    sum = sum + x;
}

// We can also have a for loop that counts backward. For example, a for loop, that will count from 10 to -1. Notice the use of x -- which is equivalent to x = x - 1. When we execute the loop, it counts from 10 - 0 and then outputs ‘we have lift off’.

const countdown = (count) => {
    count === -1 ? console.log(`we have lift off`) : (console.log(count));

    for (let x = 10; x >= -1; x--) {
        countdown(x);
    }
}

// So for loops can run in either direction and are based purely on how you define the final expression.

// for (initializationStatement; testExpression; updateStatement)
{
    // statements inside the body of loop
}

// The initialization statement is executed only once.
// Then, the test expression is evaluated. If the test expression is evaluated to false, the for loop is terminated.
// However, if the test expression is evaluated to true, statements inside the body of the for loop are executed and the update expression is updated.
// Again the test expression is evaluated.
// This process goes on until the test expression is false. When the test expression is false, the loop terminates.

// ex : print numbers from 1 to 10.

let i;

for(i = 1; i < 11; i++) {
    {
        console.log(i);
    }
}



// ex : program to display text 5 times.
const n = 5;

// looping from i = 1 to 5.
for(let i = 1; i <= n; i++) {
    console.log("practice javascript loops");
}

let user = {
    id: 101,
    name: "Michael Dormick",
    isAdmin: "false",
};

let result =  typeof user.isAdmin === "boolean";

console.log(result);


// if(true) {
//     let day = "sunday";
// }

// console.log(day);


const fun = (aaa, bbb) => {
    aaa + bbb;
}

console.log(fun(2, 3));




let recursion = function (counter = 0) {
    if (counter < 10) {
        console.log(`the value of coutner is ${counter}`);
        return recursion(counter + 1);
    }
};

recursion(5);


for (let x = 20; x < 21; x++) {
    console.log(x);
}


for (let x1 = 0; x1 > 0; x1++) {
    console.log("output of x", x1);
}


console.log(sum11(2, 3));

const sum11 = function (a, b) {
    return a + b;
}