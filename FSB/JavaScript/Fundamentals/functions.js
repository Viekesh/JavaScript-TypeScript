"use strict";



// source : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"

// What are functions?

// Functions are one of the fundamental building blocks in JavaScript.
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.
// To use a function, you must define it somewhere in the scope from which you wish to call it.



// What are function declaration?

function computeArea(width, length) {
    return length * width;
}

console.log(computeArea(2, 3));

// The combination of different parts of functions is known as function declaration. The different parts of functions is as follows :

// function keyword ("function") : A function declaration begins with a keyword function written in lower case which is followed up by the name of the function.


// function name ("computeArea") : The name of the function allows us to refer to this function in our code whenever we need to execute the function to process data.


// parameters ("width", "length") : A pair of parentheses follow the function name. Inside the parentheses, you see a comma-separated list of parameters. These parameters are like inlets to the function allowing you to feed data for the function to consume or process. 

// These parameters are like variables inside the function and are used to access the data that was passed to the function. The data that is actually passed to these parameters are known as arguments. You can pass all kinds of data here from primitives, objects, and even other functions.


// code block ("{}") : The arguments are followed up with a code block as denoted by opening and closing curly braces. You’re fully aware of the code block in JavaScript by now and the block scope that it brings to the table. 

// But inside a function, besides the block scope, you also get the function scope which, is important when working with var for instance.  

// It is within the walls of the curly braces that you put in all the logic that defines the internal workings of the function. So inside a function, you can have variables, conditionals, loops, more functions, and whatnot.


// return keyword : Now whatever the function computes can either be consumed here such as using console.log to display the outcome, or it could be returned back to one executing the function. 

// For the latter, we can use the optional return keyword. return does what it says. it returns the data back to us so that we may use it as we please. 

// At the same time, the return keyword also stops further execution of the function. So once data is returned, the function ceases to execute further so you cannot have any statements after a return statement inside a function. If you don’t have a return statement, then technically the function still returns an undefined.



// Note that "The bottom line here is that functions are reusable and remove redundancy by allowing you to encapsulate your code logic for reuse."

// Technically, functions are classified as objects in JavaScript and one of the great things about functions is that they can be made to run in the context of other functions or objects.



// But purely as a concept, if you imagine your function as an engine, which is used in one car and then the same engine is used in another car. In both cases, the engine might produce different results owing to the difference in the car’s design, weight, and other factors. But the engine remains the same.

// This brings us to an important conceptual definition - Functions are first-class objects in JavaScript which means that like objects, functions can have their own internal properties and methods. And when we say methods, we mean properties on the object that feature functions. And they can be passed to other functions as arguments.



// So ultimately functions help you organize your code by functionality, which is why you’ll find similar constructs in all computer languages. 

// They can be reused without exposing the internals every time. And functions can take in data to process using special parameters.

// Ultimately, they act like building blocks of your application as you compose and reuse multiple functions together.






// Now we can see more about functions declaration :

let tempInFahrenheit = 77;

function toCelcius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

console.log(`${tempInFahrenheit} degrees fahrenheit is `, toCelcius(tempInFahrenheit), ` degrees celcius.`);

// Function declarations begin with the function keyword followed by the name of the function with parenthesis inside which we can include a comma-separated list of parameters.

// These parameters are like inlets allowing you to pass in data to a function to process. The data that is actually passed to a function is known as arguments.

// The actual logic of the function is enclosed inside a pair of curly braces which form the function body. The function body is private to the function, which means that the world outside the function doesn’t need to know or access the insides.

// This is also where function scope exists, which we talked about when working with var for creating variables.






// Once your data is processed, you can either consume the results within the function such as display using console.log, OR you can choose to return the processed data back to the caller. 

// This is achieved using the return keyword. Finally, to invoke the function, a process, also known as calling or executing the function, we can use this syntax with the data passed in as literal values or variables.






// source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function

