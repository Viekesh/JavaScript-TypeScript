import React, { useEffect, useState } from "react";
import "./Recipes.css";
import { getCategories } from "../API/RecipesDetailList";
import { NavLink, Route, useMatch } from "react-router-dom";
import RecipeList from "./RecipeList";



const Recipes = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(cats => setCategories(cats));
    }, []);

    const { path, url } = useMatch();

    const cat = () => {
        console.log(categories);
    };

    cat();

    return (
        <>
            <div className="recipes">
                <div className="recipes_navigation">
                    {
                        categories && categories.map((c, i) => (
                            <div className="menu">
                                <NavLink to={`${url}/${c}`}>{c.toUppercase()}</NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Route path={`${path}`} element={<RecipeList />}>
                <RecipeList />
            </Route>
        </>
    )
}

export default Recipes;