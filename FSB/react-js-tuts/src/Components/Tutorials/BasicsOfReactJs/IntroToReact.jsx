import React from "react";

const IntroToReact = () => {
  return <div>IntroToReact</div>;
};

export default IntroToReact;

// React is a javascript library created by facebook. This javascript library has a collection of funtions that
// can be used to introduce and develop powerful features and functionalities in your projects.

// React was designed by Facebook to solve common design problems and performance roadblocks. React uses JSX,
// which comes with all the powers of JavaScript. Inside JSX, we can put any JavaScript expressions within braces.
// Each React element is a JavaScript object that can be stored in a variable or can be passed around in a program.

// Using React with JavaScript library, developers can build an intuitive and interactive UIs with minimum coding
// and best rendering performance. Today, some of the biggest names in the corporate universe use React. Names
// like Airbnb, American Express, Amazon Video, Docker, Expedia, Instagram, Khan Academy, Dropbox, BBC, NFL,
// Netflix and so many more rely on React to power their apps.

// Document Object Model :

// The Document Object Model (DOM) is a programming interface for HTML documents.

// It provides different interfaces that allow us to programmatically access, control and modify elements in HTML
// using JavaScript.

// But, DOM is not the most efficient interface and a large number of simultaneous DOM operations slow down the
// application in a browser.

// This is where React plays an important role. Instead of """manipulating the DOM directly""", React introduces a
// """Virtual DOM""", which """creates an in-memory representation of the actual DOM structure""".

// This in-memory representation is kept in sync with the actual DOM in a process called """Reconciliation""",
// which involves a computation of the difference between the updates made in the virtual DOM and the current
// state of the real DOM.

// This way, React can find those parts of the UI that requires an update. Meaning, only highly optimized updates
// are applied to the real DOM, thereby minimizing the interface excursion cost and boosting the performance.

// Declarative Programming :

// In React, """Declarative Programming""" is of high importance. Declarative programming makes code readable and
// easy to debug. You can """design and create interactive UIs by changing the state of the components""" and
// React automatically updates the DOM accordingly.

// Let’s visualize declarative programming using the example of a check-out screen in an online shopping
// application. This check-out screen consists of a list of items that the user has added, with the quantity and
// cost, and you can see the total amount at the bottom.

// If we separate the data from the visual elements, then we would get the code as below.

// There is an array of products with the per-unit cost and quantity purchased. This is the data that drives the
// interface. Any changes to this data that automatically updates the interface along with the calculations on the
// price.

// Now let’s say we want to add another product. This should be as simple as adding the product to the array on
// the left. This automatically updates the UI on the right. Let’s call this data layer as “state”.

// React uses the concept of state, which essentially describes the contents of the interface. Whenever the state
// is changed, the interface automatically updates to reflect the changes. In other words, the interface gets
// updated by simply updating the underlying state. The rest is managed seamlessly by React.

// React Fibre :

// The """reconciliation algorithm""" of React is termed as """React Fiber""", which generates a virtual tree of
// DOM nodes internally when the app starts. It is then rendered into the page. In terms of React Fiber, when the
// state changes, a new virtual DOM tree is generated and is compared with the previous version, in a process
// called ""“diffing”"". The computed difference is then applied to the real DOM.

// Components :

// React JavaScript library is made up of multiple components. These components are """building blocks of any
// React app""". Each of these components has its own logic and controls. These components are extremely useful
// when working on large scale projects because of their reusability feature.

// Why React?

// Apart from React Fiber, React also gives you the ability to break down a large interface into reusable and
// composable components, the true building blocks of a React application. These components can be individually
// maintained as well as developed without hurting the rest of the interface.

// Other than building interfaces, one can build applications by utilizing an ecosystem that includes a router
// such as Reach Router, a state management solution such as Redux and any flavor for the backend.

// Babel Compiler & JSX :

// Babel is a compiler that lets you use cutting edge JavaScript features in your project.

// We also use JSX, which is a JavaScript derivative that is used in React apps to define elements that will
// render on the page.

// JSX allows developers to write code that somewhat resembles HTML and still allows you to use JavaScript
// expressions directly.

// Create React App

// What are Module Bundlers?

// A module bundler is an essential weapon in a modern JavaScript developer’s arsenal. A module bundler, at its
// very core, scans through your files and creates bundles of code by combining together multiple files. This
// allows the break down of code into modules during development. Towards the end of the process, the module
// bundler combines together multiple JavaScript files into compact bundles that can then be deployed on the
// server.

// A modern JavaScript development pipeline typically consists of a module bundler like Parcel or Webpack.

