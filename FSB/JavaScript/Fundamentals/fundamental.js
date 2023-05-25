"use strict";



// Understanding Data Types and Structures :

// Computer Programmes :

// Computer programs ingest data you provide and produce a result for you to see and consume. That is the inherent nature of computer programming.

// If you’re building a financial application, or you want to display the number of messages or the value of PI, for instance, then you have to work extensively with numbers.

// If you’re building an email application or a text editor or messaging application, then you have to work with alphanumeric data which includes words, numbers and symbols. 

// If you’re asking the user to confirm or cancel a transaction, you’re requesting a binary yes or no answer.

// In short, computers have to work with a lot of different data types, from numbers to alphabets, symbols and in addition to these, they also need to work with structures to hold this data.

// For instance, you might have a list of products in a shopping cart on a site like Amazon or a list of employees where every employee is defined by multiple properties such as name, age, designation and city.

// It is therefore important to understand data types and structures in JavaScript before using them in your code.

// JavaScript supports a total of nine data types and structures spread across three categories.



// Primitive Data Types :

// The primitive data type is the most fundamental type of data that you get to use. 

// Numbers :

// Numbers use in mathematics, its also worked in javascript sometimes values for a variable and sometimes for computational use.

// BigInt :

// For very large type of numbers we use bigint.

// Strings :

// Strings are alphanumeric data such as English language sentences containing words, numbers, punctuation, etc.

// Boolean :

// Boolean is a binary with only two possibilities  - true or false

// The symbol is a special data type in JavaScript that is used for creating unique values and we’ll learn more about it later in the course.

// Besides these, the absence of a value is denoted by a type called ‘undefined’.

// These six are the fundamental types of data that you can work with, in JavaScript.



// Structural Data Type :

// Then we have structural data types that contain objects which are complex data structures that can hold multiple instances of data or a collection of items so as to speak.

// And we have functions that are not exactly a data structure. Functions allow you to package together multiple statements which can be executed together. But they belong to the type of objects which is why they’re classified as such.



// Structural Root Primitive

// Finally, we have a structural root primitive known as null. Null is used to intentionally denote the absence of a value unlike undefined which refers to the inherent absence of a value. But JavaScript ends up detecting a null as an object for some reason. Though this has little significance for us, it is still an intriguing fact after all.



// Why are Data Types Necessary?

// The reason why we need these data types is to let JavaScript know how to treat your data. For example, the value 5 is a number while the word ‘Hello’ is a String. If you add 3 to 5, you get 8, but if you try to add 3 to the word ‘Hello’, JavaScript simply concatenates it and produces ‘Hello3’. 

// The reason why it is able to do that is that internally it recognizes the data type and treats it accordingly without producing an error.



// Important Concept

// This brings us to an important concept - JavaScript is a dynamically typed language. This means that you don’t have to manually specify the type of data that you want to work with, and JavaScript is able to detect that automatically or ‘dynamically’. 

// This is unlike statically typed languages such as C++ or Java where it is necessary to declare the type of data that you’re using.



// Number And Numeric Operatiors

// Before we begin talking about numbers, let’s talk about an important concept in programming.

// Let's take the example of the value of Pi. By itself, this number is a literal value, a standalone number. To be able to practically use it in an application, we use variables. While this is the subject of an upcoming module, it is important to know the essentials of variables before we venture out into data types.




// Simply put, a variable is like a bucket that holds data. This bucket can hold all kinds of data types and structures, and it also has a name. We use this name to get access to the contents of the bucket throughout our program. 


var temprature = 12;


// The statement you see here has three parts. 

// Var: It is a keyword used to create a variable. Once a variable is created or instantiated, it can then be used to get or set a value using its name.

// Variable name: The variable’s name is temperature. Let’s say we’re using this to store today’s temperature. Variable names cannot contain spaces or special characters except underscores. And they cannot begin with a number.

// Assignment operator: The equal to sign in the middle is known as an assignment operator. It takes the value on the right-hand side and assigns it to the variable on the left.

// In this case, our variable named temperature has been assigned a numeric value of 12.




