"use strict";



// The addEventListener() method attaches an event handler to the specified element without overwriting existing event handlers.

// You can add many event handlers to one element.

// You can add many event handlers of the same type to one element, i.e two "click" events.

// You can add event listeners to any DOM object not only HTML elements. i.e the window object.

// The addEventListener() method makes it easier to control how the event reacts to bubbling.

// You can easily remove an event listener by using the removeEventListener() method.

// Syntax :

// element.addEventListener(event, function, useCapture);

// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

// The second parameter is the function we want to call when the event occurs.

// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

// Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".


// ex 1:

const myButton = document.getElementById('myBtn1');

const ForMyButton = () => {
    alert("Hello, JavaScript!!!");
};

myButton.addEventListener(
    "click",
    ForMyButton
);







// ex 1 :

// const morningBtn = document.querySelector('#morning');
// const dayBtn = document.querySelector('#day');
// const afternoonBtn = document.querySelector('#afternoon');
// const eveningBtn = document.querySelector('#evening');
// const nightBtn = document.querySelector('#night');
// const greeting = document.querySelector('#greeting');


// morningBtn.addEventListener(
//     'click',
//     () => (greeting.innerText = 'Good Morining')
// )

// dayBtn.addEventListener(
//     'click',
//     () => (greeting.innerText = 'Good Day')
// )

// afternoonBtn.addEventListener(
//     'click',
//     () => (greeting.innerText = 'Good Afternoon')
// )

// eveningBtn.addEventListener(
//     'click',
//     () => (greeting.innerText = 'Good Evening')
// );

// nightBtn.addEventListener(
//     'click',
//     () => (greeting.innerText = 'Good Night')
// );






// ex 2 : (id = main2) :

// The web is all about interaction. And interaction is made possible by way of the event system. In a nutshell, an event is an occurrence like the click of a button, the user typing in an input field, scrolling the page, moving the mouse pointer and several others. As a developer you can assign specialized asynchronous functions which are set to execute every time a given event occurs. This is made possible using an event listener, a special method that watches for an event on a given element and executes an attached callback function when the event occurs.

// The webpage for this exercise displays four buttons, each named after an illustrious icon from world history. The objective is to see a quote by the individual once the button is pressed. Open the src/index.html if not open already and observe the HTML markup. There is an h1 tag with the id ‘quote’. This is where the quote should be displayed.

// The buttons each have a unique id. Now open the src/js/index.js file. You’ll notice we have an object called quotes with a quote each from the individuals listed on the page.

// Our first task is to create DOM selectors for the buttons as well as the h1 with the id ‘quote’ where the quote needs to be displayed. So, begin by setting up your selectors using the code shown below.


const quotes = {
    nelsonMandela: `"The greatest glory in living lies not in never falling, but in rising every time we fall" - Nelson Mandela`,
    steveJobs: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." - Steve Jobs`,
    johnLennon: `"Life is what happens when you're busy making other plans." - John Lennon`,
    anneFrank: `"Whoever is happy will make others happy too." - Anne Frank`,
};

const quoteOut = document.querySelector('#quote');
const nelsonMBtn = document.querySelector('#nelson-mandela');
const steveJBtn = document.querySelector('#steve-jobs');
const johnLBtn = document.querySelector('#john-lennon');
const anneFBtn = document.querySelector('#anne-frank');


// Our next task is to setup event listeners on individual buttons to monitor for mouse clicks. This can be done using the addEventListener() method which can be attached to individual DOM selectors for the buttons.

// Let’s begin with the Nelson Mandela button. Add the following code to equip this button to listen for mouse clicks and in response set the text content of the #quote element to a quote by Nelson Mandela.


nelsonMBtn.addEventListener(
    'click',
    () => (quoteOut.innerText = quotes.nelsonMandela)
);


// Try clicking the Nelson Mandela button now. Do you get the quote on the page? If so, congratulations, you’ve just implemented an event listener. In the same fashion, the code below equips the other three buttons with the same functionality.


steveJBtn.addEventListener(
    'click',
    () => (quoteOut.innerText = quotes.steveJobs)
);

johnLBtn.addEventListener(
    'click',
    () => (quoteOut.innerText = quotes.johnLennon)
);

anneFBtn.addEventListener(
    'click',
    () => (quoteOut.innerText = quotes.anneFrank)
);

// And that’s it. Try clicking all the buttons and read interesting quotes by these iconic figures from our world’s history.

// Not all JavaScript statements are events but any user action/interaction can be treated as an event. E.g, clicking on a button, hovering over an element using mouse.

// element.addEventListener() is used to attach a event listener to an element. Eg, document.getElementById(‘submitBtn’).addEventListener(‘click’, onClickFunc) is used for calling onClickFun whenever user clicks the element whose id is submitBtn

// element.innerText is used to change the text inside the tags. Hence, document.getElementById(‘greet’).innerText = ‘good night’ is the correct answer.






// .