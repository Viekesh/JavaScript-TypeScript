"use strict";



// Accessing values from objects is something that isn’t rocket science.   

// In this topic, we will learn about Object.keys(), Object.values(), and Object.entries() methods that convert objects to arrays so that we can access properties and values intuitively and are also able to use Array methods easily. 

// So, let’s quickly run through these methods.


// Object.keys

// It produces an array of property names from objects and detects the presence of a property. You can also use this to loop over an object by chaining together a forEach and then using the property name to access the values.


// Object.values

// It works in the same fashion as Object.keys but provides an array of values rather than property names.


// Object.entries

// It takes a property name and convert it into an nested associative element where element 0 will be the property name while element 1 would be the value. This means we use a for...of loop to access an object, use destructuring to access the key and values and uses data as needed as we have direct access to both.


// Here is an example to understand these methods in a better way.

const user = {
    id: 1,
    name: 'Joe M',
    age: 20,
    address: '121, Prive Lane, New Donutshire',
    city: 'Boston',
    state: 'MA',
    country: 'US',
};

// Object.keys()
const findKey = (val, obj) => Object.keys(obj).includes(val);
console.log(findKey('city', user));

// Object.values() findVal takes a value and an object and confirms the presence of the value.
const findValue = (val, obj) => Object.values(obj).includes(val);
console.log(findValue('Joe M', user));

// Object.entries()
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}

// Refactoring deepCopy
const deepCopy = function (obj) {
    let tempObj = {};

    // provides direct access to the property names and values from the object
    for (let [key, value] of Object.entries(obj)) {
        tempObj = {
            ...tempObj,
            [key]:

                // value variable instead of bracket notation makes the function readable and simpler
                typeof value === 'object' && !Array.isArray(value)
                    ? { ...deepCopy(value) }
                    : typeof value === 'object' && !Array.isArray(value)
                        ? [...value]
                        : value,
        };
    }

    return tempObj;
};

let joeM = deepCopy(user);
console.log(joeM);






// An object’s properties can be accessed in multiple ways. You’ve already used the dot and bracket notation. Let’s check out three more ways to access properties and values.

// Specifically we’ll investigate the use of Object.keys() which produces an array of property names, Object.values() which produces an array of values and Object.entries() which produces an array of arrays with key-values as the first and second element.

// We have a very simple object representing a book titled ‘Contact’, which incidentally is an amazing science fiction as well.

// We’ll first try to ask the question - Does the book object contain a property named ‘isbn’? To answer this question, we’ll use the Object.keys() method to convert property names to an array and then we’ll use the Array.includes() method to detect the presence of the ‘isbn’ property. Add the following code to make this happen.

const book = {
    isbn: '0-671-00410-7',
    title: 'Contact',
    author: 'Carl Sagan',
    publisher: 'Pocket Books',
};

const findKey1 = (val, obj) => Object.keys(obj).includes(val);
console.log(`ISBN: ${findKey1('isbn', book) ? 'Yes' : 'No'}`);



// Next up, we want to ask the question - Did Carl Sagan write the book?. This time, we want to investigate the object by value. We do not know the property name but we only know the value as ‘Carl Sagan’. In this case, Object.values() allows us to convert an object’s values to an array and we can then use Array.includes() on it. Add the following function to make this happen. 

const findValue2 = (val, obj) => Object.values(obj).includes(val);
console.log(
    `Did Carl Sagan write the book? ${findValue2('Carl Sagan', book) ? 'Yes' : 'No'
    }`
);

// Finally, we want to iterate over the book object like an Array as we access key-value pairs. In this case, we’ll use Object.entries() to convert the object into an associative array before using the for-of loop to iterate, access and display property and values on the console.


for (const [key, value] of Object.entries(book)) {
    console.log(`${key}: ${value}`);
}


// That’s it. You’ve just learned three new ways to access properties and values of an object.


// What does object.keys() do?

// Object.keys() returns the names of the enumerable string properties and methods of an object.



// What does Object.values() do?

// Object.values() returns the array containing all the values of an object.



// What does Object.entries() do?

// Object.entries() returns the array containing all the key-value pairs of an object.


// What will be the output of the following code block?
const obj = {
    language: 'JavaScript'
}
console.log(Object.values(obj))

// Object.values() returns the array containing all the values of an object.



// .