// Numbers

// Now let’s talk about Numbers. If you come from a language like Java or C++, then you would be aware of multiple numeric types such as:

// Integers or numbers that do not have a fractional component

// Floating-point numbers or floats, which are numbers that do contain a fractional component
// Octal numbers or base 8 numbers
// Binary numbers
// Hexadecimal numbers and more.



// Boolean 

// true or false values are the two permitted values of the Boolean primitive data type. Think of the Boolean type as a switch that can either be turned on or off, true or false.

// The word Boolean comes from the name of the creator - George Boole, who was a mathematician in the 19th century. George Boole invented a symbolic logic system that deals with defining the relationship between entities.






// Objects

// So far, you’ve seen primitive data types such as Number, Strings and Boolean. Objects are quite different. They’re a data structure rather than a regular primitive.

// To understand this better, here’s a cat.

// If you had to describe this cat as a list of properties, then you’d probably say, the color is white, the breed is Persian, the eyes are bright blue, and it looks like a kitten.

// What we’ve done here is enumerated properties of a cat. The cat is the object here and the details are its properties.

// In JavaScript, we can therefore describe our cat and its properties using an Object like the one you see here. The enclosing curly braces describe the object and inside you can see multiple properties.


const cat = {
    color: "white",
    breed: "persian",
    eyeColor: "brightBlue",
    isKitten: true
}


// here the a color, breed, eyeColor and isKitten is the property and the words we used after colon is the values of that property.

// The are four properties of the object "cat".


const sentinel = {
    name: "Sentinel Design\n{2122}",
    employeesCount: 50,
    location: {
        city: "Tokyo",
        country: "Japan"
    },
    isListed: false
}

// Now, in this example, it seems simple enough to imagine nested objects as part of the main object. So, the contents of sentinel.location look like they’re part of the sentinel main object.

// Now, in this example, it seems simple enough to imagine nested objects as part of the main object. So, the contents of sentinel.location look like they’re part of the sentinel main object.

// But internally, this is not so. JavaScript stores the nested object separately and gets the sentinel.location property to merely point to this object. So, what looks like nested isn’t technically nested.






// Arrays

// Arrays are like lists of values. Technically they belong to the Object structural data type. For instance, here I have a list of colors.

// Red
// Green
// Blue
// Yellow

const colors = ["Red", "Green", "Blue", "Yellow"];

// If I were to turn this into an array it would look like this. A simple comma separated list of values enclosed in a pair of square brackets. These values could be anything from strings, numbers, Boolean to other arrays, objects, variables and what not.

// Every element in the array has a sequential number known as an index number which starts from left most element with the number 0 and increments as you traverse across. 

// So if you see 4 items in the array here, their index numbers would be 0, 1, 2 and 3. This means that the length of an array i.e. the number of items in an array is not fixed because you can add and remove items as you go along.






// Exception Handling

// Debugging

// So let’s start with discussing the etymology of the word ‘debugging’. The story goes that in 1947, Admiral Grace Hopper was working on the old Mark II computer at Harvard when she came across a computational error. 

// On investigation, she discovered an actual moth stuck in one of the electromechanical relays. While making notes on the incident she mentioned the bug and that she was ‘debugging’ as in removing the actual bug.  

// This went into the lexicon of computer science and is now an accepted term to describe the process of finding errors in your code.  

// Debugging can be tough and time-consuming in modern codebases but only if you do not manage your exceptions well. Which brings us to the question - What are exceptions?



// Exceptions

// Well, an exception is an event or an occurrence that breaks the execution flow of your program. As a result, your application breaks down and crashes, and it goes without saying that it can lead to grave loss of data, users and consequently, time and money. 

// But we can prevent all that by efficiently handling exceptions in our code so that we can gracefully manage problems without getting our code to bail out.

// Variables declared inside the function can only eb accessed inside the function. Hence, they are local and have function scope.

// What will be the output of following?

function printYourFavLanguage() {
    var favLanguage = 'javascript';
    console.log(`I love ${favLanguage} - coming from inside the function`);
}
printYourFavLanguage();
console.log(`I love ${favLanguage} - coming from outside the function`);

