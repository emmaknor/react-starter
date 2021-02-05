import React from 'react';

class AddSearchMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieAddText: '',
      movieSearchText: ''
    }

    this.goClick = this.goClick.bind(this);
    this.addClick = this.addClick.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.addTextChange = this.addTextChange.bind(this);
  }

  goClick (e) {
    e.preventDefault();
    // if movie includes searched text, display movie, otherwise display "no movie by that name found"
    (this.props.movies.filter((movie, i) => {
      if (movie.title.toLowerCase().includes(this.state.movieSearchText.toLowerCase())) {
        return movie;
      }
    }).length > 0) ?
    this.props.handleClicks(this.props.movies.filter((movie, i) => {
      if (movie.title.toLowerCase().includes(this.state.movieSearcText.toLowerCase())) {
        return movie;
      }
    })) :
    this.props.handleClicks([{title: "no movie by that name found"}]);

    document.getElementById('movie-search').value = '';
  }

  // reset movies to be equal to whatever we pass into it
  addClick (e) {
    e.preventDefault();
    this.props.handleClicks([...this.props.movies, {title: this.state.movieAddText}])

    document.getElementById('movie-add').value = '';
  }

  //capture input from search bars
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



  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Add movie title here" id="movie-add" name="movieAddText" onChange={this.addTextChange}/>
          <button type="submit" className="input-button" onClick={this.addClick}>Add!</button>
        </form>

        <form>
          <input type="text" placeholder="Search..." id="movie-search" name="search" onChange={this.searchTextChange}/>
          <button type="submit" className="input-button" onClick={this.goClick}>Go!</button>
        </form>
      </div>
    );
  }

}


export default AddSearchMovies;