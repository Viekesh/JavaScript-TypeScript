"use strict";



// 'Hey!'

// And here’s the same one, repeated 3 times. 

// 'Hey! Hey! Hey!'

// Repeating a string sounds like a useless feature but it actually isn’t and has its uses. 

// The following code allows us to produce a string where a character or a word is repeated x times.

// Method 1

// ex 1 :

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



// ex 2 :

// When you want to repeat a character or a string, the String.repeat() method comes to the rescue. You might be tempted to think of the irrelevance of this method, but bear with us and you’ll find this rather interesting.

// The objective of this exercise is to produce this pattern on the terminal:

// As easy as this looks, it does require a bit of thinking to visualize what’s going on. In essence, we’re talking about two consecutive loops, each running for 6 steps. The first line renders 6 asterisks + 1 whitespace as the prefix. As we progress, the whitespace increases and the asterisks decrease.

// Start by opening the main.js file. There is a constant named steps and is set to 6. To render multiple instances of the whitespace and asterisk characters, we can use the String.repeat() method. So, for the first half of the artwork, the following code does the job.

const steps = 6;

for (let x = 1; x <= steps; x++) {
    console.log(`${' '.repeat(x)}${'*'.repeat(steps + 1 - x)}`);
}

// You can see the use of the repeat() method, used to render multiple instances of the whitespace and the asterisk characters. Likewise, for the second half of the artwork, the following code does the job.

for (let x = steps; x >= 1; x--) {
    console.log(`${' '.repeat(x)}${'*'.repeat(steps + 1 - x)}`);
}

// That’s it. Experiment with multiple values of the steps constant, however, revert it back to 6 when you submit this exercise for us to validate the outcome.




// .