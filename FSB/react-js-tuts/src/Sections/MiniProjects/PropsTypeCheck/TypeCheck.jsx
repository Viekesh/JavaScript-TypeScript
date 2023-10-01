import React from "react";
import "./TypeCheck.css";
import UserCard from "./UserCard";
import users from "./UserDB";

const TypeCheck = () => {
  return (
    <div className="app">
      {users.map(({ id, name, designation, isAdmin, photo }) => (
        <UserCard
          key={id}
          name={name}
          designation={designation}
          isAdmin={isAdmin}
          photo={photo}
        />
      ))}
    </div>
  );
};

export default TypeCheck;

// In this hands-on exercise, we’re working with the same UserCard component that we played with in the previous
// exercise. However, it seems one of our cards has missing data. The user ‘Xavier Klocke’ is an administrator,
// however, the card doesn’t show the ‘Admin’ badge as shown in the case of ‘Brad Gibson’. The PropTypes package
// can be used to throw error warnings in the console if data in the props is missing or is of a different type
// than needed.

// Open UserCard.js. Begin by importing the PropTypes package by adding the statement as highlighted below
// import React from "react";

// import PropTypes from "prop-types";

// We’ll then add a check for the ‘isAdmin’ prop by using the PropTypes package. Add the following statement below
// your component declaration. We’re declaring the isAdmin prop as required and of the type Boolean.

// UserCard.propTypes = {

// isAdmin: PropTypes.bool.isRequired

// };

// While we are at it, we will also add type checks for other props that this component uses.
// UserCard.propTypes = {
//   name: PropTypes.string.isRequired,

//   designation: PropTypes.string.isRequired,

//   photo: PropTypes.string.isRequired,

//   isAdmin: PropTypes.bool.isRequired,
// };

// That’s it!
