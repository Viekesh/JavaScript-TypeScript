import React, { useContext } from "react";
import UserCtx from "../Ctx/UserCtx";



const User = () => {

    const { name, lastLogged } = useContext(UserCtx);

    return (
        <>
            <div className="user">
                Welcome back {name}
            </div>

            <div className="last_logged">
                Last LoggedIn : {lastLogged.toUTCString()}
            </div>
        </>
    )
};



export default User;
