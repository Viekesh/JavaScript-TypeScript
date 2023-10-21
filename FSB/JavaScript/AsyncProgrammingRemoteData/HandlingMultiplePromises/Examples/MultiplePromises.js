"use strict";



// There are a few different ways to handle multiple JavaScript promises:

// Promise.all()
// The Promise.all() method takes an array of promises as an argument and returns a new promise that is
// resolved when all of the promises in the array have been resolved.If any of the promises in the array a
// re rejected, the Promise.all() method will be rejected with the error from the first promise that was
// rejected.
// Promise.all() takes an iterable of promises and returns a single promise that resolves to an array of
// results of the input promises only if all promises resolve, otherwise rejects if one of the promises
// rejects.
// promise.allSettled() accepts an iterable of promises and returns a single promise after all of the 
// given promises have either fulfilled or rejected.

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
];

Promise.all(promises).then((results) => {
    console.log(results); // [1, 2, 3]
});



// Promise.race()
// The Promise.race() method takes an array of promises as an argument and returns a new promise that is
// resolved or rejected as soon as one of the promises in the array is resolved or rejected.

const promises1 = [
    Promise.resolve(1),
    Promise.reject('Error'),
    Promise.resolve(3),
];

Promise.race(promises1).then((result) => {
    console.log(result); // 1
}).catch((error) => {
    console.log(error); // Error
});



// Async/await
// The async/await syntax can be used to handle promises in a more concise and readable way. The await
// keyword can be used to wait for a promise to be resolved before continuing execution.

async function getResults() {
    const result1 = await Promise.resolve(1);
    const result2 = await Promise.resolve(2);
    const result3 = await Promise.resolve(3);

    console.log(result1, result2, result3); // 1 2 3
}

getResults();



// Real-life examples

// Fetching data from multiple APIs
// If you need to fetch data from multiple APIs, you can use Promise.all() to wait for all of the API
// requests to complete before processing the results.

const promises3 = [
    fetch('api/products'),
    fetch('api/categories'),
    fetch('api/customers'),
];

Promise.all(promises3).then((responses) => {
    const products = responses[0].json();
    const categories = responses[1].json();
    const customers = responses[2].json();

    // Process the data
});



// Validating user input
// If you need to validate user input, you can use Promise.race() to wait for the first validation check
// to complete.If any of the validation checks fail, you can display an error message to the user.

const promises4 = [
    validateUsername(),
    validateEmail(),
    validatePassword(),
];

Promise.race(promises4).then((result) => {
    // User input is valid
}).catch((error) => {
    // Display error message to user
});



// Loading multiple images
// If you need to load multiple images, you can use async/await to wait for all of the images to load
// before displaying them on the page.

async function loadImages() {
    const image1 = await loadImage('image1.jpg');
    const image2 = await loadImage('image2.jpg');
    const image3 = await loadImage('image3.jpg');

    document.body.appendChild(image1);
    document.body.appendChild(image2);
    document.body.appendChild(image3);
}

loadImages();

// There are a few different ways to handle multiple JavaScript promises. The best approach will depend on the specific needs of your application.



// .