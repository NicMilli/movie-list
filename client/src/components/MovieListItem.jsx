import React from 'react';
import {useState} from 'react';
import {searchMovieDB, searchMovieID} from '../Data/searchMovies.js';
import MovieInfo from './MovieInfo.jsx';

const MovieListItem = (props) => {
  const [clicked, setClicked] = useState(false);
  const [info, setInfo] = useState({});

  const handleClick = async (e) => {
    var movieID = await searchMovieDB(props.movie.title);
    if (movieID.results[0]) {
    var movieInfo = await searchMovieID(movieID.results[0].id);
    if (movieInfo) {

      setInfo({
        overview: movieInfo.overview,
        released: movieInfo.release_date,
        runtime: movieInfo.runtime,
        vote_average: movieInfo.vote_average,
        watched: props.movie.watched
      });
      setClicked(prevClicked => !prevClicked);
    }
    } else {
      setInfo(false);
      setClicked(prevClicked => !prevClicked);
    }

  };

  const toggleMovie = (e) =>  {
    props.toggleWatched(props.movie);
  }

  if (props.movie.title === 'Please add movies to your list') {
    return <p>{props.movie.title}</p>
  } else {
    return (
      clicked
      ? <div>{props.movie.watched === true ? <p style={{color: 'red'}} onClick={handleClick}>{props.movie.title} has been watched</p> : <p onClick={handleClick} className='test'>{props.movie.title}</p>}
      <MovieInfo toggleMovie={toggleMovie} info={info}/>
      </div>
      : <div>{props.movie.watched === true ? <p style={{color: 'red'}} onClick={handleClick}>{props.movie.title} has been watched</p> : <p onClick={handleClick} className='test'>{props.movie.title}</p>}
      </div>
    )
}
};

export default MovieListItem;