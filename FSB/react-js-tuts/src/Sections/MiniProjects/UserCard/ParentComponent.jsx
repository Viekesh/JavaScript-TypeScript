import React from "react";
import UserCard from "./UserCard";
import users from "./userDB";

const ParentComponent = () => {
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

export default ParentComponent;
