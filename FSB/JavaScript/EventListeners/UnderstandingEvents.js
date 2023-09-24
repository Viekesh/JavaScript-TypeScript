// The most fundamental thing that we do on a website these days is to interact with it. 

// So, typing in a social media post and hitting Post, clicking the Like button, swiping left and right, scrolling the page up and down or sideways, selecting from a list of items, sliding across the playbar in a video player and on and on and on.  

// These interactions are what make the web fun and dynamic and is how web applications offer their functionality.  

// And behind all of this interactivity is the Event system. 

// Simply put, all of the things mentioned here and many more are treated as unique signals known as events. So let's say you hit the Like button on a social media post. 

// The browser sees your mouse click, fires up a flare, a signal, an event which you are allowed to intercept in your code so that you can do something about it. 

// So in the case of a like button, the ID of the post, your userID are sent to the server which stores your Like and the UI updates to show a change of the like icon.

// The event system therefore offers a mechanism for implementing actions in response to specific activity such as mouse clicks, keyboard button presses, typing, scrolling the window, dragging and dropping elements and lots more. 

// Now, in its native form HTML includes a set of event handlers such as this one that we saw in the first topic of this module. 

// <button onclick="sendMessage()">Send Message</button> 

// These event handlers allow you to delegate a JavaScript function for instance to execute when the element is clicked, or a mouse click, drag and drop and several other events. 

// But using HTML’s event handlers is a bit clunky and frankly an obsolete practice by now. Instead, we rely on JavaScript for handling events. Using JavaScript we can create event listeners. Think of event listeners as a watchdog which, instead of barking when an event occurs, will execute a function of your choice allowing you to program behavior. 

// So, if the user is typing an e-mail address in a form field, run a function that keeps validating it and display feedback. In all of this, keyboard events can be used, and an event listener can be created that looks out for a keyboard-based event and triggers a function that does the work. 

// Now, to create an event listener in JavaScript, we use the addEventListener method instead of relying on HTML’s event handlers. The addEventListener, as the name implies attaches an event listener to an element and keeps monitoring it.  

// element.addEventListener('click', function () {

//    // do something when the event occurs

// })

// You also specify the kind of event to monitor, such as mouse clicks, key presses, window scroll up or down and several others. Events can occur both in the document and also on the window object which is provided exclusively by the web browser. We’ll play with these as we go along. 

// Another interesting aspect of events is bubbling and capturing. Here is a simple hierarchy of elements in an HTML page. Let’s say we attach an event listener on a button and it should do something. Let’s say we are looking for a mouse click on this button to be able to run a function, which will send a message. Now when the user clicks on the button, the browser looks for an event listener if present for the button and if it finds one, it signals it so that the attached function is executed. 

// After this, the parent element is accessed and an attempt is made to find an event handler here. If found, its executed and this process keeps going until we hit the top-most HTML tag. 

// So the event starts at a point and bubbles up to the top of the hierarchy of the document. This is known as event bubbling and it has its uses but can cause issues as well. Fortunately, there is a way to prevent it and we’ll see that later. 

// While an event bubbles from bottom to top, a similar phase, which begins from the top to the bottom also occurs. This is known as the capturing phase. 

// In this case, the search for an event handler begins from the top most HTML element, all the way to the button in this case and any event listeners that are found during this journey are triggered.

// As a developer, you can choose to have your event listeners listen to events belonging to either the bubbling phase OR the capturing phase. As a general practice, we care about bubbling because its easier to reason about as it originates from a point that we’re monitoring and travels up the hierarchy. 

// Along with this, the event listener mechanism provides a ton of data about the event in a special package known as an event object which is provided to the function that we bind to the event listener. 

// Now, let us learn how the addeventlistener works before we move on to a bigger example. So download, extract and setup the project and fire up your development server. Here we have an H1 element with the ID greeting. At the moment it says ‘Hello’. We also have five buttons, each of which corresponds to a time of the day.  

// five buttons.png
// So if we click on a specific time of the day, we should be able to see a corresponding greeting in the h1. For instance, Good morning if we click on morning, good afternoon if we click on afternoon and so on. This means we need to intercept a mouse click on these buttons. 

// In our index.js file, we’ve already created the DOM selectors for the h1 and our buttons.  

// dom selectors 2.PNG
// To register an event listener on the morning button lets say, we can use its selector morningBtn and implement the addEventListener method where the first parameter is the type of event, a mouse click in our case while the second parameter is a callback function which will be invoked when the button is clicked. 

// Now, implement an arrow function and set greeting.innerText to Good Morning. When this code is executed an event listener is registered to listen to any mouse clicks on the button labelled Morning. So, the moment we press it, the h1 says ‘Good Morning’. 

// In the same fashion, we can wire up an event listener for the day button so that the h1 says ‘Good Day!’.  

// Next, it’s time for the afternoon button to spell ‘Good Afternoon’. Then we have the evening button and the words, Good Evening. And finally, its time for Good night. 

// As you can see in this example, the addEventListener attaches and registers an event listener. By default, this event listener works in bubbling mode which means that it will capture events emanating from any child elements as well.



const quotes = {
    nelsonMandela: `"The greatest glory in living lies not in never falling, but in rising every time we fall" - Nelson Mandela`,
    steveJobs: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." - Steve Jobs`,
    johnLennon: `"Life is what happens when you're busy making other plans." - John Lennon`,
    anneFrank: `"Whoever is happy will make others happy too." - Anne Frank`,
};

const quoteOut = document.querySelector("#quote");



const nelsonBtn = document.querySelector("#nelson-mandela");
nelsonBtn.addEventListener(
    'click',
    () => (quoteOut.innerText = quotes.nelsonMandela)
);



const steveBtn = document.querySelector("#steve-jobs");
steveBtn.addEventListener(
    'click',
    () => (quoteOut.innerText = quotes.steveJobs)
);



const johnLBtn = document.querySelector("#john-lennon");
johnLBtn.addEventListener(
    'click',
    () => (quoteOut.innerText = quotes.johnLennon)
);



const anneBtn = document.querySelector("#anne-frank");
anneBtn.addEventListener(
    'click',
    () => (quoteOut.innerText = quotes.anneFrank)
);



// Not all JavaScript statements are events but any user action/interaction can be treated as an event. E.g, clicking on a button, hovering over an element using mouse

// element.addEventListener() is used to attach a event listener to an element. Eg, document.getElementById(‘submitBtn’).addEventListener(‘click’, onClickFunc) is used for calling onClickFun whenever user clicks the element whose id is submitBtn

// element.innerText is used to change the text inside the tags. Hence, document.getElementById(‘greet’).innerText = ‘good night’ is the correct answer.