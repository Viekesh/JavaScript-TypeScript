"use strict";



// Out of the many ways of finding elements in Arrays, there are two that are quite intuitive and extremely useful. the find() method allows you to implement a search function that can test for a condition to validate and find the very first matching element from an Array.

// On the other hand, the includes() method tests for the presence of an element in an Array and can be smartly used to test multiple conditions without implementing a complicated if/switch conditional logic.

//  We have an array of books and a function named isAvailable() which currently returns true. The objective is to be able to find a book title in a given format (Paperback, Hardbound or eBook). To achieve this, the find() method must be employed to first find the book in the database (array) and then the includes() method can be used to test if the book is available in a given format or not.

// The two console.log statements are designed to invoke this function to test for two popular titles in specific formats. At present, the app reports both titles as ‘Not Available’. This is because the isAvailable() function currently returns a hard-coded false. So, remove the return statement and implement the body of the function as shown below, using both the find() method and the includes() method to achieve the task.



// ex 1 :

const books = [
    {
        id: 1,
        title: 'The Design of Everyday Things',
        author: 'Don Norman',
        formats: ['Paperback', 'Hardbound', 'eBook'],
    },
    {
        id: 2,
        title: 'No Logo',
        author: 'Naomi Klein',
        formats: ['Paperback', 'eBook'],
    },
    {
        id: 3,
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        formats: ['Paperback', 'eBook'],
    },
    {
        id: 4,
        title: 'Gold',
        author: 'Isaac Asimov',
        formats: ['Hardbound', 'eBook'],
    },
];

const isAvailable = (title, format, array) => {
    const getBook = array.find((book) => book.title === title);
    return getBook && getBook.formats.includes(format);
};

console.log(
    `No Logo by Naomi Klein (Paperback): ${
        isAvailable("No Logo", "Paperback", books) ? "Available" : "Not Available"
    }`
);

console.log(
    `The Da Vinci Code by Dan Brown (Hardbound) : ${
        isAvailable("The Da Vinci Code", "Hardbound", books) ? "Available" : "Not Available"
    }`
);

// Array.find() must be provided a callback function as an argument to find if any element in the array satisfies the condition in the callback function

// Array.find() method is used to find if the element of the array satisfies the test function provided as argument.

// Array.find() can only be executed with the help of callback function provided to it as argument.

// Array.findIndex() is used to find the index of the element that satisfies the test function

const numbers = [1, 2, 3];
const index = numbers.findIndex(n=>n===2);
console.log(index);


// Array.includes() method is used to check if the element provided as argument exists in the array. It it exists, it returns true, otherwise false.

const number = [1, 2, 3];
console.log(number.includes(4));

// The includes() method returns true if an array contains a specified value.

// The includes() method returns false if the value is not found.

// The includes() method is case sensitive.

// Syntax : array.includes(element, start)

// element parameter is required because it is used to search the value.

// start is optional parameter. It is the starting position. Default is 0.



// find() method :

// ex 2 : find the value of the first element with the value over 18.

const age = [11, 23, 30, 18, 20, 27];

const checkAge = (age) => {
    return age > 30;
};

console.log("age : ", age.find(checkAge));

// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.

// syntax : array.find(function(currentValue, index, arr),thisValue)

// function is required to run each array element.

// currentValue is required it is an element of an array.

// index is the index no. of the current element and it is optional.

// array is also optional. It is the array of the current element.

// thisValue is also optional. The value passed to the function as its "this" value.


