import React, { Component } from "react";
import "./ManagecleanUp.css";
import Timer from "./Timer";
import uuid from "uuid/v1";



// Here a React component that implements a timer bench. The component allows the user to create and remove 
// timers, and it displays the current time for each timer.
class ManageCleanUp extends Component {

    // This line defines the state of the App component. The state of a React component is a collection of data that the component can use to control its behavior. In this case, the state of the App component contains a list of timers.
    state = {
        timers: []
    };

    // This line defines a function called addTimer(). The addTimer() function takes a name as input and adds a new timer to the state of the App component. The new timer has a unique ID and the name that was passed to the addTimer() function.
    addTimer = name =>
        this.setState({ timers: [{ id: uuid(), name }, ...this.state.timers] });

    // This line defines a function called removeTimer(). The removeTimer() function takes an ID as input and removes the timer with that ID from the state of the App component.
    removeTimer = id =>
        this.setState({
            timers: this.state.timers.filter(t => t.id !== id)
        });

    // This line defines the render() method of the App component. The render() method is responsible for returning the HTML that will be displayed for the component.
    render() {

        // Below line returns the HTML for the App component. The HTML includes a text input where the user can create new timers, and a list of timers that are currently running. Each timer in the list is displayed using the Timer component.

        // The create - timer div contains a text input where the user can enter the name of a new timer.The onKeyUp event handler on the text input calls the addTimer() function when the user presses the Enter key.The addTimer() function adds the new timer to the state of the App component.

        // The timer - bench div contains a list of timers that are currently running.Each timer is displayed using the Timer component.The Timer component is responsible for displaying the current time for the timer and providing a button to remove the timer.

        return (
            <div className="container">

                <div className="create-timer">
                    <input
                        type="text"
                        placeholder="Title"
                        onKeyUp={e => {
                            if (e.keyCode === 13) {
                                this.addTimer(e.target.value);
                                e.target.value = "";
                            }
                        }}
                    />
                </div>

                <div className="timer-bench">
                    {this.state.timers.map(t => (
                        <Timer
                            name={t.name}
                            key={t.id}
                            onRemove={() => this.removeTimer(t.id)}
                        />
                    ))}
                </div>

            </div>
        );
    }
}

export default ManageCleanUp;

// Overall, this code creates a React component that implements a timer bench.The component allows the user to create and remove timers, and it displays the current time for each timer.