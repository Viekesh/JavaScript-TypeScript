"use strict";



// The first question that might come to mind is ‘What are property descriptors?’ 

// Every property that exists on an object has a set of configurable settings that govern the behavior of the 
// property. 

// For example, in the code given below, we have an object user. Now, we can query the ‘name’ property of this 
// object by using a special built-in method named Object.getOwnPropertyDescriptor.

// When we run this, we see the internal property descriptors for the ‘name’ property of our object. You can see 
// the value that we have set, a setting called writable that specifies if we’re allowed to set and mutate this 
// value or not.

// The enumerable flag governs the visibility of the ‘name’ property if we were to use a loop such as for-in to 
// loop over the property names of the user object. If this is set to false, then the name property would be 
// hidden from view when being iterated over.

// Likewise, we’re able to delete the ‘name’ property by using the delete keyword. But if configurable is set to 
// false, you cannot delete the said property.

// Collectively these properties are known as data descriptors.

// Every property existing on an object has a set of configurable setting governing the behavior of the property.

// ex 1:

const user1 = {
    id: 1,
    name: "Joe",
    age: "30"
};

// console.log(`ex 1: ${Object.getOwnPropertyDescriptor(user1, "name")}`);

console.log("ex 1:", Object.getOwnPropertyDescriptor(user1, "name"));








// ex 2:

// What are the two most fundamental things that you can do with an object property? Typically, we either read the 
// property to access its value OR we set a value to the property. 

// We can also modify the defaults so as to customize how our object properties are accessed and set.  This is 
// made possible using the Object.defineProperty() method which allows you to configure or define one property at 
// a time.  Alternatively, the Object.defineProperties() can be used to configure or add multiple customized 
// properties at once. Object.defineProperties method, also allows us to hijack the behavior of getting and 
// setting values from object properties.

// Let us see a few examples of this.

// object that describes stock details

const tesla = {
    stIdx: 2013234,
    stName: 'TSLA',
    stCurrPrc: 836.16,
    stDetails: {
        name: 'TESLA, Inc',
        ceo: 'Elon Musk',
        hq: 'Paolo Alto, California, United States',
    }
}

// Object.definePropety on the tesla object and configure the stIdx property

Object.defineProperty(tesla, 'stIdx', {
    // making stdIdx read-only to prevent overriding its value
    writable: false,
});

//Creating a property named stExc.
Object.defineProperty(tesla, 'stExc', {
    value: 'NASDAQ',

    // property can be changed
    writable: true,

    // property cannot be enumerated
    enumerable: false,

    // property cannot be deleted
    configurable: false
});


// iterate through the property names
for(let i in tesla) {
    console.log(i);
};


let {
    stName : stock,
    stCurrPrc : value,
    stExc: exchange,
    stDetails: {
        name: company, ceo, hq
    },
} = tesla;

console.log(`ex 2: ${stock} is trading for $${value} on ${exchange}`);
console.log(`ex 2: ${company} is headquartered in ${hq} and headed by ${ceo}`);
    
// When an object is created, all data descriptors are set to true which means I can add/remove/mutate properties 
// and enumerate them when I iterate over an object.









// ex 3:

// The Object.defineProperty() and Object.defineProperties() methods allow us to define custom behavior for an 
// object’s properties. You can do everything from preventing enumeration which means the property will not show 
// up but would be accessible. You can also pre-set a value when the object is created and also define custom 
// getters and setters.

// This lets you treat your Object like a custom schema where all properties can be configured as needed. In this 
// exercise, let’s build a constructor function which produces a prototype object for a Car. You can set the 
// brand, model, transmission and color properties. On part of the object, the id property is pre-assigned and a 
// changelog array is populated with a log of changes automatically.

// Here You’ll notice a constructor function in place. If you see the terminal output, you will see properties 
// being populated and accessed. This is standard behavior since the constructor function merely instantiates an 
// empty object which we’re filling up and displaying on the terminal after iterating through its properties.

const Car = function () {
    let brand = '';
    let model = '';
    let transmission = '';
    let color = '';
    let changeLog = [];
    Object.defineProperties(this, {
        id: {
            enumerable: true,
            value: `CAR-012X-DB1`,
        },
        brand: {
            enumerable: true,
            set(val) {
                changeLog.push(`Brand changed to ${val}`);
                brand = val;
            },
            get() {
                return brand;
            },
        },
        model: {
            enumerable: true,
            set(val) {
                changeLog.push(`Model changed to ${val}`);
                model = val;
            },
            get() {
                return model;
            },
        },
        transmission: {
            enumerable: true,
            set(val) {
                changeLog.push(`Transmission changed to ${val}`);
                transmission = val;
            },
            get() {
                return transmission;
            },
        },
        color: {
            enumerable: true,
            set(val) {
                changeLog.push(`Color changed to ${val}`);
                color = val;
            },
            get() {
                return color;
            },
        },
        changeLog: {
            enumerable: false,
            get() {
                return changeLog;
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

console.log(Civic.changeLog);









// ex 4:

// constructor function to create instances of user objects with properties pre-configured.

const User2 = function() {
    // create a local variable inside the constructor function
    let name = '',
    age,
    
    // log of changes
    changes = [];

    // set and configure multiple properties on the "this" context object
    Object.defineProperties(this, {
        // generate a unique ID which is read-only
        id: {
            enumerable: true,
            value: `UID-${parseInt(Math.random() * 30000)}-XZ`,
        },

        name: {
            enumerable: true,

            // set value to name
            set(val) {

                // record log
                changes.push(`name set to ${val}`);
                name = val.toUpperCase();
            },

            get() {
                return name;
            },   
        },

        age: {
            enumerable: true,

            // set value to age
            set(val) {
                // record log
                changes.push(`age set to ${val}`);
                age = val;
            },

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

const Joe = new User2();

// set the properties
Joe.name = "Joe Mockery";
Joe.name = "Perry";
Joe.age = 25;
Joe.age = 27;

console.log("ex 4:", Joe.id, Joe.name, Joe.age);

for(const i in Joe) {
    console.log(Joe[i]);
}

// to see a log of changes that were applied
console.log(Joe.changes);


// The set function accepts a single argument which I can then set to the local ‘name’ variable like so.  This now 
// allows us to set a value to the name property as we’ve always done by typing object.property or joe.name in 
// this case and setting it to a value. 



// The combination of get and set functions are known as ‘accessor descriptors’ but the catch here is that you 
// cannot use data descriptors and accessor descriptors at the same time.



// So while enumerable and configurable are permitted, you cannot use writable or value properties if declaring 
// custom getter and setter functions. 



// The changes array can be used to create an undo mechanism, which allows us to roll back values or maintain a 
// log of changes.