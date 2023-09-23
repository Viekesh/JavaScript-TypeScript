"use strict";



// A while back we saw the use of the Object.defineProperty() method for modifying properties or configuring 
// existing properties to set their data descriptors.   

// We saw how setting writable to false and configurable to false meant that mutations could be prevented and 
// properties could be secured from deletion.   

// JavaScript also offers two specialized methods that can help us secure objects.


// Object.seal()

// The Object.seal() method prevents new properties from being added to an object and it also sets all properties 
// as non-configurable which means you cannot delete any properties. That said, you can still mutate their value. 
// This is great when you do not want the shape of the object to be changed.


// Object.freeze()

// The Object.freeze() method completely freezes the object which means that you can neither mutate values nor add 
// or remove properties or any other thing. 
// Frozen objects including arrays are extremely useful in situations where you do not want accidental data or 
// shape mutation in any way.


// Both Object.seal and Object.freeze work on objects which technically means both Arrays and Objects.
// In the following code, we have an object, which we are displaying and mutating.


const user = {
    id: 1,
    name: 'Joe M',
    age: 20,
    home: {
        address: '121, Prive Lane, New Donutshire',
        city: 'Boston',
        state: 'MA',
        country: 'US',
        favColors: ['Red', 'Black'],
        loc: {
            lat: 61.2039,
            long: 34.2019,
        },
    },
};

// Seal the object to mutate the values but not add top-level properties or nested object propeties
const deepSeal = (obj) => {
    Object.values(obj).forEach(
        (elem) => typeof elem === 'object' && deepSeal(elem)
    );

    //Object.isSealed  checks if the object is already sealed
    return !Object.isSealed(obj) && Object.seal(obj);
};

//completely freeze and lock off the object from any modification, be it structural or data.
const deepFreeze = (obj) => {
    Object.values(obj).forEach(
        (elem) => typeof elem === 'object' && deepFreeze(elem)
    );

    return !Object.isFrozen(obj) && Object.freeze(obj);
};

console.log(user);



// It is quite easy for one part of your application to overwrite the contents of an object that was created or stored elsewhere in your application. Data that must not be mutated must be secured, which is why we have the Object.seal() and Object.freeze() methods. Out of these, we’ll see the impact of the Object.freeze() method in this simple exercise.


// If you observe the output of the exercise and compare it with the contents of the main.js file, you’ll see our book object has been overwritten maliciously and a function has been injected in and executed. All content is now lost.

// This object has been hacked!

// undefined
// {
//   isbn: null,
//   title: null,
//   author: null,
//   publisher: 'Hacked',
//   intro: [Function (anonymous)]
// }

const book = {
    isbn: '0-671-00410-7',
    title: 'Contact',
    author: 'Carl Sagan',
    publisher: 'Pocket Books',
};

// Our job is to secure the book object. This is as easy as the following statement which should be put before the 
// try block begins.

Object.freeze(book);

try {
    book.isbn = null;
    book.title = null;
    book.author = null;
    book.publisher = 'Hacked';
    book.intro = function () {
        console.log('This object has been hacked!');
    };

    console.log(book.intro());
} catch (e) {
    console.log(e.message);
} finally {
    console.log(book);
}

// If you now observe the output of the application, you should get something like this:
// Cannot assign to read only property 'isbn' of object

// '#<Object>'
// {
//     isbn: '0-671-00410-7',
//     title: 'Contact',
//     author: 'Carl Sagan',
//     publisher: 'Pocket Books'
// }


// The key thing to observe after the Object.freeze() is that our object is intact, no properties were mutated, and no new properties were entertained. This is critical when working with object-based data that must be preserved.
