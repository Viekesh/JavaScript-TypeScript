// Here we can perform create, read, update and delete operation with javascript arrays.

// First we can create an array by using a very common method which is called array literal method. In example, 
// const fruits = ["apple", "kiwi", "mango"]; an  array named  fruits  is declared which contains three distinct
// values. The three values contained are apple, kiwi, and mango. In this example, the values contained in the array 
// are strings, however, they can be any type that you require.

// Syntax : 

// const array_name = [element1, element2, ...... , elementN];

// If you want to make sure that the array cannot be reassigned and you want to improve the readability and 
// performance of your code, then using the "const" keyword is a good option.

const fruits = ["apple", "kiwi", "mango"];

console.log(fruits);

// This declares an array of values, where the first value in the array is apple, the second value in the array is kiwi, and the third value in the array is mango. You can access each of these values individually.



// Read the elements in the array.
// document.getElementById("readArrayElements").innerHTML = fruits;

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Console.log of fruits at 0 indicates that you want to get the value that is at the first location  in  the 
// array  of  arrays  are  what  are  called  zero  indexed,  it  means  that  the  first element is at index zero. So,
// when it’s said fruits at zero, it refers the first value in the array, which in this case is apple.



// Update an element in the array

// In fruits array we can add each value individually to it's assigned location, fruits[3] refers to the third slot of space, fruits[4] refers to the forth slot of space, frits[5] refers to the fifth slot of space and so on.
fruits[2] = "banana";
fruits[3] = "strawberry";
fruits[4] = "papaya";
fruits[5] = "pineapple";
console.log(fruits);

// [ 'apple', 'kiwi', 'mango' ]
// apple
// anar
// mango
// [ 'apple', 'kiwi', 'banana', 'strawberry', 'papaya', 'pineapple' ]



// We can use array push() method also. This method will add a new element to the end of the array. It will add the 
// value of grapes to the end of our fruits array. Example-fruits.push(“grapes”);

fruits.push("grapes");
console.log("push method :", fruits);



// Deleting elements of an array

// The splice() method is used to delete, replace, or add elements to an array. splice() method of JavaScript is a good 
// choice for deleting array elements when you need more control over the process. If you want to delete element from 
// the middle of an array, to delete multiple elements of an array, to insert new elements into an array at a specific 
// location, to get the value of an element that was deleted from an array then you can use splice() method.

// The splice() method takes three arguments:

    // The index of the element to delete.
    // The number of elements to delete.
    // An optional array of elements to insert.

// For example, the following code deletes the element at index 2 from the array fruits:

fruits.splice(2, 1);
console.log("Splice Method :", fruits);



// The following code deletes the first two elements from the array fruits and inserts the element "guava":

fruits.splice(0, 2, "guava");
console.log("Splice Method :", fruits);

// It is a more versatile method than the delete operator, which can only be used to delete elements from the end of an 
// array.






// Length Method Of Array :

// This method is used for situation where we want to interate the contents through the array. It will return to us the 
// length of the array.

// Ex. : console.log(fruits.length());






// Sort Method Of Array :

// This method is useful to sorting the content of the array.

// Ex. :

fruits.push("Orange");
console.log(fruits.sort());