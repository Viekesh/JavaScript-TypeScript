import React from "react";
import users from "./UserDB";
import UserCard from "./UserCard";



const PropsComponent = () => {
    return (
        <>
            <div className="app">
                {
                    users.map(({ id, name, designation, isAdmin, photo }) => (
                        <UserCard
                            key={id}
                            name={name}
                            designation={designation}
                            isAdmin={isAdmin}
                            photo={photo}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default PropsComponent;







// In this hands-on exercise, we will work on a component called UserCard which has to accept data using props.
// We will implement props in this function component so that it accepts data from a resource.

// We’re rendering instances of the UserCard component here using a map function on a data Array that is being
// fetched from an external file. However, the three UserCard instances show the same data. We can use props to
// accept dynamic data from the resource.

// As you can see we use parameters in our UserCard function... name, photo, designation, isAdmin

// we will remove instances of static data and replace with expressions that allow rendering data received in the
// props. Modify your code as highlighted below. Note the user of the ternary expression to render an element that
// marks the user as an ‘admin’. The isAdmin prop brings a boolean value which can be used for conditionally
// rendering an element when the value is true.

// const UserCard = ({ name, designation, photo, isAdmin }) => (
//   <div className="user-card">
//     <img src={photo} alt={name} />

//     <div className="user-name">{name}</div>

//     <div className="designation">{designation}</div>

//     {isAdmin ? <div className="admin">A</div> : null}
//   </div>
// );

// Our last step involves using the props to supply data to the UserCard component. So, head back to
// ParentComponent.jsx and add props that send data to the UserCard component as highlighted below:

// That’s it! Your UserCard component instances should now display a unique user per instance.

// Props (which stands for Properties) act as conduits, that is, it lets parent components pass data to its child
// components, in a one-way data flow.

// A State is used when a component has to store and process dynamic data, and is always local to a component. But
// since the state is local and encapsulated within a component, how do we share this data with other components
// down the hierarchy? A typical React application is made up of several components and while we have multiple
// techniques to share data between components, the most fundamental way is by using props.

// Props offer a simple way for parent components to pass data to child components. In terms of usage, they are
// like standard attributes on a component and can be bound to dynamic data by using a pair of curly braces.

// Props are immutable, that is, the data of a prop cannot be changed. This is because the concept on which Props
// have been built is that of pure functions and any changes made in the data of parameters cannot be changed in
// Prop.

// Inside a class component, props can be accessed using this.props.propName. When working with function
// components, all props are received using a single object as an argument to the function.

// Props implement top to bottom, one-way data flow, where data that is stored or generated in a parent component
// is passed down the hierarchy using props.

// It also means that in a hierarchy of components where state data is to be used, the state should always be
// situated at the nearest logical parent. This practice is commonly referred to as “Lifting the state up” and it
// results in logical maintenance and management of data.

// Props are read-only. This means that the components must act like pure functions and should never change or
// modify data in the props.

// If you have to modify data, then store it in state and make modifications, or use a simple variable in the
// render method to achieve the same.

// If we do not pass any value to a prop, it defaults to true. It is generally not recommended to leave props
// without values.

// The last and final point to remember is when set a prop using double or single quotes, the value will be
// treated as a static string and not as a dynamic reference to a variable or a non-string entity.
// If we wish to pass dynamic data such as Numbers, an Object, or even functions, then we'll have to use curly
// braces.

//