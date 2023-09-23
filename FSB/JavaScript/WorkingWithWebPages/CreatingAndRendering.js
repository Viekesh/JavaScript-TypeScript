// To programatically create elements and for with the document you're provided with the document object.
// which provides a set of properties and methods that help you manipulate the HTML document in the browser.

// For creating and rendering an element you have to first create the element using document.createElement()
// method

document.createElement("h1");

// Once that is done, you can attach it to the DOM by grabbing the element

const title = document.createElement("h1");
document.body.append(title);

// such as your body element in the page and then appending the created element to it and you can configure
// various properties and attributes for the element that you create such as the id, class attribute




































// One of the first things you’ll do with the DOM is select existing elements in an HTML document and manipulate 
// the content and styles. To achieve this, DOM selector methods are used. Let’s work with an example similar to 
// what you just saw in the video.
 
// If you observe the web page at this time, you’ll see a bunch of elements including navigation buttons, a 
// header, description text, content and other things. Let’s use DOM selectors to select and manipulate some of 
// the elements.
 
// Open the src/js/index.js and the src/index.html files, if not open already.

// The first thing we’ll do is select and update the contents of the h1 tag with the id ‘site-title’. We’ll use 
// the document.getElementById() method for selecting the element and then use the innerText property for updating 
// the content. Please ensure you update the text exactly as shown.

// const siteTitle = document.getElementById('site-title');
// siteTitle.innerText = 'RedDOT Cloud Engineers';

// Next, let’s select the paragraph tag with the class name ‘content-text’ using the document.
// getElementsByClassName() method and use Array.from() to convert it into an iterable and use forEach() to update 
// the text ‘RedDot Technologies’ with ‘RedDOT Cloud Engineers’. We’ll also set all text to upper-case.

// const contentText = document.getElementsByClassName('content-text');
 
// Array.from(contentText).forEach((el) => {
//   el.innerText = el.innerText.replace(
//     'RedDot Technologies',
//     'RedDOT Cloud Engineers'
//   );
//   el.innerText = el.innerText.toUpperCase();
// });

// Next, update the h3 tag with the id ‘site-description’ with the text ‘Your trusted partner in the Cloud!’. We’ll use the document.querySelector() method for this purpose.

// const siteDesc = document.querySelector('#site-description');

// siteDesc.innerText = 'Your trusted partner in the Cloud!';

// Next, let’s set the ‘text-align’ CSS property of the div with the class ‘content’ to ‘justify’. 

// const contentDiv = document.querySelector('.content');
// contentDiv.style.textAlign = 'justify';

// Lastly, we want to set the background colour of odd list item elements in the #nav element to a light grey. For this, we’ll use the document.querySelectorAll() method and use forEach() to iterate through for manipulation.

// const altNavs = document.querySelectorAll('#nav > li:nth-of-type(odd)');
// altNavs.forEach((el) => (el.style.backgroundColor = 'rgba(0,0,0,0.5)'));

// That’s it. You’ve just worked with a vibrant array of DOM selectors.











// To start accessing any element in HTML page, you need to access document object because all methods begin with  document.methodName().
// Eg, document.getElementById()