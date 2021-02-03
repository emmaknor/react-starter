import React from 'react';
import Movies from '../../src/components/Movies.js';

var MovieList = ({movies}) => (
  <div className="movie-list">
    {
        movies.map((movie, i) => (
          <Movies movie={movie} key={i}/>
        ))
    }
  </div>
);

export default MovieList;