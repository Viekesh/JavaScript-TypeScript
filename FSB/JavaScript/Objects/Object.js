"use strict";



// Just like the array prototype, objects are based on the object prototype which defines properties and methods that 
// are available on all objects.

// The object prototype provides methods that allow the composition of multiple objects, customizing properties, 
// enumerating properties, and accessor methods including a few others.

// But before we look at these methods, let’s recap and understand how objects are stored in a variable.

// A variable that seems to hold an object is just pointing to the object in memory.

// This is important to understand because if you reassign that variable to another variable, you’re just still 
// pointing to the same instance of the object. 

// This means that after reassignment if you try to modify or mutate a property of the supposed duplicate, you will end 
// up modifying the parent, the original object because they are same. 

// Observe this example where we have a nested object.

const book = {
    id: 203,
    title: 'Objects for Everyone',
    author: {
        userCode: 901,
        name: 'John Smith',
        city: 'New York',
        country: 'US'
    },
    cost: 120,
    category: {
        primary: 'books',
        subCategory: 'JavaScript'
    }
}

// In this case, the property that contains the nested object is also pointing to an object. So while it appears that 
// the nested object is an integral part of this object, it is in fact stored in the same fashion as any other object. 

// So, if you reassign this nested object somewhere else, both properties would point to the same object in memory. 
// This referential association is important to understand because mutations are dangerous.

// You’ve seen exactly the same behavior with arrays. Categorically speaking, arrays, objects, and functions are 
// classified under a common data type - objects.

// So what exactly is object mutation?

// So what exactly is object mutation?  

    // When you add a property to an object, you’re mutating the object. 
    // When you’re assigning a new value to an existing property on the object, you’re mutating the object. 
    // When you’re deleting a property, you’re mutating the object.

// And because objects are referenced when assigned to properties and variables, accidentally mutating an object can 
// have lasting consequences on all references.

// Imagine a function that mutates an object. In a large application, there is no way to trace where the mutation came from. We’ll address this issue as we go along and find solutions to prevent mutation-related issues.

// JSON which stands for JavaScript Object Notation is closely related to objects.

// JSON is a data-interchange format, which means that when your application has to talk to a server to send or fetch 
// some data, it can do so using the JSON format. The format is quite similar to objects, except that property names 
// are typically wrapped in double quotes. We’ll be working with the JSON format later in the course.



// Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we 
// explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.

const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet(); // Greetings from Madrid



// This is an object with one data property city and one method greet(). If you type the object's name followed by a period into the console, like myObject., then the console will pop up a list of all the properties available to this object. You'll see that as well as city and greet, there are lots of other properties!

// So, every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// Refer this from :
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// JSON stand for javascript object notation. It is easy to understand, light weight and is used to interchange data format.

// Properties in object can be accessed in three ways - objectName.property, objectName[‘property’], objectName[expression] where expression evaluates to property name

// In JavaScript, almost everything is an object. Date and Array objects inherit from Date.prototype and Array.prototype respectively