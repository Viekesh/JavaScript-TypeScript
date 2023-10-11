import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getRecipes } from "../API/RecipesDetailList";



const RecipeList = () => {

    const { category, recipeId } = useParams();

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes(category).then(data => setRecipes(data));
    }, [category]);

    return (
        <>
            <div className="recipe_list">
                <div className="category">
                    {category.toUpperCase()} Recipes
                </div>

                {
                    !recipeId && recipes && recipes.map(recipe => (
                        <NavLink to={`${category}/${recipe.id}`} key={recipe.id}></NavLink>
                    ))
                }
            </div>
        </>
    )
}

export default RecipeList;