"use strict";


// A closure is a function that has access to the variables in the scope in which it was created, even after that 
// scope has closed.

// How to use closures in JavaScript:

// Closures can be used in a variety of ways, but some common uses include:

// Creating private variables: Closures can be used to create private variables for a function. This can be useful for hiding implementation details or preventing accidental modification of data.
// Creating reusable functions: Closures can be used to create reusable functions that can be customized for different purposes. For example, the addCounter() function in the example above can be used to create counters for different values.
// Creating curried functions: Currying is a technique for creating functions that take multiple arguments as a series of nested functions. Closures can be used to implement currying in JavaScript.
// Benefits of using closures in JavaScript:

// Closures can provide a number of benefits, including:

// Encapsulation: Closures can be used to encapsulate data and logic, making code more modular and reusable.
// Abstraction: Closures can be used to abstract away complexity, making code easier to understand and maintain.
// Performance: Closures can improve performance by avoiding unnecessary function calls.








// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. When a function is created it is bound to it's lexical environment.

// lexical means a function scope’s ability to access variables from the parent scope is known as lexical scope.

// For instance, this function has access to the variables created outside of it. This relationship is established when the function is created.

// Here is an example of a JavaScript closure:

// const outerFunction = () => {
//   var name = "John Doe";

//   const innerFunction = () => {
//     console.log("Hello, " + name);
//   }

//   console.log("outer function execute first");
//   return innerFunction;
// }

// const myFunction = outerFunction();
// myFunction(); // Hello, John Doe

// In this example, the `outerFunction()` function defines a local variable known as `name`. The `innerFunction()` is nested inside the `outerFunction()` function. The `innerFunction()` has access to the `name` variable, even though the `outerFunction()` function has finished executing.

// When this "innerFunction" is returned from the outer function as in this case, the access to the variable "name" will be maintained because the variable was available in the lexical scope when the function was created.

// In this context, the inner function is the closure as it closes over the immediate lexical environment available at the time of creation.

// This is incredibly useful when you want to setup pre-configured functions and private data that are designed for a specific task.












// Closures are often used to create object data privacy. For example, you could use a closure to create a function that can only access the properties of an object.

// Here is an example of how you could use a closure to create object data privacy:

// const createObjectWithDataPrivacy = () => {
//   var object = {};

//   const getData = () => {
//     return object.data;
//   }

//   const setData = (sdata) => {
//     object.data = sdata;
//   }

//   return {
//     getData: getData,
//     setData: setData,
//   };
// }

// var myObject = createObjectWithDataPrivacy();
// myObject.setData("This is private data");
// console.log(myObject.getData()); // This is private data

// In this example, the `createObjectWithDataPrivacy()` function creates a new object. The `createObjectWithDataPrivacy()` function also defines two functions: `getData()` and `setData()`. The `getData()` function returns the value of the `data` property of the object. The `setData()` function sets the value of the `data` property of the object.

// The `getData()` and `setData()` functions are both closures. They have access to the `object` variable, which is the object that was created by the `createObjectWithDataPrivacy()` function. This means that the `getData()` and `setData()` functions can only access the properties of the object that was created by the `createObjectWithDataPrivacy()` function.

// Closures are also often used to create event handlers and callback functions. For example, you could use a closure to create an event handler that fires when a button is clicked.

// Here is an example of how you could use a closure to create an event handler:

// const buttonClickHandler = () => {
//   console.log("The button was clicked!");
// };

// let button = document.querySelector("button");
// button.addEventListener("click", buttonClickHandler);

// In this example, the `buttonClickHandler()` function is a closure. The `buttonClickHandler()` function has access to the `button` variable, which is the button that was clicked. This means that the `buttonClickHandler()` function can only be called when the button is clicked.

// Closures are a powerful tool that can be used to create complex JavaScript programs. If you are new to JavaScript, closures may seem confusing at first. However, with practice, you will learn to use closures to create elegant and efficient JavaScript code.






