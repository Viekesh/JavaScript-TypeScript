import React from "react";



const UserCard = ({ id, name, designation, isAdmin, photo }) => {
    return (
        <>
            <div className="user-card">
                <img src={photo} alt={name} />
                <div className="user-name">{name}</div>
                <div className="designation">{designation}</div>
                {isAdmin ? <div className="admin">A</div> : null}
            </div>
        </>
    )
}

export default UserCard;