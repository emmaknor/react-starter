import React from 'react';
import $ from 'jquery';
import MovieList from './MovieList';
import Movies from './Movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: []};
    this.searchMovie = this.searchMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.searchTMBD((movies) => {
      this.setState({movies: movies.results});
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

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        Search for a movie:
        <input placeholder="Enter movie title" id="searchBar" onChange={this.getTitle.bind(this)}></input>
        <button onClick={this.searchMovie}>Search</button>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }

}



export default App;
