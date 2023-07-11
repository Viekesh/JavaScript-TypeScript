"use strict";



// In a reassignment operation involving primitive data types such as strings, numbers, and booleans, the original variable is copied by JavaScript.

// For example, consider the following code:

// ex 1 :

let x = 3
let y = x // x is copied into y
y++ // y is incremented
console.log(y) // now 4
console.log(x) // still 3

// In this case, the value 3 is copied into y, and then x is disconnected from y. So mutating y does not affect x.

// Conversely, with non-primitive data types like arrays and objects, only a reference to the values is passed. So when the copy is mutated, the original also gets mutated. This is also known as shallow copying.

// ex 2 :

let adam = { name: "Adam" };
let jason = adam;
jason.name = "Jason";
console.log(adam.name);  // outputs "Jason"
console.log(jason.name); // outputs "Jason"

// If we instead want to copy an object so that we can modify it without affecting the original object, we need to make a deep copy.

console.log("...");
console.log("...");
console.log("...");
console.log("...");
console.log("...");
console.log("...");



// 5 Ways to deep copy an object :

// In JavaScript, we can perform a copy on objects using the following methods:

// shallow copy with equal to ( = ) sign. It has clear and direct or you can say its a default feature of javascript but this method only create a shallow copy means it cannot copy a nested objects.

// json.stringify and json.parse by using this we can able to create deep copies and nested copies but it doesn't copy a functions

// Object.assign() it can copies the immediate members of an object such as functions but it doesn't deep copy nested objects.

// the ...spread operator is a simple syntax a preffered way to copy a object but it doesn't copy a nested objects (it cannot create a deep copy).

// lodash clonedeep() it can clones nested objects including functions and adds an external dependancy to your project.



// These methods all have their pros and cons. Let's take a closer look at each of them.

// Shallow Copy an Object by Assignment

// You can create a shallow copy of an object by simply assigning the original object to a new variable. 
// Consider the following object:

// ex 3:

const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer"
}

// To create a copy of the object user, we assign the object to a new variable like so:

const clone1 = user;

console.log(" ex 2 : user : ", user);

console.log(" ex 2 : clone1 : ", clone1);

// output :

// ex 2 : user :  { name: 'Kingsley', age: 28, job: 'Web Developer' }

// ex 2 : clone :  { name: 'Kingsley', age: 28, job: 'Web Developer' }

// As observed in the console output, we have now copied the object from user into clone1.

// However, all we did was create a reference to the original object. Whenever we mutate a property in the object clone, we'll also end up mutating the original object (user) as we do in the following code:

clone1.age = 30;

console.log("clone1 : ", clone1);

console.log("user : ", user);

console.log("...");
console.log("...");
console.log("...");
console.log("...");
console.log("...");
console.log("...");

// So when a non-primitive data type (array or object) is assigned to a new variable, JavaScript makes a shallow copy of the original object.



// Copy an Object With JSON.stringify() and JSON.parse()

// The JSON.stringify() method takes in an object and creates a JSON string from it. The JSON.parse() method parses a string and returns a JavaScript object.

// We can combine both of these methods to create a copy of an object in the following way:

// ex 4:

const user1 = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer"
};

console.log("ex4 : user1 :", user1);

let clone3 = JSON.stringify(user1);

console.log("ex4 : clone3 : ", clone3);

let clone2 = JSON.parse(JSON.stringify(user1));

console.log(user1);

console.log(clone2);

// When the copy object is mutated, the original object stays the same:

clone2.age = 32;
console.log(user1);
console.log(clone2);

console.log("...");
console.log("...");
console.log("...");
console.log("...");
console.log("...");
console.log("...");


// However, there is one caveat to using this approach: JSON.stringify() does not copy functions.

// Suppose we have a method in our object user called incrementAge:

const user33 = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer",
    incrementAge: function() {
  	  this.age++
    }
}

// The function will not be available in the copied object. Thus, this method achieves deep copy only if there is no function within the object.



// Copy an Object With Object.assign()
// Before ES6, Object.assign() was the most popular way to deep copy an object.

const user22 = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer",
    incrementAge: function() {
  	  this.age++
    }
}
let clone22 = Object.assign({}, user) // Copies user into clone

// Object.assign() will copy everything into the new object, including any functions. Mutating the copied object also doesn't affect the original object.

clone22.age = 32;
console.log(user22);
console.log(clone22);
/* 
{ 
age: 28, 
incrementAge: function() { 
this.age++ 
}, 
job: "Web Developer", 
name: "Kingsley" 
} 
{ 
age: 32, 
incrementAge: function() { 
this.age++ 
}, 
job: "Web Developer", 
name: "Kingsley" 
} 
*/

// However, one thing to remember about Object.assign() is that the method only performs a partial deep copy on objects.
// To understand what that means, let's consider the following:

const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer",
    location: {
      city: "Lagos",
    }
}
const clone = Object.assign({}, user)

console.log("...");
console.log("...");
console.log("...");
console.log("...");
console.log("...");
console.log("...");






// Copying an object seems like a simple task until you realize the way objects are stored in variables. We’ve studied this before. Objects are stored as references and not as literal values, so they cannot be reassigned in the same way as regular strings, numbers, or Boolean.

// In fact, when you have to make a copy of an object, you have two choices.

// For an object such as this where there are no nested objects, we can use shallow copying which can be done using Object.assign() or simply using the spread operator as we saw previously.

const roger = {
    name: "Rojer",
    age: 29,
    expertise: "full stack engineer",
    isEmployed: true,
}

const mrSimple = { ...roger };    // This is a shallow copy



// But what about an object such as this one?

