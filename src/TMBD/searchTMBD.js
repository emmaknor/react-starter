// popular movies url:
//https://api.themoviedb.org/3/movie/popular?api_key=9e3b5d2e7ffeb7008a2f68398e41ab66&language=en-US&page=1
import $ from 'jquery';

var searchTMBD = (successCB) => {

  $.ajax({
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=9e3b5d2e7ffeb7008a2f68398e41ab66&language=en-US&page=1',
    type: 'GET',
    success: successCB,
    error: (error) => {
      console.error('Failed to fetch movie information', error);
    }
  })
};

export default searchTMBD;
