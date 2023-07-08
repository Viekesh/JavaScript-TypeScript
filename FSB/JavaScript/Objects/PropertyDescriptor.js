"use strict";


// The first question that might come to mind is ‘What are property descriptors?’ Every property that exists on an object has a set of configurable settings that govern the behavior of the property. 

// For example, in the code given below, we have an object user. Now, we can query the ‘name’ property of this object by using a special built-in method named Object.getOwnPropertyDescriptor. 

// ex 1:

const usr = {
    id: 1,
    name: "Joe M",
    age: 20,
}

console.log("ex 1 : ", Object.getOwnPropertyDescriptor(usr, "name"));

// When we run this, we see the internal property descriptors for the ‘name’ property of our object. You can see the value that we have set, a setting called writable that specifies if we’re allowed to set and mutate this value or not.


// output :
// {
//     value: "Joe M",
//     writable: true,
//     enumerable: true,
//     configurable: true
// 
// }

// The enumerable flag governs the visibility of the ‘name’ property if we were to use a loop such as for-in to loop over the property names of the user object. If this is set to false, then the name property would be hidden from view when being iterated over.

// likewise if we want to delete this "name" property then we delete this by using "delete" keyword. But if we set configurable false you cannot delete the name property of the object.

// Collectively these propeties that you see here are known as data descriptors.




// Modify default properties :

//  What are the two most fundamental things that you can do with an object property? Typically, we either read the property to access its value OR we set a value to the property. 

// We can also modify the defaults so as to customize how our object properties are accessed and set.  This is made possible using the Object.defineProperty() method which allows you to configure or define one property at a time.  Alternatively, the Object.defineProperties() can be used to configure or add multiple customized properties at once. Object.defineProperties method, also allows us to hijack the behavior of getting and setting values from object properties.

// Let us see a few examples of this.

// ex 2:

// object that describes stock details
const tsla = {
    stIdx: 2013234,
    stName: 'TSLA',
    stCurrPrc: 836.16,
    stDetails: {
        name: 'TESLA, Inc',
        ceo: 'Elon Musk',
        hq: 'Paolo Alto, California, United States',
    },
};

// Here we have an object that describes stock details and we have also extracting the id stored in the stIndx property and we are displaying that as well. Also being extracted is a property called stExc which actually doesn't exist on the object yet. (see line no. 68).

// When an object are created all data descriptors are set to true whcih means we can add remove mutate and enumerate them when we iterate over an object. This also means we can overwrite the property value. We deliberately setting the stIdx property to zero this might be harmful for your data because we are damaging a record by overriding it's value which in a real world situation might have come from a database or a remote service.

tsla.stIdx = 0;

// To prevent this we can use "Object.defineProperty()" on the "tesla" object and configure the stIndx property as shown below :

//Object.defineProperty on the tsla object and configure the stIdx property
Object.defineProperty(tsla, 'stIdx', {
    writable: false, // making stdIdx read-only to prevent overriding its value
});

// The third parameter here excepts an object where I can configure our data descriptors 

Object.defineProperty(tsla, "stExch", {
    value: "NASDAQ",
    writable: true, // property can be changed
    enumerable: false, // //property cannot be enumerated
    configurable: false, //property cannot be deleted
});


//iterate through the property names

for (let i in tsla) {
    console.log(i);
}

// delete tesla.stExch
// we unable to delete this because a property name configurable is set to false by default when using Object.define property 

let {
    stIdx: id,
    stName: stock,
    stCurrPrc: value,
    stExch: exchange,
    stDetails: { name: company, ceo, hq },
} = tsla;

console.log(`ex 2: ID : ${id}`);

console.log(`${stock} is trading for $${value}`);

console.log(`${company} is headquartered in ${hq} and headed by ceo ${ceo}`);






// ex 3 :

// constructor function to create instances of user objects with properties pre-configured.

const User = function () {

    //create a local variable inside the constructor function
    let name = "",
        age,
        changes = [];     // log of changes

    //set and configure multiple properties on the ‘this’ context object
    Object.defineProperties(this, {
        id: {
            enumerable: true,   // generate a unique id which is read only
            value: `UID ${parseInt(Math.random() * 30000)} - XZ`,
        },

        name: {
            enumerable: true,

            // set value to name
            set(val) {
                changes.push(`name set to ${val}`); //record log
                name = val.toUpperCase();
            },

            // get name
            get() {
                return name;
            },
        },

        age: {
            enumerable: true,

            // set value to age
            set(val) {
                changes.push(`age set to ${val}`); //record log
                age = val;
            },

            //get age
            get() {
                return age;
            },
        },

        changes: {
            configurable: false,

            // get log of changes

            get() {
                return changes;
            },
        },
    });
};

