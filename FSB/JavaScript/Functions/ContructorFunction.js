"use strict";



// A constructor function is a special type of function that is used to create new objects. Constructor
// functions are created using the new keyword.

// When you call a constructor function, it creates a new object and returns it. The new object is
// initialized with the values that are passed to the constructor function as arguments.

// Constructor functions are typically used to create objects that represent real - world entities, such
// as users, products, and orders.

// When to use constructor functions

// You should use constructor functions when you need to create new objects that represent real-world
// entities.Constructor functions can help you to create consistent and well - defined objects.

// Real-life example

// The following example shows a constructor function that is used to create new User objects:

// Ex. 1:

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
};

// To create a new User object, you would use the new keyword and pass the user's name and email address
// to the constructor function:

const user = new User("John Doe", "john.doe@example.com");

// The user variable would then contain a new User object with the following properties:

console.log("Ex. 1 User Name:", user.name);
console.log("Ex. 1 User Email:", user.email);