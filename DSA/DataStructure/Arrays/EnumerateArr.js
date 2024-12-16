"use strict";
// The first line, "use strict";, enables strict mode in JavaScript.
// This means that the code will be executed in a more restrictive environment, which can help to catch errors
// and prevent security vulnerabilities.



const products = [];
// creates an empty array called products.

products[0] = "smartphones";
products[1] = "arconsoles";
products[2] = "processors";
// Here we add products by using index value of array.

products.push("watches");
// adds the element "watches" to the end of the products using push() method.

console.log("Products we added: ", products);
// console.log(products);, prints the contents of the products array to the console.



const printProducts = (value, index, array) => {
    console.log(`The position of ${value} is ${index}`);
};
// Here we created a function called "printProducts".
// This function takes three arguments: the value of the current element in the array, the index of the current element, and the array itself.
// The function simply logs the value of the current element to the console.

products.forEach(printProducts);
// calls the "printProducts" function on each element of the products array.
// This will log the contents of the array to the console, one element per line.

// In the example above, each of the elements are printed to the log when "printProducts" runs with the forEach method. 
// Notice that the printProductshas three arguments, value,index, and array.•The value argument is the current value, 
// the indexargument is the index that the value is found at, and the arrayargument contains the full array of values. 
// This lets you to complete operations based on the value, index, or full array if required.






// The next type of enumeration is a map, which allows you to perform an operation on an array of numbers, returning a 
// new array with the operation applied to it. For example, the code below adds one to every element in the target array.
const nums = [1, 2, 3, 4];

// Here we define a function "addOne". The addOne function takes three arguments: the value of the current element in 
// the array, the index of the current element, and the array itself. The function returns the value of the current 
// element plus 1.
const addOne = (value, index, array) => {
    return value + 1;
};

// const newNums = nums.map(addOne); and console.log(newNums);, use the map() method to apply the addOne function to 
// each element of the nums array. This creates a new array called newNums that contains the results of adding 1 to 
// each element of the nums array.
const newNums = nums.map(addOne);

console.log("Map Mehthod : ", newNums);






// Another method for performing operations on an array is an iterative filter. A filter will return elements of an 
// array that match a certain condition. For example, the code below gets allthe values less than 3.

// The lessThree function takes three arguments: the value of the current element in the array, the index of the 
// current element, and the array itself. The function returns a boolean value indicating whether the value of the 
// current element is less than 3.
const lessThree = (value, index, array) => {
    return value < 3;
};

// const filteredNums = nums.filter(lessThree); and console.log(filteredNums);, use the filter() method to apply the 
// lessThree function to each element of the nums array. This creates a new array called filteredNums that contains the 
// elements of the nums array that are less than 3.
const filteredNums = nums.filter(lessThree);

console.log("filter mehtod :", filteredNums);






// Finally,  we  have  a  reduce,  which  can  apply  an  operation  to  each element  in  an array  and return  a  single  value  as  a  result.  This  is  commonly  used  for operations that sum values in an array. In the example given below, note that total is added as a running total of the array value.

const sumAll = (total, value, index, array) => {
    return total + value;
};

let sumNums = nums.reduce(sumAll);

console.log("reduce method : ", sumNums);






// we will discuss the process of removing duplicate data from an array that is in sorted order. Before we start 
// discussing a solution, let’s create a problem statement and look at an example.

// Problem Statement : Removing duplicatesd from sorted arrays

// Input : An array of values that is in sorted order

// Output: A new array that contains all elements from the original array except the duplicates

// As an example, suppose you have the array [1,2,2,3,3,4] as an input. The expected output of the program would be
// [1,2,3,4].

// The main idea of the solution for this program is to take advantage of the fact that the array is in sorted order. 
// When an array is in sorted order, duplicate elements appear next to each other. So, we can iterate our array, 
// checking each value to see if the one directly next to it is the same. If it is not the same, we can add the value 
// to our output array. Otherwise, we ignore the value and move to the next one.
// The complicated code is shown below.

const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDup = [];

for (let i = 0; i < arr1.length; i++) {
    if (i < arr1.length - 1) {
        if (arr1[i] != arr1[i + 1]) {
            removeDup.push(arr1[i]);
        }
    } else {
        removeDup.push(arr1[i]);
    }
}

console.log(arr1);

console.log(removeDup);



// .