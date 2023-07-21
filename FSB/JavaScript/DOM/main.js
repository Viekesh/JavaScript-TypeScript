"use strict";



// const getTime = () => new Date().toTimeString();

// const greetMe = () => console.log(`Hey the time is ${getTime()}`);



// another html page

const createPost = function ({ title, content }) {

    const socialCard = document.createElement("div");
    socialCard.setAttribute("class", "social-card");

    // The createElement() method creates an HTML element in memory but you won’t see anything just yet because the actual insertion process happens towards the end of this exercise. The setAttribute() method allows us to set values to attributes on HTML tags.

    // So, next up, let’s create a div with the class name ‘post-icon’ with the following code.
    const icon = document.createElement("div");
    icon.setAttribute("class", "post-icon");

    // Now, let’s create a div which displays the title of the post. Add the following two lines to the function.
    const postTitle = document.createElement("div");
    postTitle.setAttribute("class", "post-title");

    // Next up the name of the user.
    const postUser = document.createElement("div");
    postUser.setAttribute("class", "post-user");

    // And finally, we have the div which holds the content of the post.
    const postContent = document.createElement("div");
    postContent.setAttribute("class", "post-content");

    // At this stage, these HTML elements exist in memory but we haven’t populated them with data, nor have we established a hierarchy and we’ve certainly not inserted them into the DOM so it shows up on the page. Let’s first get the post-icon, post-title, post-user and post-content div inside the social-card div with the following statement.
    socialCard.append(icon, postTitle, postContent, postUser);

    // The append() method inserts multiple HTML elements into a div thereby establishing a hierarchy of elements. In our case, the above elements are children of the social-card div.
    // Now that our DOM structure for the social-card is ready, let’s populate it with data before we render it on the page. The following code does just that.
    postTitle.innerText = title;
    postUser.innerText = "Joe Mockery";
    postContent.innerText = content;

    // At this time, all that needs to be done is prepend the social-card DOM element and its descendants to the document’s body. You can append() as well but we want our social-card to appear before the script tag at the bottom and not after that.
    // So, end your createPost function with the following statement:
    document.body.prepend = socialCard;
};

createPost({
    title: 'Crazy Summer',
    content: `This week was crazy with temperatures shooting up all the way to 47 degrees Celsius. At this rate, we'll be BBQed the moment we step out of our houses...`,
});

createPost({
    title: 'Remember, Tell me Why??',
    content: `Back in the 80s, there were a series of books for kids known as the 'Tell Me Why' series from Hamlyn. These were the first few books that I ever got as a child. Pretty amazing. I still have some of em lying around.`,
});






// It is not possible to write JavaScript code inside HTML tags. You can embed JavaScript either with help of <script> or linking external JavaScript file to HTML.


// What is the use of <script> tag in HTML?
// <script> tag is used to embed JavaScript in HTML either by writing JavaScript statements inside tag or by linking external JS file.


// You can link external JavaScript file by referencing a file using <script> and src attribute on it.
//  eg,
//  <script src="fileName.js"></script>


