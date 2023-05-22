"use strict";



// source : https://www.programiz.com/javascript/constructor-function

// In JavaScript, a constructor function is used to create objects. For example,

// constructor function
function Person() {
    this.name = 'John',
        this.age = 23
}

// create an object
const individual = new Person();

console.warn(individual);

// In the above example, function Person() is an object constructor function.

// To create an object from a constructor function, we use the new keyword.

// Note: It is considered a good practice to capitalize the first letter of your constructor function.



// ex : In JavaScript, you can create multiple objects from a constructor function. For example,

// constructor function
function Person1() {
    this.name = 'John',
    this.age = 23,

    this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // John
console.log(person2.age);  // 23

// In the above program, two objects are created using the same constructor function.



// "this" keyword in a constructor function

// In JavaScript, when this keyword is used in a constructor function, this refers to the object when the object is created.



// .