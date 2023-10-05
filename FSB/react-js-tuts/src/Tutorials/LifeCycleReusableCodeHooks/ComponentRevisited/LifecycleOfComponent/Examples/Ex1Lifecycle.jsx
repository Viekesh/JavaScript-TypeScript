import React, { Component } from "react";
import "./Lifecycle.css";

// Above line imports the React library and the Component class. The Component class is a base class for
// creating React components.

// Below line defines a new React component called Ex1Lifecycle. The Ex1Lifecycle component extends the
// Component class, which gives it access to all of the methods and properties of the Component class.
class Ex1Lifecycle extends Component {

    // This line defines the state of the Ex1Lifecycle component. The state of a React component is a
    // collection of data that the component can use to control its behavior.In this case, the state of the 
    // Ex1Lifecycle component contains the current joke and whether or not the component is currently 
    // loading a new joke.
    state = {
        joke: {},
        isLoading: false,
    };

    getJoke = async () => {
        this.setState({
            isLoading: true,
        })
    }

    callJokeApi = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
    );
}
//   getJoke = async () => {
//     this.setState({
//       isLoading: true,
//     });

//     const callJokeApi = await fetch(
//       "https://official-joke-api.appspot.com/random_joke"
//     );

//     const resolveJoke = await callJokeApi.json();

//     this.setState({
//       joke: resolveJoke,
//       isLoading: false,
//     });
//   };
//   componentDidMount = () => this.getJoke();
//   render() {
//     return (
//       <div className="container">
//         <div
//           className={this.state.isLoading ? "title title-pulse" : "title"}
//           onClick={this.getJoke}
//         >
//           Joke Machine
//         </div>
//         <Joke
//           setup={this.state.joke.setup}
//           punchline={this.state.joke.punchline}
//         />
//       </div>
//     );
//   }
// }

// export default App;









// It is also important to note that we’re talking about class components for now because they provide a
// built -in mechanism for customizing behavior through lifecycle methods.
