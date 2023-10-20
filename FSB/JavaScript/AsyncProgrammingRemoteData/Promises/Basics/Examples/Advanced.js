"use strict";



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 2000);
});

Promise.all([promise1, promise2])
    .then((values) => {
        console.log(values); // ["Promise 1", "Promise 2"]
    })
    .catch((error) => {
        console.error(error);
    });

Promise.race([promise1, promise2])
    .then((value) => {
        console.log(value); // "Promise 1"
    })
    .catch((error) => {
        console.error(error);
    });

// In this example, the Promise.all() method is used to wait for all of the promises in the promises array to be 
// resolved. The Promise.race() method is used to wait for the first promise in the promises array to be resolved.

// The Promise.all() method returns a promise that is resolved with an array of the values of the resolved promises. The 
// Promise.race() method returns a promise that is resolved with the value of the first resolved promise.

// In this example, the Promise.all() method is called with the promise1 and promise2 promises. The Promise.race() method 
// is called with the promise1 and`promise2.