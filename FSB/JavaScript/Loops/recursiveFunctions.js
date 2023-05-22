"use strict";


// Here we build our own loop by way of functions that can recursively call themselves. We saw some loop constructs and modules. One of the things that we can do in our function is to invoke itself thereby creating a loop. 

// The beauty of this approach is that you invoking function to creating the loops helps us to design when and how the function call itself recursively.

// This gives you 100% control over the recursion process and can thus be used in complicated situations where you have to implement time consuming and sequential workflows where iteration needs to be conditional and controlled.

// let's see how recursive functions is work.

// const loopMe = function (maxcount, counter = 0) {
//     if(counter < maxcount) {
//         console.log(`This should run 10 times (${counter})`);
//         return loopMe(maxcount, counter + 1);
//     }
// }

// We want "counter" to increment all the way to the point where it's less than "maxcount" after which after which we want to terminate the loop note.

// We are not talking about the loops here such as the "for" or "while" loop. But instead all we do is return an invokation of the same "loopMe" function passing in the same value of "maxcount" which we have received but this time incrementing the counter by one.

// Recursive function are this easy to understand really we make this function recursively runs 10 times and will console log out a message.

// To invoke the function we need to pass atleast the max count value which we'll set to 10

// loopMe(10);

// The internal logic of the function is now set to go from 0 to "maxcount - 1" that is 9 since we are using the less than operator. The 0 comes from the counter parameters which we have initialised using "default parameter".

// One of the things you can do for this is to use "named function", but this name is not available outside the function (if you do you get an error "ReferenceError: recursiveFn is not defined").


// const loopMe = function recursiveFn(maxcount, counter = 0) {
//     if(counter < maxcount) {
//         console.log(`This should run 10 times (${counter})`);
//         return recursiveFn(maxcount, counter + 1);
//     }
// }

// loopMe(10);


// Now, instead of console.log() we use functions. The functions is first class objects in the javascript and can passed as arguments to funtions just like regular variables and literals. So, let's allow the user to pass a function in a parameter named "callback".


// const loopMe = function recursiveFn(maxcount, counter = 0) {
//     if(counter < maxcount) {
//         console.log(`This should run 10 times (${counter})`);
//         return recursiveFn(maxcount, counter + 1);
//     }
// }

// loopMe(10);




// "callback" is parameter that should contain a function and every iteration. Let's execute this function and we can pass the current value of count which may be utilised within the function.

// We can pass the function as a second argument when consuming the "loopMe" function where we also get the counter value which we bringing in here using count parameter. 


// const loopMe = function recursiveFn(maxcount, callback, counter = 0) {
//     if(counter < maxcount) {
//         callback(counter);
//         return recursiveFn(maxcount, counter + 1);
//     }
// }

// loopMe(10, function(count) {
//     console.log(`This should run 10 times (${count})`);
// });

// I would also need to use the callback when recursively calling the loopy funtion like so this now enables to define the code that should iteratively run in a separate and isolated function, which is simply executed x times as set by our max count parameter. Note that we have set counter as the last parameter on the list. The reason for this is that we have initialised it 0 and more often than you not need to sets its value since we're using default parameters.

// We will always need to specify a value to be able to pass other arguments after comma.


// summarised :

// Recursive functions are functions that call themselves iteratively, giving you full control over the iteration process. Recursive functions are perfect when you want to build accumulators that operate on a set of values that iteratively depend on the outcome of the previous iteration.

// One such case is calculating the power of numbers, as we saw in the video. Let’s build that function again in this example. Open the main.js file. You’ll notice the calcPower function which is empty at this time.
 
// Implement the recursive function as shown below. As you’ll notice, the function calls itself repeatedly until the power of the number is computed.
 
// Modify the calcPower() function as shown below. 
// const calcPower = function (num, power) {
//   if (power !== 1) {
//     return num * calcPower(num, power - 1);
//   }
//   return num;
// };
 
// If you now run the script, you should see the following output of the computations on the console.
 
// 1024
// 100
// 25600000000
 
// That’s it. You’ve just implemented a function which iteratively calls itself.

const calcPower = function (num, power) {
    if(power !== 1) {
        return num * calcPower(num, power - 1);
    }

    return num;
};

console.log(calcPower(4, 5));
console.log(calcPower(10, 2));
console.log(calcPower(20, 8));



// What is recursive funtion?
// Recursive function is the process of calling itself.


// Fill up the blank to make the print() function a recursive function?

// function add(a, b) {
//  return a + b
// }
// function print() {
//  ___
// }


// Ans : print()

// Reason : Recursive function is the one that calls itself. Hence, print( ) becomes a recursive function when it calls itself.


// Fill up the blanks to increment n to 5.

// function increment(n) {
//  n++
//  if (___) increment(n)
// }
// increment(1)

// Ans : n <= 5

// Reason : To stop the recursion, we need to specify the condition. To increment till, the condition will be n<=5.



//.