// Function Constructor : The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues as eval(). However, unlike eval (which may have access to the local scope), the Function constructor creates functions which execute in the global scope only.

// Functions can also be created using the Function constructor as shown here. This is the programmatic generation of a function where the function itself is being programmatically constructed.

const sum = new Function('a', 'b', 'return a + b');

console.log(sum(4, 5));


// Syntax :

// new Function(functionBody)
// new Function(arg0, functionBody)
// new Function(arg0, arg1, functionBody)
// new Function(arg0, arg1, /* … ,*/ argN, functionBody)

// Function(functionBody)
// Function(arg0, functionBody)
// Function(arg0, arg1, functionBody)
// Function(arg0, arg1, /* … ,*/ argN, functionBody)

// Note: Function() can be called with or without new. Both create a new Function instance.

// Objects allow us to hold multiple properties that may be used to describe an entity.

// For instance, a car may be described by its brand, model, engine, color, transmission system and it may have features such as drive, honk, stop, etc. which forms the actions that the user can work with. This can then be used as a template for building cars with any combination of features as long as the base template is defined clearly.

// In the world of JavaScript, imagine a Product being described in a shopping application. The product may have a name, description, cost and you may also describe the quantity available in stock. This can then be used to define and create any number of products, each of whom becomes an object. 

// These objects can also be pre-loaded with functions that can help manipulate this data and these methods can be defined in the base Product template itself. 

// To create these products or objects from a defined template, we can use constructor functions.

// A constructor function looks like a regular function except for a few notable changes. First up, as a convention, the name of a constructor function should begin with an "upper-case character".

// Inside the constructor function, you can use the ‘this’ keyword to describe properties that would be public and would form the properties of the objects being created from this template.

function Product (name, description, price, stock) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.setQuantity = function () {};
    this.getQuantity = function () {};
}

const phone1 = new Product("apple", "nice phone", 30000, 2);
const phone2 = new Product("google", "amazing", 30000, 3);

// To create objects from above template, you use the constructor function along with the new keyword which creates a new instance of the constructor function with values defined as set during creation time.

// These instances have their property values set and methods that can access these values.

// So for instance a shopping cart with 10 products each created using a constructor function. In this case, each product might come with built-in methods to adjust the quantity, for instance, allowing you to configure the product without disturbing other products in the cart.

// Constructor functions are the basis of Object-Oriented Programming in JavaScript because you begin by defining a template out of which objects are instantiated and spawned. But this isn’t the end of object-oriented programming as we’ll soon discover in the course.






// default parameters :

// Functions with Missing Parameters

// When using functions, we often employ multiple parameters to bring in data for processing. But we cannot know for sure if all parameters are provided with data when the functions are invoked. In such a case, missing parameters can result in errors.

// Using Nullish Coalescing Operator

// The traditional way has been to account for such an anomaly by setting parameters to default values using expressions such as this but this is extra work and it can lead to undesirable scenarios. For instance, the nullish coalescing operator here will default to 0 even if the argument is set to a null. 

// As you know null is explicitly set and we do not want an alternative in that case. Trying to account for such issues is quite the headache. 

// Fortunately, we do have a way to initialize parameters to a default value safely.






// Function Expression : Functions can also be created using the function expression syntax. A function declaration such as this can be rewritten as a function expression as shown here.

function areaOfCircle(radius) {
    return Math.PI * radius ** 2;
}

// The above code in expression form is return as :

const areaOfCircle1 = function (radius) {
    return Math.PI * radius ** 2;
}



let seconds = 3829019;

const secondsToDays = function (seconds) {
    return Math.floor(Number(seconds) / (3600 * 24));
};

console.log(`${seconds} seconds is equal to ${secondsToDays(seconds)} days`);


// You’ll notice that in this case, we’ve created a constant and you can alternatively create a variable using let or var too. To the constant, we’ve assigned a function declaration but notice something different here. There is no name given to the function.

