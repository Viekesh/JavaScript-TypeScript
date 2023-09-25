// So, we’ve been working with the keyboard and we’ve also seen the click event which happens to be a mouse event. 
// But the mouse presents us with many opportunities, some of which we’ll explore now. 

// When it comes to events, you get the click event, which you’ve seen by now. This occurs whenever you left-click 
// on an element. We also get the dblclick or double-click event which will be fired if you double-click on an 
// element. we also get the right-click event which is called ‘contextmenu’.  

// Besides these, you also get mouseup which is fired when a button is pressed and released and mousedown which occurs when a button is pressed. These are great if you’re building a drawing application for instance. 

// But the real fun is in the event object that we get which brings in a lot of data including the coordinates to 
// the position of the mouse pointer and the ability to identify the element under the mouse pointer.  

// We’ll be building the first part of this example in this video where we have a UI which shows a bunch of 
// employees out of which a manager has to pick some for assigning to a new task force. To do that, the manager 
// should be able to drag and drop employees to the box below. 

// Now, we would like to equip our app with the ability to display tooltip style information panels that display 
// the name of the person on whom we right-click with our mouse pointer. The panel with the name should be 
// displayed at the position the mouse is right-clicked on a photo. This would require us to work with two 
// interesting properties that the mouse event object provides - clientX and clientY 

// We’ll discuss these in a short while.  

// For now, download and setup the project starter files, then get your development server up and running. So, 
// here’s our project setup for this video. You can see a bunch of employees listed here and I need to be able to 
// right-click on them to see a tooltip style popup which displays the name of the individual. 

// At the moment if I right-click, I get the standard context menu that the browser provides. 

// The photos themselves or employee cards, are just divs where the images have been brought in using an inline 
// style tag and the background-image property. They all have the class name ‘employee’ and you’ll also notice 
// special attributes such as data-name and data-id.  

// These are data attributes and are used to store custom data as attributes so that they can be read into 
// JavaScript when needed. Think of them as variables in HTML. Here, we’ve stored the name and id of every 
// employee using these data attributes. 

// In our index.js file, we’ve got our selectors for both sections of the interface as well as for the employee 
// cards. This is a setup that will span into the next video as well, so we won’t get to use all of these just 
// yet. 

// Now the requirement before us is to be able to right-click on every employee card. You might be tempted to 
// think that we’ll need to attach an event listener to each of these employee card divs. But a better strategy 
// here is to attach a single event listener to their parent node, the div with the class ‘all-employees’. This is 
// because any event on the employee card divs will bubble up to their parent nodes, and all the way up to the top 
// of the hierarchy.  

// We can take advantage of this process to monitor for events in one place. So, let’s attach an event listener to 
// the allEmployees div and for now I’ll listen to a regular click. This is where we get the event.target 
// property. Let’s console log this out to see what it is. 

// When I click on an employee card, it gets me that node directly as you can see here. If I click outside, then I 
// get to see the all employees div. This means that if I could just detect a click on the employee divs, I can 
// invoke a suitable action and we would be able to manage everything from the comforts of a single event 
// listener. 

// This, it turns out, is quite simple. Using an if, I’ll use the getAttribute method on the event.target node to 
// get the class attribute’s value and if this equates to ‘employee’, well then we clicked on the employee card 
// and we can do what we need to do. So, let’s just print out a message like so, for the time being. And now if I 
// click on a photo, it works. 

// So now, to get the name of the person on whose photo we’re clicking, we can just get the value of the data 
// attribute titled ‘name’ like so. 

// And it works like this. So far so good, right? 

// Now, we’ll need to create a div which will display the name of the employee. For this purpose, I’ll write a 
// function that takes an x and y position and the name. We’ll first use createElement to generate a div, we’ll 
// then set its class attribute to info-panel which will enable the div to gain css styles which we’ve included in 
// the project’s stylesheet. 

// Then I’ll set the inner text to the user’s name and we’ll set the top property and the left property so that we 
// can position it at the point where the mouse is clicked.  

// This is then returned from the function. 

// So now I can generate the panel and for the X and Y position, I’ll use a property known as clientX and client 
// from the event object and we’ll pass in the name as well.  This can be appended to the allEmployees div like 
// so. When I click now, I can see the name panel come up but notice how far it is from the point where I’m 
// clicking.  

// Let’s discuss this a bit. 

// We’re using the clientX and clientY properties here. These two properties allow us to get the x and y position of the mouse pointer relative to the top left corner of the browser window where x and y or left and top properties are both 0. 

// What is happening in our case is because our allEmployees div sits at a distance from the top and the left edge, this offset is being taken into account which is why the name panels are appearing at an offset from the actual mouse position. 

// What we need to do is subtract the horizontal and vertical offset that the allEmployees div introduces.   

