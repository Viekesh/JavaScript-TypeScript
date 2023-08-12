"use strict";


// To make our code more readable, concise and to avoid having to use multiple indexes to access the elements of an
// array then we can use destructuring assignment.

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

// Let's say we have an object that represents a user, with properties like name, age, and email. We can use 
// destructuring assignment to access these properties in a single line of code:

const user = {
    name: "Ronaldinho",
    profession: "Footballer",
    age: 43,
    email: "ron@football.com"
};

const { name, profession, email } = user;

console.log(name, profession, email);






// Let's say we have an array of numbers, and we want to create a new array with all the even numbers. We can use destructuring assignment to create the new array in a single line of code:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = () => {

    const en = [];

    numbers.forEach((e) => {
        if (e % 2 == 0) {
            en.push(e);
        }
    });

    console.log(en);
};

evenNumbers();






// An array is a single variable that stores multiple elements. We can declare an array in two different ways, which 
// are:

const tutorials1 = ["JavaScript", "Python", "C++"];
console.log("Here We Learn :", tutorials1);

// and

const tutorials2 = [];
tutorials2[0] = "MySql";
tutorials2[1] = "MongoDB";
tutorials2[2] = "PostgreSQL";
console.log("After that :", tutorials2);

// Now we can see how destructuring works with arrays :

let firstLanguage, SecLanguage, afterWeCome;
[firstLanguage, SecLanguage] = ["JavaScript", "Python", "C++", "MySQL", "MongoDB", "PostgreSQL"];
console.log(firstLanguage);
console.log(SecLanguage);

[firstLanguage, SecLanguage, ...afterWeCome] = ["JavaScript", "Python", "C++", "MySQL", "MongoDB", "PostgreSQL"];
console.log("After We Come On To :", afterWeCome);






// How to Assign Variables With Destructuring

// Now, let's say we have an array of 6 colors but we want to get just the first 2 colors in the array. We can use 
// destructuring to get what we want.

// Let's take a look at it now:

const arrayColor = ["red", "green", "blue", "white", "yellow", "black"];

const [first, second] = arrayColor;

console.log("first element : ", first);

console.log("second element : ", second);






// We have an array of two elements, "food" and "fruits", and we use destructuring to assign those values to the 
// variables positionOne and positionTwo:

const colorsOfRainbow1 = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Voilet"];
let [positionOne, positionTwo] = colorsOfRainbow1;
console.log(positionOne, positionTwo);

// let's take another example :

const colorsOfRainbow2 = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Voilet"];
let [position1, position2] = colorsOfRainbow2;
const temp = position1;

position1 = position2;
position2 = temp;
console.log(position1, position2);

// But with destructuring, we could swap the values of positionOne and positionTwo really easily, without having to 
// use a temporary variable:

const colorsOfRainbow3 = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Voilet"];

let [positionOne1, positionTwo2] = colorsOfRainbow3;
[positionOne1, positionTwo2] = [positionTwo2, positionOne1];
console.log(positionOne1, positionTwo2);
console.log(colorsOfRainbow3);

// Note that this method of swapping variables doesn't mutate the original array. If you log colorsOfRainbow3 to the 
// console, you'll see that its value is still ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Voilet"].

// Mutating means changing the form or value of an element. A value is said to be mutable if it can be changed. With 
// the help of destructing in arrays, we can mutate arrays themselves.

// We can do that with destructuring, similar to the way we swapped the values of two variables before:

const colorsOfRainbow4 = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Voilet"];
[colorsOfRainbow4[0], colorsOfRainbow4[1]] = [colorsOfRainbow4[2], colorsOfRainbow4[3]]
console.log(colorsOfRainbow4);






// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from 
// arrays, or properties from objects, into distinct variables. We’re once again working with the example where we 
// parsed comma separated text data. Let’s implement destructuring assignment to extract the id, weapon name and the
// cost directly.

const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

const displayWeapons = function (str) {
    const breakByLine = str.split('\n');
    for (const item of breakByLine) {
        const [id, weapon, cost] = item.split(',');
        console.log(`${weapon} costs $${cost}`);
    }
};

displayWeapons(weapons);






// The isLoading variable set to true indicates that our hypothetical app is loading data from a server. 
// Consequently, we’re not showing the user interface as is evident from the showUI being set to false. Logically 
// speaking, when data is downloaded, isLoading should be set to false while showUI should be set to true.

// This swapping of values can be easily done using the Destructuring assignment. By reassigning and swapping false 
// for true and true for false, we can flip the values quickly and easily, without giving much thought. This however 
// makes sense only when swapping values. 

// So isLoading will now get the value of showUI while showUI will now bear the current value of isLoading. As a 
// result, isLoading is now false and showUI is now true. 

let isLoading = true;

let showUI = false;

[isLoading, showUI] = [showUI, isLoading];

console.log("Is Loading :", isLoading);

console.log("Show UI :", showUI);






// Now destructuring is also useful in instances where a function returns multiple values. Usually, we’ve seen 
// functions returning a single value. But using arrays and objects multiple values can be returned in one shot.

let restaurants = [
    {
        name: "Radison Blue",
        category: "Oriental",
        city: "Nagpur"
    },
    {
        name: "Tuli International",
        category: "Continental",
        city: "Nagpur"
    },
];

const findDetails = (name) => {
    let findPlace = restaurants.find((elem) => elem.name === name);
    return findPlace ? [findPlace.name, findPlace.category, findPlace.city] : [];
};

let [name1, category, city ] = findDetails("Radison Blue");

console.log(`Name : ${name1}, Category : ${category}, City : ${city}`);

// Here we have two restaurant objects in an array. We want to get the category and city details given the name of the restaurant but we want them as separate variables from the get-go. 

// So, we create the function findDetails that accepts the name of a restaurant. Then we can use find to fetch the 
// restaurant from the array. 

// We will now use a ternary and if findPlace did return a value, then we’ll return back an array where the first 
// element is the category while the second one is the city.  

// If no restaurant is found, we’ll return an empty array to maintain consistency with the returned data structure. 

// It is now easy to directly extract category and city on the invocation of this function. Here, for the bao boat, we 
// get the category as oriental and city as new York easily. 

// You’ll find this pattern is used quite frequently in React applications.






// Functions in JavaScript can only return a single value. In order to return multiple values, return values should be wither packed as elements of array or as properties of object.

// Rest(…) operator stores rest of the variables in the form of an array.


// .