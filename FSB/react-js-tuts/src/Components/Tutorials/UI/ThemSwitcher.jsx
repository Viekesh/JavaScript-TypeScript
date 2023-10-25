// In this exercise, we will build a simple theme switcher using state in a function component using the Hooks API. This will allow the user to click on the light and dark theme buttons at the top to switch the visual styles for the content below.

import React, { useState } from "react";
import "./App.css";

const dark = {
    content: {
        backgroundColor: "rgb(60,60,60)",
        color: "rgb(255,255,255)",
        padding: 10
    },
    title: {
        fontSize: "45px",
        margin: 0
    },
    paragraph: {
        fontSize: "18px",
        lineHeight: 1.25
    },
    moral: {
        fontWeight: "bold",
        color: "rgb(200,200,0)"
    }
};

const light = {
    content: {
        backgroundColor: "rgb(255,255,255)",
        color: "rgb(0,0,0)",
        padding: 10
    },
    title: {
        fontSize: "45px",
        margin: 0
    },
    paragraph: {
        fontSize: "18px",
        lineHeight: 1.25
    },
    moral: {
        fontWeight: "bold"
    }
};

const App = () => {

    const [theme, setTheme] = useState("light");

    return (
        <div className="app">
            <div className="theme-buttons">
                <div id="light-theme" onClick={() => {setTheme(light)}} />
                <div id="dark-theme" onClick={() => {setTheme(dark)}} />
            </div>
            <div id="content" style={theme.content}>
                <h1 id="title" style={theme.title}>
                    The Wise Man
                </h1>
                <p id="text" style={theme.paragraph}>
                    People have been coming to the wise man, complaining about the same
                    problems every time. One day he told them a joke and everyone roared
                    in laughter. <br />
                    <br />
                    After a couple of minutes, he told them the same joke and only a few
                    of them smiled. <br />
                    <br />
                    When he told the same joke for the third time no one laughed anymore.
                    The wise man smiled and said: “You can’t laugh at the same joke over
                    and over. So why are you always crying about the same problem?”
                    <br />
                    <br />
                    <span style={theme.moral}>
                        Moral of the story: Worrying won’t solve your problems, it’ll just
                        waste your time and energy.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default App;



// Open App.js. We have a function component that renders two divs with IDs ‘light-theme’ and ‘dark-theme’ which will act like buttons enabling users to switch visual themes from light to dark. The CSS styles for the content and its elements are available as two objects with properties and values. This is known as CSS-in-JS where CSS is represented as a JavaScript object. All we need to do is dynamically switch the style object.

// Create a state variable named "theme", with its updater function ‘setTheme’ using the useState hook as shown below. We’re also setting the default value of theme as ‘light’, a reference to the light style object.

// Next, equip the two theme buttons to set the appropriate theme as shown below.

//  Lastly, for all elements in the ‘content’ div, change the reference to the dark theme to theme.style, which dynamically fetches the style based on the value of the ‘theme’ state variable as set using the hooks API.


