// An array is a data structure that can hold a collection of values
// Arrays can contain a mix of different data types
// You can store string, booleans, numbers or even objects all in the same array
// Arrays are resizable
// You dont have to declare the size of an array before creating it
// javascript arrays are zero-indexed and the insertion order is maintained
// Arrays are iterables they can be used with for of loop

// Ex :

const arr = [11, 22, 33, "string"];

console.log(arr);

// add element at the beginning of an array :
arr.unshift(123);
console.warn(arr);


// add element at the ending of an array :
arr.push(665);
console.log(arr);


// remove an element at the beginning :
arr.shift();
console.warn(arr, 'removed at the beginning');


// remove an element at the ending :
arr.pop(44);
console.warn(arr, 'remove at at the ending');



for (const elements of arr) {
    console.log(elements);
};

// If you insert or remove an element at the end of an array the time complexity is constant
// If you insert or remove an element at the beginning the time complexity is linear
// This is because the index can be reset for every remaining element in an array

// accessing an element is constant time complexity as fetching the first element is no
// different from fetching an element at position 100 thousand

// searching an element is linear time complexity as element can be the last one in the array

// now given these time complexities following is a list of common array methods with their
// time complexity
// push and pop are constant
// shift, unshift, concat, slice and splice are linear
// for each, map, filter and reduce are also linear




