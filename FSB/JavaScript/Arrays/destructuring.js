"use strict";



// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

// What is an array?

// An array is a single variable that stores multiple elements. We can declare an array in two different ways, which 
// are:

const firstArray = ["JavaScript", "Python", "C++"];
console.log("firstArray : ", firstArray);

// and

const secondArray = new Array(3);
secondArray[0] = "JavaScript";
secondArray[1] = "Pythobn";
secondArray[2] = "C++";
console.log("secondArray : ", secondArray);



// Let's see how destructuring works in arrays and objects now.

// ex 1 :

let a, b, rest;

[a, b] = [10, 20];

console.log("ex 1 : output of a : ", a);

console.log("ex 1 : output of b : ", b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log("output of rest : ", rest);

let c, d, anotherRest;

[c, ,d] = [20, 30, 40, 50, 60];

console.log("output of c : ", c);

console.log("output of d : ", d);

[c, ,d, ...anotherRest] = [20, 30, 40, 50, 60];

console.log("output of anotherRest : ", anotherRest);



// The object and array literal expressions provide an easy way to create ad hoc packages of data.

// ex 2 : 

const x = [1, 2, 3, 4, 5, 6];

// The destructuring of assignments uses similar syntax,

const [y, z] = x;

console.log("output of y : ", y);

console.log("output of z : ", z);

// Source : array examples is getting from below link.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment



// ex 3 :

// const [var1, var2, ...] = arrayNameYouCreatedEarlier;

// The ellipses right after the var2 declared above simply means that we can create more variables depending on how many items we want to remove from the array.

// How to Assign Variables With Destructuring

// Now, let's say we have an array of 6 colors but we want to get just the first 2 colors in the array. We can use destructuring to get what we want.

// Let's take a look at it now:

const arrayColor = ["red", "green", "blue", "white", "yellow", "black"];

const [first, second] = arrayColor;

console.log("first element : ", first);

console.log("second element : ", second);

// When we run the above code, we should have red and yellow logged to the console. Awesome!



// Similarly, you can destructure objects on the left-hand side of the assignment.

// What is an objects in javascript?

// In javascripot objects is a collection of properties, and a property is an association between a name and a value.

// Writing an object in JavaScript looks somehow similar to an array, but instead we use curly braces or moustaches to create them. Let's look at the code below showing a car object with its properties:

const car = {
    name: "Toyota",
    color: "White",
    year: "1993",
    engineType: "Automatic"
}

// Notice that what makes up an object is a key followed by its value.

// Now that you know the basics of what JavaScript arrays and objects look like, let's talk more about destructuring.



// What is Destructuring in JavaScript?

// Imagine you want to pick out some shoes from your collection, and you want your favorite blue ones. The very first thing you have to do is to search through your collection and unpack whatever you have there.

// Now destructuring is just like that approach you took when looking for your shoes. Destructuring is the act of unpacking elements in an array or object.

// Destructuring not only allow us to unpack elements, it also gives you the power to manipulate and switch elements you unpacked depending on the type of operation you want to perform.

// Let's see how destructuring works in arrays and objects now.

// How to Swap Variables with Destructuring.

// Now that you know how to assign variables with destructuring, let's look at how you can use destructuring to quickly swap variable values.

// Say we have an array of two elements, "food" and "fruits", and we use destructuring to assign those values to the variables positionOne and positionTwo:

const edibles = ["food", "fruits"];

let [positionOne, positionTwo] = edibles;

console.log(positionOne, positionTwo);



// ex 4: 
const edibles1 = ["food", "fruits"];

let [position1, position2] = edibles1;
const temp = position1;

position1 = position2;
position2 = temp;
console.log(position1, position2);


// But with destructuring, we could swap the values of positionOne and positionTwo really easily, without having to use a temporary variable:

const edibles2 = ["food", "fruits"];

let [positionOne1, positionTwo2] = edibles;
[positionOne1, positionTwo2] = [positionTwo2, positionOne1];
console.log(positionOne1, positionTwo2);

// Note that this method of swapping variables doesn't mutate the original array. If you log edibles to the console, you'll see that its value is still ["food", "fruits"].

// Mutating means changing the form or value of an element. A value is said to be mutable if it can be changed. With the help of destructing in arrays, we can mutate arrays themselves.

// Say we have the same edibles array, and that we want to mutate the array by swapping the order of "food" and "fruits".

// We can do that with destructuring, similar to the way we swapped the values of two variables before:

const edibles3 = ["food", "fruits"];

[edibles3[0], edibles3[1]] = [edibles3[1], edibles3[0]];
console.log(edibles3);

// ["fruits", "food"]






// Destructuring in Objects

// When destructuring objects, we use curly braces with the exact name of what we have in the object. 
// Unlike in arrays where we can use any variable name to unpack the element, objects allow just the 
// use of the name of the stored data.

// Interestingly, we can manipulate and assign a variable name to the data we want to get from the object.
// Let's see all of that now in code.

// ex 5:
const freeCodeCamp = {
    frontend : "ReactJs",
    backend : "NodeJs",
    database : "MongoDB"
};

const {frontend, backend} = freeCodeCamp;

console.log("objects example 1 : ", frontend, backend);



// Logging what we have to the console shows the value of frontend and backend. Let's now see how to assign a variable
// name to the object we want to unpack.

const freeCodeCamp1 = {
    frontend1 : "ReactJs",
    backend1 : "NodeJs",
    database : "MongoDB",
}

const {frontend1 : courseOne, backend1 : courseTwo} = freeCodeCamp1;

console.log(courseOne, courseTwo);


// As you can see, we have courseOne and courseTwo as the names of the data we want to unpack.

// Assigning a variable name will always help us keep our code clean, especially when it comes to working
// with external data when we want to unpack and reuse it across our code.



// ex 6:

let restaurants = [
    {
        name: "The Bao Boat",
        category: "Oriental",
        city: "New York"
    },
    {
        name: "Imperial Dinner",
        category: "Continental",
        city: "Los Angelos"
    }
];

const findDetails = (name) => {
    let findPlace = restaurants.find(element => element.name === name);
    return findPlace ? [findPlace.category, findPlace.city] : [];
}

let [category, city] = findDetails("The Bao Boat");

console.log(`category : ${category}, city : ${city}`);



// ex 7:

let fruits = ["Apple", "Kiwi", "Straberry", "Fruits", "Mango"];

let [pie, smoothy, ...restOperator] = fruits;

console.log(`I love ${pie} pie`);

console.log(`Let's whip up a smoothy ${smoothy}`);

console.log("Remaining fruits : ", restOperator);




// ex 8 :

const weapons = `1,Red Orbs,240
2,Green Orbs,194
3,Yellow Orbs,154
4,Kill Machine,80`;

const displayWeapons = function (str) {

    const breakByLine = str.split("\n");

    for(const item of breakByLine) {
        const [id, weapon, cost] = item.split(",");
        console.log(`${weapon} costs $${cost}`);
    }

};

displayWeapons(weapons);

// Functions in JavaScript can only return a single value. In order to return multiple values, return values
// should be wither packed as elements of array or as properties of object.

// Rest(…) operator stores rest of the variables in the form of an array.






// Wrapping Up
// You've now learned how to work with destructing in arrays and objects. You've also learned how to switch the positions of elements in arrays.

// So what next? Try practicing and take your destructuring abilities to next level.



// .


