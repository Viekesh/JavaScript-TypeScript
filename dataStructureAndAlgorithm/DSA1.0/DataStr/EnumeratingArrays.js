"use strict";
// The first line, "use strict";, enables strict mode in JavaScript. This means that the code will be executed in a 
// more restrictive environment, which can help to catch errors and prevent security vulnerabilities.



const products = [];
// const products = [];, creates an empty array called products.

products[0] = "smartphones";
products[1] = "arconsoles";
products[2] = "processors";
// Here we add products by using index value of array.

products.push("watches");
// products.push("watches");, adds the element "watches" to the end of the products array.

console.log(products);
// console.log(products);, prints the contents of the products array to the console.



// Here we created a function called "printProducts". This function takes three arguments: the value of the current 
// element in the array, the index of the current element, and the array itself. The function simply logs the value of 
// the current element to the console.
const printProducts = (value, index, array) => {
    console.log(value);
};

// "products.forEach(printProducts);", calls the printProducts function on each element of the products array. This 
// will log the contents of the array to the console, one element per line.
products.forEach(printProducts);



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

console.log(newNums);



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

console.log(filteredNums);



const sumAll = (total, value, index, array) => {
    return total + value;
};

let sumNums = nums.reduce(sumAll);

console.log(sumNums);
