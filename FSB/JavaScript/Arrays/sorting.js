"use strict";



// The sort method sorts an array alphabetically.

// ex 1:

const fruits = ["banana", "kiwi", "guava", "grapes", "orange"];

console.log(fruits);

const afterSort = fruits.sort();

console.log("after using sort function :", afterSort);

// The reverse() method reverses the elements in an array. You can use it to sort an array in descending order:

console.log("after using reverse function", afterSort.reverse());









// ex 2 :

// Arrays can be sorted in place using the Array.sort() method which implements a sorting function that allows you to 
// express the sorting logic manually. So let’s work through an example to understand how the sort method works.

// Notice an array named "perfumes" which contains a bunch of perfume brands along with their cost. Our job is to find 
// the most expensive and the cheapest of these perfumes.

const perfumes = [
    {
        id: 1,
        brand: 'Fruity by Kiwi 50ml',
        cost: 300,
    },
    {
        id: 2,
        brand: 'Silly Smelly',
        cost: 575,
    },
    {
        id: 3,
        brand: 'Ocean Mist by Ventuo',
        cost: 1243,
    },
    {
        id: 4,
        brand: 'Spotlight',
        cost: 991,
    },
    {
        id: 5,
        brand: 'Horrendous by Britney',
        cost: 230,
    },
];

// This line of code defines a constant called perfumes that holds an array of 5 perfume objects. The objects have the 
// following properties:

    // id : It is the unique identifier of the perfume

    // brand : It is the name of the brand

    // cost : It is the cost of each brand property

// This can be done by sorting the two arrays in ascending and descending order by the cost property and then accessing the first element that features in the sorted arrays.

// We have two constants named mostExpensive and cheapest where the sorting function needs to be implemented. At present, they’re set to a blank object which is reflected in the undefined values showing up in the output.

// So, let’s find out the most expensive perfume first by implementing the Array.sort() method.

// const mostExpensive = [...perfumes].sort((a, b) => b.cost - a.cost)[0];

const mostExpensive = [...perfumes].sort((a, b) => {
    const eleA = a;
    console.log("most expensive a :", eleA);
    const eleB = b;
    console.log("most expensive b :", eleB);
    const subtractionOfAAndB = b.cost - a.cost;
    // console.log(subtractionOfAAndB);
    return subtractionOfAAndB;
    // return eleA, eleB, subtractionOfAAndB;
})[0];

// This line of code defines a constant called "mostExpensive" that holds the most expensive perfume from the perfumes array. The sort() method is used to sort the array in descending order by the cost property. The [0] index of the sorted array is the most expensive perfume.

const cheapest = [...perfumes].sort((a, b) => a.cost - b.cost)[0];

console.log(`Most Expensive : ${mostExpensive.brand} at ${mostExpensive.cost}`);

console.log(`cheapest : ${cheapest.brand} at ${cheapest.cost}`);


// Array.sort() method can be used to sort arrays whose elements are of type string/number/other. However, we need additional logic for sort arrays whose data type is other than string. 

// Array.sort() provides out of box functionality to sort arrays whose elements are of type string

// Array.sort() expects a comparison function as an argument using which the numeric array can be sorted. Here b - a is provided, which means the array will be sorted in descending order.

// Array.sort() sorts an array in place. This method mutates the array and returns a reference to the same array.









// Numeric Sort

// By default, the sort() function sorts values as strings. This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers. You can fix this by providing a compare function:

// ex 3 :

const points = [30, 50, 40, 100, 90, 400];

console.log("points : ", points);

points.sort(function(a, b) {return a - b});

console.log("ex 3: after sorting points : ", points);









// ex 4 :

const months = ["Dec", "Feb", "Jan", "Apr"];

console.log("months : ", months);

months.sort();

console.log("months after sort", months);









// ex 5 :

const num1 = [3, 44, 29, 89, 100, 23];

console.log("num 1 : ", num1);

num1.sort();

console.log("after sorted", num1);


