// We’re once again working with our ladybird in a box game and we’ll pick up from where we left off in the 
// previous topic.

// This time around, we’ll hook up our keyboard to this game so that you can move around the ladybird using arrow 
// buttons, rotate using the square bracket keys and press h for resetting the position.

// To achieve this, we’ll work with keyboard events which require us to attach an event listener to the document. 
// This is because we are not typing in a form field or working with a specific element that has keyboard based 
// abilities. 

// In our case, we will thus attach an event listener to the document. This is also where we will work with the 
// key property. 

//  The ‘key’ property provides the value of the key pressed which can then be used to perform an action using a 
// conditional. 

// In terms of events, you get the following events. For instance, key up is when you press and release a key, 
// keydown is when you’re pressing and holding a key. You also have a keypress event which isn’t fired for some 
// keys such as shift, control besides a few other inconsistencies. So, with that in mind, let’s work with the 
// example. But as always, download and setup the project and bring up your development server. For this example, 
// you can also work with the completed copy of the previous video’s project. 

// In the previous topic, we built this and at this point, you have to use these control buttons to hook up the functions that cause our bug to move across the box. 

// Now, to wire up keys on the keyboard, we’ll attach an event listener to the document and we’re listening for 
// the ‘keyup’ event.  

// A key up is when a user presses and releases a key. This time, we’ll work with the event object that is 
// provided to us in the callback function. 

// What we’ll do here, is extract two properties, key and keycode from the event object and let’s console log 
// these out. 

// If we press a keyboard button now such as my up arrow key, then the key attribute returns the value of the key, 
// in this case ‘ArrowUp’. You can also see the keycode, which is a unique number assigned to the key. 

// Now it so happens that keycode has been deprecated from the standards and is no longer in use, so while this 
// used to be a convention, it is no longer recommended, and some browsers may have removed it as well. You can 
// see Prettier throw a warning at me by striking it out. 

// If you want to recognize keys by a number, use the ‘code’ property instead of keycode. The reason the keycode 
// is shown is because a lot of developers still use it and it should be avoided even if it works. 

// So, keep pressing the main keys that we want to use in our example and you should pay attention to the output 
// of the key attribute here because this is how we’ll determine and direct our code to invoke the right function. 

// Alright, let’s try a couple of more keys and then we’ll get to business. 

// So, let’s remove keycode. We don’t need it. 

// Now, let us implement a switch and case statement that will operate on the key attribute. 

// So, if its ArrowUp, we’ll run our stepUp function. If its ArrowDown, we’ll run the stepdown function and likewise, we’ll wire up other directions of movement as well. 

// For rotation, we’ll wire up the square bracket keys like so. 

// And finally for the home button, we have both the upper-case H and lowercase h that should invoke the home function. 

// So, let’s test it. And it works, though it’s a bit slow and tedious because you have to keep hitting the key to ensure it registers a keyup event. 

// A better idea is to use the ‘keydown’ event so that you can keep the button pressed and it keeps firing the event and your bug keeps moving. 









// We’re once again working with our ladybird in a box game and we’ll pick up from where we left off in the previous topic. 

// This time around, we’ll hook up our keyboard to this game so that you can move around the ladybird using arrow buttons, rotate using the square bracket keys and press h for resetting the position.

// To achieve this, we’ll work with keyboard events which require us to attach an event listener to the document. This is because we are not typing in a form field or working with a specific element that has keyboard based abilities. 

// In our case, we will thus attach an event listener to the document. This is also where we will work with the key property. 

//  The ‘key’ property provides the value of the key pressed which can then be used to perform an action using a conditional. 

// In terms of events, you get the following events. For instance, key up is when you press and release a key, keydown is when you’re pressing and holding a key. You also have a keypress event which isn’t fired for some keys such as shift, control besides a few other inconsistencies. So, with that in mind, let’s work with the example. But as always, download and setup the project and bring up your development server. For this example, you can also work with the completed copy of the previous video’s project. 

// In the previous topic, we built this and at this point, you have to use these control buttons to hook up the functions that cause our bug to move across the box. 

