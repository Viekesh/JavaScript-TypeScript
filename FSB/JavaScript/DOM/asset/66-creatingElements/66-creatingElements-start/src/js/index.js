// Write your code here
// To create social card using javascript on our index.html page we'll first need to create outer "div" with the class name "social-card". This can be done using "document.createElement" method which accepts a string that describes the type of element such as "div" "h1" "img" "input" and so on.

// const socialCard = document.createElement('div');

// socialCard.setAttribute("class", "social-card");

// This now creates HTML element into memory. But you won't see anything yet on the page. This is because you need to insert the "div" element into the page. For this example we will drop the element into the body of the HTML document.  To do this we'll access body using document.body and we use a method name "append" to literally append this newly created "div" to the existing content of the body.

// document.body.append(socialCard);

// document.body.prepend(socialCard);

// Check the dev tools into the browser you'll see an emptly "div" appended to the body element. This is because the append method saw the script tag as the existing content of the body and just appended the "div" after that. In this case we won't our socialCard to be above the script tag. Therefore, instead of using append we use the "prepend" method like so. Now our div appears before the script tag in the body element but so far we don't have the class attributes set.

// To do that we'll grap the handle socialCard "div" and I will use the set attribute method which takes a attribute name and its value. So we'll set class to 'social-card'.

// Now you'll see the social card element on the page all programatically set using javascript.

// Our next job is to create other "div's". Now we'll create the other "div's" and set it inside the "socialCard" div.

// Let's see how this is done.

// But first, I need to turn the process of generating socialCard to a resusable function named "createPost" like so.

const createPost = function ({ title, content }) {
    const socialCard = document.createElement("div");
    socialCard.setAttribute("class", "social-card");

    const icon = document.createElement("div");
    icon.setAttribute("class", "post-icon");

    const postTitle = document.createElement("div");
    postTitle.setAttribute("class", "post-title");

    const postUser = document.createElement("div");
    postUser.setAttribute("class", "post-user");

    const postContent = document.createElement("div");
    postContent.setAttribute("class", "post-content");

    // So far all of these have been instantiated. To get them inside the "socialCard" div and to render them on the page I'll access the social card and use the append method passing in all the nodes that need to be render and this creates our social card even though is not any content.

    // You can see the icon because it is hard coded in css.

    // So now we can add some content

    socialCard.append(icon, postTitle, postUser, postContent);

    // Adding content

    postTitle.innerText = title;

    // In this case on the postTitle "div" named innerText to a string like so and it gets render on the page. As the name implies "innerText" set the text content of the div based on the strig that you provide.

    // Pretty cool and simple right?

    // Likewise let's set the content of the postUser.

    postUser.innerText = "Joe Mockery";

    postContent.innerText = content;

    // So let's do something interesting.

    // We'll going to pass an object to the createPost method with two properties : title and content and we'll set it dynamically like so. 

    document.body.prepend(socialCard);
};

createPost(
    {
        title: 'Crazy Summer',
        content: `This week was crazy with temperatures shooting up all the way to 47 degrees Celsius. At this rate, we'll be BBQed the moment we step out of our houses...`,
    }
);

// This arguments renders our social media post and the reason why we did that is because we can add another post and it get's render on top.

// Why?

// Because we can use "document.body.prepend". So the existign content of the div will remain and the new post just prepended on the top. So, the latest post go on top just like a social media site.

createPost(
    {
        title: 'Remember, Tell me Why??',
        content: `Back in the 80s, there were a series of books for kids known as the 'Tell Me Why' series from Hamlyn. These were the first few books that I ever got as a child. Pretty amazing. I still have some of em lying around.`,
    }
);

// let add one more and there you go.

createPost(
    {
        title: 'This is another post??',
        content: 'jkdfjdk kjsdkfjf kdjfkjdfkd ieurioe,d,d died,. 3989384l',
    }
);

// Is not it's fun. If you have an array of post here you can also use the "forEach" method to look through the posts and dynamically generate social cards. This is fundamentally and conceptually how modern web appliation like facebook work, though there is a whole lot more going on in there.

// So, congratulation we've just used the DOM interface to create, manipulate and insert elements into the HTML document



// We'll now execute the function and we get our "div".

// So now let's first create the div's that goes inside our "socialCard". We will create an icon and set its class.



// .