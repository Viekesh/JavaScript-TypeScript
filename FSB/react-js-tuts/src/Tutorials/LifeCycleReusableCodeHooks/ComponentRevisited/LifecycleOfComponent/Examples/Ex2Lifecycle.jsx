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
