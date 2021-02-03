import React from 'react';
import MovieList from '../../src/components/MovieList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      movieSearchText: ""
    };

    this.goClick = this.goClick.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
  }

  // on click of go
  goClick (e) {
    e.preventDefault();
    console.log('has been clicked :)');
    // use movie search text to search through movies & provide whichever data we want
    if (this.state.movies.filter((movie, i) => {
      if (movie.title.toLowerCase().includes(this.state.movieSearchText.toLowerCase())) {
        return movie;
      }
    }).length > 0) {
      this.setState({
        movies: this.state.movies.filter((movie, i) => {
          if (movie.title.toLowerCase().includes(this.state.movieSearchText.toLowerCase())) {
            return movie;
          }
        })
      })

    } else {
      this.setState({
        movies: [{title: "no movie by that name found"}]
      })
    }
  }

  // capture input from search bar when go is clicked & set state.movieSearchText equal to the value w/in search bar
  searchTextChange (e) {
    this.setState({
      movieSearchText: e.target.value
    })
  }


  render(){
    return(
      <div className="app">
        <h2 className="movie-list-title">Movie List</h2>
        <input type="text" placeholder="Search..." onChange={this.searchTextChange}/>
        <button type="submit" onClick={this.goClick}>Go!</button>
        <MovieList movies={this.state.movies}/>
      </div>
  )}
}



export default App;
