import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => {

  return (
    <div>
      {props.movies.map((movie) => {
        return <MovieListItem movie={movie} key={movie.title} toggleWatched={props.toggleWatched}/>
      })}
    </div>
  )
};

export default MovieList;