import React, { Component } from "react";
import "./CompoWillUnmount.css";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";



// In this exercise, we see an app with three timer instances, each using the setInterval function to invoke a
// timer instance.We also have a delete button to remove timer instances, however, at this time, we also need
// to tear down the timer instance using the clearInterval, which should be invoked in the componentWillUnmount
// lifecycle function.

// You can see we’re initiating a timer instance using setInterval but we’re not cleaning it up when the
// component instance is destroyed. We’ll fix this by implementing the componentWillUnmount lifecycle function
// as shown below.

// Class Field Syntax
// componentWillUnmount = () => clearInterval(this.timerInstance);

// or

// Class Method Syntax
// componentWillUnmount() {
//     clearInterval(this.timerInstance);
// }

// That’s it!

momentDurationFormatSetup(moment);

class Timer extends Component {

    state = {
        seconds: 0
    };

    componentDidMount() {
        this.timerInstance = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }, 1000);
    }

    formatTime = seconds => {
        moment
            .duration(seconds, "seconds")
            .format([
                moment.duration(1, "second"),
                moment.duration(1, "minute"),
                moment.duration(1, "hour")
            ]);
    }

    componentWillUnmount = () => clearInterval(this.timerInstance);

    render() {
        return (
            <div className="timer-instance">
                <div className="timer-name">{this.props.title}</div>
                <div className="timer-display">
                    {this.formatTime(this.state.seconds)}
                </div>
                <button className="remove-timer" onClick={this.props.onRemove}>
                    Del
                </button>
            </div>
        );
    }
}

export default Timer;



// Where would you implement a teardown for a timer instantiated using setInterval()?

// A timer teardown should be implemented in the componentWillUnmount() lifecycle function.



// componentWillUnmount() can be used for ________________________.

// A timer teardown should be implemented in the componentWillUnmount() lifecycle function.



// When implementing a timer using setInterval() why do we need to tear it down using componentWillUnmount()?

// setInterval() instances are created on the window interface which requires manual tear down to prevent the timer from perpetually running means setInterval instance is created on the window interface and it keeps running unless manually removed.



// 