// Now, we’ll build a simple game, which lets you move around a ladybird in a box.   

// We have this user interface which includes a ladybird inside a box. The ladybird is a div and so is the box.  

// Below you have a set of self-explanatory control buttons.  

// Every time you click one of these buttons, the ladybird image should move 10 pixels in a given direction until 
// it hits the boundaries. One-click of the button should result in 10 pixel movement in these directions. 

// The rotate buttons should rotate the bug 90 degrees every time they’re clicked and finally the H or the home button should reset the position of the ladybird back to the top left corner.

// To get this working, we’ll need to keep a few things in mind. To make the big move right-wards, we’ll need to add 10 pixels to the left CSS position. To make it go towards its home position, we’ll need to subtract 10pixels.  

// Likewise, to move downwards, we’ll need to add 10 pixels while the opposite applies when we need to move it upwards. 

// For rotation, we’ll modify the transform property, incrementing degrees by 90 or -90 when rotating clockwise and anti-clockwise respectively.

// With that understanding in mind, let’s get working. But first, download and setup the project from the link given on the screen and get the development server up and going. 

// Here we are in the index.js file and we have all our DOM selectors set up and ready for the HTML layout that appears here. The box is just a standard div and so is the ladybird. 

//  The image is applied as a CSS background.

// Now since multiple controls will manipulate the x and y position as well as the rotation, we’ll create variables to hold these. This is the state for the ladybird div. We’ll write a bunch of functions which modify this state. 

// The first function can be executed repeatedly to rotate the ladybird div by 90 degree increments. All we’re doing here is incrementing the value stored in the rotation variable and then using style.transform to manipulate and apply this rotation to the ladybird div.  

// So let's run this and you can see our bug turns clockwise.  

// Next, I’ll build the turnAnticlockwise function which subtracts 90 from the rotation value.  

// In hindsight, I should’ve used rotation -= 90 instead of doing a += -90 which works as well. So as a task, try using rotation -= 90 instead. 

// Our next function is stepLeft. which subtracts -10 from the xPosition and then applies both the x and y position values to the left and top CSS properties like so. 

// Once again, you can also use the -= operator instead of doing a += -10.  

// Now when I execute this function our ladybird stars going out of the bounds of the box. We therefore want to limit the motion so that it doesn’t go below 0px. This can be done like so. Now as long as xPosition is greater than 0, we would be able to decrement by -10. 

//  I’ll duplicate this function and call it stepRight where as long as xPosition is less than 450, we’ll increment by 10pixels. 

//  Why 450? Because our box is 500 pixels wide and the ladybird dive is 50pixels wide. Therefore, 450 is where it reaches the end of the boundary and we need to stay within limits. 

//  Now since we have two more methods which will modify the position and update the top and left CSS properties, I’m going to pluck out the transform setters into their own function called setTransform which we can call whenever we want to implement the change of state on the DOM. 

//  Next up, a function named stepUp which moves the bug upwards as long as it doesn’t cross y = 0 and another one named stepdown which pushes the bug down by 10 pixels as long as it stays within 450 pixels. 

// Our last method is named home which just resets the position back to 0. Alright with these set, its time to hook the buttons to their functions.  

// So first up, let’s implement the addEventListener method on the upBtn and we’re listening for a mouse click denoted by the ‘click’ event and we’ll run the stepUp function as the callback. Notice I’ve not invoked the function by implementing a pair of parenthesis. We’re referencing the function and it’ll be executed when the event occurs. If you include a pair of open and closed parenthesis, the function would instantly execute here and not as a callback. 

// Likewise, I’ll hook up the down button to the stepdown function. We can now test these buttons and you can see our ladybird in action and it doesn’t cross the boundary too. Next up, let’s write the right, left and home buttons as well. 

// Ok, our right button isn’t working. Let’s see. Oh there was a typo in the word ‘listener’ here. Next, I’m going to wire the turnClockwise button and for consistency I’ll rename the word clockwise to match with the name of the function. We’ll do the same thing with the turn Anticlockwise function as well. And we’re done, we’re able to move the bug across the box.









// Playing with Events - Hands-on Exercise

// It’s time to play with our little ladybird in a box application. As you saw in the video, we have a div inside of which we have another div with the class ‘ladybird’. Below the box, we have a couple of buttons and our task is to cause the ladybird to successively move in a specific direction based on the key pressed.

// Each of the movement buttons should move the ladybird by 10 pixels as it modifies the top and left CSS properties. The turn clockwise and turn anti-clockwise buttons on the other hand are meant to modify the transform property, incrementing rotation angles by 90 degree increments or decrements.

