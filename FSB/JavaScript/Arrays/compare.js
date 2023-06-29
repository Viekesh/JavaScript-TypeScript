"use strict";

// Two arrays can be compared in multiple ways. The most fundamental way to compare two arrays is to turn the arrays into strings and then do an equality comparison. But this doesn’t work if the order of elements is different in both the arrays.

// This is where we have to run the arrays through a complex series of checks as we saw in the previous video. Let’s implement the hasSameContents() function as we saw in the video to compare two lists of items - shoppingList featuring a list of items that need to be bought and itemsBougth which features items that have already been bought.

// This is where we have to run the arrays through a complex series of checks as we saw in the previous video. Let’s implement the hasSameContents() function as we saw in the video to compare two lists of items - shoppingList featuring a list of items that need to be bought and itemsBougth which features items that have already been bought.


const shoppingList = ['Apples', 'Milk', 'Pasta', 'Cheese Cubes', 'Coke Zero'];
const itemsBought = ['Cheese Cubes', 'Pasta', 'Apples'];

const hasSameContents = (arrA, arrB) => {
    const stringA = arrA.map((el) => JSON.stringify(el));

    const stringB = arrB.map((el) => JSON.stringify(el));

    return [arrA.length === arrB.length, ...stringA.map((el) => stringB.include(el)), ...stringB.map((el) => stringA.include(el)),].every((el) => el);
};

console.log(
    hasSameContents(shoppingList, itemsBought)
        ? 'All items bought'
        : 'Items missing...'
);




// This function first stringifies all elements in the array before implementing a series of three checks. The first one compares the length of both arrays, then we check for the existence of all items from Array A in Array B and vice-versa.



// Two arrays cannot be compared using equality operator. However, JSON.stringify() along with equality operator is used to check if the arrays are identical.



// What will be the output of following?

var numbers = [15, 50, 25];
console.log(numbers.includes(80));

// Array.includes() is used to check if the argument provided exist in array. If that exists, it returns true, otherwise false.



// .