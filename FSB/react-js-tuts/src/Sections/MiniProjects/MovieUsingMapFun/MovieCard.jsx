import React from "react";
import Genre from "./Genre";

const MovieCard = ({ title, genre }) => {
  return (
    <>
      <div className="movie-card">
        <div className="title">{title}</div>
        <div className="genre">
          {/* <Genre label={genre} /> */}
          {genre.split("|").map((gen) => (
            <Genre label={gen} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCard;

// In this exercise, we will use the map function to render lists of components using an Array of movies.
// You can see we’re using a component called MovieCard. This component accepts a movie title and genre and
// displays that on the UI as a card. We want to render multiple instances of this component using a data set that
// we’re importing in the moviesDb variable.

//  To render multiple instances of the MovieCard component, we will use the map function. Modify your code as highlighted below.

// const App = () => {
//   return (
//     <div className="app">
//       {moviesDb.map(({ movie_title, movie_genre }) => (
//         <MovieCard title={movie_title} genre={movie_genre} />
//       ))}
//     </div>
//   );
// };

// You should now see multiple cards on the UI, one each for a movie title. However, if you notice closely, the
// genre in many cases shows up as a list separated by a pipe (|) character. Let’s use this to render multiple
// separate genre units. Open the MovieCard.js file.

//  Modify your MovieCard component as highlighted below. We’re using split() to convert a pipe delimited string into an Array, on which we can then use the map function to render multiple instances of the Genre component.

// const MovieCard = ({ title, genre }) => (
//   <div className="movie-card">
//     <div className="title">{title}</div>

//     <div className="genre">
//       {genre.split("|").map((gen) => (
//         <Genre label={gen} />
//       ))}
//     </div>
//   </div>
// );

// That’s it! You should now see multiple separate genres. We still have an important element missing in this
// setup. Let’s learn more about it in the next video and we’ll get back to this exercise again thereafter.
