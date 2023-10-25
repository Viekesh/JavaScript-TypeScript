import React, { useState } from "react";
import "./ControlledComponent.css";



// In this exercise, we will turn an input element into a controlled component so that it capitalizes the first
// character of every word as the user types in.

// You’ll notice here an input element with the id ‘name - fld’. This field is used to capture the user’s name.
// But we also want the name to be formatted such that the first character of every word in the name is
// capitalized. For the capitalization, we have a function named ‘capitalize’ within the scope of the function
// component. Let’s use it.

// Edit the onChange handler function on the input field so that it invokes the capitalize function every time
// before setting the state variable.

// Edit the onChange handler function on the input field so that it invokes the capitalize function every time 
// before setting the state variable.

const ControlledComponent = () => {

    const [name, setName] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const beginChat = () => {
        if (name) {
            setIsComplete(true);
        }
    };

    const capitalize = str => {
        const breakStr = str.split(" ");
        return breakStr
            .map(word => word.charAt(0).toUpperCase() + word.substring(1))
            .join(" ");
    };

    return (
        <div className="app">
            <h1 id="title">Support Chat</h1>
            {!isComplete ? (
                <div className="form-fields">
                    <input
                        id="name-fld"
                        type="text"
                        placeholder="Name"
                        // onChange={e => setName(e.target.value)}
                        onChange={e => setName(capitalize(e.target.value))}
                        value={name}
                    />
                    <button id="enter-btn" onClick={beginChat}>
                        Go!
                    </button>
                </div>
            ) : (
                <h1 id="confirm">
                    Hey, {name}! Our support team is unavailable at the moment!
                </h1>
            )}
        </div>
    );
};

export default ControlledComponent;



// Which of the following statement is false for state in react?

// That is correct. State should never be mutated directly in React and should always be modified using setState
// () in Class components or Hooks such as useState() and useReducer() in the case of Function components.



// What is the purpose of getSnapshotBeforeUpdate lifecycle method?

// invoked after a component is instantiated
// called right before DOM updates
// return value from this method will be passed in componentDidUpdate()
// Ans is : All of the above



// What happens when you call setState in render?

// produce infinite loop



// .