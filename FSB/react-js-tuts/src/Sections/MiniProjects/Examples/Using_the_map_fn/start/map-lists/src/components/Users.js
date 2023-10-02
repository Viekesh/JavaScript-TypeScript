import React, { Component } from "react";
import getUsers from "../services/getUsers";
import ProfileCard from "./ProfileCard";

class Users extends Component {
  render() {
    return (
      <ProfileCard
        data={{
          name: "Jeremy Simmons",
          email: "jeremy@somecorp.com",
          phone: "9872349881",
          profilePic: "https://randomuser.me/api/portraits/med/men/70.jpg"
        }}
      />
    );
  }
}

export default Users;
