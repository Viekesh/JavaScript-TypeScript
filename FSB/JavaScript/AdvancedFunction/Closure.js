"use strict";



// source : https://www.w3schools.com/js/js_function_closures.asp

// JavaScript variables can belong to the local or global scope.

// Global variables can be made local (private) with closures.

// When a function is created it is bound to its lexical environment. For instance, this function has access to the variables created outside of it. This relationship is established when the function is created.

// A function can access all variables defined inside the function, like this:

// ex 1 :

const multiply1 = () => {
    let a = 3;
    document.getElementById("multRes").innerHTML = a * a;
}

multiply1();



// But a function can also access variables defined outside the function, like this:

// ex 2 :

let b = 4;

const mult2 = () => {
    document.getElementById("multRes2").innerHTML = b * b;
}

mult2();



// In the last example, a is a global variable.

// In a web page, global variables belong to the page.

// Global variables can be used (and changed) by all other scripts in the page.

// In the first example, a is a local variable.

// A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

// Global and local variables with the same name are different variables. Modifying one, does not modify the other.

// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.



// Variable LifeTime :
// Global variables live until the page is discarded, like when you navigate to another page or close the window.

// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.



// A Counter Dilemma
// Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

// You could use a global variable, and a function to increase the counter:

// ex 3:

// Initiate Counter :
let counter = 0;

// Function to increment counter :
const increFun = () => {
    counter += 1;
    document.getElementById('count').innerHTML = "The counter is " + counter;
};


// There is a problem with the solution above: Any code on the page can change the counter, without calling increFun.

// The counter should be local to the add() function, to prevent other code from changing it:





// Nested Functions :

// All functions have access to the global scope.  

// In fact, in JavaScript, all functions have access to the scope "above" them.

// JavaScript supports nested functions. Nested functions have access to the scope "above" them.

// In this example, the inner function plus() has access to the counter variable in the parent function:

const addFun = () => {
    let counter = 0;
    const plus = () => {
        counter += 1;
    }
    plus();
    return counter;
};

document.getElementById("addn").innerHTML = addFun();

// This could have solved the counter dilemma, if we could reach the plus() function from the outside.

// We also need to find a way to execute counter = 0 only once.

// We need a closure.



// JavaScript Closures :

// Remember self-invoking functions? What does this function do?

const addn2 = (() => {
    let counter2 = 0;
    return () => {
        counter2 += 1;
        return counter2;
    }
})();

const myFun2 = () => {
    document.getElementById("addn2").innerHTML = addn2();
};

myFun2();


// Above code getting from W3School url is given below :

// source : https://www.w3schools.com/js/js_function_closures.asp






// So dear coder,

// Closures are functions that enclose their lexical environment so that the variables and values in the lexical environment are always available to the functions. Closures allow you to create pre-configured or partially configured functions that can accordingly process data.

// Here you will build closure functions to convert millimeters to a number of formats such as centimeters, meters, kilometers and more.






//.