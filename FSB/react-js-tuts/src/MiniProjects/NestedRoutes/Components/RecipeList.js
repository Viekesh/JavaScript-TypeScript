// import React, { useState, useEffect } from "react";
// import { Layout, Col, Typography } from "antd";
// import { useParams, Link } from "react-router-dom";
// import { getRecipes } from "../api";
// import RecipeCard from "./RecipeCard";
// import RecipeDetail from "./RecipeDetail";



// The recipe's card at  the bottom of the page are being rendered by the RecipeList component which again
// queries the same API using the getRecipe function this time.

// We are currently fetching breakfast recipes by passing the "breakfast" keyword manually. By the end of this
// video this would all be dependant on the active route URL.

// So, first up let's bring up the "Link" component from the react router library so we can turn our menu
// item into hyperlink library


// const { Title } = Typography;

// const RecipeList = () => {
//   const { category, recipeId } = useParams();
//   const [recipes, setRecipes] = useState([]);
//   useEffect(() => {
//     getRecipes(category).then(data => setRecipes(data));
//   }, [category]);
//   return (
//     <Layout>
//       <Title level={3}>{category.toUpperCase()} RECIPES</Title>
//       <Col span={24} align="center">
//         {!recipeId &&
//           recipes &&
//           recipes.map(recipe => (
//             <Link to={`${category}/${recipe.id}`} key={recipe.id}>
//               <RecipeCard recipe={recipe} />
//             </Link>
//           ))}
//         {recipeId && <RecipeDetail id={recipeId} />}
//       </Col>
//     </Layout>
//   );
// };

// export default RecipeList;
