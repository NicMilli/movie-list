import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => (
  <div>
    {props.movies.map((movie) => {
      return <MovieListItem movie={movie} key={movie.title}/>
    })}
  </div>
);

export default MovieList;