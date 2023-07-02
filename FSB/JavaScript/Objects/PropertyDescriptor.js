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

for(let i in tesla) {
    console.log(i);
}

// delete tesla.stExch
// we unable to delete this because a property name configurable is set to false by default when using Object.define property 

let {
    stIndx: id,
    stName: stock,
    stCurrPrc: value,
    stExch: exchange,
    stDetails: {name: company, ceo, hq},
} = tesla;

console.log(`ex 2: ID : ${id}`);

console.log(`${stock} is trading for $${value}`);

console.log(`${company} is headquartered in ${hq} and headed by ceo ${ceo}`);



// ex 3:

const usr = function() {

    let name = "";

    age, changes = [];

    Object.defineProperties(this, {
        id: {
            enumerable: true,
            value: `UID - ${parseInt(Math.random() * 30000 )} - XZ`,
        },
        name: {
            enumerable: true,
            get() {
                return name;
            },
            set(val) {
                changes.push(`name set to ${val}`),
                name = val.toUpperCase(),
            }
        },

        age: {
            enumerable: true,
            get() {
                return age;
            },
            set(val) {
                changes.push(`age set to ${val}`),
                age = val;
            },
        },
        changes: {
            enumerable: false,
            get() {
                return changes.toString();
            }
        }
    });
};

let joe = new usr();

joe.name = "Joe Mockery";

joe.age = 20;

console.log(joe.id, joe.name, joe.age);

