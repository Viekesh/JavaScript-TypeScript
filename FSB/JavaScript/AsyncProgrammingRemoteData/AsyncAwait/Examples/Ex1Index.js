import { getMessages, getComments } from './Ex1API';
import { renderContent, prefixDate } from './Ex1Utilities';


const messagesContainer = document.querySelector('#messages');
const getMessageBtn = document.querySelector('#getMessages');
const spinner = document.querySelector('#spinner');
const errorEl = document.querySelector('#error');

// The messagesContainer variable is assigned the value of the DOM element with the ID messages.
// The getMessageBtn variable is assigned the value of the DOM element with the ID getMessages.
// The spinner variable is assigned the value of the DOM element with the ID spinner.
// The errorEl variable is assigned the value of the DOM element with the ID error.



getMessageBtn.addEventListener('click', async () => {
    spinner.style.display = 'block';
    messagesContainer.innerHTML = '';
    error.innerText = '';

    // The getMessageBtn element has an event listener attached to it. When the click event is fired, the
    // following steps are taken:
    
    // The spinner element's display style property is set to block. This makes the spinner visible.
    // The messagesContainer element's inner HTML is set to an empty string. This removes any existing 
    // messages from the container.
    // The errorEl element's inner text is set to an empty string. This removes any existing error 
    // messages from the element.
    
    
    
    // The try...catch block is used to handle errors. The following steps are taken inside the try block:

    // The getMessages() function is called. The await keyword is used to wait for the promise returned by the 
    // getMessages() function to be resolved.The value of the promise is assigned to the messages variable.
    // The prefixDate() function is called with the messages variable as the argument. The await keyword is 
    // used to wait for the promise returned by the prefixDate() function to be resolved. The value of the 
    // promise is assigned to the updatedMessages variable.
    
    
    
    // The getComments() function is called. The await keyword is used to wait for the promise returned by the 
    // getComments() function to be resolved. The value of the promise is assigned to the comments variable.
    // The renderContent() function is called with the updatedMessages, comments, and messagesContainer 
    // arguments. This function renders the messages and comments to the messagesContainer element.
    
    
    
    // Fetch Messages
    // Fetch Comments
    try {
        const messages = await getMessages();
        const updatedMessages = await prefixDate(messages);
        const comments = await getComments();
        renderContent(updatedMessages, comments, messagesContainer);
    } catch (error) {
        errorEl.innerText = `Error: ${error}`;
    }
    
    
    
    // If an error occurs, the following steps are taken inside the catch block:
    
    // The error message is assigned to the errorEl element's inner text.
    // Once the try...catch block is complete, the following step is taken:
    
    // The spinner element's display style property is set to none. This makes the spinner invisible.
    // In summary, this code fetches messages and comments from the API, prefixes the messages with the 
    // current date, renders them to the page, and displays an error message if there is an error.
    spinner.style.display = 'none';
    
});









// Async and await are two keywords that were introduced in JavaScript ES2017 to make working with
// asynchronous code easier and more concise.

// Async functions:

// An async function is a function that is declared with the async keyword. Async functions always return a
// promise. If the function does not explicitly return a value, it will implicitly return a promise that is
// resolved with the value undefined.

// async function getMessages() {
//     const response = await fetch('/messages');
//     const messages = await response.json();

//     return messages;
// }

// In this example, the getMessages() function is an async function. The await keyword is used before the
// fetch() and json() methods.This tells the JavaScript engine to wait for the promises returned by these
// methods to be resolved before continuing execution.

// const messages = await getMessages();

// Additionally, async and await can help you to avoid callback hell. Callback hell is a situation where 
// you have a large number of nested callbacks.This can make your code difficult to read and understand.
// Async and await can help you to avoid callback hell by allowing you to write code in a more linear 
// style.

// In summary, async and await are two keywords that make it easier to write asynchronous code in 
// JavaScript.