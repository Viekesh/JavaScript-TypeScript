// A React component is a reusable piece of code that can be used to render HTML elements. Components are the building blocks of React applications, and they can be used to create complex user interfaces with ease. Here we are cover following topics :

// * Stateless components
// * Stateful components
// * Props
// * Events
// * Lifecycle methods



// There are two main types of React components: stateless components and stateful components :

// Stateless components are the simplest type of React component. They do not have any state, and they are not bound to any data. Stateless components are often used for simple tasks, such as rendering a text or image.

// Here are the benefits of using stateless components:

// They are simple and easy to understand.
// They are efficient, because they do not have to update their state or re-render when their props change.
// They can be easily reused in different parts of your application.



// Stateful components are more complex than stateless components. They have state, which is data that can change over time. Stateful components are often used for more complex tasks, such as rendering a list of items or a form.

// Here are the benefits of using stateful components:

// They can be used to create complex user interfaces with dynamic content.
// They can be used to track user input and state changes.
// They can be used to implement complex logic



// Props are the data that is passed to a component from its parent component. Props can be used to set the state of a component, or to render different content depending on the value of the prop.



// Events are used to listen for user interaction with a component. When an event is triggered, the component can respond by updating its state or rendering different content.



// Lifecycle methods are called at different points in the life of a component. These methods can be used to perform tasks such as setting up the component, updating the state, or cleaning up when the component is no longer needed.



// A React application may contain several components, all composed together to deliver a comprehensive feature set. Having said that, various components are brought to life at various points of time, as and when needed.






// Lifecycle of components :

// Lifecycle methods are called at different points in the life of a component. These methods can be used to perform tasks such as setting up the component, updating the state, or cleaning up when the component is no longer needed.

// Here are some of the most commonly used lifecycle methods:

// componentDidMount(): This method is called after the component has been mounted to the DOM.
// componentDidUpdate(): This method is called after the component has been updated.
// componentWillUnmount(): This method is called before the component is unmounted from the DOM.



// There are three main phases in the life of a React component:

// Mounting Phase :

// The Mounting phase begins when a React component instance is created and ends when it is inserted into the DOM. Once the component is rendered into the DOM, the component goes through the next phase where there are changes to state or props.



// Updating Phase :

// This state is aptly known as the ‘Updating’ phase as changes are made to the state or props. Hence, the component re-renders and updates the changes made.



// Unmounting Phase :

// The last and final phase is the ‘Unmounting’ phase, following which the component is removed from the DOM.  This happens when the data representing a particular component is removed, causing React to remove the associated component.

// Across these three phases, we get multiple lifecycle methods that are aimed at customizing the behavior of the component at a macro-level.

// Let's have a look at these lifecycle methods to understand their significance.



// Mounting Phase

// The Mounting Phase occurs when a React component instance is created and inserted into the DOM. React has four built-in methods that get called in the order given below when mounting a component:

// Constructor method :

// The constructor is called before the component is mounted into the DOM. The typical use of a constructor is to initialize local state variables and bind class methods. This is the only lifecycle method where one can initialize state using this.state, as all other lifecycle class methods use this.setState().

// Constructors should only be used for initializing state and binding methods since they’re called in the render phase where nothing has gone into the DOM.

// ex :

import React from "react";

class MyConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <button onClick={this.incrementCounter}>Increment</button>
                <p>The counter is: {this.state.counter}</p>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default MyConstructor;



// The constructor method is called when a new instance of the component is created. In this example, the constructor method is used to initialize the state of the component. The state is an object that can be used to store data that can change over time. In this example, the state is used to store the counter value.

// The constructor method also has access to the props of the component. The props are the data that is passed to the component from its parent component. In this example, the props are not used in the constructor method.

// Here are some other examples of things that you can do in the constructor method of a React component:

// Bind event handlers to event listeners.
// Initialize state variables.
// Make API calls.
// Load data from a file.
// Initialize third-party libraries.
// The constructor method is a powerful tool that can be used to set up your components and prepare them for rendering.



// getDerivedStateFromProps() Method :

// The getDerivedStateFromProps() method is a rare lifecycle method which is used only in very special cases.  
// This lifecycle hook is used in both the mounting and updating phases and allows us to perform state changes on the basis of data in the props.

// Remember,  getDerivedStateFromProps() method is invoked every time a parent component re-renders.



// render() method :

// The render method specifically is needed only if we’re building class components and its purpose is to return React elements. This is also the reason why the render method should stay pure, that is, must never modify the state and should always return the same, predictable result.

// Mounting => Constructor => Render => Element inserted into the DOM



// componentDidMount() method

// Once the DOM insertion is complete, the componentDidMount() lifecycle method is immediately invoked. This is where we can perform API queries and other side effects which leads to setting the state.

// Once the state is set, the component re-renders.






// Updating Phase

// The ‘Updating’ phase occurs when we interact with the component and it re-renders. This interaction includes receiving updated data through props or an update to the state. React has five built-in methods that is called in the order given below when a component is updated:



// getDerivedStateFromProps() Method

// Upon implementation, the getDerivedStateFromProps() method allows us to decide whether we want the state to be updated or not based on the changes made to the data in the props. In simple words, when getDerivedStateFromProps() method is called in the ‘Mounting’ phase, it can be used to set state variables based on the data in the props.

// The next time the getDerivedStateFromProps() method is called in the ‘Updating’ phase, we can compare the data in the state with that in the props and we can update the state if needed.
// This helps in the implementation of the state changes that will occur only if the data in the props differs from what it was earlier.

// This is important to understand because every update to the parent component brings about an update to the child components, even if the data in the props continue to be the same.
// If the data in the props continue to be the same as before, we may not want to update the state in a child component.

// Mounting Phase => getDerivedStateFromProps() => state variables are set