"use strict";

// Arrays are a common data structure used in application development to store a collection of data. There are many 
// scenarios in which we may need to compare arrays, such as :

// To check if two arrays contain the same elements.
// To find the difference between two arrays.
// To find the intersection of two arrays.
// To check if an array contains a specific element.
// To sort an array by comparing its elements.
// To search for an element in an array

// The best method to use will depend on the specific application and the data types of the arrays being compared. Here 
// are a few of the most common method :

// Using the equality operator (== or ===) :
// This method compares the values of the elements in the two arrays, and returns true if all the elements are equal, 
// and false otherwise.

// Using the JSON.stringify() method :
// This method converts an array to a string, and then compares the two strings. This method is useful if the arrays 
// contain objects or other complex data types.

// Using a for loop :
// This method iterates through the elements of both arrays, and compares each element to the corresponding element in 
// the other array.

// Using the Array.prototype.every() method : 
// This method takes a function as an argument, and iterates through the elements of the array, calling the function 
// for each element. The function returns true if all the elements pass the test, and false otherwise.



// So, now you get an idea of how and when we might need to compare arrays. The most fundamental way to compare arrays 
// is to turn the arrays into strings and then do an equality comparison. But this doesn’t work if the order of 
// elements is different in both the arrays.

// Comparing two arrays to see if they’re identical may seem like a trivial task but it’s not only required
// quite often, but there isn’t any ready method available in JavaScript that helps us do it.

// Then there are two different kinds of situations that come into play when comparing two arrays.

// In this example, we are comparing two arrays where not only the content is the same, but the position of each 
// element within the array is also the same.



// ex 1:

//Both arrays are identical
const arrA = [1, 2, 3, 1, 23, 10, { id: 1 }, { id: 2 }, 'Hello'];
const arrB = [1, 2, 3, 1, 23, 10, { id: 1 }, { id: 2 }, 'Hello'];

// compare arrays
const isIdentical = (arrA, arrB) => JSON.stringify(arrA) === JSON.stringify(arrB);


// ternary operator to display ‘Array A is equal to Array B’ if the arrays are identical or otherwise.
console.log(
`ex 1 : Array A ${isIdentical(arrA, arrB) ? 'is' : 'is not'} equal to Array B`
);

// Since we cannot just use the equality operator to compare two arrays directly, we’ll build a function named 
// isIdentical which takes two arrays, and uses the equality operator to compare the string equivalents of the arrays 
// which we’ll get using JSON.stringify(). This is the easiest way to compare two arrays.

// When we run this code, we see that our arrays are indeed identical. So, in this case, the two arrays have to be 100%
// identical to get a truthy match or else we get a false.









// ex 2 :

const array1 = [1, 2, 3, "position"];
const array2 = [1, 2, 3, "position"];

const compare = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

console.log(`ex 2 : Array 1 ${compare(array1, array2) ? 'is' : 'is not'} equal to Array 2`);









// ex 3:

const arr11 = [1, 2, 3];
const arr22 = [1, 2, 3];

const is_same = arr11.length == arr22.length && arr11.every((currEl) => {
    if(arr22.indexOf(currEl) > -1) {
        return (currEl = arr22[arr22.indexOf(currEl)]);
    }
});

console.log("ex 3 :", is_same);









// In this example, we are comparing two arrays that have identical content, but the position of elements vary.

// ex 4:

// Both arrays have the same contents
const arrC = [1, 2, 3, 1, 23, 10, { id: 1 }, { id: 2 }, 'Hello'];
const arrD = [1, 3, 2, 1, 10, 23, { id: 2 }, 'Hello', { id: 1 }];

//compare arrays
const hasSameContents = (arrA, arrB) => {
    //map method on both arrays to convert all content to strings.
    const stringA = arrA.map((el) => JSON.stringify(el));
    const stringB = arrB.map((el) => JSON.stringify(el));
    
    //return an array from this function
    return [
        
        //equate the length of both the arrays
        arrA.length === arrB.length,
        ...stringA.map((el) => stringB.includes(el)),
        ...stringB.map((el) => stringA.includes(el)),
    ].every((el) => el);
};

console.log(
    "ex 4 :",
    hasSameContents(arrC, arrD)
    ? 'Both arrays have the same elements'
    : 'Both arrays do not have the same elements'
);






