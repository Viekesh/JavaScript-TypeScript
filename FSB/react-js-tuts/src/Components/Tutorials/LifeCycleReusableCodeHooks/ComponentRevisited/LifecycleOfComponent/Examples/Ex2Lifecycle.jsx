import React, { useState, useEffect } from "react";
import "./Lifecycle.css";
import Joke from "./Joke";

const Ex2Lifecycle = () => {
    const [joke, setJoke] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getJoke();
    }, []);

    async function getJoke() {
        setIsLoading(true);

        const callJokeApi = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const resolveJoke = await callJokeApi.json();

        console.log(resolveJoke);

        setJoke(resolveJoke);
        setIsLoading(false);
    }

    return (
        <div className="container">
            <div
                className={isLoading ? "title title-pulse" : "title"}
                onClick={getJoke}
            >
                Joke Machine
            </div>
            <Joke
                setup={joke.setup}
                punchline={joke.punchline}
            />
        </div>
    );
}

export default Ex2Lifecycle;



// The main difference between the class component and the function component is that the function
// component uses the useState hook to initialize and manage its state.The useState hook returns an array
// of two values: the current state value and a function that can be used to update the state value.

// The getJoke() function in the function component is also slightly different from the getJoke() function
// in the class component. In the function component, the getJoke() function uses the joke and isLoading
// state variables to update the state of the component.

// The render() method in the function component is also slightly different from the render() method in the
// class component. In the function component, the render() method uses the joke and isLoading state
// variables to render the HTML for the component.

// Another difference between the class component and the function component is that the function component
// does not have a componentDidMount property.Instead, the function component uses the useEffect hook to
// call the getJoke() function when the component mounts.The useEffect hook allows you to perform side
// effects in a React component, such as fetching data or making an API call.

// Overall, the function component is a more modern and concise way to write React components.The useState
// and useEffect hooks make it easy to manage the state of your components and perform side effects.