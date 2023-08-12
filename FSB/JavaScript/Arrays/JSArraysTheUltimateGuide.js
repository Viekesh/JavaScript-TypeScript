// Here we can perform create, read, update and delete operation with javascript arrays.

// First we can create an array by using a very common method which is called array literal method.

// Syntax : 

// const array_name = [element1, element2, ...... , elementN];

//  If you want to make sure that the array cannot be reassigned and you want to improve the readability and performance of your code, then using the const keyword is a good option.

const fruits = ["apple", "anar", "mango"];

console.log(fruits);



// Read an elements in the array.

// document.getElementById("readArrayElements").innerHTML = fruits;

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// Update an elements in the array

fruits[3] = "strawberry";

document.getElementById("updateArrayElements").innerHTML = fruits[1];

console.log(fruits);


// [ 'apple', 'anar', 'mango' ]
// apple
// anar
// mango
// [ 'apple', 'anar', 'mango', 'straberry' ]