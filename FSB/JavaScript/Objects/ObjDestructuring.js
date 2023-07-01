"use strict";



// ex 1:

const { title, publisher, authors, cost } = {
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
    publisher: "Harber Torch",
    isbn10: "0-06-tsbn-jdkf",
    cost: 7.99,
};


// The usual way to access the property is dot or bracket notation.

// console.log(books.title);

// console.log(books["publisher"]);

// But we can also use destructuring assignment like this.

// Here we create four variables {title, publisher, authors and cost} and this will allows you to access object property directly.

// It's not this super quick and simple?

// yes offcourse...

// We can then use the values like so...

console.log(`${title} is published by ${publisher} and its written by ${authors.map((el) => el.name)}. Its costs is ${cost}`);



// ex 2:

// const tesla = {
//     stIndx: 2013234,
//     stName: "TSLA",
//     stCurrPrc: 836.60,
//     stExch: "NASDAQ",
//     stDetails: {
//         name: "Tesla, Inc",
//         ceo: "Elon Musk",
//         hq: "Paolo Alto, California, United States",
//     },
// }

// let {
//     stName: Stock,
//     stCurrPrc: Value,
//     stExch: Exchange,
//     stDetails: {
//         // name: company, ceo, hq
//         name: company,
//         ceo: CEO,
//         hq: HeadQuatered
//     },
//     ...rest
// } = tesla;

// console.log(`${Stock} is trading for $${Value} on ${Exchange}`);

// console.log(`${company} is headquartered in ${hq} and headed by ${ceo}`);

// console.log(`${company} is headquartered in ${HeadQuatered} and headed by ${CEO}`);

// console.log("When use rest operator : ", rest);



// Destructuring assignment allows you to assign the properties of an object to variables using syntax that looks similar to object literals.

// By using the Destructuring assignment syntax, it becomes really easy to directly pluck out specific properties from an object without needing to access them using the dot or bracket syntax as is the convention.

// Let’s work with Destructuring assignment to fetch data from an object. Here you’ll see an object representing stock data for Apple Inc. Below that is a try and catch block with a console.log statement that produces a formatted statement on the terminal from properties in the object.


// ex 3:

const apple = {
    id: 209891,
    company: 'Apple Inc',
    exchange: 'NASDAQ',
    symbol: 'AAPL',
    currPrice: 120.07,
    details: {
        ceo: 'Tim Cook',
        hq: 'Cupertino, California, US',
    },
};


// Your task is to use Destructuring assignment to fetch these properties directly from the object.

// To achieve this, type in the following code.


const {
    company: company,
    exchange: exchange,
    currPrice: currPrice,
    details: { ceo },
} = apple;

try {
    console.log(
        `${company} headed by ${ceo} was trading for $${currPrice} on ${exchange}`
    );
} catch (error) {
    console.log('Stock data could not be accessed...');
}



// ex 4:

// What will be the output of following?
const obj = {
    titl: 'javascript',
    type: 'language'
}
const { titl, type } = obj
console.log("ex 4 : ", titl, type)

// Destructuring assignment is used to unpack objects into bunch of variables. While unpacking objects, the name of the variables should match the keys in the object



// How to unpack object properties using destructuring assignment?

// Have same variable names as that of property names in object and make use to curly braces to destructure object.

// Object destructuring is a way of extracting all properties of object with the help of curly braces by assigning the same names to variables as that of property names.






// 