// Closures are functions that enclose their lexical environment so that the variables and values in the lexical environment are always available to the functions. Closures allow you to create pre-configured or partially configured functions that can accordingly process data.

// In this exercise, similar to the one you saw in the video, you will build closure functions to convert millimeters to a number of formats such as centimeters, meters, kilometers and more.

// If you observe the user interface at this time, you’ll see the input field where a numeric value in millimeters can be typed in. Now, open the src/js/index.js file. You’ll see the DOM selector for the output (outputDiv) div inside of which you’ll be rendering individual rows carrying the output units and the converted values.

// Then there is the renderUI() function which currently sets this output div’s HTML to blank. The input field has a keyup event listener which invokes the renderUI function passing in the value of the input field.

// Your first task is to open the src/index.html file and convert the div with the class name ‘conversion’ into a template function so it can be reused again and again. Select and cut out the div with the class ‘conversion’ and its constituents.

// Now open the Row.js file which will be the module which exports this template function. It’s blank at the moment. Create and export a function that accepts the unit label and the value and returns back a pre-populated template for this DOM structure.

// Another Example :

// import Row from './Row';

// const outputDiv = document.querySelector('#output');
// const inputEl = document.querySelector("input[name='inputTemp']");

// const convert = function (toUnit) {
//   const divideBy = {
//     cms: 10,
//     m: 1000,
//     km: 1e6,
//     mile: 1.609e6,
//     yard: 914,
//     inch: 25.4,
//     foot: 305,
//   };
//   return function (val) {
//     return `${(val / divideBy[toUnit]).toPrecision(4)} ${toUnit}`;
//   };
// };


// const cms = convert('cms');
// const meters = convert('m');
// const km = convert('km');
// const mile = convert('mile');
// const yard = convert('yard');
// const inch = convert('inch');
// const foot = convert('foot');


// const renderUI = function (t) {
//   outputDiv.innerHTML =
//     Row('Centimeters', cms(Number(t))) +
//     Row('Meters', meters(Number(t))) +
//     Row('Kilometers', km(Number(t))) +
//     Row('Mile', mile(Number(t))) +
//     Row('Yard', yard(Number(t))) +
//     Row('Inch', inch(Number(t))) +
//     Row('Foot', foot(Number(t)));
// };

// inputEl.addEventListener('keyup', function (evt) {
//   evt.preventDefault();
//   renderUI(this.value);
// });

// renderUI(inputEl.value);

// The benefit of turning this into its own module is that you do not end up cluttering the index.js file and can spread the code around for better organization across multiple files.

// Now go back to the src/js/index.js file and right at the top (Line 1), add the following statement to bring in the Row module.

// import Row from './Row';

// It’s time to build a function named convert which will produce a closure function that can convert millimeters to a given unit. Create the function right below your DOM selects as shown below.



// As you can see in this function, we have an object named divideBy which contains numeric values by which a given value in millimeters may be divided to get a value in the given unit. For instance, to convert 100mm to meters, you’ll need to divide 100 / 1000 which will yield 0.1 meters.

// The convert function accepts a unit key which is used to fetch the right divisor from the divideBy object. Using this the convert function returns back another function which can accept a value in millimeters, do the calculation and return back the result in this format - ‘0.1 m’. This function that is returned is the closure because it will close over a fixed value of the divisor based on how the convert() function was invoked.

// This will now allow you to create template functions which will convert mm to a fixed unit. So, right below this function, create the following template conversion functions.



// This will produce 7 closure functions that will accept a value and convert it to the associated unit.

// So now, one last thing to do is to equip the RenderUI function to use the Row template function and the closure functions you just created to render the value that the user types in the input field.

// Modify the renderUI function as shown below.

// That’s it. Give it a shot. You’ve just created closure functions that have a fixed divisor value locked and loaded for future use.





//.