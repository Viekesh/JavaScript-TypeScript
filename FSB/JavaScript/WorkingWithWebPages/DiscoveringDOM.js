// HTML Doc.:
// Contains hierarchy of elements that forms the contents of the web pages and this different contents/elements
// we called as DOM (Document Object Model).

// Stylesheet :
// Contains the visual layout colour font and other properties

// JavaScript interface is used to programatically interact and modify the contents of the HTML documents and
// css stylesheets.

// The Document Object Model (DOM) is a programming interface for HTML and XML documents. It defines the logical 
// structure of documents and the way a document is accessed and manipulated. With the DOM, you can create, 
// remove, modify, and query the content and structure of a document. You can also add behavior to documents by 
// attaching event listeners to DOM elements.

// The DOM represents a document as a tree of nodes. Each node represents a part of the document, such as an 
// element, attribute, text, or comment. You can use the DOM to access and manipulate any node in the tree.

// The DOM is used by many different programming languages, including JavaScript, Python, and Java. It is also 
// used by web browsers to display and interact with HTML documents.

// Here are some examples of how you can use the DOM:

// * Add a new element to a document
// * Remove an element from a document
// * Change the text of an element
// * Add an event listener to an element
// * Get the style of an element
// * Set the style of an element

// Here is an example of a simple DOM query in JavaScript:

// ```javascript

// Get the document element
const documentElement = document.documentElement;

// Get the head element
const headElement = document.querySelector('head');

// Get the body element
const bodyElement = document.querySelector('body');

// Get all the links in the document
const links = document.querySelectorAll('a');

// Get the first link in the document
const firstLink = document.querySelector('a');

// Add an event listener to the first link
firstLink.addEventListener('click', function() {
  alert('You clicked the first link!');
});

// This code will get the document element, head element, body element, and all the links in the document. It will 
// then add an event listener to the first link so that an alert is displayed when the link is clicked.

// The DOM is a complex topic, but it is essential for understanding how web pages work and how to manipulate them 
// with code. There are many resources available online and in libraries to help you learn more about the DOM.



// DOM as a concept is language agnostic



// In the context of a web browser we use javascript as the language of the DOM interface

// DOM + JavaScript = interface for manipulating a HTML document

// By using JavaScript we can:
    // Create Content
    // Modify Element
    // Remove Content
    // Add event listeners

// The HTML living standard is maintained by the "Web Hypertext Application Technology Group" (WHATWG) in 
// association with the W3C.

// Search on google : Browser Specific API's

// The HTML DOM is contructed as: Tree of objects