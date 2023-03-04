import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
import SwitchTabs from './SwitchTabs.jsx';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {searchMovieDB, searchMovieID} from '../Data/searchMovies.js';
import '../app.css';


const App = () => {
  const [movies, setMovies] = useState([{title: 'Please add movies to your list', watched: false}]);
  const [searchResults, setSearchResults] = useState([]);
  const [toWatchPage, setToWatchPage] = useState(true);
  const [addOptions, setAddoptions] = useState([])

useEffect( () => {
  fetchMovies();
},[])

const fetchMovies = async() => {
  //var currentmovies = await
  var response = await axios.get('/api/movies');
  var currentMovies = await response.data;
  setMovies(currentMovies[0]);
};

const addMovies = async (title) => {
  return await axios.post('/api/movies', {
    title: title
  }, {
    headers: {
      'Content-Type': 'application/json'
    }})
};

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

  const handleAdd = async(movieName) => {
     if (movies.filter(name => name.title === movieName).length > 0) {
      alert('Sorry, this movie is already in the list');
    } else {
      await addMovies(movieName);
      await fetchMovies();
    }
  };

  const toggleWatched = async(movie) => {
    await axios.put('/api/movies', {
      title: movie.title
    }, {
      headers: {
        'Content-Type': 'application/json'
      }});
    var index = movies.indexOf(movie);
    let allMovies = movies.slice();
    movie.watched === 1 ? movie.watched = 0 : movie.watched = 1;
    allMovies[index] = movie;
    setMovies(allMovies);
  };

  const toggleTabs = () => {
    setToWatchPage(prevToWatch => !prevToWatch);
  };

  return (
    <div >
      <div className='center'>
        <h1 className='test'>MovieList</h1>
      </div>
      <AddMovies handleClick={handleAdd}/>
      <Search handleClick={handleSearch}/>
      <SwitchTabs handleClick={toggleTabs}/>
      <MovieList movies={searchResults.length > 0 ? searchResults : toWatchPage === true ? movies.filter(movie => movie.watched === 0) : movies.filter(movie => movie.watched === 1)}
        toggleWatched={toggleWatched}/>
    </div>
  )
};

export default App;