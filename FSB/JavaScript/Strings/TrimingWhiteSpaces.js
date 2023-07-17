"use strict";



// When consuming data from files or external sources especially when data is parsed and converted from one format to another, extra whitespace is a frequent side effect and when implementing a data parsing pipeline, you often need to trim away whitespace especially at the beginning and end of a string. 

// JavaScript thus provides the trim(), trimStart() and trimEnd() methods on the String prototype to quickly solve this problem. But first, let’s see how we can achieve the same result using the replace method. 

// Here we have a string with both leading and trailing white space that needs to be removed. 

const message = ' Hello everyone, this is a message from the moon. At approx 9.27am, we received a distress call from Station X-23 ';
console.log(message);
const trimmedRepl = message.replace(/^\s+/, '').replace(/\s+$/, '');
console.log(trimmedRepl);

// We can actually use the replace method with a regex pattern that looks for whitespace at the beginning of the string. This way you’ll notice the leading whitespace is actually removed.

// For the trailing whitespace another replace method with a pattern that looks for whitespace at the end of the string works.

// Now, JavaScript does offer you built-in methods. For instance, trimStart() removes the leading whitespace while trimEnd() removes the trailing whitespace. The trim method removes both in one shot. And finally, if you want to remove all whitespace, well, we go back to the replace method with a regex pattern that simply looks for all whitespace and removes it.






// The trim() method is useful for removing the leading and trailing whitespace from a string. Begin by opening the main.js file. You’ll remove a quote by Philip Roth. The quote contains a lot of whitespace before and after the quote.
 
// At this time, if you observe the output of the app, you’ll see the leading and trailing whitespace.

// To remove this, amend the console.log() statement as shown below.

const quoteByPhilipRoth =
  '                      The road to hell is paved with works-in-progress                                 ';

// console.log(quoteByPhilipRoth);

console.log(quoteByPhilipRoth);

console.log(quoteByPhilipRoth.trim());



// What does string.trim() do?
// String.trim() is used to remove the extra white spaces from the beginning and the ending of the string


// What does string.trimLeft() do?
// String.trimLeft() is used to remove the extra white spaces from the beginning of the string


// What does string.trimRight() do?
// String.trimRight() is used to remove the extra white spaces from the ending of the string