// Variables defined inside the function are local to the function and have function scope. Hence, they throw reference error if accessed outside the function.



// What will be the output of following?

x = 5
console.log(x)
var x = 10

// Ans : 5

// In JavaScript, a variable can be used before it has been declared with var.






// let

// Additionally, variables created using let do not pollute the global scope which means they're safer than the ones created using var.
 
// Create a new variable named x using the let keyword and set it to 200.

let x = 200;

// Next, we'll create a for-loop which allows you to repeatedly execute a set of statements enclosed in a block. This will also use the let keyword to instantiate a counter, also named x.

for (let x = 0; x < 10; x++) {
  console.log(`The number is ${x}`);
}

// Lastly, add the following statement.

console.log(`Original Number: ${x}`);

// When you run this script, you'll notice the value of x inside the for-loop block is different than the one declared outside. This is because both variables, though named the same are sitting in two different and isolated environments which do not clash.

// Variables declared inside a block using 'let' cannot be accessed out side the block.

// What will be the output of following?

{
    let x = 2
}
console.log('outside', x)

// ReferenceError: x is not defined

// Variables defined within block have block scope, meaning they cannot be accessed outside the block.






// const

// Constants cannot be reassigned and that means once declared their value is set in stone, well almost. You see while a constant, created using the const keyword cannot be reassigned a literal value, in the case of data structures such as Arrays and Objects, you do get to modify the contents of the said structure.
 
// So, a property within an object assigned to a constant can indeed be mutated. This is important to understand. Besides this, constants behave like variables created using let and are thus block scoped.
 
// Let's create some constants to understand how they work. Open the main.js file and let's begin by creating two constants as shown below.

const PI = 3.1412;

const radiusOfCircle = 5.2;

// Based on the values of these constants, let's now compute & display the circumference of the circle by adding the following statements.

const circumference1 = 2 * PI * radiusOfCircle;

console.log(`Circumference of the circle: ${circumference1}`);

// So far so good, everything works well. Now try modifying the value of radiusOfCircle.
 
radiusOfCircle = 6.4;

// When your script is executed, you'll notice an error which says TypeError: Assignment to constant variable. This is because you cannot re-assign a literal value to a constant.
 
// Now, remove the radiusOfCircle mutation statement and the original declaration as well and replace it with the following.

const circle = {
  radius: 5.2,
};

// Then modify the circumference computation statement as shown below.

const circumference = 2 * PI * circle.radius;

circumference = 2 * PI * circle.radius;
 
// So far so good, your app should report the same value of circumference as well. Now, right after the circle object, add the following statement.
 
circle.radius = 6.4;






// Automatic Type Conversion

// When working with different data types, there are situations where JavaScript is able to automatically convert data type for uniformity. This is known as automatic type conversion and is something that won’t work in all situations.
 
// For instance, 2 + "2" returns "22" whereas 2 - "2" is computed as 0. In the former, the numeric 2 is automatically converted to a String whereas in the latter, the String "2" is converted to a Number.
 
// So instead of relying on automatic type conversion, we can also manually coerce a type, thereby stabilizing and bringing uniformity to a computational process that requires operands to be in a specific data type and a situation where we cannot guarantee the data type of operands.
 
// Let's see such a situation. Open the main.js file. It features a data set of three classes in a school with the number of students enrolled. We're then computing the total number of students enrolled in the school.
 
// But do you notice a problem with the output, when this app is executed? Its reporting the total student count at an unearthly 231815!
 
// This happens because the value of the numOfStudents property appears as a string in the dataset which can happen if data comes from a remote service where you cannot guarantee data type accuracy. This calls for coercing the data type using something like the Number() constructor.

// So, modify the totalStudents computation statement as shown below.

const totalStudents =
  Number(dataSet[0].numOfStudents) +
  Number(dataSet[1].numOfStudents) +
  Number(dataSet[2].numOfStudents);

// When you now run the app, you should see the total number of students correctly computed as 56.






// .