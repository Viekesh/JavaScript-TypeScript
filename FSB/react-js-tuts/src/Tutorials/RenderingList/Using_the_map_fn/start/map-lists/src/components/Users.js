import React, { Component } from "react";
import getUsers from "../services/getUsers";
import ProfileCard from "./ProfileCard";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount = async () => {
    const fetchUsers = await getUsers();
    this.setState({
      users: fetchUsers
    })
  };
  render() {
    return (
      // this.state.users.map(u  => <ProfileCard data={u} key={u.id} />)
      // or you can also add check to see if we do have content in the array before we render our component instances
      this.state.users.length !== 0 ? this.state.users.map(u => <ProfileCard data={u.data} key={u.id} />) : "Loading Data..."
      // this process is known as conditional rendering means the exact nature of the output is dependant on the condition
    );
  }
}

export default Users;
