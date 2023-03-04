import React from 'react';
import {useState} from 'react';
import {searchMovieDB, searchMovieID} from '../Data/searchMovies.js';

const AddMovies = (props) => {
  const [inputText, setInputText] = useState('');
  const [movieOptions, setMovieOptions] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await searchMovieDB(inputText);
    if (response.results.length === 0) {
      alert('No movie with that name found');
    }
    setMovieOptions(response.results);
  };

  const dropDownChange = (e) => {
    props.handleClick(e.target.value);
    setInputText('');
    setMovieOptions([])
  };

  return (
    <div>
      <form>
        <input type='text' value={inputText} onChange={handleChange}></input>
        <button onClick={handleClick}>Add</button>
        <br/>
        { movieOptions.length > 0 ?
        <select onChange={dropDownChange}>
          <option>Please select a movie title below!</option>
          {movieOptions.map(option => <option value={option.title} key={option.id}>
            {option.title}
            </option>)}
        </select>
        : null
        }

      </form>
    </div>
  )
};

export default AddMovies;