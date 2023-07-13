"use strict";



// 'Hey!'

// And here’s the same one, repeated 3 times. 

// 'Hey! Hey! Hey!'

// Repeating a string sounds like a useless feature but it actually isn’t and has its uses. 

// The following code allows us to produce a string where a character or a word is repeated x times.

// Method 1

const repeatStr = (str, num) => Array.from(Array(num), (elem) => str).join('');

console.log(repeatStr('Method 1 : ', 5));



// We’ve built this in the past when working with the Array.from() method. Here we have created an array with a given number of empty places and then filled it with a given string before converting it to a string. 

// The output of this function is a string where the character Z has been repeated 5 times. 

// But the interesting thing is that you don’t have to build a function that repeats a string because the String prototype includes the repeat method which works like this. 

console.log('0'.repeat(10));

// In one short invocation, this does the job. No special function needed.

// Now let’s build something useful using the repeat method as follows.


// function that takes a user rating between 1 and 5 for a product or service on a website.
const stars = (num) => {

    // array of 5 emojis using Unicode code point escape sequences
    const emojis = [
        '\u{1F620}',//angry face
        '\u{1F641}',//unhappy face
        '\u{1F610}',//neutral face
        '\u{1F642}',//happy face
        '\u{1F60d}',//smiling face with heart eyes
    ];

    //switch case that takes the score and renders the emoji
    switch (num) {
        case 1:
            return emojis[0]; // user is angry
        case 2:
            return emojis[0].repeat(2); // repeat disappointed emoji twice
        case 3:
            return emojis[2].repeat(3); // repeat neutral emoji thrice
        case 4:
            return emojis[0].repeat(4); //show 4 copies of the happy face emoji
        case 5:
            return emojis[4].repeat(5); //how 5 copies of the smiling face with heart eyes
        default: {
            return emojis[2];
        }
    }
};

console.log(stars(1));
console.log(stars[2]);
console.log(stars(3));
console.log(stars[4]);
console.log(stars(5));
    
// The break keyword is not used in the above switch-case conditional as the return keyword effectively terminates the function.
    
// This function can actually be used as- is in a web application.



// .