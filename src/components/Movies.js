import React from 'react';

// var Movies = ({movie, addToWatched, watchedMovies, toWatchMovies}) => (
//   <div className="movie">
//     {movie.title}
//     <button type="submit" className="watched-button" onClick={() => addToWatched(movie)}>Watched</button>
//     <div></div>
//   </div>
// );


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
      // hide panel somehow
      // switch panel to false
      this.setState({
        togglePanel: false
      })
    } else {
      // show panel somehow
      // switch panel to true
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
          <div>
            <p>Release Date: {this.props.movie.release_date}</p>
            <p>Vote Average: {this.props.movie.vote_average}</p>
            <p>Popularity Score: {this.props.movie.popularity}</p>
            <img src={`https://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`}/>
            <button type="submit" className="watched-button" onClick={() => this.props.addToWatched(this.props.movie)}>Watched</button>
            </div> : null
        }
      </div>
    )}
}

export default Movies;

/*
start with hard-coded information & go from there
 */

/*
Steps for Movie Panel:

4. onClick of movie div invoke helper func that displays the panel & switches it's specific toggle state to true
5. obtain info for each movie & store through API key
6. import/export data through API
7. create new file for API key & new file for ajax request
8. refactor watch button to live inside panel & function accordingly
9. OPTIONAL: create another helper func/refactor other helper func for when togglePanel is set to true, to hide panel/reset toggle status to false

*/



/*
Data from TMBD I want:

1. year
2. run time
3. metascore
4. imbdrating
5. image

[include watched button in the panel]
 */