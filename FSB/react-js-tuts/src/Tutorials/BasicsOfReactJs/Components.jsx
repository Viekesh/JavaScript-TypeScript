// In this hands-on exercise, we will create a class component that lets you type text in a <textarea> field while
// it displays word and character counts that update as you type. These kinds of components are usually seen on
// social media platforms like Twitter or blogging platforms where character and word counts are important.

// 1. Open App.js. You will notice we’ve already imported React and the Component class from the React library
// along with the App.css stylesheet which contains pre-built styles for this exercise.

// 2. Begin by creating a class component named App as shown below:

import { Component } from "react";
import "./Components.css";

class Components extends Component {
  state = {
    text: "",
  };
  render() {
    return (
      <div className="app">
        <textarea
          id="text-area"
          onChange={(e) => this.setState({ text: e.target.value })}
        ></textarea>

        <div id="char-count">{this.state.text.length} Character(s)</div>

        <div id="word-count">
          {this.state.text ? this.state.text.match(/\w+/gim).length : 0} word(s)
        </div>
      </div>
    );
  }
}

export default Components;

//  Let’s now create a state variable called ‘text’ which will be used to hold the text that the user types in the <textarea> field. Add a state object as highlighted below using the class field declaration syntax.

// We now need to populate the ‘text’ state variable whenever the user types in the <textarea> field. For this purpose, we’ll add an onChange event listener function to the <textarea> element as highlighted below.

// Finally, to compute the number of words, we will use a regular expression to match words using the standard JavaScript match method which produces an Array of matched elements. The number of words is then equal to the length of this dynamically produced array.

// We will also use a ternary expression to check for the presence of characters in the ‘text’ variable. If the <textarea> is blank, then we’ll render ‘0’ as the value or else we’ll compute the number of words to display.

// Note that the regular expression has been deliberately kept simple for brevity. Modify the contents of the <div> with the id “word-count” as highlighted below.

//  That’s it! You’ve just built a dynamic class component. Try to type something in the field and watch the character and word counts update automatically!

// Components is the building blocks of all react applications.

// Components help you break down a larger interface into smaller units that can be built and maintained independently.

// In ReactJs every feature designed as a component, not only can you develop them independently of other features, but also bring scalability into the equation. As individual components, features can be evolved without worrying about the rest of the architecture.

// Facebook uses more than 50,000 components and they’re all built using React. This is what makes React, a
// battle-hardened solution that you can bank on safely.

// Components are composable units that let you focus your energies on building great features. Add declarative
// rendering, with state and the virtual DOM, and you’ve got yourselves the right toolkit for building great user
// interfaces and apps.

// Remember everything that you build using is a "Component".

// The actual data comes through the top-level components and gets passed down in a one-way data flow to all the
// child components.

// Unidirectional data flow:
// React’s one way or unidirectional data flow order simply means that a parent component will pass down data to nested child components using props, which act like inlets into a component.

// The bottom line here is, Components are reusable features that you can compose together to create a user
// interface.

// Reusability allows you to design components that can be used across multiple projects, saving you tons of time.

// Anatomy Of Component :

// class Components extends Component {
//     state = {
//         isOn : false
//     }

//     toggle = () => {
//         this.setState({
//             isOn : this.state.isOn
//         });
//     }

//     render() {
//         return (
//             <div className={this.state.isOn ? "btn btn-on" : "btn"} onClick={this.toggle}>
//                 {
//                     this.props.label
//                 }
//             </div>
//         )
//     }
// }

// render :

// A component must implement a render method which means that it must produce visual content that it would render
// on the page.

// For instance, if you’ve designed a component that should render a button, then it must implement a mechanism to
// visually render that button when the component is used.

// These render methods allow you to describe the DOM layout of your component using JSX, a JavaScript derivative
// that looks and feels a lot like HTML when you first start working with.

// But unlike HTML, JSX allows you to use JavaScript expressions directly in the layout.

// state :

// Stateful components describe visual elements with data.

// As you change and modify this data, the component automatically re-renders to reflect the change.

// If your component features a """visual element""" that the user can interact with, such as buttons or other elements, then you can implement """event listeners""" to capture user interaction.

// Such event listeners can then be used to trigger methods. A method is a function that is private to a component
// and can be used for all sorts of things, from manipulating state, to side effects such as fetching data from an
// API.

// Methods are optional and may not be needed in all cases.

// The interesting thing about React is that it is much more than a library to build interfaces for the web. React
// by itself is not limited to web pages and the DOM. It is a way to design composable components and
// functionality that can be used with a wide range of mediums.

// For instance, the React Native project lets you use React for designing mobile apps for iOS and Android.

// And you can write custom renderers as well. This separation of core logic and the renderer makes React an
// excellent library to work with.

// Now since we’re talking about components, let’s investigate the different types of components that React
// offers, in the next topic.

// Types Of Components :

// Components encapsulate visual elements and may also contain logic and state. This way they allow you to create
// reusable and composable features.

// There are two types of components :

// Functional Components

// Class Component

// Class Component :

// A react component written with a javascript class comes with the method class contructor which is primarily
// used in react to set initial state or to bind methods and the mandatory render mehtod to return JSX as output.