// To get the exact value of this offset, we have the getBoundingClientRect() method which we can invoke on the allEmployees element.  

// Among other things,  it gives me the top and left offset position value in pixels which includes all the margin, padding and position aspects of the div. This can then be subtracted from clientx and clienty. Let’s see how.

// So, I’ll begin by accessing the top and left values from the getBoundingClientRect method on the allEmployees div.  

// Then we’ll just subtract these values from clientX and clientY like so.  

// And now, when you click, the divs are created precisely at the point of the click. Problem solved. 

// But now how do we get rid of these divs. I’ll create a function named removePanel which uses the info-panel class selector to find and remove the element from the DOM. The remove() method unlike the append and prepend, removes the selected element. 

// So before a new element is created, the previous one should be destroyed. 

// When I click now, it throws an error because at the moment, the div doesn’t exist. This can be resolved by the optional chaining operator like so.  

// This works beautifully.  

// Let’s change click to ‘contextmenu’ now so we can target the right-click instead of the left-click. 

// But look what’s happening now. We are getting the name panels BUT the standard browser right-click context menu is also popping up.  

//  We need a way for the browser to stop doing its usual stuff and stop displaying its own context menu. This is where the event.preventDefault() method must be invoked first thing in an event listener’s callback. This method essentially tells the browser to stop doing what its supposed to do because we want to handle the action using our own logic. 

// In this case, it stops the browser from spawning the context menu and our name panels now show up and work beautifully. 

// The right-click context menu will work outside of the allEmployees div however which is perfectly fine. 

// Alright, one more thing here. We need to remove the name panels when we do a left click, so let’s attach a click event listener invoking the removePanel function like so. 

// And we’re done with this.









// In this exercise, we'll play with mouse events based on the example you just saw in the video. The example app 
// is all set and loaded up. Our objective is to be able to right-click on an image in the section labeled 'All 
// Employees' and see a small info panel that displays the name of the employee.

// This data is to be picked up from a data attribute 'data-name' which is hard-coded in HTML. If you open the src/js/index.js file, you’ll notice most of the work has been done for you. The createPanel() function accepts and x and y coordinate on screen along with the text to display and it produces the info-panel div which we can then insert into the DOM.

// On the other hand, the removeInfoPanel() function will remove the info-panel and this should be invoked if the user clicks elsewhere in the all-employees div.
 
// First up, making the right-click work for you. Add the following code. 

// allEmployees.addEventListener('contextmenu', function (evt) {
//    evt.preventDefault();
//    removeInfoPanel();
//   if (evt.target.getAttribute('class') === 'employee') {
//     const name = evt.target.getAttribute('data-name');
//     const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name);
 
//      allEmployees.append(infoPanel);
//   }
// });

// The ‘contextmenu’ event is triggered when the right mouse button is clicked. When this happens, our event listener invokes the preventDefault() method first which prevents the browser from displaying its own context menu, a default behavior which is quelled by the preventDefault() method.

// Next, we’re invoking removeInfoPanel() to ensure we remove any existing info-panel divs that may exist. Once that is done, we’ll check to see if the mouse pointer was right clicked on the div with the class ‘employee’. If so, we’ll fetch the value of the data-name attribute and then generate the infoPanel div before appending it to the all-employees div.
 
// Note the use of the top and left property from the getBoundingClientRect() which allows us to get the offset of the all-employees div from the top left corner of the page. This is then subtracted from the evt.clientX and clientY values which give us the actual position of the mouse pointer with respect to the all-employees div.
 
// Next up, we want to remove the info-panel div if the mouse pointer is clicked elsewhere inside the all-employees panel. Add the following code to make that happen. 
// allEmployees.addEventListener('click', () => removeInfoPanel());
// That’s it.


const allEmployees = document.querySelector('.all-employees');
const { top, left } = allEmployees.getBoundingClientRect();

const createPanel = (x, y, name) => {
  const createPanel = document.createElement('div');
  createPanel.setAttribute('class', 'info-panel');
  createPanel.innerText = name;
  createPanel.style.top = `${y}px`;
  createPanel.style.left = `${x}px`;
    return createPanel;
};

allEmployees.addEventListener('contextmenu', function (evt) {
    evt.preventDefault();
    removeInfoPanel();
   if (evt.target.getAttribute('class') === 'employee') {
     const name = evt.target.getAttribute('data-name');
     const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name);
  
      allEmployees.append(infoPanel);
   }
});

allEmployees.addEventListener('click', () => removeInfoPanel());

const removeInfoPanel = () => document.querySelector('.info-panel')?.remove();



// The events that occur when mouse interacts with the HTML document are referred as mouse events and belongs to MouseEvent object.

// Click event is triggered when mouse click happens on HTML document.

// dblclick is used to track double click event of mouse.


// .