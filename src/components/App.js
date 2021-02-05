import React from 'react';
import MovieList from '../../src/components/MovieList.js';
import AddSearchMovies from '../../src/components/AddSearchMovies.js';
import CSS from '../../src/main.css';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      watchedMovies: [],
      toWatchMovies: [],
    };

    this.addToWatched = this.addToWatched.bind(this);
    this.getMovieInformation = this.getMovieInformation.bind(this);
    this.handleClicks = this.handleClicks.bind(this);
    this.watchToggle = this.watchToggle.bind(this);
    this.getMovieInformation();
  }

  getMovieInformation () {
    this.props.searchTMBD((results) => {
      console.log('Movie results fetched succesfully :)');
      this.setState({
        movies: results.results,
        toWatchMovies: results.results
      })
    });
  }


   // reset movies to be equal to whatever we pass into it
   handleClicks (alteredMovies) {
     this.setState({
       movies: alteredMovies
     })
   }

  watchToggle (e) {
    this.setState({
      movies: this.state.[e.target.name]
    })
  }

  // when the watched button is clicked for a given movie, add the movie to the add movie arr & take it out of the toWatch movie arr
  addToWatched (movie) {
    let toWatchCopy = this.state.toWatchMovies.slice();
    let index = this.state.toWatchMovies.indexOf(movie);
    this.setState({
      watchedMovies: [...this.state.watchedMovies, movie]
    })
    toWatchCopy = toWatchCopy.filter((unwatchedMovie, i) => {
      if (!unwatchedMovie.title.includes(movie.title)) {
        return movie;
      }
    });
    this.setState({
      toWatchMovies: toWatchCopy
    })

  }


  render(){
    return(
      <div className="innerApp">
        <h2 className="movie-list-title">Movie List</h2>
        <AddSearchMovies handleClicks={this.handleClicks} movies={this.state.movies}/>
        <button type="submit" className="watch-toggles" name="watchedMovies" onClick={this.watchToggle}>Watched</button>
        <button type="submit" className="watch-toggles" name="toWatchMovies" onClick={this.watchToggle}>To Watch</button>
        <MovieList movies={this.state.movies}
        addToWatched={this.addToWatched}
        watchedMovies={this.state.watchedMovies}
        toWatchMovies={this.state.toWatchMovies}/>
      </div>
  )}
}



export default App;
