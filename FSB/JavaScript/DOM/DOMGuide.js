"use strict";



// The Document Object Model (DOM) offers an interface which enables us to programmatically create and manipulate elements in an HTML document. One of the first things that you can do with this interface is create DOM elements and add them to the page.

// Let’s work with the example you saw in the video and equip our app to programmatically generate social media posts given the title and content of the post using a function. If you see the contents of the src/index.html file, you’ll see our body element has a script tag which brings in the index.js file from the src/js folder.
 
// Start by opening the src/js/index.js file. You’ll see the familiar createPost() function which accepts an object with the title and content properties. This function has been invoked twice with data but it doesn’t do anything for now.
 
// Let’s equip this function to create the social card element, the icon element, the postTitle element and others before we prepend this to the body of our document. The code that follows has to be created inside the body of the createPost() function.
