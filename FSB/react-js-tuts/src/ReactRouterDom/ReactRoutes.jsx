import React from "react";
import { Router, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";



const ReactRoutes = () => {
    return (
        <>
            <Router>
                <Routes exact path="/" element={<LandingPage />} />
            </Router>
        </>
    )
}



export default ReactRoutes;