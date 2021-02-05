import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      togglePanel: false
    }
    this.panelView = this.panelView.bind(this);
  }

  panelView (e) {
    if (this.state.togglePanel) {
      this.setState({
        togglePanel: false
      })
    } else {
      this.setState({
        togglePanel: true
      })
    }
  }

  render () {
    return (
      <div className="movie">
        <div className="movie-title"onClick={() => this.panelView()}>
          {this.props.movie.title}
        </div>
        {
          this.state.togglePanel ?
          <div className="movie-details">
            <p>Release Date: {this.props.movie.release_date}</p>
            <p>Vote Average: {this.props.movie.vote_average}</p>
            <p>Popularity Score: {this.props.movie.popularity}</p>
            <img src={`https://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`} className="image"/>
            <button type="submit" className="watched-button" onClick={() => this.props.addToWatched(this.props.movie)}>Watched</button>
            </div> : null
        }
      </div>
    )}
}

export default Movies;
