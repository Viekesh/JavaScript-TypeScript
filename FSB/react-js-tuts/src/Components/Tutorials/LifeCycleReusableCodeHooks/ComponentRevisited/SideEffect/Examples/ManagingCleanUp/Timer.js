import React, { Component } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

// The code you provided is a React component that implements a timer. The component uses the moment
// library to format the time and the moment - duration - format library to add support for formatting
// durations in moment.
// These lines import the necessary libraries and set up the moment library to support formatting durations.



momentDurationFormatSetup(moment);

class Timer extends Component {

    // This line defines the state of the Timer component. The state of a React component is a collection 
    // of data that the component can use to control its behavior. In this case, the state of the Timer 
    // component contains the current time and whether or not the timer is paused.
    state = {
        isPaused: false,
        seconds: 0,
    }

    // This line defines the componentDidMount() lifecycle hook. The componentDidMount() hook is called when 
    // the component mounts, which is when it is first inserted into the DOM.In this case, the componentDidMount
    // () hook is used to start a timer that increments the "seconds" state variable every second.
    componentDidMount = () => {
        this.timerInstance = setInterval(() => {
            if (!this.state.isPaused) {
                this.setState({
                    seconds: this.state.seconds + 1
                });
            }
        }, 1000);
    };

    // This line defines the componentWillUnmount() lifecycle hook. The componentWillUnmount() hook is called 
    // when the component is unmounted, which is when it is removed from the DOM.In this case, the 
    // componentWillUnmount() hook is used to clear the timer that was started in the componentDidMount() hook.
    componentWillUnmount = () => clearInterval(this.timerInstance);

    // This line defines a function called formatTime() that takes a number of seconds as input and returns a 
    // formatted time string.The formatTime() function uses the moment library to format the time.
    formatTime = seconds => moment.duration(seconds, "seconds").format("HH:mm:ss");

    // This line defines the render() method of the Timer component. The render() method is responsible for 
    // returning the HTML that will be displayed for the component.
    render() {

        // This line returns the HTML for the Timer component. The HTML includes the timer name, the formatted 
        // time, and a button to pause and unpause the timer.The HTML also includes a button to remove the 
        // timer.
        return (
            <div className="timer">
                <div className="timer-name">
                    {this.props.name} {this.state.isPaused ? "(Paused)" : null}
                </div>

                <div className="timer-display">
                    {this.formatTime(this.state.seconds)}
                </div>

                <div
                    className="pauseBtn"
                    onClick={() => this.setState({
                        isPaused: !this.state.isPaused
                    })}
                >
                </div>
                <div className="removeBtn" onClick={() => this.props.onRemove()} />
            </div>
        )
    }
}

export default Timer;

// Overall, this code creates a React component that implements a timer. The component can be used to display a
// timer for any purpose, such as tracking the time spent on a task or the time remaining in a meeting.



// Functional Component

// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import momentDurationFormatSetup from "moment-duration-format";

// momentDurationFormatSetup(moment);

// function Timer({ name, onRemove }) {
//     const [isPaused, setIsPaused] = useState(false);
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (!isPaused) {
//                 setSeconds(seconds + 1);
//             }
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [isPaused]);

//     const formatTime = () => moment.duration(seconds, "seconds").format("HH:mm:ss");

//     return (
//         <div className="timer">
//             <div className="timer-name">
//                 {name} {isPaused ? "(Paused)" : null}
//             </div>
//             <div className="timer-display">
//                 {formatTime()}
//             </div>
//             <div
//                 class="pauseBtn"
//                 onClick={() => setIsPaused(!isPaused)}
//             />
//             <div class="removeBtn" onClick={onRemove} />
//         </div>
//     );
// }

// export default Timer;



// The main difference between the class component and the function component is that the function component uses the useState and useEffect hooks to manage its state and perform side effects.

// The useEffect hook in the function component is used to start and stop the timer. The useEffect hook takes a callback function as an argument. The callback function is executed when the component mounts and unmounts, as well as when any of the dependencies in the array passed to the useEffect hook change. In this case, the only dependency is the isPaused state variable. This means that the callback function will be executed when the component mounts, unmounts, or when the isPaused state variable changes.

// The formatTime() function in the function component is the same as the formatTime() function in the class component.

// The render() method in the function component is the same as the render() method in the class component, except that it uses the isPaused and seconds state variables instead of the this.state.isPaused and this.state.seconds properties.

// Overall, the function component is a more modern and concise way to write React components. The useState and useEffect hooks make it easy to manage the state of your components and perform side effects.



// .