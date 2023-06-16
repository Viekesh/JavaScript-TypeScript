


// When you create a new Date object, you’re actually creating an object that inherits its properties from a Date prototype.



// What is Prototype?

// "In JavaScript, all objects inherit from a parent template known as a prototype". It is part of the javascript language standard.

// The simple logic behind the prototype is that it defines the methods and properties that should be available to all objects of that type.

// This makes it easy for you to simply create an object and get all the associated methods and properties automatically because they’re derived from this template known as a prototype.

// This is the same as saying that we design a prototype car first which is perfected and tested and its design is then used to mass-produce cars of that type. In this case, the features designed and implemented in the prototype are present in the manufactured cars.

// When the cars are exported to different countries, the base prototype is used as a foundation to implement changes as per country-specific rules and standards. But they’re all derived from a base prototype design.

// We also used loops to iterate over the contents of the array as we accessed its contents using the bracket notation.

// In all of this, we created arrays, mutated arrays, iterated over arrays, and accessed data in the arrays. But there is a whole lot more to arrays than meets the eye.

// You see, every Array that you create is based on the master Array.prototype that is part of the JavaScript standard.

// This prototype provides us with a lot of methods that we can use when working with arrays. 

// There are three core categories of built-in methods on the Array prototype that can be used with all instances of Arrays.

// 1. Accessor Method   2. Iteration Method   3. Mutator Method



// What do you mean by array accessor method?

// Array accessor methods are the methods which access the original array without modifying the original array and return the new modified array. For eg, concat, filter, slice etc.
// These are used to access the arrays without modifying or mutating the array itself.



// What do you mean by array iteration method?
// These are like loops specially designed for arrays and iterate for every element in the array. It can be used for processing array entities. Most of these function will not modify or mutate the original array but produce a new array with the modified contents.



// What do you mean by array mutator method?
// These are modify or mutate the original array. for ex. array.push() is a mutator method. that modifies the original array as it insert new element at the end.

