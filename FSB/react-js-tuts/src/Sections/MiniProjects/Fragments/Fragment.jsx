import React from "react";
import Search from "./Search";
import Authentication from "./Authetication";

// In this exercise, we will implement the Fragment operator in a React Component instead of an enclosing
// div element.

// This component returns an instance of the Search and Authentication components. Since a React component
// can only return a single element, we’ve implemented a div as an enclosing parent.However, we should
// instead be using the Fragment operator to prevent an unwanted DOM node.

// Modify Header component and replace the div with the fragment operator as highlighted below.

const Header = () => {
    return (
        <>
            <Search />
            <Authentication />
        </>
    )
}


export default Header;



// When rendering multiple instances of adjacent elements using the fragment operator, what is the correct
// way to implement the key attribute ?

// Ans :
// employeeList.map(({ id, profile, academic }) => {
// return (
//     <Fragment key={id}>
//         <Profile data={profile} />
//         <Academic data={academic} />
//     </Fragment>
// );
// });



// When would you want to use a regular <div> as the wrapper instead of the fragment operator?
// Ans:
// When implementing props and event listeners other than the key attribute.