import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayMovie: null, click: false};
  }

  displayInfo(e) {
    e.preventDefault();
    // let movie = {};
    this.state.click ? this.setState({click: false}) : this.setState({click: true});
    // if (this.props.movies.indexOf(e.target.innerText))
    let selected = this.props.movies.filter((movie) => {return movie.title === e.target.innerText})[0];
    this.setState({displayMovie: selected});
  }

  render() {
    return (
      <div>
        {/* <table style={{border: "1px solid black"}}>
          <tbody>
          <tr>
          <td style={{border: "1px solid black"}}>{movie.title}</td>
          </tr>
          </tbody>
        </table> */}
        <ul>
          <li onClick={this.displayInfo.bind(this)}>{this.props.movie.title}</li>
          <button onClick={(e) => {this.props.addToWatched(this.props.movie, e)}}>Watched</button>
          {this.state.click ?
          <div>
            <div>Release Date: {this.state.displayMovie.release_date}</div>
            <div>Vote Average: {this.state.displayMovie.vote_average}</div>
            <div>Description: {this.state.displayMovie.overview} </div>
          </div>
          : null}
        </ul>
      </div>
    );
  }
}


export default Movies;
