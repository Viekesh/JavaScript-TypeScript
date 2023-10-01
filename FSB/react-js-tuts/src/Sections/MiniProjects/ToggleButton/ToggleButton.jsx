import React, { Component } from "react";
import "./ToggleButton.css";

class ToggleButton extends Component {
  state = {
    isOn: false,
  };

  render() {
    return (
      <div className="toggle-button">
        <button
          className={this.state.isOn ? "btn btn-on" : "btn btn-off"}
          onClick={() => this.setState({ isOn: !this.state.isOn })}
        >
          {this.state.isOn ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export default ToggleButton;

// In this hands-on exercise, we will create a toggle button for a hypothetical spacecraft's guidance system
// panel. The finished ToggleButton component will allow us to switch the button’s states when the user
// clicks on it.

// this component renders a big red button with the word ‘Off’ which is simply static JSX at this time. We
// want to be able to click on the button to toggle its visual state.

// We’ll first create a state property known as ‘isOn’ which will store our button’s Boolean state. Modify
// your ToggleButton class component as shown below:

// You will notice a property on the button element named ‘onClick’. This allows you to define a click event
// handler. At the moment, the anonymous function doesn’t do anything. Let’s equip it to toggle our ‘isOn’
// state property whenever the user clicks on the button. Modify the opening button element tag.

// It is important to note that the state is local and private to a component and is not accessible outside the
// component. But,  a component’s state can be shared with another component by using props.

// When using Class Components, state management is a built-in feature. This means that you can create and manage
// state variables directly within the class component, with no need for any extra tool.

// The first thing that one needs to do is declare and initialize state properties. This can be done either in the
// constructor method of the class component or if we are using the create-react-app based workflow, then we can
// declare the state object using the class field declaration syntax.

// It is important to note that the state is local and private to a component and is not accessible outside the
// component. But,  a component’s state can be shared with another component by using props.

// Class components offer built-in state management and thus become a natural choice. On the other hand, Function
// Components are inherently stateless. They accept their data using props and do not offer either state
// management or lifecycle methods.

// Stateless Function Component is a standard JavaScript function that receives input as a single prop argument
// and returns back a React element to render.

// They have been termed as Functional Stateless Components as they are stateless and are expressed by a function.
// However, React Hooks API has made it possible to have State in Function Components.

// What is hook?
// A Hook is a special function that allows us to 'hook into' React features, that is, they allow us to use State
// and other React features without writing a class. Like, useState is a Hook that lets us add React state to
// function components.

// When hooks are used?
// Suppose there is a Function Component that one has written and realizes that they have to add some state to it.

// What is useState function?
// It is a built-in hook that can be imported from the react package. With the help of useState() function in a
// function component, a piece of state can now be created without switching to class components.

// Important Note:
// Keep state at the nearest logical parent,  from where it can be passed down to child component using props or a
// feature known as the context API.
// Keeping state at the nearest logical parent helps you manage and reason with state data changes in a much more
// logical way.
