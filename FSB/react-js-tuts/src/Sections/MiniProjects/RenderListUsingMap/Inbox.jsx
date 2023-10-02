import React, { Component } from "react";
import getMessages from "./GetMessagest";

class Inbox extends Component {
  state = {
    messages: [],
  };

  componentDidMount = async () => {
    const fetchMessages = await getMessages();

    this.setState({
      message: fetchMessages,
    });
  };
  render() {
    return (
      <>
        <ul className="messages_list">
          {this.state.messages.length !== 0
            ? this.state.messages.map(({ id, message }) => (
                <li key={id}>{message}</li>
              ))
            : "Loading Data"}
        </ul>
      </>
    );
  }
}

export default Inbox;
