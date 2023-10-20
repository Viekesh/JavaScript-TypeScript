const withCallback = (cb) => setTimeout(cb, 0);
withCallback(() => console.log('This was executed using an asynchronous callback'));

// const withCallback: This line creates a constant variable called withCallback and assigns it a function 
// expression.

// (cb): The function expression takes one parameter called cb.

// setTimeout(cb, 0): The function expression calls the setTimeout() method with two arguments: the cb 
// parameter and the number 0.

// setTimeout(cb, 0): The setTimeout() method schedules the execution of the cb callback function for 
// after the current JavaScript execution context is finished.The number 0 specifies that the callback 
// should be executed as soon as possible.

// In other words, the withCallback() function takes a callback function as an argument and schedules the 
// execution of that callback function for after the current JavaScript execution context is finished.

// withCallback(() => console.log('This was executed using an asynchronous callback')): This line calls 
// the withCallback() function with an anonymous callback function as the argument.

// () => console.log('This was executed using an asynchronous callback'): The anonymous callback function 
// logs the string "This was executed using an asynchronous callback" to the console.

// In other words, this line of code schedules the execution of the anonymous callback function for after 
// the current JavaScript execution context is finished.






const withPromise = () => Promise.resolve('This was executed using Promises');
withPromise().then((res) => console.log(res));

// const withPromise: This line creates a constant variable called withPromise and assigns it a function 
// expression.

// (): The function expression does not take any parameters.

// Promise.resolve('This was executed using Promises'): The function expression calls the Promise.resolve
// () method with the string "This was executed using Promises" as the argument.

// Promise.resolve('This was executed using Promises'): The Promise.resolve() method creates a new promise 
// that is immediately resolved with the value "This was executed using Promises".

// In other words, the withPromise() function returns a new promise that is immediately resolved with the 
// value "This was executed using Promises".

// withPromise(): This line calls the withPromise() function.

// .then((res) => console.log(res)): The .then() method is called on the promise returned by the 
// withPromise() function. The.then() method takes one argument, which is a callback function.

// (res) => console.log(res): The callback function takes one parameter called res. The callback function 
// logs the value of the res parameter to the console.

// In other words, this line of code adds a callback function to the promise returned by the withPromise() 
// function. The callback function will be executed when the promise is resolved.



// The output of the code is:

// "This was executed using Promises": This is logged to the console because the withPromise() function 
// returns a promise that is immediately resolved with the value "This was executed using Promises".

// "This was executed using an asynchronous callback": This is logged to the console because the 
// withCallback() function schedules the execution of the anonymous callback function for after the 
// current JavaScript execution context is finished.

// In other words, the promise is resolved first, and then the anonymous callback function is executed.

// 