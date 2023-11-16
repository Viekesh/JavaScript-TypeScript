import React, { useContext } from "react";
import ThemeCtx from "../Ctx/ThemeCtx";
import User from "./User";
import Stats from "./Stats";



const Dashboard = () => {

    const { theme } = useContext(ThemeCtx);

    return (
        <>
            <div className="dashboard" style={theme}>
                <h1 className="title">Dashboard</h1>
                <User />
                <Stats />
            </div>
        </>
    )
};



export default Dashboard;
