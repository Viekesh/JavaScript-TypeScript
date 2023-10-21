"use strict";



import { getMessages, getComments } from './Ex1API';
import { renderContent } from './Ex1Utilities';
const messagesContainer = document.querySelector('#messages');
const getMessageBtn = document.querySelector('#getMessages');
const spinner = document.querySelector('#spinner');
const errorEl = document.querySelector('#error');

getMessageBtn.addEventListener('click', () => {
    spinner.style.display = 'block';
    messagesContainer.innerHTML = '';
    errorEl.innerText = '';
    // Fetch Messages
    // Fetch Comments
    // Render Messages + Comments
    // Hide the spinner
    Promise.all([getMessages(), getComments()])
        .then(([messages, comments]) => renderContent(messages, comments, messagesContainer))
        .catch((error) => (errorEl.innerText = `Error: ${error.messages}`))
        .finally(() => {
            spinner.style.display = 'none';
        });
});



// The getMessages() and getComments() functions are imported from the ../api module.
// The renderContent() function is imported from the ../utils module.
// The messagesContainer variable is assigned the value of the DOM element with the ID messages.
// The getMessageBtn variable is assigned the value of the DOM element with the ID getMessages.
// The spinner variable is assigned the value of the DOM element with the ID spinner.
// The errorEl variable is assigned the value of the DOM element with the ID error.
// The getMessageBtn element has an event listener attached to it. When the click event is fired, the following steps are taken:

// The spinner element's display style property is set to block. This makes the spinner visible.
// The messagesContainer element's inner HTML is set to an empty string. This removes any existing messages from the container.
// The errorEl element's inner text is set to an empty string. This removes any existing error messages from the element.
// The Promise.all() method is called with an array containing the getMessages() and getComments() promises.
// The then() method is called on the promise returned by Promise.all(). The callback function passed to then() is called with two arguments: messages and comments. The messages argument is an array of messages and the comments argument is an array of comments.
// The renderContent() function is called with the messages, comments, and messagesContainer arguments. This function renders the messages and comments to the messagesContainer element.
// The catch() method is called on the promise returned by Promise.all(). The callback function passed to catch() is called with an error argument.
// The errorEl element's inner text is set to the error message.
// The finally() method is called on the promise returned by Promise.all(). The callback function passed to finally() is always called, regardless of whether the promise is resolved or rejected.
// The spinner element's display style property is set to none. This makes the spinner invisible.
// In summary, this code fetches messages and comments from the API, renders them to the page, and displays an error message if there is an error.
