import React from 'react';
import Movies from './Movies';

const MovieList = ({movies, addToWatched}) => {
  return (
    <div>
      {
        movies.map((movie, i) => (
          <Movies movie={movie} key={i} addToWatched={addToWatched} movies={movies}/>
        ))
      }
    </div>
  );
}

export default MovieList;
