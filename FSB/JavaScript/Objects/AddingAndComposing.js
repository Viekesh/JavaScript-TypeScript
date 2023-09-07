"use strict";



// Ultimately it becomes a mess and you’re left wondering what happened and when. 

// Mutations happen when you add new properties to existing objects, update property values or when you want to compose 
// together multiple objects. 

// Thankfully, to save us from the dangers of mutation, we have the spread operator. 

// Consider the following example for adding and modifying properties

// ex 1:

const books = {
    id: 1,
    title: "Freakonomics",
    authors: [
        {
            authorCode: 210,
            name: "Steven D. Levitt"
        },
        {
            authorCode: 231,
            name: "Steven J. Dubner"
        },
    ],
    isbn10: "0-06-tsbn-jdkf",
    cost: 7.99,
};

// In the above code, we created a new object where we spread out the contents of the book object, and easily add on 
// new properties. This syntax is so amazing to work with that you’ll forget all your concerns about object mutation or 
// the reference nature of assignment to variables.

// What’s more, if you want to update the value of an existing variable. For instance, let’s say we want to update the 
// title to ‘Freakonomics 2021’, we can easily as follows.

let { title, authors, cost, publisher } = {
    ...books,
    publisher: "Harber Torch",
    title: "Freakonomics 2021"
};

console.log(`ex 1 : ${title} published by ${publisher} is written by ${authors.map((el) => el.name).join(" and ")} it costs $${cost}`);

// Here, because the updated property sits after the original object was spread out in the object, it is overridden, 
// and you get the updated value. So, use the spread operator to create a new object that composes over the original in 
// such a way that it doesn’t mutate the original.









// Alright, now consider the following example where we have two objects that need to be merged and composed together.

// ex 2:

const user2 = {
    id: 1,
    name: 'Joe Simmons',
    age: 23,
};

const banking2 = {
    accountType: 'Savings',
    accountNum: '01090110234897',
    bank: 'The Cloud Bank of Cayman Islands',
};
  
// Mutating by looping over the object to add to the target and dynamically add the properties.
// for (const obj in banking2) {
//     user2[obj] = banking2[obj];
// }
    
// console.log("ex 2:", user2);
    
// OLD METHOD
//let userDetails = Object.assign({}, user, banking);
//console.log(userDetails);
    
// NEW METHOD
let userDetails2 = {
    ...user2,
    ...banking2,
    email: 'joe@racketeer.co',
};

console.log("ex 2:", userDetails2);









// ex 3:

const user = {
    id: 1,
    name: "Joe Simmons",
    age: 23,
}

const banking = {
    accountType: "Saving",
    accountNum: 123456789,
    bankName: "The cloud bank of clayman islands",
}

// let userDetails = Object.assign({}, user, banking);

let userDetails = {
    ...user,
    ...banking,
    email: "joe@racketier.co",
    id: 2,
}

console.log("ex 3:", userDetails);

// spread operator is your best friend when you work with arrays and objects especially when building full stack 
// javascript apps where objects are used all over the place.



// Objects are stored by reference which means that if you have to update a property’s value, you have to keep in mind 
// that the object may have been referenced elsewhere in your code and it might affect some other part of the 
// application inadvertently.

// Mutation is thus frowned upon especially when it comes to working with JavaScript libraries and frameworks like 
// React. It is therefore important to prevent mutation when adding, updating or deleting properties from objects.

// The traditional way to prevent object mutation is to use Object.assign() to combine two or more objects in such a 
// way that they’re not mutated. The spread operator provides an even easier syntax.

// Here you’ll see an array of objects named userDb where each object represents a freshly signed up user. We want to 
// generate a password using the genPassword function and we want to add the contents of the userPriveleges.









// ex 4:

const userDb = [
    {
        id: 1,
        name: 'Dmitri Mishkov',
        email: 'dmitri.m@sprintserve.co',
        password: 'tempPass',
    },
    {
        id: 2,
        name: 'Jimmy McIntyre',
        email: 'jimmymc@whatmail.com',
        password: 'tempPass',
    },
    {
        id: 3,
        name: 'David Adams',
        email: 'adams@whatmail.com',
        password: 'tempPass',
    },
];

const userPriveleges = {
    profile: true,
    admin: false,
    billing: true,
};

const genPassword = (name) => name.replace("s", "-").toLowerCase().split("").reverse().join("");

// To achieve this, we’ll use Array.map() to iterate through and produce a new array of users where we’ll use the spread operator to compose and update properties. Add the following code to achieve the same and use console.log() to display the revised array on the terminal.

const configureUsers = userDb.map((user) => ({
    ...user,
    password: genPassword(user.name),
    ...userPriveleges,
}));

console.log("ex 4 : ", configureUsers);

// As you can see, the spread operator is extremely useful when you have to avoid mutation, update existing properties, add new properties and compose together two or more objects to produce a new object.

// Spread operator(…) can be used to add properties of object to other object.

// Spread operator can be used to compose objects.

// Object.assign() creates a shallow copy of objects.

