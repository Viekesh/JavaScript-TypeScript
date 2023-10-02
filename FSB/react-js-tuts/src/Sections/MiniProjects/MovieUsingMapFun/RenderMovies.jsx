import React from "react";
import "./RenderMovies.css";
import MovieCard from "./MovieCard";
import movies from "./MovieDB";

const RenderMovies = () => {
  return (
    <>
      <div className="app">
        {movies.map(({ movie_title, movie_genre }) => (
          <MovieCard title={movie_title} genre={movie_genre} />
        ))}
      </div>
    </>
  );
};

export default RenderMovies;
