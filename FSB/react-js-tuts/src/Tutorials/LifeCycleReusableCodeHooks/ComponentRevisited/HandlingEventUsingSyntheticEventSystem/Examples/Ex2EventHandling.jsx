import React, { useState } from "react";
import "./Ex2EventHandling.css";

const Ex2EventHandling = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const registerBtnHandler = () => {
        if (name && email) {
            setIsComplete(true);
        }
    };

    return (
        <div className="app">
            <h1 id="title">Register</h1>
            {!isComplete ? (
                <div className="form-fields">
                    <input id="name-fld" type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                    <input id="email-fld" type="text" placeholder="E-Mail" onChange={e => setEmail(e.target.value)} />
                    <button id="register-btn" onClick={registerBtnHandler}>Register</button>
                </div>
            ) : (
                <h1 id="confirm">
                    Thank you, {name}! We will contact you shortly on {email}
                </h1>
            )}
        </div>
    );
};

export default Ex2EventHandling;



// What are events in the context of a web browser?

// Events are actions that are invoked when the user interacts with elements on a web page. Examples include
// mouse clicks, page scroll and typing in an input field.



// Event listeners in React dispatch instances of _______________.

// Event listeners in React dispatch instances of synthetic events, a cross-browser compatible abstraction over
// DOM events.



// Which of the following code snippets will allow you to intercept a mouse-click in a React component?

// The onClick (camel-cased) property lets you assign a mouse-click event handler function to an element.



// 