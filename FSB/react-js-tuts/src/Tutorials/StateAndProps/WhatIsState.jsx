


// What is state?

// In ReactJS, state is a mutable data that is stored in a component. It is used to store data that can change over time, such as the number of items in a shopping cart or the current value of a slider. When the state changes, the component re-renders, which means that the UI is updated to reflect the new state.

// State is different from props in that props are immutable data that is passed to a component from its parent component. Props cannot be changed by the component itself. State, on the other hand, can be changed by the component itself.

// To use state in a ReactJS component, you need to create a state variable and initialize it with an initial value. You can then use the state variable to store data and update it as needed. When you update the state variable, the component will re-render.

// Here is an example of how to use state in a ReactJS component:


import { useState } from 'react';

const Counter = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleIncrement}>
                Increment
            </button>
        </div>
    );
}

export default Counter;

// In this example, the Counter component has a state variable called count. The initial value of count is 0. When we click on "Increment" button the "handleIncrement" function increments the count variable by 1.

// hen the handleIncrement function is called, it updates the count state variable.






// It is important to note that the state is local and private to a component and is not accessible outside the component. But,  a component’s state can be shared with another component by using props.

// Class components offer built-in state management and thus become a natural choice. On the other hand, Function Components are inherently stateless. They accept their data using props and do not offer either state management or lifecycle methods.






// Functional Stateless Component

// Stateless functional Component is a standard JavaScript function that receives input as a single prop argument and returns back a React element to render.

// (props) => {props.valuesOfProperties}

// The input shapes the rendered output, but only if available in the form of props.

// Ref: https://www.robinwieruch.de/react-function-component#react-stateless-function-component

// Function Components are inherently stateless. They accept their data using props and do not offer either state management or lifecycle methods.

// They have been termed as Functional Stateless Components as they are stateless and are expressed by a function. However, React Hooks API has made it possible to have State in Function Components.

// React 16.8 introduced the Hooks API, with the help of which we can easily incorporate state in function components.






// What is a Hook?

// A Hook is a special function that allows us to 'hook into' React features, that is, they allow us to use State and other React features without writing a class. Like, useState is a Hook that lets us add React state to function components.

// Hooks are a new addition to React that allow you to use state and other React features without writing a class. Hooks are functions that you can use inside your functional components to access React features.

// Hooks were introduced in React 16.8, and they have quickly become a popular way to write React components. Hooks offer a number of advantages over class components, including:

    // They are more concise and easier to read.
    // They are more reusable.
    // They can be used with functional components, which are more performant than class components.

// f you are new to React, I recommend that you learn about hooks as soon as possible. They are a powerful tool that can help you write better React components.

// Here are some of the most popular hooks:

// useState: This hook allows you to manage state in a functional component.
// useEffect: This hook allows you to run side effects in a functional component.
// useContext: This hook allows you to access context data in a functional component.
// useReducer: This hook allows you to manage complex state in a functional component.






// When should Hook be used?

// Suppose there is a Function Component that one has written and realizes that they have to add some state to it. Under such conditions, the Function Component would have to be converted to a Class Component. But now, it can be attained by using a Hook inside the existing function component.






// What is a useState() hook?

// Calling for a useState() hook declares a 'State Variable' in a functional component. This feature was not possible before React 16.7.

// It is a built-in hook that can be imported from the react package. With the help of useState() hook which is used in a functional component, a piece of state can now be created without switching to class components.

// Ref: https://stackoverflow.com/questions/53165945/what-is-usestate-in-react






// What is setState() Function

// A setState() function is used to manipulate state variables, that is, it is a technique to make UI updates to a React app. This function performs a shallow merge between the new state that is provided and the previous state, triggering a re-render of the component and all successors. The setState method is asynchronous.  

// Ref: https://riptutorial.com/reactjs/example/5936/setstate-- 






// Best Practices

// Keep state at the nearest logical parent,  from where it can be passed down to child component using props or a feature known as the context API.

// Keeping state at the nearest logical parent helps you manage and reason with state data changes in a much more logical way.  






// Declarative Programming

// We can build UIs using React in a more declarative manner than with HTML templates as we can work on web interfaces without even touching the DOM and have an event system without interacting with the actual DOM Events. 

// In other words, Declarative Programming in React describes what a program should accomplish, or what the end result should be.

// Ref: https://flaviocopes.com/react-declarative/ 

// The State is at the heart of declarative programming in React. It describes the UI with data. The render method reacts to changes made to the state and keeps the UI in sync with the data.






// Class or Function Component: What to use?

// React does not enforce or express a strong opinion on the type of components that you should build. Picking between function and class components depends on the objective of the component. 

// If the component uses state, lifecycle methods and more, then you’re probably good building a class component. But, if you would like to start simple and gradually add state, as the component evolves, function component with Hooks is the way to go. 

// The Hooks API is purely optional and can be plugged-in when needed.

// Class components and functional components are the two main types of components in React. They have different strengths and weaknesses, so it is important to choose the right type of component for the job.

// Class components are more traditional way to write React components. They use classes and lifecycle methods to manage state and other features. Class components are also more performant than functional components, because they can be cached by the browser.

// Functional components are a newer way to write React components. They use functions and hooks to manage state and other features. Functional components are more concise and easier to read than class components, and they can be reused more easily.

// When to use class components:

// When you need to use lifecycle methods.
// When you need to use class inheritance.
// When you need to use a third-party library that only works with class components.
// When to use functional components:

// When you don't need to use lifecycle methods.
// When you want to write a concise and easy-to-read component.
// When you want to reuse a component more easily.
// In general, you should use functional components whenever possible. They are more concise, easier to read, and more reusable than class components. However, you may need to use class components if you need to use lifecycle methods or a third-party library that only works with class components.


// Here we summarizes the difference between the class and functional components :

    // Syntax :
    // "class" component use classes and lifecycle methods and functional component use function and hooks.

    // Performance :
    // "class" component is a more performant than functional component.

    // class component is less readabel than functional component.

    // class component is less reusabel and functional component is more usable.

    // functional component has not any lifecycle mehtods but class component has made it possible to use lifecycle methods.






// 