// import React, { useState, useEffect } from "react";
// import { Row, Layout, Menu, Divider } from "antd";
// import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
// import RecipeList from "./RecipeList";
// import { getCategories } from "../api";

// const Recipes = () => {
//   const [categories, setCategories] = useState([]);

  // Here we can use useEffect hook to load an array of category names from the API using the getCategories 
  // function.

  // Our mock api has a set of recipes organised by category name in an object and the getCategories function
  // simply returns these category names. Once the data is received we're setting it to the category
  // state variable and this renders the menu.

  // So, first up let's bring up the "Link" component from the react router library so we can turn our "menu"
  // item into hyperlink that actually push the unique URL into the stack.

  // useEffect(() => {
  //   getCategories().then(cats => setCategories(cats));
  // }, []);

  // By using this useRouteMatch hook function we can extract a property called "url". This property gives
  // us the current URL of the page in the stack so we can contruct route paths from this point onwards.
  // const { path, url } = useRouteMatch();
  // return (
  //   <Layout>
  //     <Row span={12}>
  //       <Menu mode="horizontal" theme="dark">
  //         {categories &&
  //           categories.map((c, i) => (
  //             <Menu.Item key={i}>
                
                // {/* For setting the route path using the "to" prop, we'll need to contruct the path from where */}
                // {/* we are when we visit the recipe's page to where we are going. */}
                // {/* The react router library provides us with both a helper component as well as a hook for */}
                // {/* dynamically fetching the current URL that the user is on, so that route path constructed */}
                // {/* from there. So, we bring in the useRouteMatch hook function first. */}
                
                // {/* So, by using simple template literals we can contruct our route path here by simply appending a "/" 
                // forward slash and a name of the category, which we are getting here using the variable "c". */}
//                 <Link to={`${url}/${c}`}>{c.toUpperCase()}</Link>
//               </Menu.Item>
//             ))}
//         </Menu>
//       </Row>
//       <Divider />
//       <Row>
//         <Switch>
//           <Route exact path={path}>
//             <h1>Select a category</h1>
//           </Route>
//           <Route path={`${path}/:category/:recipeId?`}>
//             <RecipeList />
//           </Route>
//         </Switch>
//       </Row>
//     </Layout>
//   );
// };

// export default Recipes;
