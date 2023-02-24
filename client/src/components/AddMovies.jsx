import React from 'react';
import {useState} from 'react';

const AddMovies = (props) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInputText('');
    if (inputText.length > 0) {
      props.handleClick(inputText);
    };
  }

  return (
    <div>
      <form>
        <input type='text' value={inputText} onChange={handleChange}></input>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  )
};

export default AddMovies;