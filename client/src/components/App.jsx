import React from 'react';
import MovieList from './MovieList.jsx';
import sampleMovies from '../Data/sampleMovies.js';
import {useState} from 'react';

const App = () => {
  const [movies, setMovies] = useState(sampleMovies);

  return (
    <div>
    <h1>MovieList</h1>
    <MovieList movies={movies}/>
  </div>
  )
};

export default App;