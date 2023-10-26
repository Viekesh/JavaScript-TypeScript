import React from "react";
import CurrencyConverter from "../Tutorials/BuildingForms/CurrencyConverter/src/CurrencyConverter";
// import Ex2BuildForm from "../Tutorials/BuildingForms/Examples/Ex2BuildForm";
// import Ex1BuildForm from "../Tutorials/BuildingForms/Examples/Ex1BuildForm";
// import EventsHandling from "../Tutorials/ComponentsRevisited/EventsHandling/EventsHandling";
// import Ex2 from "../Tutorials/ComponentsRevisited/ErrorManagement/Ex2";
// import ErrorManagement from "../Tutorials/ComponentsRevisited/ErrorManagement/ErrorManagement";



const LandingPage = () => {
    return (
        <>
            {/* <ErrorManagement /> */}
            {/* <Ex2 /> */}
            {/* <EventsHandling /> */}
            {/* <Ex1BuildForm /> */}
            {/* <Ex2BuildForm /> */}
            <CurrencyConverter />
        </>
    )
}



export default LandingPage;



// que n ans

// que 1: What is the purpose of the given code?
{/* <div id="root">${ReactDOMServer.renderToString(<App />)}</div> */ }

// ans : server side rendering.



// que 2: To enable SEO to React applications, you prefer _________.

// ans : server side rendering.



// que 3: What is the meaning of ref in below code:
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

// ans: The given code is used to get the reference to the field by assigning the ref attribute to a property defined in the constructor with React.createRef().


// que 4: What is the meaning of the given code in React?
// useEffect(
//     () => {
//         console.log(`Hi ${name} you clicked ${count} times`)
//     },
//     [name, count]
// )

// ans: In the given code, the useEffect hook is used for invoking Server-Side API and render DOM.



// two techniques to optimuze form elements:
// ans : > by handling multiple inputs
//       > by applying debouncing

// This is important because performance is the key, and so is maitainable code.


// What is debouncing?
// debouncing is the process of relaying a function.
// debouncing is works by initialising a timer, every time an event is received.
// it drastically cuts down the number of invocation especially in cases where the function leads to api
// calls that are rate limited.