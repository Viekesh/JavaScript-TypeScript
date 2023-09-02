"use strict";



// Cloninbg Arrays :

// In many cases, you may want to make a copy of an array you are using in your application. There are many ways to 
// achieve this in JavaScript. The code below shows allthe main ways used to clone arrays in JavaScript.

const prod1 = ["Nokia", "Apple", "Google"];

const prod2 = [...prod1];

console.log("products 2 : ", prod2);

// The slice method can be used to create a copy of a segment or the whole array.
const prod3 = prod1.slice();

console.log("products 3 : ", prod3);

const prod4 = ["Samsung", "Sony", "Motorola"];

// concat() method used to copy the one array elements into another array
const prod5 = prod4.concat(prod1);

console.log("product 5 :", prod5);

// The from method will clone an array.
const prod6 = Array.from(prod5);

console.log("product 6 :", prod6);

// Each of these choices will yield the same results, with minor differences in the efficiency of the operation.






// Resizing Arrays :

// In addition to copying arrays, you may need to extend or reduce the size of an array. This can be done by simply 
// modify the value of the length property of the array.

const books = ["Basic Electrical Circuits", "IIOT 4.0", "Power System Operation And Control", "Electric Drive", "HVDC Transmission And Facts", "The Joy Of Computing With Python"];

// There is a specific value used to change the size of JavaScript arrays: length
books.length = 3;
console.log("books :", books);

// When you reduce the size of the array, JavaScript simply cuts off all values after the length. In this example, the 
// only value left in the array would be flour. You can also extend the length of the array by making the length larger 
// than the originally declared amount. Doing this will create blank spaces at the end of the array

books.length = 7;
console.log("Reduced Length :", books);






// One important operation with arrays is the ability to delete data. The normal array delete methods will leave blank 
// spaces in our array, so we need to find a way to prevent this issue. Let’s start with a problem definition.

// Input: An array of values, as well as the value to remove from the array

// Output: The array with the value removed, or the original array if the value does not exist

// To achieve this goal, we are going to move data one space forward in our array, excluding the value we want to remove when we find it. Once we enumerate the whole array, we will lower the length by 1, giving us a new array with the value removed. The code to achieve this is shown below.

// arr1 = [1,2,3,4,5];

// val = 1;

// count = 0;

// var reduceLength = false;

// for (let i = 0; i < arr1.length; i++){

//     if (arr1[i] != val){

//         arr1[count++] = arr1[i];

//     }else{

//         reduceLength = true;

//     }

// }

// if (reduceLength){

//     arr1.length -= 1;

// }

// console.log(arr1);


const arr1 = [1, 2, 3, 4, 5];
const val = 1;
let count = 0;
var reduceLength = false;

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != val) {
        arr1[count++] = arr1[i];
    } else {
        reduceLength = true;
    }
}

if (reduceLength) {

    arr1.length -= 1;
}

console.log(arr1);

