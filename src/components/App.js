import React from 'react';
import MovieList from '../../src/components/MovieList.js';
import AddMovie from '../../src/components/AddMovie.js';

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
      movieSearchText: "",
      movieAddText: ""
    };

    this.goClick = this.goClick.bind(this);
    this.addClick = this.addClick.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.addTextChange = this.addTextChange.bind(this);
  }

  // on click of go
  goClick (e) {
    e.preventDefault();
    // use movie search text to search through movies & provide whichever data we want
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

  // capture input from search bar when go is clicked & set state.movieSearchText equal to the value w/in search bar
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


  render(){
    return(
      <div className="app">
        <h2 className="movie-list-title">Movie List</h2>
        <form>
          <input type="text" placeholder="Add movie title here" id="movie-add" onChange={this.addTextChange}/>
          <button type="submit" onClick={this.addClick}>Add!</button>
        </form>

        <form>
          <input type="text" placeholder="Search..." id="movie-search" onChange={this.searchTextChange}/>
          <button type="submit" onClick={this.goClick}>Go!</button>
        </form>
        <MovieList movies={this.state.movies}/>
      </div>
  )}
}



export default App;
