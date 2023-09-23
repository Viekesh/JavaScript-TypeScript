"use strict";



// slice method :
// ex 1:

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const citrus = fruits.slice(1, 3);

console.log("ex 1 : after slice", citrus);









// ex 2:

const myBest = fruits.slice(-3, -1);

console.log("ex 2 : with negative values", myBest);

// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.



// Syntax

// array.slice(start, end);

// start : Optional. Start position. Default is 0. Negative numbers select from the end of the array.

// end : Optional. End position. Default is 0. Negative numbers select from the end of the array.

// return value is new element containing the selected array.









// splice :

// ex 3 :

const suv = ["Toyota", "Mahindra", "Tesla", "Tata"];

console.log(suv);

suv.splice(2, 0, "MG Motors", "Volvo");

console.log("afterSplicing : ", suv);

suv.splice(2, 2);

console.log("ex 3 : afterSplicing : ", suv);


// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.

// Syntax :

// array.splice(index, howmany, item1, ....., itemX)

// index : Required.

// The position to add/remove items.

// Negative value defines the position from the end of the array.

// howmany : Optional. Number of items to be removed.

// item1, ..., itemX : Optional. New elements(s) to be added.

// return value is an array containing the removed items (if any).



// The splice method allows you to remove a number of elements, starting with a given index number. The splice method 
// mutates the array in place and it also returns the removed element(s). At the same time, it also allows you to 
// insert new elements in lieu of the ones removed.

// On the other hand, slice() allows you to remove elements from a given location (index number) in an Array.

// So, let’s work through an example. If you observe the output of the exercise, you’ll see a list of movie directors. 
// Our task is twofold. First up, remove ‘David Dhawan’ and replace it with ‘David Lean’ and second, produce the top 
// three (first three) names from the list for displaying on the terminal.









// ex 4 :

const hollywoodDirectors = [
    'Martin Scorsese',
    'David Dhawan',
    'Steven Spielberg',
    'Christopher Nolan',
    'Quentin Tarantino',
    'James Cameron',
];

// Let’s create a function named removeAndInsert, which takes an array, the element to remove and the element to 
// replace it with. It should then return a new array without mutating the one provided to the array. The following 
// function allows you to achieve this task.

const removeAndInsert = (arr, elem, newElem) => {
    const findElem = arr.findIndex((e) => e === elem);

    const tempArray = [...arr];

    tempArray.splice(findElem, 1, newElem);

    return tempArray;
}

// The function above uses findIndex() to find the index number of the element to remove. We’re then creating a shallow 
// copy of the original array and using Array.splice() to remove the element and replace it with the one provided in 
// the newElem parameter. This revised array is returned back.

// We now need a function that returns the first three directors from the array. Add the following function to achieve 
// the same.

const topThree = (arr) => arr.slice(0, 3);

// This function uses slice() to start counting up to 3 elements from index = 0. This revised array (a shallow copy) is 
// then returned.

// Next, let’s invoke the functions as shown below:

const revisedList = removeAndInsert(hollywoodDirectors, "David Dhawan", "David Lean");

const directors = topThree(revisedList);

console.log(`Hollywood Masterclass featuring ${directors}`);

// When you now run your app, you can see the result of using the splice and slice on the array.

// Array.slice() extracts a portion of array and  returns a shallow copy of it without modifying the original array. 
// Hence, it is an accessor method.

// Array.splice() is used to insert, remove or replace elements in an array. Hence it is a mutator method.









// ex 5 :

const languages = ['go', 'js', 'python', 'c', 'python'];
languages.splice(2,1,'java');
console.log(languages);

// Array.splice() method removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. It takes three arguments - start index, delete count and elements to insert



// .