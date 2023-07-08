"use strict";



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



// WRONG - we cannot clone this object using direct reassignment because variable //joeM points to the same object as the constant ‘User’.
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