// This is known as an "anonymous function" and it has its uses beyond function expressions as well but for the purposes of this topic, we’re simply assigning an anonymous function to an identifier named "areaOfCircle".






// source : https://www.w3schools.com/js/js_this.asp
// The 'this' Keyword & Function Execution Context

// What is this?

let user = {
    name: "Rob Williams",
    age: 22,
    livesIn: "New Jersey",
    introduction: function () {
        return `Hi my name is ${this.name}, my age is ${this.age} and I am lives in ${this.livesIn}.`
    }
}

console.log(user.introduction());

// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.



// "this" in a method :

// When used in an object method, this refers to the object.
// In the example on top of this page, this refers to the person object.
// Because the fullName method is a method of the person object.

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(`My name is ${person.fullName()}`);



// "this" alone :

// When used alone, "this" refers to the global object.
// Because "this" is running in the global scope.
// In a browser window the global object is [object Window]:

let x = this;

console.log(x);

//  In strict mode, when used alone, this also refers to the global object:



// "this" in a function (default) :

// In a function, the global object is the default binding for this.
// In a browser window the global object is [object Window]. It means without using "use strict":

function myFunction() {
    return this;
}

console.log(myFunction());

// JavaScript strict mode does not allow default binding.
// So, when used in a function, in strict mode, this is "undefined".



// "this" in event handlers :

// In HTML event handlers, this refers to the HTML element that received the event:

<button onclick="this.style.display='none'">Click to Remove Me!</button>

// use above code in a html page to see effect.



// object method binding :

const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
        return this;
    }
};

const person3 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Depending on where you access the ‘this’ keyword, whether outside a function or inside, it points to the context, the environment within which it's present. This can be used to store and access data within the operational context.

// Understanding the ‘this’ keyword and the function execution context can be somewhat daunting at first. The main thing to keep in mind is that a function can be executed in the context of a given object and it is from that object, that the function can derive values and access properties using the special ‘this’ keyword.






// arrow functions :

// These are essentially anonymous functions which, you can assign to constants and variables, so they’re equivalent to function expressions.

// There is no function keyword here and you’ll notice an equal to sign and a greater than sign that forms what is generally known as a fat arrow which points to a code block.

// Arrow functions offer a quick and convenient way to express functions, but they also come with a major caveat with respect to the function context and the ‘this’ keyword.

// function declaration :
function addNum(aa, bb) {
    return aa + bb;
}

// function expression :
const addNum2 = function(a, b) {
    return a + b;
}

// arrow function
const addNum3 = (a, b) => a + b;

// if you use arrow function in a single line then there is not important to use "{}" brackets and "return" keyword but if your code expand in multiple lines then it is important to write "return" keyword and "{}" brackets.






// summarize :

// functions are essential building blocks in JavaScript.
// They are a mini program inside a big program which processes data for us.
// functions are reusable and remove redundancy by allowing you to encapsulate your code logic for reuse.

// functions are like objects and can have internal properties and methods.
// functions can pass to other functions as arguments.
// functions can be reuse without exposing their internals.

// functions declaration begin with the "function" keyword followed by the name of the function with parenthesis inside which we can include a comma separated list of parameters.

// function can also be created using the function contructor.
// This is programmatic generation of a function where the function itselt is being programmatically constructed.

// Unlike function declaration, function expression can only available after they are declared in code.

// Outside the function the "this" keyword points to the global scope. Inside a function the "this" keyword points to a global scope if "use strict" is not use.

// JavaScript offers a shorter syntax for expressing function known as arrow function.
// These are anonymous function which can be assigned to constants and variables similar to function expression.

// Contructor function are the basis of object oriented programming in JavaScript because you begin by defining a template out of which objects are instantiated and spawned.

// Default parameter are an easy way to provide a default or fallback value if a parameter is not assigned a value during invocation or it is explicitly set to undefined.






// .