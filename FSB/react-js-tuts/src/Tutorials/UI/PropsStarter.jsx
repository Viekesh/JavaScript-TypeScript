// In this hands-on exercise, we will work on a component called UserCard which has to accept data using props. We will implement props in this function component so that it accepts data from a resource.

// Here we’re rendering instances of the UserCard component here using a map function on a data Array that is being fetched from an external file. However, the three UserCard instances show the same data. We can use props to accept dynamic data from the resource.

// Open UserCard.js. Begin by accepting name, designation, isAdmin and photo as props by modifying the code as shown below.

import React, { useState } from "react";
import "./PropsCss.css";
import users from "./PropsUsers";
import UserCard from "./PropsUserCard";

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

const PropsStarter = () => {
    return (
        <div className="app">
            {
                users.map(({id, name, designation, isAdmin, photo}) => (
                    <UserCard key={id} name={name} designation={designation} isAdmin={isAdmin} photo={photo} />
                ))
            }
            {/* <div className="theme-buttons">
                <div id="light-theme" onClick={() => { }} />
                <div id="dark-theme" onClick={() => { }} />
            </div>
            <div id="content" style={dark.content}>
                <h1 id="title" style={dark.title}>
                    The Wise Man
                </h1>
                <p id="text" style={dark.paragraph}>
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
                    <span style={dark.moral}>
                        Moral of the story: Worrying won’t solve your problems, it’ll just
                        waste your time and energy.
                    </span>
                </p>
            </div> */}
        </div>
    );
};

export default PropsStarter;
