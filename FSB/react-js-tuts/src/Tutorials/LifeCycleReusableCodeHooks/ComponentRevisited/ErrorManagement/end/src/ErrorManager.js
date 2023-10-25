import React, { Component } from "react";
import logger from "./logger";

class ErrorManager extends Component {
	state = {
		error: false,
	};
	static getDerivedStateFromError() {
		return {
			error: true,
		};
	}
	componentDidCatch(error, info) {
		logger(error, info);
	}
	render() {
		if (this.state.error) {
			return (
				<div className="error">
					<img src="./failWhale.jpg" alt="There was an error!" />
					<div
						className="reset-btn"
						onClick={() => {
							this.setState({
								error: false,
							});
							this.props.onClose();
						}}
					>
						Close
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorManager;



// A class component becomes an error boundary if it implement getDerivedStateFromError() and
// componentDidCatch() method.