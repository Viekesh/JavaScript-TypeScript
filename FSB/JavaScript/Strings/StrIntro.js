"use strict";



// As with everything in JavaScript, creating a string immediately brings forth a number of methods that exist on the prototype. 

// Using these methods, it is interesting to come up with functions that can help you implement string processing capabilities in your web applications.

// As with everything in JavaScript, creating a string immediately brings forth a number of methods that exist on the prototype.

// Using these methods, it is interesting to come up with functions that can help you implement string processing capabilities in your web applications.

// Using String prototype methods you can do things like: 

// detecting the presence of a string in another string, targeting and modifying one character at a time, or a character at a given location, using Regular Expressions with text
// Regular expressions, for the uninitiated, are a syntax for defining patterns for matching characters and are found in most languages.  

// This allows you to build very powerful string-based functions that can help you create and validate known patterns such as email addresses, phone numbers, credit card numbers, and so on. And just like arrays, we can slice and target portions of a string such as extracting data.

// In a nutshell, Strings are a lot of fun to play within JavaScript.



// Finding a string

// Now, we’ll look at a way to find a string in another string. This is useful for creating a search mechanism where you have to scan through pieces of text to find the ones which match. The possibilities are endless. 

// You might remember the Array.includes method we saw earlier, which allows you to confirm the presence of an element in an array.

// The includes method is also available on the string prototype which allows us to detect the presence of a string in another string. This is particularly useful when you have to build a search function that has to scan an array of messages for instance.


// Strings.includes(searchString, position);


// You apply this method to the source text, and you provide the string to search for as the first parameter. There is also an optional second parameter which is the starting position in the source to start searching from.

// The includes method performs a case-sensitive search.

// Let's learn about this method through an example.

// Here I have an array with excerpts from two stories, stored as two separate string elements. Now we want to search this array to find and return the element which contains the given string.



//excerpts from two stories
const stories = [
    'And poor Jack jumped off the roof in anticipation of a tragic outcome, but instead landed on a haystack, safe and sound and away from the inferno of her former home. He knew the secret too well now.',
    'It is a known fact that secret agents have all the tools at their disposal that helps them collect valuable data in the field.', "Today I have read communication skill 9 rules and also clear EMFT concepts such as vector addition, parallelogram of vector addition, triangle law of vector addition"
];



//accepts a search string and an array of strings to search in.
const findString = (str, arr) => {
    let result = arr.filter((elem) => //scan the array and at each iteration, grab the current element
        elem.toLowerCase().includes(str.toLowerCase()) //convert all text to lower case as includes() //performs a case sensitive search
    );
    // if the result has more than one element, return the array or the first element of the array
    return result && result.length > 1 ? result : result[0];
};

console.log(findString('secret', stories)); //search for ‘secret’ in the stories array
console.log(findString('jack', stories)); //search for ‘jack’ in the stories array
console.log(findString('vector', stories)); //search for ‘tools’ in the stories array



//.