const joe = new User();

//set the properties
joe.name = 'Joe Mockery';
joe.name = 'Perry';
joe.age = 25;
joe.age = 27;

//console.log(joe.id, joe.name, joe.age);

for (const i in joe) {
    console.log(joe[i]);
}
console.log(joe.changes); //to see a log of changes that were applied



// The set function accepts a single argument which I can then set to the local ‘name’ variable like so.  This now allows us to set a value to the name property as we’ve always done by typing object.property or joe.name in this case and setting it to a value. 

// The combination of get and set functions are known as ‘accessor descriptors’ but the catch here is that you cannot use data descriptors and accessor descriptors at the same time.

// So while enumerable and configurable are permitted, you cannot use writable or value properties if declaring custom getter and setter functions. 

// The changes array can be used to create an undo mechanism, which allows us to roll back values or maintain a log of changes.






// The Object.defineProperty() and Object.defineProperties() methods allow us to define custom behavior for an object’s properties. You can do everything from preventing enumeration which means the property will not show up but would be accessible. You can also pre-set a value when the object is created and also define custom getters and setters.

// This lets you treat your Object like a custom schema where all properties can be configured as needed. In this exercise, let’s build a constructor function which produces a prototype object for a Car. You can set the brand, model, transmission and color properties. On part of the object, the id property is pre-assigned and a changelog array is populated with a log of changes automatically.

// You’ll notice a constructor function in place. If you see the terminal output, you will see properties being populated and accessed. This is standard behavior since the constructor function merely instantiates an empty object which we’re filling up and displaying on the terminal after iterating through its properties.

// const Car = function () {};

// const Civic = new Car();

// To customize each property, rewrite the Car constructor function implementing Object.defineProperties() as shown below.

// const Car = function () {
//     let brand = "";
//     let model = "";
//     let transmission = "";
//     let color = "";
//     let changelog = [];

//     Object.defineProperties(this, {
//         id: {
//             enumerable: true,
//             value: `CAR-012X-DB1`,
//         },
//         brand: {
//             enumerable: false,
//             set(val) {
//                 changelog.push(`Brand change to ${val}`);
//                 brand = val;
//             },
//             get() {
//                 return brand;
//             },
//         },
//         model: {
//             enumerable: true,
//             set(val) {
//                 changelog.push(`Model change to ${val}`);
//                 model = val;
//             },
//             get() {
//                 return model;
//             },
//         },
//         transmission: {
//             enumerable: true,
//             set(val) {
//                 changelog.push(`Transmission change to ${val}`);
//                 transmission = val;
//             },
//             get() {
//                 return transmission;
//             },
//         },
//         color: {
//             enumerable: true,
//             set(val) {
//                 changelog.push(`Color change to ${val}`);
//                 color = val;
//             },
//             get() {
//                 return color;
//             },
//         },
//         changelog: {
//             enumerable: false,
//             get() {
//                 return changelog;
//             },
//         },
//     });
// };

// const Civic = new Car();

// Civic.brand = 'Honda';
// Civic.model = 'Civic';
// Civic.transmission = 'AT';
// Civic.color = 'Galaxy Grey';

// Civic.model = 'Civic 1.8S';
// Civic.color = 'Pearl White';

// for (let prop in Civic) {
//     console.log(`${prop}: ${Civic[prop]}`);
// }

// console.log(Civic.changeLog);


// That’s it. Observe the output on the console. You’ll notice the id field is pre-populated even though we did not set it + a changelog tells us the range of mutations that this object has gone through.



// Object.defineProperty() is used to create new property on object or to modify existing property of object.

// What will be the output of following program?
// const obj1 = {};
// Object.defineProperty(obj1, 'property1', {
//   value: 72,
//   writable: false
// });
// obj1.property1 = 44;
// console.log(obj1.property1);


// The Object.defineProperty or properties are amazing methods that allow you to get a rock-solid control over your object and its properties.