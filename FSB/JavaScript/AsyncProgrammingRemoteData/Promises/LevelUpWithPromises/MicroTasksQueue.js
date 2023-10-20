"use strict";



// Microtask queues are a mechanism used by the JavaScript engine to manage the execution of certain types
// of asynchronous code.Microtasks are typically executed immediately after the current JavaScript
// execution context is finished, but before the next rendering or user input event is processed.

// The most common examples of microtasks are:

// Promise .then() callbacks
// MutationObserver callbacks
// queueMicrotask() callbacks



// Ex. 1:
console.log('Start');

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log("End");

// In this example, the console.log('Start') and console.log('End') statements will be executed 
// immediately.The Promise.resolve() method creates a promise that is immediately resolved.The.then() 
// callback is then added to the microtask queue.Once the current JavaScript execution context is 
// finished, the microtask queue is emptied and the console.log('Promise') statement is executed.



// Ex. 2:
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log('Promise');
});

console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 500);

console.log('End');

// In this example, the setTimeout() callback is added to the callback queue. The callback queue is a
// separate queue from the microtask queue.The callback queue is emptied after the current JavaScript
// execution context is finished and the microtask queue is emptied.



// Ex. 3:
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});

promise1.then(() => {
    console.log('Promise');
    setTimeout(() => {
        console.log('Timeout');
    }, 500);
});

console.log('Start');

console.log('End');

// In this example, the console.log('Promise') statement is executed before the console.log('Start')
// statement.This is because the.then() callback is added to the microtask queue before the console.log
// ('Start') statement is executed.The microtask queue is emptied before the console.log('Start')
// statement is executed, so the console.log('Promise') statement is executed first.

// In summary, microtask queues are a mechanism used by the JavaScript engine to manage the execution of 
// certain types of asynchronous code.Microtasks are executed immediately after the current JavaScript 
// execution context is finished, but before the next rendering or user input event is processed.
