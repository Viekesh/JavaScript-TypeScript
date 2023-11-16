import React, { useState } from "react";
import ThemePicker from "./Components/ThemePicker";
import UserCtx from "./Ctx/UserCtx";
import ThemeCtx from "./Ctx/ThemeCtx";
import StatsCtx from "./Ctx/StatsCtx";
import Dashboard from "./Components/Dashboard";
import "./UserContextAPI.css";



const userData = {
    name: "Vincent K",
    lastLogged: new Date(21, 12, 6),
}

const statsData = {
    aqi: 120,
    aqText: "Poor air quality. You may face breathing difficulties!"
}


const UseContextAPI = () => {

    const [theme, setTheme] = useState({
        backgroundColor: "rgba(255,255,255)",
        color: "rgb(0,0,0,0.95)"
    });

    return (
        <>
            <div className="context_container">

                <ThemePicker onSetTheme={ruleset => setTheme(ruleset)} />

                <UserCtx.Provider value={userData}>
                    <ThemeCtx.Provider value={theme}>
                        <StatsCtx.Provider value={statsData}>
                            <Dashboard />
                        </StatsCtx.Provider>
                    </ThemeCtx.Provider>
                </UserCtx.Provider>
            </div>
        </>
    )
}



export default UseContextAPI;