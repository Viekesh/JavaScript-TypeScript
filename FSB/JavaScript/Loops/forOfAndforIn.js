"use strict";
// Sure. The JavaScript for...of loop is a new loop that was introduced in ES6. It is used to iterate over iterable objects, such as arrays, strings, and objects that have been defined with the iterable protocol. The syntax for a for...of loop is as follows:

// for (let variable-and-elements-of-iterable of iterable) {
// code to be executed for each value in iterable
// }



// The variable variable is assigned the value of the next item in iterable, and the code block is executed. The loop continues until there are no more items in iterable.

// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

// Here is an example of a for...of loop that iterates over an array:

const myArray = [1, 2, 3, 4, 5];

for (let number of myArray) {
    console.log(number);
}

// This code will print the following to the console:

// 1, 2, 3, 4, 5


// The for...of loop can also be used to iterate over strings. Here is an example:

const myString = "Hello String!";

for (let character of myString) {
    console.log(character);
}

// The for...of loop is a powerful tool that can be used to iterate over iterable objects. It is a more concise and readable alternative to the for...in loop, and it can be used to iterate over objects that have been defined with the iterable protocol.

// Here are some additional details about the for...of loop:

// The variable variable can be declared using const, let, or var.
// The iterable object can be any object that implements the iterable protocol.
// The iterable protocol is a set of methods that allow an object to be iterated over.
// The for...of loop will continue to iterate until the iterator has completed.
// You can use control flow statements to change the normal control flow of the for...of loop.


// ex 1: print the array elements which is in the form of objects

// const users = [
//     {
//         id: 1,
//         name: "John",
//         age: 30,
//         profession: "Full Stack Engineer"
//     },
//     {
//         id: 2,
//         name: "Robin",
//         age: 30,
//         profession: "Full Stack Engineer"
//     }
// ];

// const introduceUser = (user) => {
//     `${user.name} is ${user.age} years old and he is worked as ${user.profession}`

//     for(const candidates of users) {
//         console.log(introduceUser(candidates));
//     }
// }


// ex 2: print the elements of an array

const students = ['John', 'Robin', 'Jack'];

for (let elmnt of students) {
    console.log(elmnt);
}


// ex 3: for...of with sets

const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
    console.log(i);
}


// ex 4: for...of loop with map

let map = new Map();

// insert the elements

map.set("name", "John");
map.set("age", 30);
map.set("prof", "Full Stack Engineer");

// looping through map

for (let [key, value] of map) {
    console.log(key + ' - ' + value)
}



// The for-of loop allows you to conveniently loop through an inerrable such as an Array without setting up an initializer and managing the incrementing logic manually. Likewise, the for-in loop allows us to iterate through the property of an Object.


// ex 5: print the elements of an array by using function

const products = [
    {
        id: 1,
        name: 'Oranges',
        quantity: 2,
        cost: 1.2,
    },
    {
        id: 2,
        name: 'Chocolate Cake',
        quantity: 2,
        cost: 65,
    },
    {
        id: 3,
        name: 'Coke Zero',
        quantity: 12,
        cost: 1.45,
    },
];

const totalCost = (item) => {
    return `Total cost ${item.quantity} * ${item.cost}`
}

for(const prod of products) {
    for(const prop in prod) {
        console.log(`${prop} : ${prod[prop]}`);
    }

    console.log(totalCost(prod));
}


