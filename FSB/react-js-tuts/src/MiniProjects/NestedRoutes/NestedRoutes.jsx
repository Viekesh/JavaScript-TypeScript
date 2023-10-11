import React from "react";
import { Link } from "react-router-dom";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";



const NestedRoutes = () => {
    return (
        <>
            <div className="nested_routes">
                <div className="menu">
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Login">Login</Link>
                </div>
                <Home />
                <Recipes />
            </div>
        </>
    )
}

export default NestedRoutes;