import React, { Component } from "react";
import "./WeatherCar.css";
import WeatherService from "./WeatherService";



// In this exercise, we will implement the componentDidMount lifecycle method to bring in data from a mock
// weather service.The weather service will return weather data for New York when the app loads up. When
// the app loads up right now, all we see is a message saying, “No Data Available”. Let’s fix this.

// In this component has a function named fetchWeather which needs to be executed to fetch data to
// display.

// In the src/components/WeatherCard.js file, add a componentDidMount function to invoke the fetchWeather function. Use either the class function or the class field declaration syntax as shown below.

// Class Method Syntax
// componentDidMount() {
//     this.fetchWeather();
// }

// or

// Class Fields Syntax
// componentDidMount = () => this.fetchWeather();

class WeatherCard extends Component {
    state = {
        data: null,
    };

    fetchWeather = () => {
        WeatherService().then((weatherData) => {
            this.setState({
                weatherData,
            })
        });
    };

    componentDidMount = () => this.fetchWeather();

    render() {
        return this.state.data ? (
            <div className="weather-card">
                <h1 id="city">{this.state.data.city}</h1>
                <div id="conditions">{this.state.data.conditions}</div>
                <div id="current-temp">{this.state.data.current}&deg;</div>
                <div className="min-max">
                    <div id="min-temp">Min {this.state.data.minTemp}&deg;</div>
                    <div id="max-temp">Max {this.state.data.maxTemp}&deg;</div>
                </div>
            </div>
        ) : (
            <h4>No Data Available</h4>
        );
    }
}

export default WeatherCard;



// Your component needs to query an API to fetch data to display when it loads for the first time. Where
// exactly would you place the code in the component to be able to do the same ?

// The componentDidMount() is the ideal place to invoke network requests that have to fetch data to display
// when the component renders for the first time.The component is rendered without the data, a network
// request is made, and the component is updated thereafter to reflect the new data.



// If a side effect depends on changes to state or props, which lifecycle method is the best place to
// implement the side effect ?

// The componentDidUpdate() lifecycle method can be used to run a side effect every time the component
// updates.



// Which of the following code snippets will load data from the API whenever the component loads for the
// first time ?

// class App extends Component {
// state = {
//     products: []
// };
// getProducts = () => {
//     return fetch("/api/products")
//         .then(res => res.json())
//         .then(data => this.setState({ products: data }));
// };
// componentDidMount() {
//     this.getProducts();
// }
// render() {
//     return (
//         <div className="products">
//             {this.state.products.map(({ id, title, cost }) => (
//                 <ProductCard key={id} title={title} cost={cost} />
//             ))}
//         </div>
//     );
// }
// }

// The componentDidMount() is the right method to load content from an API.



// When the component updates, the componentDidMount() is also invoked in the updating phase. Is this
// statement correct?

// The componentDidMount() only runs once when the component is mounted for the first time. Thereafter,
// componentDidUpdate() runs during the updating phase.



// Which of the following snippets ensures that the API call is only made if the value in the prop ‘location’ changes?

// SNIPPET A
// class App extends Component {
//     state = {
//         weather: []
//     };
//     getWeather = (location = "NY") => {
//         return fetch(`/api/weather/${location}`)
//             .then(res => res.json())
//             .then(data => this.setState({ weather: data }));
//     };
//     componentDidMount() {
//         this.getWeather(this.props.location);
//     }
//     componentDidUpdate() {
//         this.getWeather(this.props.location);
//     }
//     render() {
//         return (
//             <div className="weather-app">
//                 <WeatherCard data={this.state.weather} />
//             </div>
//         );
//     }
// }

// SNIPPET B
// class App extends Component {
//     state = {
//         weather: []
//     };
//     getWeather = (location = "NY") => {
//         return fetch(`/api/weather/${location}`)
//             .then(res => res.json())
//             .then(data => this.setState({ weather: data }));
//     };
//     componentDidMount() {
//         this.getWeather(this.props.location);
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.location !== this.props.location) {
//             this.getWeather(this.props.location);
//         }
//     }
//     render() {
//         return (
//             <div className="weather-app">
//                 <WeatherCard data={this.state.weather} />
//             </div>
//         );
//     }
// }

// Snippet B demonstrates the use of an optimization which ensures the component only updates if content in
// the props change.