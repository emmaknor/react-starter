import React from 'react';
import MovieList from '../../src/components/MovieList.js';
import AddMovie from '../../src/components/AddMovie.js';
import CSS from '../../src/main.css';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      watchedMovies: [],
      toWatchMovies: [],
      movieSearchText: "",
      movieAddText: "",
    };

    this.goClick = this.goClick.bind(this);
    this.addClick = this.addClick.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.addTextChange = this.addTextChange.bind(this);
    this.watched = this.watched.bind(this);
    this.toWatch = this.toWatch.bind(this);
    this.addToWatched = this.addToWatched.bind(this);
    this.getMovieInformation = this.getMovieInformation.bind(this);
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

  goClick (e) {
    e.preventDefault();
    // if movie includes searched text, display movie, otherwise display "no movie by that name found"
    (this.state.movies.filter((movie, i) => {
      if (movie.title.toLowerCase().includes(this.state.movieSearchText.toLowerCase())) {
        return movie;
      }
    }).length > 0) ?
      this.setState({
        movies: this.state.movies.filter((movie, i) => {
          if (movie.title.toLowerCase().includes(this.state.movieSearchText.toLowerCase())) {
            return movie;
          }
        })
      }) : this.setState({
        movies: [{title: "no movie by that name found"}]
      });

    document.getElementById('movie-search').value = '';
  }


  addClick (e) {
    e.preventDefault();
      this.setState({
        movies: [...this.state.movies, {title: this.state.movieAddText}]
      });

    document.getElementById('movie-add').value = '';
  }

  // capture input from search bar
  searchTextChange (e) {
    this.setState({
      movieSearchText: e.target.value
    })
  }

  addTextChange (e) {
    this.setState({
      movieAddText: e.target.value
    })
  }

  watched (e) {
    this.setState({
      movies: this.state.watchedMovies
    })
  }

  toWatch (e) {
    this.setState({
      movies: this.state.toWatchMovies
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
      <div>
        <h2 className="movie-list-title">Movie List</h2>
        <form>
          <input type="text" placeholder="Add movie title here" id="movie-add" onChange={this.addTextChange}/>
          <button type="submit" className="input-button" onClick={this.addClick}>Add!</button>
        </form>

        <form>
          <input type="text" placeholder="Search..." id="movie-search" onChange={this.searchTextChange}/>
          <button type="submit" className="input-button" onClick={this.goClick}>Go!</button>
        </form>
        <button type="submit" className="watch-toggles" onClick={this.watched}>Watched</button>
        <button type="submit" className="watch-toggles" onClick={this.toWatch}>To Watch</button>
        <MovieList movies={this.state.movies}
        addToWatched={this.addToWatched}
        watchedMovies={this.state.watchedMovies}
        toWatchMovies={this.state.toWatchMovies}/>
      </div>
  )}
}



export default App;
