import React from "react";
import ReactDOM from "react-dom/client";

const HelloReact = () => {
  return <div>HelloReact</div>;
};

export default HelloReact;

// Our React app will allow the user to key in the text which it reverses and displays on the UI instantaneously.

// Let’s build!

// 1. We’ve already done a bit of a setup for you by importing React, ReactDOM and Babel libraries in our HTML file. This will enable you to write your very first React app (A Component) inside the empty script block near the closing body tag on the page.

// 2. Start by creating a Class component named MyApp by writing the following code in the script block:

// class MyApp extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <div className="top">
//           <input type="text" id="InputField" />
//         </div>

//         <div className="bottom">
//           <span className="output">Result goes here!</span>
//         </div>
//       </div>
//     );
//   }
// }

// 3. You’ve just made a React Component. To render it on the page, add the following line below the MyApp class
// that you just created in the previous step.

// ReactDOM.render(<MyApp />, document.getElementById("app"));

// 4. Let’s now create a state property that will be used to hold what the user types so that it can be reversed 
// and displayed back on the UI. Modify the constructor function in your MyApp class as shown below:

// 4. Let’s now create a state property that will be used to hold what the user types so that it can be reversed 
// and displayed back on the UI. Modify the constructor function in your MyApp class as shown below:

// constructor() {

//     super();

//     this.state = {

//         txt: ""

//     };

// }

// 5. To populate the ‘txt’ state property with the contents of the input field as the user types, we need an 
// event listener which listens to changes and updates the ‘txt’ property.To achieve this, modify the < input > 
// field with the id ‘inputFld’ as shown below:

// <input type="text" id="inputFld" onChange={e => this.setState({ txt: e.target.value })} />

// 6. Now whenever the user types in the input field, the ‘txt’ state property is updated and the MyApp component
// re - renders. To reverse the text and display it on the UI, modify the contents of the span with the className
// 'output’.

//     < span className = "output" >

//     {
//         this.state.txt

//             .split("")

//             .reverse()

//             .join("")
//     }

//   </span >

// 7. Your completed code should look like this.

class MyApp extends React.Component {
  constructor() {
    super();

    this.state = {
      txt: "",
    };
  }

  render() {
    return (
      <div>
        <div className="top">
          <input
            type="text"
            id="inputFld"
            onChange={(e) => this.setState({ txt: e.target.value })}
          />
        </div>

        <div className="bottom">
          <span className="output">
            {this.state.txt.split("").reverse().join("")}
          </span>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("app"));

// Babel is a compiler that lets you use cutting edge JavaScript features in your apps. It also allows you to
// compile JSX templates.

// ReactDOM.render() is indeed used to render React elements on the page. React is medium agnostic and to make it
// work with the real DOM i.e. a web page, the ReactDOM library offers interface methods which includes
// the "render()" method which actually renders React components on the page.

// React components are referenced in JSX as tags. What is important to note here is that a React component’s name
// must begin with an upper-case character.

// Curly braces are used to implement JavaScript expressions within JSX templates.

// JSX is a JavaScript derivative. Any keyword that is reserved in JavaScript cannot be used in JSX, such as
// ‘class’. This is why we use className instead.
