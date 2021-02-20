import React from 'react';
import Movies from './Movies';

const MovieList = ({movies}) => {
  return (
    <div>
      {
        movies.map((movie, i) => (
          <Movies movie={movie} key={i}/>
        ))
      }
    </div>
  );
}

export default MovieList;
