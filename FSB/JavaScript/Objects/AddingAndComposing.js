"use strict";



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

let { title, authors, cost, publisher } = {
    ...books,
    publisher: "Harber Torch",
    title: "Freakonomics 2021"
};

console.log(`${title} published by ${publisher} is written by ${authors.map((el) => el.name).join(" and ")} it costs $${cost}`);



// ex 2:

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

console.log(userDetails);


// spread operator is your best friend when you work with arrays and objects especially when building full stack javascript apps where objects are used all over the place.



// Objects are stored by reference which means that if you have to update a property’s value, you have to keep in mind that the object may have been referenced elsewhere in your code and it might affect some other part of the application inadvertently.

// Mutation is thus frowned upon especially when it comes to working with JavaScript libraries and frameworks like React. It is therefore important to prevent mutation when adding, updating or deleting properties from objects.

// The traditional way to prevent object mutation is to use Object.assign() to combine two or more objects in such a way that they’re not mutated. The spread operator provides an even easier syntax.

// Here you’ll see an array of objects named userDb where each object represents a freshly signed up user. We want to generate a password using the genPassword function and we want to add the contents of the userPriveleges.



// ex 3:

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

const genPassword = (name) =>
    name.replace("s", "-").toLowerCase().split("").reverse().join("");


// To achieve this, we’ll use Array.map() to iterate through and produce a new array of users where we’ll use the spread operator to compose and update properties. Add the following code to achieve the same and use console.log() to display the revised array on the terminal.

const configureUsers = userDb.map((user) => ({
    ...user,
    password: genPassword(user.name),
    ...userPriveleges,
}));

console.log("ex 3 : ", configureUsers);


// As you can see, the spread operator is extremely useful when you have to avoid mutation, update existing properties, add new properties and compose together two or more objects to produce a new object.

// Spread operator(…) can be used to add properties of object to other object.

// Spread operator can be used to compose objects.

// Object.assign() creates a shallow copy of objects.

