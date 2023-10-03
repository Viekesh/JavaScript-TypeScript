// import React from "react";
// import PropTypes from "prop-types";

// const UserCard = ({ name, designation, photo, isAdmin }) => (
//   <div className="user-card">
//     <img src={photo} alt={name} />
//     <div className="user-name">{name}</div>
//     <div className="designation">{designation}</div>
//     {isAdmin ? <div className="admin">A</div> : null}
//   </div>
// );

// UserCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   designation: PropTypes.string.isRequired,
//   photo: PropTypes.string.isRequired,
//   isAdmin: PropTypes.bool.isRequired,
// };

// export default UserCard;

import React from "react";
import { PropTypes } from "prop-types";

const UserCard = ({ name, designation, photo, isAdmin }) => (
  <div className="user-card">
    <img src={photo} alt={name} />
    <div className="user-name">{designation}</div>
    <div className="designation">{designation}</div>
    {isAdmin ? <div className="admin">A</div> : null}
  </div>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default UserCard;