// ex 5 :
const arr3 = [1, 2, 3, 5];
const arr4 = [5, 2, 3, 1];

const sameContent = (arr1, arr2) => {
    const strA = arr1.map((a1el) => JSON.stringify(a1el));

    const strB = arr2.map((a2el) => JSON.stringify(a2el));

    return [
        arr1.length === arr2.length,
        ...strA.map((el) => strB.includes(el)),
        ...strB.map((el) => strA.includes(el))
    ].every((el) => el);
};

console.log("ex 5 :", sameContent(arr3, arr4) ? "Both arrays have the same contents" : "Do not have the same content");



// We have these two arrays that have the same content but the position of elements in the arrays is different. 
// Technically the arrays contain the same content, which is why we need a way to equate them to see if they actually 
// have the exact same content or not. 

// The function named hasSameContents which takes two arrays. In the function, the map method on both arrays converts 
// all content to strings. This is because an array might contain nested arrays or objects in which case we need to 
// convert them to strings before we can equate them.

// The first spread operator runs a map function that takes every element of the stringified array A and uses the 
// includes the function to check if it is included in the stringified array B. So, we’re checking if every element of 
// Array A exists in Array B or not. The next spread operator checks if every element in array B exists in Array A. 

// To ensure that every single element in this array is true for our question ‘Do both arrays have same content’ use 
// the every method that exists on the array prototype. The every method runs a condition for every single element in 
// the array and returns a true if every iteration returned a true. So, if our array is all true, then the every method 
// will return a consolidated true or else false. 

// This way we can compare two arrays to ensure they carry the same content even if the order of content isn’t the same 
// which doesn’t matter when all you’re doing is accessing or mutating the content and the order of content isn’t 
// important.






// Here is an example of how to compare two arrays using the equality operator:

// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];

// const compare = (array1, array2) => {
//     const finalArr = [];
//     array1.forEach((a1elements) => array2.forEach((a2elements) => {
//         if(a1elements === a2elements) {
//             console.log("a1elements :", a1elements);
//             console.log("a2elements :", a2elements);
//             finalArr.push(a1elements);
//             console.log(finalArr);
//         }
//     }));
// }






// ex 6:

const a3 = [1, 2, 3];
const a4 = [1, 2, 3];

const compare1 = (array1, array2) => {

    array1 = JSON.stringify(a3);
    array2 = JSON.stringify(a4);

    if (array1 === array2) {
        console.log("Equal");
        a3.push(array1);
        console.log("a3 :", a3);
    } else {
        console.log("Not equal");
        a4.push(array2);
        console.log("a4 :", a4);
    }
}

compare1(a3, a4);

// This code will print the message "The arrays are equal" to the console if the two arrays have the same elements.
// Otherwise, it will print the message "The arrays are not equal" to the console.

// Sometimes we have to run the arrays through a complex series of checks. Let’s implement the hasSameContents()
// function to compare two lists of items - shoppingList featuring a list of items that need to be bought and
// itemsBougth which features items that have already been bought.

// const shoppingList = ['Apples', 'Milk', 'Pasta', 'Cheese Cubes', 'Coke Zero'];
// const itemsBought = ['Cheese Cubes', 'Pasta', 'Apples'];

// const hasSameContents = (arrA, arrB) => {
//     const stringA = arrA.map((el) => JSON.stringify(el));

//     const stringB = arrB.map((el) => JSON.stringify(el));

//     return [arrA.length === arrB.length, ...stringA.map((el) => stringB.include(el)), ...stringB.map((el) => stringA.include(el)),].every((el) => el);
// };

// console.log(
//     hasSameContents(shoppingList, itemsBought) ? 'All items bought' : 'Items missing...'
// );



// This function first stringifies all elements in the array before implementing a series of three checks. The first 
// one compares the length of both arrays, then we check for the existence of all items from Array A in Array B and 
// vice-versa.



// Two arrays cannot be compared using equality operator. However, JSON.stringify() along with equality operator is 
// used to check if the arrays are identical.



// What will be the output of following?

// var numbers = [15, 50, 25];
// console.log(numbers.includes(80));

// Array.includes() is used to check if the argument provided exist in array. If that exists, it returns true, otherwise false.



// .