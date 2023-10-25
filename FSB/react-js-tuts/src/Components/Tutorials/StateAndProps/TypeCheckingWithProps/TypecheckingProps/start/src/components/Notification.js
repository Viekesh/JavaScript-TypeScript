import React from 'react';

const Notification = ({ messages }) => (
  <ul>
    {messages.map((m, i) => (
      <li key={i}>{m}</li>
    ))}
  </ul>
);

export default Notification;
