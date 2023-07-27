import { useState } from "react";



// What is props?

// Props (which stands for Properties) act as conduits, that is, it lets parent components pass data to its child components, in a one-way data flow. 

// In the previous chapters, we have learned how stateful components can be created and used. 

// A State is used when a component has to store and process dynamic data, and is always local to a component. But since the state is local and encapsulated within a component, how do we share this data with other components down the hierarchy? A typical React application is made up of several components and while we have multiple techniques to share data between components, the most fundamental way is by using props. 

// In terms of usage, they are like standard attributes on a component and can be bound to dynamic data by using a pair of curly braces.

// Props are immutable, that is, the data of a prop cannot be changed. This is because the concept on which Props have been built is that of pure functions and any changes made in the data of parameters cannot be changed in Prop.






// we use "props" to send data from parent function to child  but what if we wish to send data back to a parent component?

// One way is to use a callback function. A callback function is a function that is passed as a prop to a child component. The child component can then call the callback function to send data back to the parent component.

// Here is an example of how to use a callback function to send data back to a parent component:

const ParentComponent = () => {
    const [data, setData] = useState("");

    const handleChange = (value) => {
        setData(value);
    };

    return (
        <ChildComponent callback={handleChange} />
    );
};

const ChildComponent = ({ callback }) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        callback(value);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    );
};

// In this example, the ParentComponent has a state variable called "data". The ChildComponent has a callback function called "callback". The ChildComponent calls the callback function when the user changes the value of the input field. The ParentComponent then updates the data state variable with the new value.



// Another way to send data back to a parent component is to use a custom event. A custom event is an event that is created by a component. The parent component can then listen for the custom event and handle it accordingly.

// Here is an example of how to use a custom event to send data back to a parent component:

const ParentComponent1 = () => {
    const [data, setData] = useState("");

    const handleChange1 = (value) => {
        setData(value);
        // Send the data back to the parent component
        const event = new CustomEvent("data-changed", { detail: value });
        document.dispatchEvent(event);
    };

    return (
        <ChildComponent />
    );
};

const ChildComponent1 = ({ }) => {
    const [value, setValue] = useState("");

    const handleChange2 = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange2} />
        </div>
    );
};

// In this example, the ParentComponent listens for a custom event called data-changed. When the ChildComponent calls the handleChange function, it creates a new CustomEvent object and dispatches it. The ParentComponent then listens for the data-changed event and handles it by updating the data state variable.






// Important Points to Keep in Mind When Using Props :

    // Props implement top to bottom, one-way data flow, where data that is stored or generated in a parent component is passed down the hierarchy using props. It also means that in a hierarchy of components where state data is to be used, the state should always be situated at the nearest logical parent. This practice is commonly referred to as “Lifting the state up” and it results in logical maintenance and management of data.

    // Props are read-only. This means that the components must act like pure functions and should never change or modify data in the props. If you have to modify data, then store it in state and make modifications, or use a simple variable in the render method to achieve the same.

    // If we do not pass any value to a prop, it defaults to true. It is generally not recommended to leave props without values.

    // The last and final point to remember is when set a prop using double or single quotes, the value will be treated as a static string and not as a dynamic reference to a variable or a non-string entity. If we wish to pass dynamic data such as Numbers, an Object, or even functions, then we'll have to use curly braces.






// Difference between state and props?

    // Props are passed to the components (just like in function parameters) and State is managed within the component (just like a variable is declared within a function).

    // props are immutable and state are mutable.

    // props are used to manage data down from the view controller and the states are managed in the view controller.

// What if we wish to pass a string to a prop that expects the value to be a number?
// Such instances can introduce unwanted bumps in development and call for type checking props so that one can be absolutely sure that the right type of data is being passed to a prop.
// So, let’s look into type checking for props in the next module.