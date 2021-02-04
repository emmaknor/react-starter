import React from 'react';
import Movies from '../../src/components/Movies.js';

var MovieList = ({movies, addToWatched, watchedMovies, toWatchMovies}) => (
  <div className="movie-list">
    {
        movies.map((movie, i) => (
          <Movies movie={movie}
          key={i}
          addToWatched={addToWatched}
          watchedMovies={watchedMovies}
          toWatchMovies={toWatchMovies}
          />
        ))
    }
  </div>
);

export default MovieList;