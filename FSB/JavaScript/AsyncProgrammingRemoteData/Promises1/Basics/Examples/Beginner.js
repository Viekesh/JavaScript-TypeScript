"use strict";



const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation
    setTimeout(() => {
        if (success) {
            resolve("The operation was successful");
        } else {
            reject("The operation was failed");
        }
    }, 3000);
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// In this example, the myPromise variable is created using the Promise constructor. The constructor takes a callback
// function as its argument.The callback function has two parameters: resolve and reject.

// The resolve parameter is a function that is called when the asynchronous operation is successful. The reject parameter
// is a function that is called when the asynchronous operation fails.

// In this example, the asynchronous operation is a setTimeout call.The setTimeout call delays the execution of the
// callback function for 3 seconds.

// If the success variable is true, the resolve function is called with the string "The operation was successful!". If
// the success variable is false, the reject function is called with the string "The operation failed!".

// The then() method is used to handle the successful completion of the promise. The catch() method is used to handle the
// rejection of the promise.

// In this example, the then() method is called with a callback function that logs the result of the promise to the
// console. The catch () method is called with a callback function that logs the error to the console.



// 