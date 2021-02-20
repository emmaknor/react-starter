import React from 'react';
import $ from 'jquery';
import MovieList from './MovieList';
import Movies from './Movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: [], watched: [], toWatch: []};
    this.searchMovie = this.searchMovie.bind(this);
    this.addTitle = this.addTitle.bind(this);
    this.addToWatched = this.addToWatched.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.searchTMBD((movies) => {
      this.setState({movies: movies.results});
      this.setState({toWatch: movies.results});
    })
  }

  getTitle(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  searchMovie(e) {
    e.preventDefault();
    //let searched = [];
    let searched = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.searchBar.toLowerCase());
    })
    searched.length === 0 ? this.setState({movies: [{title: "movie not found :("}]}): this.setState({movies: searched});
    document.getElementById("searchBar").value = ''
  }

  addTitle(e) {
    e.preventDefault();
    let newMovie = {title: this.state.addMovie};
    this.setState({movies: this.state.movies.concat(newMovie)});
    document.getElementById("addMovie").value = '';
  }

  addToWatched(movie, e) {
    e.preventDefault();
    this.setState({watched: this.state.watched.concat(movie)});
    let toWatchCopy = [...this.state.toWatch];
    if (toWatchCopy.indexOf(movie) > -1) {
      toWatchCopy.splice(toWatchCopy.indexOf(movie), 1);
    }
    this.setState({toWatch: toWatchCopy});
  }

  toggleWatch(e) {
    this.setState({movies: this.state[e.target.id]});
  }

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        Search for a movie:
        <input placeholder="Enter movie title" id="searchBar" onChange={this.getTitle.bind(this)}></input>
        <button onClick={this.searchMovie}>Search</button>
        Add movie:
        <input placeholder="Enter movie title" id="addMovie" onChange={this.getTitle.bind(this)}></input>
        <button onClick={this.addTitle}>Add!</button>
        <button onClick={this.toggleWatch} id="watched">Watched</button>
        <button onClick={this.toggleWatch} id="toWatch">To Watch</button>
        <MovieList movies={this.state.movies} addToWatched={this.addToWatched}/>
      </div>
    )
  }

}



export default App;
