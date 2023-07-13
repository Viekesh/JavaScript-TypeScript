"use strict";


// Objects in JavaScript like most other things are derived from a prototype.

// You’ve already seen the use of built-in methods on Arrays such as Array.map() which actually come from the prototype that JavaScript provides on all objects of the type Array.

// Similarly, Objects not only have properties and methods that come built-in on the prototype but we can also create our own prototypes such as in the case of constructor functions.

// So let’s say we have an object and we try to access its Name property, JavaScript first attempts to find the property on the object. If the property is found, it is accessed. If the property is not found, the prototype of the object is accessed and searched.

// This prototypal chain is at the very heart of JavaScript. Later in the course, you’ll see how objects can inherit from other objects as we delve into object-oriented programming.

// Having understood this, when we need to find and access a property, we can use one of two ways.

// In operator :

// It allows you to find a property across the entire prototype chain of an object.


// Object. has own property ()

// This method is only look at the object being searched and not on its prototype chain.


// Let’s see these to understand the difference and use.


// two objects that represent books
const book1 = {
    id: 1,
    title: 'Freakonomics',
    publisher: 'Harper Torch',
    cost: 7.99,
    isbn10: '0-06-124270-5',

    // returns a summary of the book
    overview() {
        return `${this.title}, published by ${this.publisher} retails for ${this.cost}`;
    },
};

const book2 = {
    id: 2,
    title: 'Jurassic Park',
    publisher: 'Arrow',
    cost: 4.99,
};

//The ‘in’ operator searches on the object and the the prototype chain
console.log('title' in book1); //detects the presence of a property named ‘title’ in book
console.log('toString' in book1); //toString exists on the Object and Number prototype

//Object.hasOwnProperty method only searches on the object and not the prototype chain
console.log(book1.hasOwnProperty('title')); //returns true
console.log(book1.hasOwnProperty('toString'));//returns false

//accepts a book object and runs a console.log, invoking the overview function which returns a //composed string
const showDetails = (book) => book.hasOwnProperty('overview') ? console.log(book.overview()) : console.log('Unable to show details...');

showDetails(book1); //displays the overview of book1
showDetails(book2); //The overview method does not exist in book 2


// Detecting the presence of properties is quite useful when writing functions such as our showDetails method here which relies on certain properties for successful execution.






// When accessing a property or a method from an object in a function or in a situation where the shape of the objects is not guaranteed, it becomes important to implement checks to ensure properties being accessed exist and if not, then their absence is carefully handled so as not to produce errors.

// Here we have an array of two objects representing rectangles, one of which has a built-in method named area() which we’re trying to access to produce the area of the rectangle.

const rectangles = [
    {
        id: 'Rectangle - 01',
        width: 129.2,
        height: 80.9,
    },
    {
        id: 'Rectangle - 02',
        width: 342,
        height: 120,
        area() {
            return this.width * this.height;
        },
    },
];

// Since one of the objects doesn’t offer a built-in area() method, the code throws an error which we’re capturing using a try/catch block. An ideal situation would’ve been to offer an alternative solution so that area computation still occurs and that is precisely what we’ll do.

// Let’s start by building a function to compute area in the context of a given object. Add this before the try/catch block:

const calcArea = function () {
    return this.width * this.height;
};

// Then, modify the forEach’s callback function implementing the hasOwnProperty() method to test for the presence of a property named ‘area’ and if it is not present, then using Function.call() to execute the calcArea() function in the context of the current object. The call() method accepts the first argument as an object who’s ‘this’ context must be accessible to the function being called. In this case, the calcArea() function will get access to the object’s ‘this’ context and would be able to access the width and height properties.

// try {
//     rectangles.forEach((rect) => console.log(`${rect.id} : ${rect.area()}`));
// } catch (error) {
//     console.log(error.message);
// }

try {
    rectangles.forEach((rect) =>
        console.log(
            `${rect.id} : ${rect.hasOwnProperty('area') ? rect.area() : calcArea.call(rect)
            }`
        )
    );
} catch (error) {
    console.log(error.message);
}

// This way, the hasOwnProperty() method lets us test for the presence of a property before we use it. Another way to do this is to use the ‘in’ operator and yet another way to handle such a case is to use the optional chaining operator.


// Object.hasOwnProperty() is used to check if the property exist in the object

// What will be the output of the following?
const obj1 = {
    language: 'Javascript'
}

console.log(`language` in obj)

// in operator can be used to check if a certain key exist in object



// What will be the output of the following?
// const obj = {
//     language: 'Javascript'
// }
// console.log(‘languages’ in obj);

// . in operator can be used to check if a certain key exist in object. If it exists, true is returned, otherwise false



// What will be the output of following?
// const obj = {
//     language: 'Javascript'
// }
// console.log(obj.hasOwnProperty('language'));

// Object.hasOwnProperty() returns true if the property exists in the object, otherwise false.



// .