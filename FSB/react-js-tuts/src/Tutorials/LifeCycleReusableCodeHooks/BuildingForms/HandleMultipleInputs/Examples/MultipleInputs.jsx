import React, { Component } from "react";
import "./MultipleInputs.css";



// Here we'll discuss two techniques that promote efficiency when handling form components.
// This is important because performance is key, and so is maintainable code.
// You will often come across situations where several form elements need to update respective properties in
// the state. Naturally, this calls for the use of multiple event handlers.
// By writing a single and central event handler function, you can greatly optimize a React component and 
// streamline the process of handling multiple input fields.

class MultipleInputs extends Component {

    state = {
        name: "",
        email: "",
        phone: "",
        priveleges: {
            Author: false,
            Moderator: false,
            Reviewer: false
        },
        verification: ""
    };

    formHandler = ({ target }) => {
        const { name, type, value } = target;
        this.setState({
            [name]:
                type === "checkbox"
                    ? { ...this.state[name], [value]: !this.state[name][value] }
                    : value
        });
    };

    render() {
        return (
            <div className="form">
                <div className="field-holder">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={this.formHandler}
                        value={this.state.name}
                    />
                </div>

                <div className="field-holder">
                    <input
                        type="email"
                        placeholder="E-Mail"
                        name="email"
                        onChange={this.formHandler}
                        value={this.state.email}
                    />
                </div>

                <div className="field-holder">
                    <input
                        type="phone"
                        placeholder="Phone"
                        name="phone"
                        onChange={this.formHandler}
                        value={this.state.phone}
                    />
                </div>

                <div className="field-holder">
                    <p>Priveleges</p>
                    <label>
                        Author:{" "}
                        <input
                            type="checkbox"
                            name="priveleges"
                            value="Author"
                            onChange={this.formHandler}
                            checked={this.state.priveleges.Author}
                        />
                    </label>
                    <label>
                        Moderator:
                        <input
                            type="checkbox"
                            name="priveleges"
                            value="Moderator"
                            onChange={this.formHandler}
                            checked={this.state.priveleges.Moderator}
                        />
                    </label>
                    <label>
                        Reviewer:
                        <input
                            type="checkbox"
                            name="priveleges"
                            value="Reviewer"
                            onChange={this.formHandler}
                            checked={this.state.priveleges.Reviewer}
                        />
                    </label>
                </div>

                <div className="field-holder">
                    <p>Verification</p>
                    <label>
                        Phone:
                        <input
                            type="radio"
                            name="verification"
                            value="Phone"
                            onChange={this.formHandler}
                            checked={this.state.verification === "Phone" ? true : false}
                        />
                    </label>
                    <label>
                        E-Mail:
                        <input
                            type="radio"
                            name="verification"
                            value="E-Mail"
                            onChange={this.formHandler}
                            checked={this.state.verification === "E-Mail" ? true : false}
                        />
                    </label>
                </div>

                <div className="separator" />

                <div className="output">
                    <ul>
                        {Object.keys(this.state).map(k => (
                            <li key={k}>
                                <b>{k}</b>: {JSON.stringify(this.state[k])}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        );
    }
}

export default MultipleInputs;
