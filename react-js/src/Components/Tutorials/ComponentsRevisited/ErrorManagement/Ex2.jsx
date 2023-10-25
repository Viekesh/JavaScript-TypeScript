import React, { Component } from "react";
import "./AppEx2.css";
import ErrorBoundaryEx2 from "./ErrorBoundaryEx2";
import WeatherCardEx2 from "./Services/WeatherCardEx2";



class Ex2 extends Component {
    state = {
        city: null
    };
    render() {
        return (
            <div className="app">
                <button
                    className="getDataBtn"
                    onClick={() => this.setState({ city: "New York" })}
                >
                    New York
                </button>
                <button
                    className="getDataBtn"
                    onClick={() => this.setState({ city: "Los Angeles" })}
                >
                    Los Angeles
                </button>
                <ErrorBoundaryEx2>
                    <WeatherCardEx2 city={this.state.city} />
                </ErrorBoundaryEx2>
            </div>
        );
    }
}

export default Ex2;
