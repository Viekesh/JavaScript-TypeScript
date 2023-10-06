import React, { Component } from "react";
import "./Lifecycle.css";
import Joke from "./Joke";

// Above line imports the React library and the Component class. The Component class is a base class for
// creating React components.

// Below line defines a new React component called Ex1Lifecycle. The Ex1Lifecycle component extends the
// Component class, which gives it access to all of the methods and properties of the Component class.
class Ex1Lifecycle extends Component {

    // This line defines the state of the "Ex1Lifecycle" component. The state of a React component is a
    // collection of data that the component can use to control its behavior. In this case, the state of
    // the Ex1Lifecycle component contains the current joke and whether or not the component is currently
    // loading a new joke.
    state = {
        joke: {},
        isLoading: false,
    };

    // This line defines a new method called getJoke. This method fetches a random joke from the web API
    // and updates the state of the Ex1Lifecycle component with the new joke.
    getJoke = async () => {

        // This line sets the isLoading state of the Ex1Lifecycle component to true. This indicates to the use
        // that the component is currently loading a new joke.
        this.setState({
            isLoading: true,
        });

        // This line fetches the random joke from the web API. The await keyword tells JavaScript to wait 
        // for the fetch operation to complete before continuing.
        const callJokeApi = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        // This line parses the JSON response from the web API into a JavaScript object.
        const resolveJoke = await callJokeApi.json();

        // This line updates the state of the App component with the new joke and sets the isLoading state 
        // to false.This indicates to the user that the component is finished loading the new joke.
        this.setState({
            joke: resolveJoke,
            isLoading: false,
        });
    };

    // This line tells React to call the getJoke() method when the App component mounts. This ensures that 
    // the component always has a joke to display when it is first rendered.
    componentDidMount = () => this.getJoke();

    componentDidUpdate = prevProps => {
        if (this.props.category !== prevProps.category) {
            this.getJoke(this.props.category);
        }
    };

    // This line defines the render() method of the "Ex1Lifecycle" component. The render() method is 
    // responsible for returning the HTML that will be displayed for the component.
    render() {

        // This line returns the HTML for the App component. The HTML includes a button that the user can 
        // click to fetch a new joke.When the button is clicked, the getJoke() method is called to fetch a 
        // new joke.The HTML also includes a Joke component that displays the current joke.
        return (
            <div className="container">
                <div
                    className={this.state.isLoading ? "title title-pulse" : "title"}
                    onClick={this.getJoke}
                >
                    Joke Machine
                </div>

                <Joke
                    setup={this.state.joke.setup}
                    punchline={this.state.joke.punchline}
                />
            </div>
        );
    }
}

export default Ex1Lifecycle;



// Lifecycle methods allow developers to incorporate custom logic at various points during the life of a React
// component.

// It is also important to note that we’re talking about class components for now because they provide a
// built -in mechanism for customizing behavior through lifecycle methods.

// What do you mean by the lifecycle of a component?
// Class components go through three stages namely mounting, updating, and unmounting which are
// collectively referred to as the lifecycle of a component.

// There are three main phases in the life of a React component:

// Mounting :
// The Mounting phase begins when a React component instance is created and ends when it is inserted into the
// DOM. Once the component is rendered into the DOM, the component goes through the next phase where there are
// changes to state or props.

// Updating :
// This state is aptly known as the ‘Updating’ phase as changes are made to the state or props. Hence, the
// component re - renders and updates the changes made.

// Unmounting :
// The last and final phase is the ‘Unmounting’ phase, following which the component is removed from the DOM.
// This happens when the data representing a particular component is removed, causing React to remove the
// associated component.



// Across these three phases, we get multiple lifecycle methods that are aimed at customizing the behavior of the component at a macro-level.

// Let's have a look at these lifecycle methods to understand their significance.

// Mounting Phase:
// Constructor:
// The constructor method is called before the component is mounted into the DOM.

// getDerivedStateFromProps() Method:
// It is a very rare lifecycle method which is used in very rare cases.
// This lifecycle hook is used in both in mounting and updating phase. and allows us to perform state changes
// on the basis of data in the props.

// Remember,  getDerivedStateFromProps() method is invoked every time a parent component re-renders.

// render() Method:
// The render method specifically is needed only if we’re building class components and its purpose is to
// return React elements.

// Once the DOM insertion is complete, the componentDidMount() lifecycle method is immediately invoked. This is
// where we can perform API queries and other side effects which leads to setting the state.
// Once the state is set, the component re - renders.



// Updating phase:
// The ‘Updating’ phase occurs when we interact with the component and it re-renders. This interaction includes
// receiving updated data through props or an update to the state.






// .