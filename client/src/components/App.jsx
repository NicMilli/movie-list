import React from 'react';
import MovieList from './MovieList.jsx';
import sampleMovies from '../Data/sampleMovies.js';
import Search from './Search.jsx';
import {useState} from 'react';

const App = () => {
  const [movies, setMovies] = useState(sampleMovies);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    var results = [];
    movies.map((movie) => {
      if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(movie);
      }
    });
    if (results.length === 0) {
      results.push('Sorry, no movies in the list match your search');
    }
    setSearchResults(results);
  }

  return (
    <div>
      <h1>MovieList</h1>
      <Search handleClick={handleSearch}/>
      {searchResults[0] === 'Sorry, no movies in the list match your search'
      ? <p>{searchResults[0]}</p> <MovieList movies={movies}/>
      : <MovieList movies={searchResults.length === 0 ? movies : searchResults}/>}
    </div>
  )
};

export default App;