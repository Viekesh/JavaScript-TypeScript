"use strict";



// We’ve already seen the use of various RegEx based methods that can be used to find and extract text from strings.

// The slice() and substring() methods offer an index-based approach to extracting a portion of text from a string. Both methods accept a starting index number and an optional ending index number for extracting text. 

// If the starting number is a positive number, then the search begins from the start of the string. On the other hand, if the starting index number is negative, then the search begins from the end of the string backwards. 

// Both slice and substring work in exactly the same way with one major exception.

// If the end index number is smaller than the start index number, the slice method returns an empty string whereas the substring method simply reverses the other of the numbers to ensure the smaller number is used as the starting index while the bigger number is used as the ending index number.

// Let’s see two quick uses of the slice and substring methods.


// In the following example, we have a string containing comma-separated values. I want to extract the Age portion of the text. 

const str1 = 'Name: John, Age: 20, Profession: Web Developer';

const findAge = str1.search('Age'); //returns the starting index number

const age = str1.slice(findAge, findAge + 7);// adding 7 yields the exact portion we are looking for

console.log(age);




// In this example, we have a message which a user sends to a chatbot. The chatbot must extract the registration number for use.  

const message =  'My registration number is RKQ01292810-23. Please update me on the status';

const findReg = message.search(/RKQ\d+-\d+/g);

const extractReg = message.substring(findReg, findReg + 14);

console.log(`Reg No. ${extractReg}`);

// Here we first used search with a pattern that looks for the letters RKQ followed by a number, then a dash which we’ve escaped and again followed by a number.  This gets us the starting index number 26. From here, the process is the same as we use the substring method to extract this 14 digit registration number. You can also use the slice method here.






// When you have to extract portions of a string, you can use the str.substring() method which accepts start and end index numbers which we can actually fetch using the str.search() method.

// Open the main.js file. You’ll see a string with comma separated fields as key-value pairs. Our task is to extract the name and profession values from the string. We’ll implement the substring() method to achieve the same.

// First up, we’ll extract the fullName using the following code.


const str = 'name:James Dean,age:45,profession:Actor,location:Hollywood';

const fullName = str.substring(str.search('name') + 5, str.search('age') - 1);

const profession = str.substring(str.search('profession') + 11, str.search('location') - 1);

console.log(`${fullName} was an ${profession}`);



// What will be the output of following?
const str22 = "No pain, No gain"; 
console.log(str.search('no'));

// String.search() searches for the search value in the string. It returns the index of the searched value if the search value exist in string, otherwise -1.


// What will be the output of the following?
const language = 'JavaScript'
console.log(language.slice(4))
// String.slice() accepts two parameters - start index and end index. If end index is not provided, the length of the string is taken as end index. It extracts the string from start index to end index


// How much parameters does String.substring() accepts?
// String.substring() accepts 2 values - the start index and the end index. End index is optional