// You can observe the HTML layout by opening and observing the src/index.html file. But the real fun is in the src/js/index.js file. So, let’s get coding.
 
// You’ll notice we have all the selectors cached and in place for use. Additionally, there are three variables namely ‘rotation’, ‘xPos’ and ‘yPos’ which will hold the rotation and position values as we increment or decrement. This is the state of the transformation.
 
// Our first task is to build functions that will mutate the transform values when the buttons are clicked.
 
// Let’s tackle transform first. We’ll first create a helper function named setTransform() which simply reads the xPos and yPos variables and mutates the left and top property of the ladybird (bug). Create the following function. 
// const setTransform = () => {
//   bug.style.left = `${xPos}px`;
//   bug.style.top = `${yPos}px`;
// };
// This now allows us to create functions which will move the ladybird left, right, up and down in 10 pixel increment/decrements but ensuring the bounds of the box are not breached. Build the following functions to implement these actions. 
// const stepLeft = () => {
//   xPos > 0 && (xPos -= 10);
//   setTransform();
// };
// const stepRight = () => {
//   xPos < 450 && (xPos += 10);
//   setTransform();
// };
// const stepUp = () => {
//   yPos > 0 && (yPos -= 10);
//   setTransform();
// };
// const stepDown = () => {
//   yPos < 450 && (yPos += 10);
//   setTransform();
// };
// We also need two functions which will rotate the bug by 90 degree increments clockwise and anti-clockwise. Add the following two functions. 
// const turnClockWise = () => {
//   rotation += 90;
//   bug.style.transform = `rotate(${rotation}deg)`;
// };
// const turnAntiClockWise = () => {
//   rotation -= 90;
//   bug.style.transform = `rotate(${rotation}deg)`;
// };
// Our final action resets the position of the bug to 0,0. Create the home function as shown below.
// const home = () => {
//   yPos = 0;
//   xPos = 0;
//   setTransform();
// };
// With all our actions ready, it's time to wire them up to the buttons using event listeners. Add the following code to finish the example. 
// upBtn.addEventListener('click', stepUp);
// downBtn.addEventListener('click', stepDown);
// rightBtn.addEventListener('click', stepRight);
// leftBtn.addEventListener('click', stepLeft);
// homeBtn.addEventListener('click', home);
// turnClockWiseBtn.addEventListener('click', turnClockWise);
// turnAntiClockWiseBtn.addEventListener('click', turnAntiClockWise);
// That’s it. Try using the buttons and have fun playing with the ladybird.



const bug = document.querySelector('.ladybird');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const homeBtn = document.querySelector('#home');
const turnClockWiseBtn = document.querySelector('#turnClockWise');
const turnAntiClockWiseBtn = document.querySelector('#turnAntiClockWise');

let rotation = 0;
let xPos = 0;
let yPos = 0;

const setTransform = () => {
    bug.style.left = `${xPos}px`;
    bug.style.top = `${yPos}px`;
};

const stepLeft = () => {
    xPos > 0 && (xPos -= 10);
    setTransform();
};

const stepRight = () => {
    xPos < 450 && (xPos += 10);
    setTransform();
};

const stepUp = () => {
    yPos > 0 && (yPos -= 10);
    setTransform();
};

const stepDown = () => {
    yPos < 450 && (yPos += 10);
    setTransform();
};



const turnClockWise = () => {
    rotation += 90;
    bug.style.transform = `rotate(${rotation}deg)`;
};

const turnAntiClockWise = () => {
    rotation -= 90;
    bug.style.transform = `rotate(${rotation}deg)`;
};



const home = () => {
    yPos = 0;
    xPos = 0;
    setTransform();
};



upBtn.addEventListener('click', stepUp);
downBtn.addEventListener('click', stepDown);
rightBtn.addEventListener('click', stepRight);
leftBtn.addEventListener('click', stepLeft);
homeBtn.addEventListener('click', home);
turnClockWiseBtn.addEventListener('click', turnClockWise);
turnAntiClockWiseBtn.addEventListener('click', turnAntiClockWise);



// element.addEventListener(event, function) is the correct syntax for executing function when event occurs. 
// Hence, element.addEventListener(‘change’, onChange) is the correct option.

// element.addEventListener(event, function) is the correct syntax for executing function when event occurs. Hence, element.addEventListener(‘click’, functionName) is the correct option.

// element.style.property is used to change any css property of the element. Hence, to change color, we can use element.style.color.