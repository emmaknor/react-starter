import React from 'react';
import $ from 'jquery';
import MovieList from './MovieList';
import Movies from './Movies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: []};
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.searchTMBD((movies) => {
      this.setState({movies: movies.results});
    })
  }

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }

}



export default App;
