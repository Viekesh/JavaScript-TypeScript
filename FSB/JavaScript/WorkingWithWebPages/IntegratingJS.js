// // Integrating JS in a Web Page - Hands-on Exercise

// The Document Object Model (DOM) offers an interface which enables us to programmatically create and manipulate 
// elements in an HTML document. One of the first things that you can do with this interface is create DOM 
// elements and add them to the page.
 
// Let’s work with the example you saw in the video and equip our app to programmatically generate social media 
// posts given the title and content of the post using a function. If you see the contents of the src/index.html 
// file, you’ll see our body element has a script tag which brings in the index.js file from the src/js folder.
 
// Start by opening the src/js/index.js file. You’ll see the familiar createPost() function which accepts an 
// object with the title and content properties. This function has been invoked twice with data but it doesn’t do 
// anything for now.
 
// Let’s equip this function to create the social card element, the icon element, the postTitle element and others 
// before we prepend this to the body of our document. The code that follows has to be created inside the body of 
// the createPost() function.
 
// Begin by creating the social card element and setting its class attribute to ‘social-card’ as shown below. 
// const socialCard = document.createElement('div');
// socialCard.setAttribute('class', 'social-card');
// The createElement() method creates an HTML element in memory but you won’t see anything just yet because the 
// actual insertion process happens towards the end of this exercise. The setAttribute() method allows us to set 
// values to attributes on HTML tags.
 
// For now, keep creating elements and setting attributes.
 
// So, next up, let’s create a div with the class name ‘post-icon’ with the following code. 
// const icon = document.createElement('div');
// icon.setAttribute('class', 'post-icon');
// Now, let’s create a div which displays the title of the post. Add the following two lines to the function. 
// const postTitle = document.createElement('div');
// postTitle.setAttribute('class', 'post-title');
// Next up, the name of the user. 
// const postUser = document.createElement('div');
// postUser.setAttribute('class', 'post-user');
// And finally, we have the div which holds the content of the post. 
// const postContent = document.createElement('div');
// postContent.setAttribute('class', 'post-content');
// At this stage, these HTML elements exist in memory but we haven’t populated them with data, nor have we 
// established a hierarchy and we’ve certainly not inserted them into the DOM so it shows up on the page. Let’s 
// first get the post-icon, post-title, post-user and post-content div inside the social-card div with the 
// following statement. 
// socialCard.append(icon, postTitle, postUser, postContent);
// The append() method inserts multiple HTML elements into a div thereby establishing a hierarchy of elements. In 
// our case, the above elements are children of the social-card div.
 
// Now that our DOM structure for the social-card is ready, let’s populate it with data before we render it on the 
// page. The following code does just that. 
// postTitle.innerText = title;
// postUser.innerText = '0Joe Mockery';
// postContent.innerText = content;
// At this time, all that needs to be done is prepend the social-card DOM element and its descendants to the 
// document’s body. You can append() as well but we want our social-card to appear before the script tag at the 
// bottom and not after that.
 
// So, end your createPost function with the following statement: 
// document.body.prepend(socialCard);
// The completed createPost() function should look like the following: 
// const createPost = function ({ title, content }) {
//   const socialCard = document.createElement('div');
//   socialCard.setAttribute('class', 'social-card');
// const icon = document.createElement('div');
//   icon.setAttribute('class', 'post-icon');
// const postTitle = document.createElement('div');
//   postTitle.setAttribute('class', 'post-title');
//  const postUser = document.createElement('div');
//   postUser.setAttribute('class', 'post-user');
// const postContent = document.createElement('div');
//   postContent.setAttribute('class', 'post-content');
//   socialCard.append(icon, postTitle, postUser, postContent); 
// postTitle.innerText = title;
//   postUser.innerText = 'Joe Mockery';
//   postContent.innerText = content;
//  document.body.prepend(socialCard);
// };
// That’s it. You’ve just created a bunch of DOM elements and rendered them in a document using JavaScript! Pat 
// your back and onto the next topic!