// These module bundlers also employ the services of the Babel compiler which allows you to use cutting edge and
// often unreleased JavaScript features in your apps. Along with Babel, several other add-on compilers may be used
// to compile stylesheets and other files.

// Webpack is one of the most popular module bundlers and is used extensively by the JavaScript developer
// community. It features easy configuration and offers an array of plugins that extend the base capabilities of
// the module bundler to compile all kinds of files, formats and language specifications.

// What is create-react-app?

// "The create-react-app" is a utility that bootstraps a React build pipeline for you. Under the hood, the pipeline
// uses Webpack and Babel to compile modular React code and comes with all the bells and whistles pre-configured
// such as a hot reloading web server. What’s even better is that Webpack, babel and their configuration are all
// tucked away and hidden from view. This means you can concentrate on your code instead of worrying about an
// exposed and fragile build pipeline.

// To create new project in react run the following code in your vs code terminal, git bash or command line prompt.

// first type : npx create-react-app my-app
// after intallation of all files type : cd my-app
// then type : npm start

// Congrats your initial phase to start a new project is now ready.

// What is the name of react reconcilation algorithm?

// React Fiber is the reconciliation algorithm that is used to generate a tree of virtual DOM nodes internally
// when the app starts.

// The data model that drives the interface is known as "state".
// React uses the concept of state which describes the data that drives changes to the user interface.

// When data in the state changes, React compares the newly generated Virtual DOM tree with the previous version
// in a process known as ______________

// Diffing compares the newly generated Virtual DOM tree with the previous version and computes optimistic updates
// which are then applied to the real DOM.

// "props"  are like inlets, allowing you to pass data from parent to child components.

// Why do we use module bundlers like webpack?

// Modern JavaScript apps are built with modular and often reusable code and module bundlers allow us to compile
// these modules into compacted deployable bundles.

// Babel allows you to use cutting edge JavaScript features in your code, even before they make it to the official
// standard.

// Which compiler is used reactjs library and why?

// reactjs uses babel compiler because it is an indispensable tool in your developer arsenal. It allows you to
// write language features that haven’t yet made it to the standard, providing a great developer experience.

// The create-react-app utility, internally uses which of the following utilities/tools?

// The create-react-app utility internally incorporates Babel & Webpack for compiling and bundling React code and
// assets.

// What does the create-react-app utility to?

// The create-react-app utility bootstraps a React application and a development & build toolchain comprising up
// of Babel & Webpack under the hood. This setup comes with all the bells and whistles to get you up and running
// with a React app quickly.

// Once a React app is setup using the create-react-app utility, how do you start the hot reloading server for
// development?

// The npm start command kick starts the hot reloading server from the react-scripts package which then
// auto-refreshes your app whenever you save changes to your code.

// What is the name of React’s reconciliation algorithm?

// React Fiber is the reconciliation algorithm that is used to generate a tree of virtual DOM nodes internally
// when the app starts.

// What are the building blocks of a React application?

// Components are the building blocks of a React application and can be developed and maintained individually.

// The data model that drives the interface is known as _____________

// React uses the concept of state which describes the data that drives changes to the user interface.

// When data in the state changes, React compares the newly generated Virtual DOM tree with the previous version
// in a process known as ______________

// Diffing compares the newly generated Virtual DOM tree with the previous version and computes optimistic updates
// which are then applied to the real DOM.

// __________ are like inlets, allowing you to pass data from parent to child components.

// Props or properties allow parent components to pass data to child components easily.

// React can be imported using a standard <script-src> tag in an HTML page.

// React is a library which can be imported using a standard script source tag in an HTML page, along with the
// React DOM library which is required by React to perform DOM manipulation.

// Why do we use the Babel compiler?

// Babel is a compiler that lets you use cutting edge JavaScript features in your apps. It also allows you to
// compile JSX templates.

// Why did we use the ReactDOM.render() method?

// ReactDOM.render() is indeed used to render React elements on the page. React is medium agnostic and to make it
// work with the real DOM i.e. a web page, the ReactDOM library offers interface methods which includes the render
// () method which actually renders React components on the page.
// React components are referenced in JSX as tags. What is important to note here is that a React component’s name
// must begin with an upper-case character.

// In the code snippet below, what is the use of the curly braces?
// <span className="output">{this.state.txt}</span>

// Curly braces are used to implement JavaScript expressions within JSX templates.

// Why did we rename ‘class’ to ‘className’ on all elements?
// JavaScript forbids the use of certain keywords which are reserved in the language. Since ‘class’ is reserved,
// we cannot use it in JSX. Instead, we use className.

//.