// Now, to wire up keys on the keyboard, we’ll attach an event listener to the document and we’re listening for the ‘keyup’ event.  

// A key up is when a user presses and releases a key. This time, we’ll work with the event object that is provided to us in the callback function. 

// What we’ll do here, is extract two properties, key and keycode from the event object and let’s console log these out. 

// If we press a keyboard button now such as my up arrow key, then the key attribute returns the value of the key, in this case ‘ArrowUp’. You can also see the keycode, which is a unique number assigned to the key. 

// Now it so happens that keycode has been deprecated from the standards and is no longer in use, so while this used to be a convention, it is no longer recommended, and some browsers may have removed it as well. You can see Prettier throw a warning at me by striking it out. 

// If you want to recognize keys by a number, use the ‘code’ property instead of keycode. The reason the keycode is shown is because a lot of developers still use it and it should be avoided even if it works. 

// So, keep pressing the main keys that we want to use in our example and you should pay attention to the output of the key attribute here because this is how we’ll determine and direct our code to invoke the right function. 

// Alright, let’s try a couple of more keys and then we’ll get to business. 

// So, let’s remove keycode. We don’t need it. 

// Now, let us implement a switch and case statement that will operate on the key attribute. 

// So, if its ArrowUp, we’ll run our stepUp function. If its ArrowDown, we’ll run the stepdown function and likewise, we’ll wire up other directions of movement as well. 

// For rotation, we’ll wire up the square bracket keys like so. 

// And finally for the home button, we have both the upper-case H and lowercase h that should invoke the home function. 

// So, let’s test it. And it works, though it’s a bit slow and tedious because you have to keep hitting the key to ensure it registers a keyup event. 

// A better idea is to use the ‘keydown’ event so that you can keep the button pressed and it keeps firing the event and your bug keeps moving.



const bug = document.querySelector('.ladybird');

let rotation = 0;
let xPos = 0;
let yPos = 0;

const home = () => {
    yPos = 0;
    xPos = 0;
    setTransform();
};
const setTransform = () => {
    bug.style.left = `${xPos}px`;
    bug.style.top = `${yPos}px`;
};



const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', home);



const upBtn = document.querySelector('#up');
const stepUp = () => {
    yPos > 0 && (yPos -= 10);
    setTransform();
};
upBtn.addEventListener('click', stepUp);



const downBtn = document.querySelector('#down');
const stepDown = () => {
    yPos < 450 && (yPos += 10);
    setTransform();
};
downBtn.addEventListener('click', stepDown);


const rightBtn = document.querySelector('#right');
const stepRight = () => {
    xPos < 450 && (xPos += 10);
    setTransform();
};
rightBtn.addEventListener('click', stepRight);



const leftBtn = document.querySelector('#left');
const stepLeft = () => {
    xPos > 0 && (xPos -= 10);
    setTransform();
};
leftBtn.addEventListener('click', stepLeft);



const turnClockWiseBtn = document.querySelector('#turnClockWise');
const turnClockWise = () => {
    rotation += 90;
    bug.style.transform = `rotate(${rotation}deg)`;
};
turnClockWiseBtn.addEventListener('click', turnClockWise);



const turnAntiClockWiseBtn = document.querySelector('#turnAntiClockWise');
const turnAntiClockWise = () => {
    rotation -= 90;
    bug.style.transform = `rotate(${rotation}deg)`;
};
turnAntiClockWiseBtn.addEventListener('click', turnAntiClockWise);



const keyMapping = {
    ArrowUp: stepUp,
    ArrowDown: stepDown,
    ArrowLeft: stepLeft,
    ArrowRight: stepRight,
    ']': turnClockWise,
    '[': turnAntiClockWise,
    H: home,
    h: home,
};



document.addEventListener('keyup', function (event) {
    const { key } = event;
    keyMapping[key]();
});



// The events that occur when user presses a key on the keyboard are referred as keyboard events and belongs to KeyboardEvent object.

// Keydown event occurs when the user is pressing a key.

// Keyup event occurs when the user is releases a key