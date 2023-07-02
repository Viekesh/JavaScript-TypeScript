"use strict";



// ex 1:

const user = {
    id: 1,
    name: "Joe M",
    age: 20,
}

console.log(Object.getOwnPropertyDescriptor(user, "name"));



// ex 2:

const tesla = {
    stIndx: 2013234,
    stName: "TSLA",
    stCurrPrc: 836.60,
    stExch: "NASDAQ",
    stDetails: {
        name: "Tesla, Inc",
        ceo: "Elon Musk",
        hq: "Paolo Alto, California, United States",
    },
}

Object.defineProperty(tesla, "stIdx", {
    writable: false,
});

Object.defineProperty(tesla, "stExch", {
    value: "NASDAQ",
    writable: true,
    enumerable: false,
});

for (let i in tesla) {
    console.log(i);
}

// delete tesla.stExch
// we unable to delete this because a property name configurable is set to false by default when using Object.define property 

let {
    stIndx: id,
    stName: stock,
    stCurrPrc: value,
    stExch: exchange,
    stDetails: { name: company, ceo, hq },
} = tesla;

console.log(`ex 2: ID : ${id}`);

console.log(`${stock} is trading for $${value}`);

console.log(`${company} is headquartered in ${hq} and headed by ceo ${ceo}`);



// ex 3:

// const usr = function() {

//     let name = "";

//     age, changes = [];

//     Object.defineProperties(this, {
//         id: {
//             enumerable: true,
//             value: `UID - ${parseInt(Math.random() * 30000 )} - XZ`,
//         },
//         name: {
//             enumerable: true,
//             get() {
//                 return name;
//             },
//             set(val) {
//                 changes.push(`name set to ${val}`);
//                 name = val.toUpperCase();
//             }
//         },

//         age: {
//             enumerable: true,
//             get() {
//                 return age;
//             },
//             set(val) {
//                 changes.push(`age set to ${val}`),
//                 age = val;
//             },
//         },
//         changes: {
//             enumerable: false,
//             get() {
//                 return changes.toString();
//             }
//         }
//     });
// };

// let joe = new usr();

// joe.name = "Joe Mockery";

// joe.age = 20;

// console.log(joe.id, joe.name, joe.age);





// The Object.defineProperty() and Object.defineProperties() methods allow us to define custom behavior for an object’s properties. You can do everything from preventing enumeration which means the property will not show up but would be accessible. You can also pre-set a value when the object is created and also define custom getters and setters.

// This lets you treat your Object like a custom schema where all properties can be configured as needed. In this exercise, let’s build a constructor function which produces a prototype object for a Car. You can set the brand, model, transmission and color properties. On part of the object, the id property is pre-assigned and a changelog array is populated with a log of changes automatically.

// You’ll notice a constructor function in place. If you see the terminal output, you will see properties being populated and accessed. This is standard behavior since the constructor function merely instantiates an empty object which we’re filling up and displaying on the terminal after iterating through its properties.

// const Car = function () {};

// const Civic = new Car();

// To customize each property, rewrite the Car constructor function implementing Object.defineProperties() as shown below.

const Car = function () {
    let brand = "";
    let model = "";
    let transmission = "";
    let color = "";
    let changelog = [];

    Object.defineProperties(this, {
        id: {
            enumerable: true,
            value: `CAR-012X-DB1`,
        },
        brand: {
            enumerable: false,
            set(val) {
                changelog.push(`Brand change to ${val}`);
                brand = val;
            },
            get() {
                return brand;
            },
        },
        model: {
            enumerable: true,
            set(val) {
                changelog.push(`Model change to ${val}`);
                model = val;
            },
            get() {
                return model;
            },
        },
        transmission: {
            enumerable: true,
            set(val) {
                changelog.push(`Transmission change to ${val}`);
                transmission = val;
            },
            get() {
                return transmission;
            },
        },
        color: {
            enumerable: true,
            set(val) {
                changelog.push(`Color change to ${val}`);
                color = val;
            },
            get() {
                return color;
            },
        },
        changelog: {
            enumerable: false,
            get() {
                return changelog;
            },
        },
    });
};

const Civic = new Car();

Civic.brand = 'Honda';
Civic.model = 'Civic';
Civic.transmission = 'AT';
Civic.color = 'Galaxy Grey';

Civic.model = 'Civic 1.8S';
Civic.color = 'Pearl White';

for (let prop in Civic) {
    console.log(`${prop}: ${Civic[prop]}`);
}

// console.log(Civic.changeLog);


// That’s it. Observe the output on the console. You’ll notice the id field is pre-populated even though we did not set it + a changelog tells us the range of mutations that this object has gone through.



// Object.defineProperty() is used to create new property on object or to modify existing property of object.

// What will be the output of following program?
const obj1 = {};
Object.defineProperty(obj1, 'property1', {
  value: 72,
  writable: false
});
obj1.property1 = 44;
console.log(obj1.property1);