// What is generator function?

// A generator function is a special type of function in JavaScript that allows you to generate a sequence
// of values over time. Generator functions are created using the function* keyword.

// Generator functions are used for a variety of tasks, including:

// Iterating over large data sets: Generator functions can be used to iterate over large data sets without
// having to load the entire data set into memory at once.This can be useful for tasks such as processing
// large files or streaming data from a network.

// Implementing lazy loading: Generator functions can be used to implement lazy loading, which is a
// technique for deferring the loading of data until it is needed.This can improve the performance of web
// applications by reducing the amount of data that needs to be loaded initially.

// Creating infinite sequences: Generator functions can be used to create infinite sequences of values.
// This can be useful for tasks such as generating random numbers or implementing infinite scrolling.

// Generator functions are typically used in the following situations:

// When you need to iterate over a large data set without loading the entire data set into memory at once.
// When you need to implement lazy loading.
// When you need to create an infinite sequence of values.



// When you call a regular function, the function starts executing and does not return control to the
// caller until it has finished.This is called synchronous execution.

// A generator function is a special type of function that can be paused in the middle of execution and
// resumed later.This is called asynchronous execution.

// Generator functions are created using the function* keyword. When a generator function is called, it
// returns a special object called an iterator.The iterator can be used to iterate over the values that
// the generator function yields.

// To yield a value, a generator function uses the yield keyword. When the yield keyword is encountered,
// the generator function pauses execution and returns the yielded value to the caller.

// The caller can then resume execution of the generator function by calling the next() method on the
// iterator.The next() method returns an object with two properties: value and done.The value property
// contains the next value yielded by the generator function, and the done property is a Boolean value
// that indicates whether the generator function has finished executing.



// // Ex. 1:
// // The following example shows a simple generator function that yields a sequence of even numbers:

// function* generateEvenNumbers() {
//     let number = 2;
//     while (true) {
//         yield number;
//         number += 2;
//     }
// }

// // Create an iterator for the generator function.
// const iterator = generateEvenNumbers();

// // Iterate over the generator function and print the first 10 even numbers.
// for (let i = 0; i < 10; i++) {
//     console.log("Example : ", iterator.next().value);
// }






// Ex. 1:

function* generateEvenNumber() {
    let number = 2;
    while (true) {
        yield number;
        number += 2;
        console.log("yield value :", number);
    }
}

// Create an iterator for the generator function:
const iterator = generateEvenNumber();

// Iterate over the generator function and print the first 10 even numbers.

for (i = 0; i < 10; i++) {
    const { value, done } = iterator.next();
    
    if (done) {
        break;
    };
    
    console.log("value :", value);
    console.log("done :", done);
}


// Ex. 2:
// The following example shows a more advanced generator function that implements lazy loading:

// function* lazyLoadImages() {
//     const images = ["image1.png", "image2.png", "image3.png"];
//     for (const image of images) {
//         yield new Promise((resolve) => {
//             const img = new Image();
//             img.onload = () => resolve(img);
//             img.src = image;
//         });
//     }
// }

// Create an iterator for the generator function.
// const iterator1 = lazyLoadImages();

// Iterate over the generator function and load the first image.
// const image =  iterator1.next().value;

// Display the image.
// const res = document.body.appendChild(image);