// Remember how this would be stored in memory? So if we were to use the spread operator, the top-level properties and values would be cloned, but the nested objects would still be passed as references.

const book = {
    id: 203,
    title: "Object For Everyone",
    author: {
        userCode: 201,
        name: "John Smith",
        city: "New York",
        country: "US"
    },
    cost: 120,
    category: {
        primary: "books",
        category: "JavaScript",
    }
};

// So, what’s the solution? How can we deep copy or deep clone nested objects?

// To understand this go through the following code to get a true clone where nested objects and arrays have been used.

// object user with multiple nested objects including an array.

const User = {
    id: 1,
    name: 'Joe M',
    age: 20,

    //nested object
    home: {
        address: '121, Prive Lane, New Donutshire',
        city: 'Boston',
        state: 'MA',
        country: 'US',
        favColors: ['Red', 'Black'],

        //nested object
        loc: {
            lat: 61.2039,
            long: 34.2019,
        },
    },
};



// WRONG - we cannot clone this object using direct reassignment because variable joeM points to the same object as the constant ‘User’.
//const joeM = User;

// The spread operator allows us to create a true but shallow clone of the object.
//const joeM = { ...user };

// DEEP CLONE creates a true clone where nested objects are also cloned
const deepCopy = function (obj) {

    //instantiate a new object to which we’ll copy properties from the source.
    let tempObj = {};

    //At every iteration, set the temporary object to spread the existing properties and add the current property and its value.
    for (let key in obj) {
        tempObj = {
            ...tempObj,

            //computed properties syntax which allows us to generate a property name programmatically by using bracket notation
            [key]:

                // detect if the value is an object using a ternary and logical AND, if yes, recursively invoke the    deepCopy function so that its sub-objects are de-referenced and cloned.

                // detect if object is an Object or an array

                typeof obj[key] === 'object' && !Array.isArray(obj[key])
                    ? { ...deepCopy(obj[key]) }

                    // if array return shallow clone of array
                    : typeof obj[key] === 'object' && !Array.isArray(obj[key])
                        ? [...obj[key]]
                        : obj[key],
        };
    }

    return tempObj;
};



let joeM = deepCopy(User);

joeM.age = 22; // works, original object stays intact while the clone gets updated

// doesn't work, mutates as the original object is not the user object but the object that //user.home property points to

joeM.home.address = '157, Lotus Lane, Flowerville';
joeM.home.loc.lat = 63;
joeM.home.favColors = ['White'];


console.log('Original: ', User); // original object

console.log('Copy: ', joeM); // copy or clone

// Shallow copying doesn’t clone any nested objects which stay referenced to their parents.

// So the solution is to create a deep clone where all nested objects are converted to clones.






// Objects are referenced which is why they cannot be passed as literals when you want to create a clone. And when cloning objects, it becomes important to consider nested properties and arrays because they may still end up as references if not dealt with when cloning objects.

// This is where our deepCopy() function comes into play. Open the main.js file. You’ll see an object in the productA variable which details an Air Conditioner. We’re then attempting to pass productA to a variable product as a literal after which we’re mutating productB, the supposed clone.

// If you observe the output and the conclusion of the clone attempt (as computed by the Object.is() method which returns a true if both objects are the same or false if they’re clones), you’ll see that mutating productB actually mutated productA which is not what we wanted.

// To resolve this, create the deepCopy function as shown below in between the comments.

const productA = {
    category: 'Air Conditioners',
    brand: 'Samsung',
    model: 'XTR-15-5S',
    type: 'Split',
    cost: 1200,
    wiFiEnabled: false,
    details: {
        compressor: 'Tecumseh',
        capacity: 1.5,
        powerConsumption: 1200,
        type: 'Rotary',
    },
};

const deepCopy1 = function (obj) {
    let tempObj = {};
    for (let key in obj) {
        tempObj = {
            ...tempObj,
            [key]:
                typeof obj[key] === 'object' && !Array.isArray(obj[key])
                    ? { ...deepCopy1(obj[key]) }
                    : typeof obj[key] === 'object' && !Array.isArray(obj[key])
                        ? [...obj[key]]
                        : obj[key],
        };
    }

    return tempObj;
};

// let productB = productA;

let productB = deepCopy(productA);
productB.model = 'XJR-20W';
productB.type = 'Window';
productB.cost = 800;
productB.details.compressor = 'Samsung';

console.log(`Product A | Model: ${productA.model}`);
console.log(`Product A | Type: ${productA.type}`);
console.log(`Product A | Cost: ${productA.cost}`);
console.log(`Product A | Compressor: ${productA.details.compressor}`);

console.log(`Product B | Model: ${productB.model}`);
console.log(`Product B | Type: ${productB.type}`);
console.log(`Product B | Cost: ${productB.cost}`);
console.log(`Product B | Compressor: ${productB.details.compressor}`);
console.log(
    `CONCLUSION: ${Object.is(productA, productB)
        ? 'Both objects are still the same. productB has mutated productA'
        : 'productB is now a deep clone of productA'
    }`
);


// This function iterates through the object and uses the spread operator to create clones if the property holds an object or an array. We're ultimately using the spread operator here as we saw earlier in an example, however, this function produces a deep clone by traversing through the object and all possible nested objects/arrays to produce a true clone.

// Finally, modify the assignment to productB as shown below:

// let productB = deepCopy(productA);

// Observe the output of your code now and you’ll notice that both productA and productB are clones and not references to the same data structure.


// Object.assign() and spread operator both create shallow copies of object.

// Object.assign() and spread operator both create shallow copies of object while JSON.parse() and JSON.stringify() are used for creating deep copy of an object.

// Array.isArray() is used to check if the variable passed to it of type Array.


