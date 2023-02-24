import React from 'react';
import {useState} from 'react';
import {searchMovieDB, searchMovieID} from '../Data/searchMovies.js';

const MovieListItem = (props) => {
  const [clicked, setClicked] = useState(false);
  const [info, setInfo] = useState('');

  const handleClick = async (e) => {
    console.log('click')
    var movieID = await searchMovieDB(props.movie.title);
    console.log(movieID.results[0].id)
    var movieInfo = await searchMovieID(movieID.results[0].id);
    console.log(movieInfo)
    if (movieInfo) {
      // setInfo({Runtime: `${movieInfo.runtime} minutes`, 'Release Date': movieInfo.release_date.slice(0, 3), Metascore: movieInfo.vote_average, IMDB_ID: movieInfo.imdb_id});
      setInfo(movieInfo[0].description);
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
      clicked ? <div>{props.movie.watched === true ? <p style={{color: 'red'}} onClick={handleClick}>{props.movie.title} has been watched</p> : <p onClick={handleClick}>{props.movie.title}</p>}
      <p>{info}<button onClick={toggleMovie}>Watched</button></p>
      </div> : <div>{props.movie.watched === true ? <p style={{color: 'red'}} onClick={handleClick}>{props.movie.title} has been watched</p> : <p onClick={handleClick}>{props.movie.title}</p>}
      </div>
    )
}
};

export default MovieListItem;