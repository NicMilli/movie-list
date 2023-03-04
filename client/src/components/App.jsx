import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
import SwitchTabs from './SwitchTabs.jsx';
import {useState, useEffect} from 'react';
import axios from 'axios';


const App = () => {
  const [movies, setMovies] = useState([{title: 'Please add movies to your list', watched: false}]);
  const [searchResults, setSearchResults] = useState([]);
  const [toWatchPage, setToWatchPage] = useState(true);

useEffect( () => {
  fetchMovies();
},[])

const fetchMovies = async() => {
  //var currentmovies = await
  var response = await axios.get('/api/movies');
  var currentMovies = await response.data;
  console.log(currentMovies[0]);
  setMovies(currentMovies[0]);
};

const addMovies = (title) => {
  axios.post('/api/movies', {
    title: title
  }, {
    headers: {
      'Content-Type': 'application/json'
    }}).then((currentMovies) => {
      setMovies([...movies, {title: title, watched: 0}]);
  })
}

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

  const toggleWatched = (movie) => {
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
    <div>
      <h1 className='mov'>MovieList</h1>
      <AddMovies handleClick={handleAdd}/>
      <Search handleClick={handleSearch}/>
      <SwitchTabs handleClick={toggleTabs}/>
      <MovieList movies={searchResults.length > 0 ? searchResults : toWatchPage === true ? movies.filter(movie => movie.watched === 0) : movies.filter(movie => movie.watched === 1)}
        toggleWatched={toggleWatched}/>
    </div>
  )
};

export default App;