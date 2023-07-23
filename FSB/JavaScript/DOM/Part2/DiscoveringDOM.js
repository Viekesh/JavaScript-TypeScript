"use strict";


// Here we first learn to do is select HTML elements so that they can be manipulated.

// We typically get 5 DOM selectors as listed here.

document.getElementById("id");
document.getElementsByTagName('tagName');
document.getElementsByClassName('class-name');
document.querySelector('element name or css selectors');
document.querySelectorAll('element name or css selectors');

// Whenever these mehtods are called, they transverse the DOM to find the elements requested and retirm an active handle, which can then be used to access that elements properties for manipulation.

// An HTML document contains a hierarchy of elements that form the contents while the stylesheet does the visual layout, color, font and other properties.

// When this document is parsed by the browser, we get a logical tree of nodes in memory, where every branch has nodes, which themselves contain objects.   

// This is the Document Object Model. It describes the contents and hierarchy of the document and it also provides an interface for languages such as JavaScript to dynamically modify the contents of the document. This is what results in web applications and all the dynamism that you see on the web.

// In fact, the concept of the DOM is language agnostic and isn’t specifically related to JavaScript in any way. But when we’re working with a web browser such as Chrome or Firefox, we are dealing with JavaScript when it comes to interacting with the DOM for manipulating the contents of a web page. 

// The methods and properties that we would be using in this module to work with web pages are provided by the document object model in web browsers and are not part of the JavaScript standard. 

// So, in a nutshell, the DOM & its JavaScript interface provides the API or application programming interface you to interact and dynamically modify the contents of an HTML document. 

// This means you can create, modify, remove content, you can add event handlers, which allow you to offer interactivity such as showing a dialog box when a button is clicked, and so on.   

// The current iteration of the DOM, known as DOM HTML in full is a living standard that is maintained by the Web Hypertext Application Technology Working Group, often pronounced as What-Wee-Gee or What-Wig in association with the World Wide Web Consortium or the W3C. 

// The standard provides a comprehensive feature set that includes the document object interface which we will use to interact with HTML documents. 

// Now, just like the DOM, every browser provides with its own interface that lets you play and manipulate browser behavior such as controlling the window, programmatically navigating pages and other things that have no direct connection to the document but rather the browser software itself. 

// This interface is often referred to as the browser object model and is specific to each vendor. Alright, with this understanding, let’s talk about a very fundamental aspect of working with HTML. 

// Let’s say you have an h1 tag with an id set to user. We want to use JavaScript to modify its contents dynamically so we can display the name of the active user. 

// To make this happen, we have to 

// Traverse the DOM tree 
// Find element with "id" user 
// Select the h1 tag in the document 
// Manipulate and update its contents.  
// Allow DOM to recompute the layout of the page which might have changed as a result and finally the
//  Repaint or redraw the page 
// We’ll dig into all these things as we go along.

