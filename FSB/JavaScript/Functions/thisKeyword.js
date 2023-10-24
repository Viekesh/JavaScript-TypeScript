"use strict"



// The this keyword in JavaScript is a special keyword that refers to the current object. The value of this
// depends on how the function is called.

// Ex. 1:
// In object methods, this refers to the object that owns the method. For example, in the following code:

const person = {
    name: "John Doe",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}.`);
    },
};

person.sayHello(); // Prints "Hello, my name is John Doe."

// The this keyword inside the sayHello() method refers to the person object. This is because the sayHello()
// method is being called as a method of the person object.



// In standalone functions, this refers to the global object. For example, in the following code:

function sayHello() {
  console.log(`Hello, world!`);
}

sayHello();

// The this keyword inside the sayHello() function refers to the global object. This is because the sayHello
// () function is not being called as a method of any object.

// In strict mode, "this" is undefined in standalone functions. For example, in the following code:

// "use strict";

// function sayHello() {
//   console.log(`Hello, world!`);
// }

// sayHello();

// The this keyword inside the sayHello() function is undefined because the function is being executed in
// strict mode.



//