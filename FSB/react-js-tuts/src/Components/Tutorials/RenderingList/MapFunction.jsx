// In this exercise, we will use the map function to render lists of components using an Array of movies

// Here you can see we’re using a component called MovieCard. This component accepts a movie title and genre and displays that on the UI as a card. We want to render multiple instances of this component using a data set that we’re importing in the moviesDb variable.

// To render multiple instances of the MovieCard component, we will use the map function. Modify your code as highlighted below.



import React from 'react'
import MovieCard from './MovieCard';
import movies from './moviesdb';

const MapFunction = () => {
  return (
    <div className="app">

      {
        movies.map(({ id, movie_title, movie_genre }) => (
          <MovieCard key={id} title={movie_title} genre={movie_genre} />
        ))
      }

    </div>
  )
}

export default MapFunction;

// That’s it! You should now see multiple separate genres. We still have an important element missing in this setup. Let’s learn more about it in the next video and we’ll get back to this exercise again thereafter.






// What is the most common type of feature that we see these days in web applications and mobile apps?

// Almost every application today renders a list of elements. Lists are everywhere. When you open your inbox, you see a list of emails.

// On YouTube you see a list of videos, on stock trading platforms, you get a list of stocks and prices and I can go on and on.

// This clearly shows that rendering lists happens to be quite important for most applications and is an integral part of UIs.

// In its fundamental form, a list is essentially a collection of items that are mapped to instances of UI elements such as React components.



// Map Function

// In React, the most common way to translate a collection of items to renderable elements is by using a standard JavaScript map function.

// But first, let’s understand why we specifically use the map() function for this purpose.

// When you have a collection of items in an Array, the map function allows you to remodel the Array based on a given function.

// Let’s say we have a collection of employee names and job titles, and we want to produce an array with just the names of employees.

// By using a map function like so, we can extract just the name and produce a new Array.

// The same thing happens in React. We get an Array of React elements within our JSX template.

// This brings us to an important point. React allows you to render multiple elements if they’re expressed in an Array.

// Using the map function produces an Array of React elements, based on a data collection that we provide.

// And the fun part is, if the data comes from the state and is updated, the list on the UI will automatically update to reflect the change. This is declarative rendering at its finest.

// Now, when rendering component instances, we use the "key" attribute which must be set to a unique ID for every item in the list.

// Why do we need it? Let’s find out in the next topic.