// Functional Component :

// A functional component is just a plain javascript function which excepts props as an argument and returns a
// react element. A class component is requires you to extend from react component and create a render function
// which returns a react element.

// Class Component

// A class component is subclassed from the component class in React.

// A class component offers several out of the box features. For instance, class components let you store local
// state.

// They also allow you to create lifecycle hooks, which we’ll examine later in the course.

// Function Component

// Now, the second type of component that you can build with React is known as Function components.

// These are just simple functions that return a React element. They can also bring in a props object as an
// argument.

// function welcome(props) {
//   return <h1>{props.name}</h1>
// }

// This function is a valid React component because it accepts a single “props” (which stands for properties)
// object argument with data and returns a React element. We call such components “function components” because
// they are literally JavaScript functions.

// A function can also be defined by using ES6 class

// class Welcome extends React.Component {
//   render() {
//     return <h1>{ this.props.name }</h1>
//   }
// }

// As its most basic, a functional component is a presentational component, which lets you except data through a
// prop and render it on an UI.

// These functions do not offer built-in state management, lifecycle methods and other bells and whistles that
// class components offer.

// They’re simple JavaScript functions.

// And while natively they may lack the ability to incorporate state and methods, React recently introduced the
// Hooks API, which lets you incorporate state and lifecycle methods, right within a function component.

// This means you can upgrade a function component to include state management and other advanced features,
// without converting it to a class component.

// So how do you pick from class and function component?

// While class components, as a syntax isn’t going anywhere, it is safe to say that, function components coupled
// with the super-powerful Hooks API offer a cleaner and simpler syntax in the long run and are probably a better
// bet.

// Your code is more readable and is also easier to test. Having said that, there is nothing wrong with using
// class components as well.

// What is JSX?

// you have seen how class and function components look like and how they can be created and used.

// The most fundamental element in a component is the visual elements that it has to render.

// This is where JSX comes into the picture. It is a syntax that lets you describe what a component renders.

// JSX is an extension to regular JavaScript and while it looks a lot like HTML, it is way more powerful and
// expressive.

// JSX is like a templating syntax for React applications that makes it easy for developers to incorporate visual
// elements and dynamic data in a format and syntax that they’re somewhat familiar from the get go.

// But the real power behind JSX is that it lets you use JavaScript all the way.

// React encourages the use of standard JavaScript instead of forcing you to use, library or framework-specific
// methods and directives.

// JSX is not HTML.

// For instance, instead of using an attribute called class, we use className and we can create event listeners
// like onClick as we saw in the last topic.

// JSX is not HTML. For instance, instead of using an attribute called class, we use className and we can create
// event listeners like onClick as we saw in the last topic.

// class Notification extends Component {
//   render() {
//     return (
//       <div>
//         <span>Notification</span>
//         <Panel message = {this.props.notificationText} />
//         <button type='dissmiss'>{this.props.dissmiss}</button>
//       </div>
//     )
//   }
// }

// How does JSX work?

// JSX is like a templating language which means it lets us describe visual elements in an HTML like syntax but
// internally it transforms the syntax into code that React actually uses.

// JSX is designed to produce React elements.

// So, when you write JSX, it is compiled into standard JavaScript functions containing nested invocations of the
// createElement function which is what React uses to create renderable elements internally.

// In fact, JSX is nothing more than syntactic sugar for the createElement function from the React library.

// const Notification = ({message}) => {
//   React.createElement(
//     "div",
//     {
//       className : "notification"
//     },
//     message
//   );
// }

// The createElement() function takes in 3 arguments

// 1. The first is the type of element or the reference to a component.

// 2. The second argument is an object where key-value pairs translate to props and their values.

// 3. The third argument is for child components or content that needs to go between the opening and closing tags
// of an element or a component.

// Why use JSX?

// JSX is one way by which React makes it easy for developers to express visual elements and layouts and still
// retain the expressiveness of JavaScript.

// React features a unidirectional data flow architecture which means that data flows down like a waterfall from
// parent to child components using features such as props among other ways. We can also say that react’s one-way
// data flow (also called one-way binding) keeps everything modular and fast.

// React unidirectional and one way data flow is simply means that the parent component can pass data to the
// nested child component typically using props which acts like inlets into a component.

// Event listeners in JSX allow you to capture user events such as mouse clicks, keyboard events and more.

// What may component implement to describe visual changess with data?
// State is used to declaratively describe changes to the UI with data. Whenever data in the state changes, the
// component re-renders to reflect the change.

// Summarize :

// Everything that you built using react is a component. Components are building blocks of all react applications
// that helps you break down a larger interface into smaller units that can be build and maintain independently.
// Components are reusable features that you can compose together to create a user interface.

// React is one way or unidirectional data flow order, simply means that parent component will pass down data to
// nested child components using props, which acts like inlet into a component. This unidirectional data flow
// order makes it easy to understand, implement and debug common problems as recognition of data sources and flow
// becomes easy.

// State Component :

// State is used to describe visual elements using data. Updates to the states causes the component to re-render
// using the visual updates.

// Render Method :

// Render method describe the visual elements of a component typically using JSX.
