import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
import getUsers from "./getUsers";

class Users extends Component {
    state = {
        users: [],
    };

    componentDidMount = async () => {
        const fetchUsers = await getUsers();
        this.setState({
            users: fetchUsers,
        });
    }

    render() {
        return(
            // <ProfileCard
            // data = {{
            //     name: "Jeremmy Simmins",
            //     email: "Phone",
            //     phone: "0123456789",
            //     ProfilePic: "https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg",
            // }}
            // />

            // this.state.users.map(u => <ProfileCard
            // data = {u} key={u.id}
            // />)

            // We can also add "loading data"
            // By the way instead of loading data you can render a component that displays an elegant preloading
            // animation. This process is known as conditional rendring where the exact nature of a output is
            // dependant on a condition
            this.state.users.length !== 0 ? this.state.users.map(u => <ProfileCard
            data = {u} key={u.id}
            />) : "Loading Data"
        )
    }
}

export default Users;


// So map function produces an array of react elements, based on a data collection that we provide, the data
// comes from the state and is updated, then the list of the UI will automatically update to reflect the change.
// This is declarative programming at it's finest.

// When rendering component instances use the "key" attribute which must set to a unique ID for every item in the
// list.