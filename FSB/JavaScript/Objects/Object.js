"use strict";


// Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.


const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet(); // Greetings from Madrid


// This is an object with one data property, city, and one method, greet(). If you type the object's name followed by a period into the console, like myObject., then the console will pop up a list of all the properties available to this object. You'll see that as well as city and greet, there are lots of other properties!

// So, every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// Refer this from :
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes


// JSON stand for javascript object notation. It is easy to understand, light weight and is used to interchange data format.

// Properties in object can be accessed in three ways - objectName.property, objectName[‘property’], objectName[expression] where expression evaluates to property name

// In JavaScript, almost everything is an object. Date and Array objects inherit from Date.prototype and Array.prototype respectively