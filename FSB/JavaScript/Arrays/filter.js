"use strict";



// ex 1:

const ages = [32, 33, 16, 40];
const checkAge = (age) => {
    return age >= 18;
}
console.log("ex 1 :", "age is : ", ages.filter(checkAge));

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.






// Filtering arrays couldn’t have been easier. You use the Array.filter() method which provides with a function to 
// implement the filtering logic. The outcome is a new array with the filtered elements.

// In our example, we have a dataset of users, some of whom have been verified while others haven’t been so. We’re 
// required to filter and produce lists of users who have and have not been verified.

// ex 2 :

const users = [
    {
        name: 'John M',
        isVerified: true,
    },
    {
        name: 'Jane S',
        isVerified: false,
    },
    {
        name: 'Wanda M',
        isVerified: true,
    },
    {
        name: 'Tony S',
        isVerified: false,
    },
    {
        name: 'Emilio Q',
        isVerified: true,
    },
    {
        name: 'Jonathan W',
        isVerified: false,
    },
];

// You’ll notice here two constants isVerified and notVerified. Both implement a map method which just extracts the 
// name of the user from the individual objects.

// The output at this time, displays all the names for both categories and we need to implement filtering logic to 
// isolate names by their verification status. For this purpose, edit the isVerified and notVerified statements, 
// implementing the filter method as shown below.

const isVerified = users.filter(({isVerified}) => isVerified).map(({name}) => name);

const notVerified = users.filter(({isVerified}) => !isVerified).map(({name}) => name);

console.log(`Is Varified : ${isVerified}`);

console.log(`Not Varified : ${notVerified}`);



// Array.filter() filters out the element from the original array based on if the element is satisfying the test function. It does not modify the original array. Hence it is an array accessor method.

// Array.filter() results to a type error if no callback function is supplied to it.

// ex 3:

const languages = ['go', 'js', 'python'];
const result = filter(languages);
console.log(result);

// Array.filter() method filters out the elements according to the callback function supplied to it and returns the elements into a new array. However, since it is an accessor method, it does not modify the original array

const numbers = [1,2,3,4,5]
const numbersGreaterThan2 = numbers.filter(number => number > 2)
console.log(numbers)



// Syntax :
// array.filter(function(currentValue, index, arr), thisValue)
// function() is Required. A function to run for each array element.
// currentValue is Required. It is the value of the current element.
// index is Optional it is an index of the current element.
// arr is an Optional it is an array of the current element.
// thisValue is also Optional. Default undefined. A value passed to the function as its this value.

// .