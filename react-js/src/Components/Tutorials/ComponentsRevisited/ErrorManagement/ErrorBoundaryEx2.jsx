import React, { Component } from "react";

class ErrorBoundaryEx2 extends Component {
    state = {
        error: false
    };

    static
        getDerivedStateFromError() {
        return {
            error: true
        };
    }

    render() {
        if (this.state.error) {
            return (
                <div className="error">
                    Oops! There was an error processing your request!
                </div>
            );
        }

        return this.props.children
    }
}

export default ErrorBoundaryEx2;