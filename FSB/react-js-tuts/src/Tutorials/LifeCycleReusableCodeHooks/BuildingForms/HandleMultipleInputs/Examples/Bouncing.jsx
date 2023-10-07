import React, { Component, createRef } from "react";
import BookCard from "./BookCard";
import filter from "./db";
import debounce from "lodash.debounce";
// import lodash.debounce by using npm i lodash.debounce, this is because we need only this function hence
// instead of installing entire library we implement this...

// this is important to take care when we deploy our production ready react app take care it is as small
// as possible, to work for efficiently.


class Bouncing extends Component {

    searchRef = createRef();
    state = {
        results: [],
        selectedBook: null
    };

    searchBooks = debounce(keyword => {
        console.log(`Searching for ${keyword}`);
        if (keyword !== "") {
            const getTitles = filter(keyword);
            this.setState({
                results: getTitles
            });
        } else {
            this.setState({
                results: []
            });
        }
    }, 400);

    clear = () => {
        this.searchRef.current.value = "";
        this.setState({ results: [] });
    };

    showDetails = book => {
        this.setState({ selectedBook: book });
        this.clear();
    };

    render() {
        return (
            <div className="books-app">
                <div className="title">The Library Catalogue</div>
                <div className="search-box">
                    <input
                        type="text"
                        onChange={evt => this.searchBooks(evt.target.value)}
                        ref={this.searchRef}
                    />
                    <div className="clear-btn" onClick={() => this.clear()}>
                        X
                    </div>
                    <div className="search-results">
                        {this.state.results.length > 0 ? (
                            <ul>
                                {this.state.results.map((b, index) => (
                                    <li key={index} onClick={() => this.showDetails(b)}>
                                        {b.title}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>

                </div>

                <div className="book-details">
                    <BookCard data={this.state.selectedBook} />
                </div>

            </div>
        );
    }
}

export default Bouncing;



// What is the purpose of the given code?
{/* <div id="root">${ReactDOMServer.renderToString(<App />)}</div> */ }

// server side rendering



// To enable SEO to React applications, you prefer _________.

// server side rendering



// hat is the meaning of ref in below code:
// class FileInput extends React.Component {
//     constructor(props) {
//         super(props)
//         this.file = React.createRef()
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     handleSubmit(event) {
//         alert(this.file.current.files[0].name)
//         event.preventDefault()
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input type="file" ref={this.file} />
//                 <input type="submit" value="Submit" />
//             </form>
// }

// Get the reference to the field by assigning the ref attribute to a property defined in the constructor with
// React.createRef(). The given code is used to get the reference to the field by assigning the ref attribute
// to a property defined in the constructor with React.createRef().



// What is the meaning of the given code in React?
// useEffect(
//     () => {
//         console.log(`Hi ${name} you clicked ${count} times`)
//     },
//     [name, count]
// )

// In the given code, the useEffect hook is used for invoking Server-Side API and render DOM.



// .