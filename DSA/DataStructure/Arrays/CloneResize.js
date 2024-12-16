"use strict";

// Cloninbg Arrays :
// In many cases, you may want to make a copy of an array you are using in your application.
// There are many ways to achieve this in JavaScript.
// The code below shows all the main ways used to clone arrays in JavaScript.

const prod1 = ["Nokia", "Samsung", "Apple", "MotoG", "Google Nexus"];

const prod2 = [...prod1];

console.log("rest operator:", prod2);



// concat() method is used to copy the one array element to another array.

const prod3 = prod1.concat(prod2);

console.log("concat() method:", prod3);



// The from() method will clone an array.

const prod4 = Array.from(prod1);

console.log("from() method:", prod4);

// Each of these choices will yield the same results, with minor differences in the efficiency of the operation.






// Resizing an array:

// In addition to copying array, you may need to an extend or resize an array.
// This can be done by simply modify the length of the array.

const books = ["Basic Electrical Circuits", "IIOT 4.0", "Power System Operation And Control", "Electric Drive", "HVDC Transmission And Facts", "The Joy Of Computing With Python"];

console.log("Books Length:", books.length);

console.log("Books Available: ", books);



// There is a specific value used to change the size of JavaScript array: length
books.length = 3;

console.log("By using length property: ", books.length);

console.log("Now books available: ", books);



// When you reduce the size of the array, JavaScript cuts off all the values after the length. In this example the
// only value left in the array is the four. You can also extend the length of the array. We can also extend the
// length of the array by making the length larger than the originally declared amount.

books.length = 7;

console.log("Increased length :", books);


// One important operation with arrays is the ability to delete data.
// The normal array delete methods will leave blank spaces in our array.
// So we need to find a way to prevent this issue.

// Let’s start with a problem definition.

// Input: An array of values, as well as the value to remove from the array

// Output: The array with the value removed, or the original array if the value does not exist

// To achieve this goal, we are going to move data one space forward in our array
// excluding the value we want to remove when we find it.
// Once we enumerate the whole array, we will lower the length by 1.
// It giving us a new array with the value removed.
// The code to achieve this is shown below.

const numberList = [1, 2, 3, 4, 5];

const val = 3;

let count = 0;

let reduceLength = false;

for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] != val) {
        numberList[count++] = numberList[i];
    } else {
        reduceLength = true;
    }
}

if (reduceLength) {
    numberList.length -= 1;
}

console.log("Number List: ", numberList);



//