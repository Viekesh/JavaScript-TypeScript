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

        // This line sets the isLoading state of the App component to true. This indicates to the user that 
        // the component is currently loading a new joke.
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



// It is also important to note that we’re talking about class components for now because they provide a
// built -in mechanism for customizing behavior through lifecycle methods.

// What do you mean by the lifecycle of a component?
// Class components go through three stages namely mounting, updating, and unmounting which are
// collectively referred to as the lifecycle of a component.
