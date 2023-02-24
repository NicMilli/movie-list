import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
import SwitchTabs from './SwitchTabs.jsx';
import {useState, useEffect} from 'react';


const App = () => {
  const [movies, setMovies] = useState([{title: 'Please add movies to your list', watched: false}]);
  const [searchResults, setSearchResults] = useState([]);
  const [toWatchPage, setToWatchPage] = useState(true);

  const handleSearch = (searchTerm) => {
    var results = [];
    movies.map((movie) => {
      if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(movie);
      }
    });
    if (results.length === 0) {
      return alert('Sorry, no movies in the list match your search');
    }
    setSearchResults(results);
  };

  const handleAdd = (movieName) => {
    if (movies[0].title === 'Please add movies to your list') {
      setMovies([{title: movieName, watched: false}]);
    } else if (movies.filter(name => name === movieName).length > 0) {
      alert('Sorry, this movie is already in the list');
    } else {
      setMovies([...movies, {title: movieName, watched: false}]);
    }

  };

  const toggleWatched = (movie) => {
    movie.watched = !movie.watched;
    let allMovies = movies.slice();
    allMovies[movie] = movie;
    setMovies(allMovies);
  };

  const toggleTabs = () => {
    setToWatchPage(prevToWatch => !prevToWatch);
  };

  return (
    <div>
      <h1 className='mov'>MovieList</h1>
      <AddMovies handleClick={handleAdd}/>
      <Search handleClick={handleSearch}/>
      <SwitchTabs handleClick={toggleTabs}/>
      <MovieList movies={searchResults.length > 0 ? searchResults : toWatchPage === true ? movies.filter(name => name.watched === false) : movies.filter(name => name.watched === true)}
        toggleWatched={toggleWatched}/>
    </div>
  )
};

export default App;