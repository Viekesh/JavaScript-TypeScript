import React from "react";
import MessageBox from "./MessageBox";

const FormComponent = () => (
  <MessageBox
    nameVal="John Doe"
    natureVal="Tech Support"
    queryVal="I've been having problems with my account for a while. Please help me resolve it asap!"
  />
);

export default FormComponent;
