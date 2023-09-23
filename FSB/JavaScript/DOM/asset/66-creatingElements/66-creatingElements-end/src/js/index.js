
// We pass an object to the createPost method with two propeties "title" and "content" and we'll dynamically set
// these like so...
const createPost = function ({ title, content }) {

  // outer div with the class name "social-card"
  const socialCard = document.createElement('div');
  // this now creates a HTML element in the memory but you want see anything on the page.
  // this is because you need to insert the "div" element into the page. For this we want to drop the element
  // in the body of the HTML document to do this we'll access the body using "document.body" and I will use a
  // method named "append" to literally append this newly created "div" to the existing content of the body.

  // If you see HTML document using dev tools you'll see empty "div" appended to the body element and you'll
  // see that our script tag shall sets above it this is because the append method saw the script tag as the
  // existing content of the body and just appended the div after that in this case we want our socialCard
  // to be above script tag. Therefore instead of using append we will use the "prepend" method. Now our div
  // appears before the script tag in the body element.

  // but so far we don't have the class attribute set. To do that we'll grab the handle to our socialCard div
  // and we will use the set attribute method which takes an attribute name and its value. see below line we'll
  // set the "class" "social-card". This does the job... 
  socialCard.setAttribute('class', 'social-card');

  // Now you'll see on the HTML document all programatically generated using JavaScript. Our next job is to
  // create other div's and render them inside the social card div.

  // Let's see how this is done...

  // We already turn our process of generating these social card to a reusable function named "createPost" like so.

  // We'll then execute the function and we get our div.

  // So, now let's first create a div's that go inside our socialCard. Here we will create the "icon" and set
  // it's class "post-icon"

  const icon = document.createElement('div');
  icon.setAttribute('class', 'post-icon');

  const postTitle = document.createElement('div');
  postTitle.setAttribute('class', 'post-title');

  const postUser = document.createElement('div');
  postUser.setAttribute('class', 'post-user');

  const postContent = document.createElement('div');
  postContent.setAttribute('class', 'post-content');
  // So, far all of these have been instantiated to get them inside the socialCard div and to render them on to
  // the page 

  // after creating element we use this append method to access the socialCard elements.
  socialCard.append(icon, postTitle, postUser, postContent);
  // We pass here all the nodes that need to be rendered and this create our social card even though there is
  // not any content you can see icon because this is hard coded in css.

  // So, now we can add some content...
  // Remember we have our HTML tags in place on the page. Since we have created all the elements here. We can
  // use their constants to access and manipulate them. In this case we will set a property on the postTitle
  // div named innerText and it get's rendered on the page.
  postTitle.innerText = title;

  // As the name implies innerText will set the text content of the div based on the string that you provide.
  // pretty cool and simple... right?

  // Likewise let's set the content of the postUser and postContent div's like so...
  postUser.innerText = 'Joe Mockery';
  postContent.innerText = content;

  document.body.prepend(socialCard);
};



// Now we can pass an object to the create post method with the title and content propeties sets like so...
// And here you go. This renders our social media post. The reason why we did that is because I can add
// another post and it get's render on top.

// Why?

createPost({
  title: 'Midnight Sun',
  content: `Oh man, last month I was in Sweden and I witnessed the midnight sun. It was a surreal experience to see sunlight at 2 in the morning! Couldn't sleep at all, but felt fresh!`,
});

// Because we use "document.body.prepend" So the existing content of the div will remain and  the new post
// just get's prepended on the top.
// So the latest post go on the top, just like a social media site.
// Let's add one more and there you go... Is not this fun. If you have an array of post here you can also use the
// forEach method to look thorough the posts and dynamically generated social cards.
createPost({
  title: 'Working with JavaScript',
  content: `It's been almost 10 years since I started working with JavaScript and it's awesome to see it grow to a mature and loved language. Kudos JS!`,
});

createPost({
  title: 'Selling my Honda Civic',
  content: `Guys, I'm selling my old Honda Civic automatic. Anyone interested, please call me/DM me`,
});



// This is funcametally and conceptually how modern web application like Facebook works, though there is a whole
// lot going on there...

// So, congratulations. You've just used the DOM interface to create, manipulate and insert elements into the
// HTML document