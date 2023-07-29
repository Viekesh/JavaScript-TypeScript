import React from 'react';
import Genre from './Genre';

const MovieCard = ({title, genre}) => {
  return (
    <div className="movie-card">

    <div className="title">{title}</div>

    <div className="genre">

      {genre.split("|").map(gen => (

        <Genre label={genre} />

      ))}

    </div>

  </div>
  )
}

export default MovieCard;