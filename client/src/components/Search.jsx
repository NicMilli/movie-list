import React from 'react';
import {useState} from 'react';

const Search = (props) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInputText('');
    props.handleClick(inputText);
  }

  return (
    <div>
    <form className='formInput'>
      <input type='text' value={inputText} onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
    </form>

  </div>
  )
};

export default Search;