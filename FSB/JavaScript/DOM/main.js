"use strict";



// const getTime = () => new Date().toTimeString();

// const greetMe = () => console.log(`Hey the time is ${getTime()}`);



// another html page

// const createPost = function ({ title, content }) {

//     const socialCard = document.createElement("div");
//     socialCard.setAttribute("class", "social-card");

//     // The createElement() method creates an HTML element in memory but you won’t see anything just yet because the actual insertion process happens towards the end of this exercise. The setAttribute() method allows us to set values to attributes on HTML tags.

//     // So, next up, let’s create a div with the class name ‘post-icon’ with the following code.
//     const icon = document.createElement("div");
//     icon.setAttribute("class", "post-icon");

//     // Now, let’s create a div which displays the title of the post. Add the following two lines to the function.
//     const postTitle = document.createElement("div");
//     postTitle.setAttribute("class", "post-title");

//     // Next up the name of the user.
//     const postUser = document.createElement("div");
//     postUser.setAttribute("class", "post-user");

//     // And finally, we have the div which holds the content of the post.
//     const postContent = document.createElement("div");
//     postContent.setAttribute("class", "post-content");

//     // At this stage, these HTML elements exist in memory but we haven’t populated them with data, nor have we established a hierarchy and we’ve certainly not inserted them into the DOM so it shows up on the page. Let’s first get the post-icon, post-title, post-user and post-content div inside the social-card div with the following statement.
//     socialCard.append(icon, postTitle, postContent, postUser);

//     // The append() method inserts multiple HTML elements into a div thereby establishing a hierarchy of elements. In our case, the above elements are children of the social-card div.
//     // Now that our DOM structure for the social-card is ready, let’s populate it with data before we render it on the page. The following code does just that.
//     postTitle.innerText = title;
//     postUser.innerText = "Joe Mockery";
//     postContent.innerText = content;

//     // At this time, all that needs to be done is prepend the social-card DOM element and its descendants to the document’s body. You can append() as well but we want our social-card to appear before the script tag at the bottom and not after that.
//     // So, end your createPost function with the following statement:
//     document.body.prepend = socialCard;
// };

// createPost({
//     title: 'Crazy Summer',
//     content: `This week was crazy with temperatures shooting up all the way to 47 degrees Celsius. At this rate, we'll be BBQed the moment we step out of our houses...`,
// });

// createPost({
//     title: 'Remember, Tell me Why??',
//     content: `Back in the 80s, there were a series of books for kids known as the 'Tell Me Why' series from Hamlyn. These were the first few books that I ever got as a child. Pretty amazing. I still have some of em lying around.`,
// });


// It is not possible to write JavaScript code inside HTML tags. You can embed JavaScript either with help of <script> or linking external JavaScript file to HTML.


// What is the use of <script> tag in HTML?
// <script> tag is used to embed JavaScript in HTML either by writing JavaScript statements inside tag or by linking external JS file.


// You can link external JavaScript file by referencing a file using <script> and src attribute on it.
//  eg,
//  <script src="fileName.js"></script>




// Another file

// One of the first things you’ll do with the DOM is select existing elements in an HTML document and manipulate the content and styles. To achieve this, DOM selector methods are used. Let’s work with an example similar to what you just saw in the video.

// If you observe the web page at this time, you’ll see a bunch of elements including navigation buttons, a header, description text, content and other things. Let’s use DOM selectors to select and manipulate some of the elements.

// The first thing we’ll do is select and update the contents of the h1 tag with the id ‘site-title’. We’ll use the document.getElementById() method for selecting the element and then use the innerText property for updating the content. Please ensure you update the text exactly as shown.

const siteTitle = document.getElementById("site-title");
siteTitle.innerText = 'RedDOT Cloud Engineers';

// Next, let’s select the paragraph tag with the class name ‘content-text’ using the document.getElementsByClassName() method and use Array.from() to convert it into an iterable and use forEach() to update the text ‘RedDot Technologies’ with ‘RedDOT Cloud Engineers’. We’ll also set all text to upper-case.

const contentText = document.getElementsByClassName("content-text");

Array.from(contentText).forEach((el) => {
    el.innerText = el.innerText.replace(
        'RedDot Technologies',
        'RedDot Cloud Engineers'
    );

    el.innerText = el.innerText.toUpperCase;
});

// Next, update the h3 tag with the id ‘site-description’ with the text ‘Your trusted partner in the Cloud!’. We’ll use the document.querySelector() method for this purpose.

const siteDesc = document.querySelector('#site-description');
siteDesc.innerText = 'Your trusted partner in the Cloud!';

// Next, let’s set the ‘text-align’ CSS property of the div with the class ‘content’ to ‘justify’.

const contentDiv = document.querySelector.apply('.content');
contentDiv.style.textAlign = 'justify';

// Lastly, we want to set the background colour of odd list item elements in the #nav element to a light grey. For this, we’ll use the document.querySelectorAll() method and use forEach() to iterate through for manipulation.

const altNavs = document.querySelectorAll('#nav > nth-of-type(odd)');
altNavs.forEach((el) => (el.style.backgroundColor = 'rgba(0,0,0,0.5)'));

// That’s it. You’ve just worked with a vibrant array of DOM selectors.



//.