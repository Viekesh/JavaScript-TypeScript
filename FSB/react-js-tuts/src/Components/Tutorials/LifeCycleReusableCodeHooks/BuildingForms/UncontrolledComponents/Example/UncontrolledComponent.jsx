import React, { createRef } from "react";
import "./UncontrolledComponents.css";

const UncontrolledComponent = () => {

    const targetRef = createRef();

    const sourceRef = createRef();

    const getMessage = name =>
        name
            ? `${name}, Time is simultaneous, an intricately structured jewel that humans insist on viewing one edge at a time,when the whole design is visible in every facet.`
            : "You still haven't told me your name...";

    const onClickHandler = () => {
        targetRef.current.innerHTML = getMessage(sourceRef.current.value)
    }

    return (
        <div className="app">
            <input id="user-name" type="text" placeholder="Your name..." ref={sourceRef} />
            <button id="process-btn" onClick={onClickHandler}>
                Go
            </button>
            <div id="target" ref={targetRef}>Dr.Manhattan says Hello!</div>
        </div>
    );
};

export default UncontrolledComponent;



// In this exercise, we’ll implement refs to pull and set data to DOM elements when needed. Our app requires
// the user to key in their name and hit the ‘Go’ button following which it shows an interesting message about
// time.Dr.Manhattan agrees!

// We have an input element, a button, and a div at the bottom with the static text ‘Dr.
// Manhattan says Hello!’. Let’s implement refs to pull the user’s name from the input field and set a message
// to the target div.

// Import the createRef function by modifying the import statement as shown below.

// import React, { createRef } from "react";

// Create two refs right at the beginning of the App function component and above the getMessage function.

// const targetRef = createRef();

// const sourceRef = createRef();

// Now add the sourceRef to the input element by using the ref prop as highlighted below.

// <input id="user-name" type="text" placeholder="Your name..." ref={sourceRef} />;

// Next, we’ll add the targetRef to the div with the id ‘target’ using the ref prop as highlighted below.

// <div id="target" ref={targetRef}>
//     Dr.Manhattan says Hello!
// </div>;

// Finally, we’ll equip the onClickHandler function which is executed when the user clicks the Go button, to
// set the innerHTML property of the target div using its ref ‘targetRef’.We’ll pull the value of the input
// field by accessing its DOM element using the ‘sourceRef’ and we’ll run it through the getMessage function.

// const onClickHandler = () => {
//     targetRef.current.innerHTML = getMessage(sourceRef.current.value);
// };

// That’s it! 