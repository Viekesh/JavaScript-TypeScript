import React, { Component } from "react";
import getMessages from "../services/getMessages";

class Inbox extends Component {
  state = {
    messages: []
  };
  render() {
    return (
      <ul className="message-list">
        <li>This is a message!</li>
        <li>This is a message!</li>
        <li>This is a message!</li>
        <li>This is a message!</li>
      </ul>
    );
  }
}

export default Inbox;
