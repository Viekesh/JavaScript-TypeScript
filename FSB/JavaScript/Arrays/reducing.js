"use strict";

// Reducing arrays refers to computing down an array full of data to a single value. The reducer function implements the logic while the Array.reduce() method iterates over an array full of data.

// We’re once again going to use the perfumes array from a previous example where we’ve added the quantity of perfumes in stock as a property.

// Let’s compute the total quantity of items in stock as well as the total worth of the stock using array reducers.

const perfumes = [
    {
        id: 1,
        brand: 'Fruity by Kiwi 50ml',
        cost: 300,
        stock: 10,
    },
    {
        id: 2,
        brand: 'Silly Smelly',
        cost: 575,
        stock: 12,
    },
    {
        id: 3,
        brand: 'Ocean Mist by Ventuo',
        cost: 1243,
        stock: 5,
    },
    {
        id: 4,
        brand: 'Spotlight',
        cost: 991,
        stock: 8,
    },
    {
        id: 5,
        brand: 'Horrendous by Britney',
        cost: 230,
        stock: 2,
    },
];


const totalInStock = perfumes.reduce((prev, curr) => prev + curr.stock, 0);

// Next up, let’s compute the total worth of items in the stock by implementing another reducer as shown below.

const totalWorth = perfumes.reduce((prev, curr) => prev + curr.cost * curr.stock, 0);

console.log(`Total items in stock: ${totalInStock}`);

console.log(`Total stock worth: $${totalWorth}`);

// If you now observe the output, you’ve got 37 items worth $24503 in stock at the moment.



// Let’s first compute the total quantity of items in stock by implementing the Array.reduce() method as shown below.

// Reducer function can take upto four arguments - accumulator, current value, current index, source array. Although not all of them are mandatory.



// What will be the following output?

var numbers = [15, 50, 25];
const addNumbers = (total, number) => total + number;
numbers.reduce(addNumbers);
console.log(addNumbers);


// What is the purpose of Array.some() method?

// Array.some() is used to check if the given callback function returns true for any element of an array.






// 