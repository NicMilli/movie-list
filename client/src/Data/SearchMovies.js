import apiKey from '../config.js';

//const API_KEY = process.env.REACT_APP_API;
//const url = 'https://api.themoviedb.org/3/search/movie';
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;
const urlID = 'https://api.themoviedb.org/3/movie/';


const searchMovieDB = async (q) => {
  // const response = await fetch(url, {
  //   headers: {
  //     'query': 'Jack Reacher'
  //   }
  // });
  const response = await fetch(`${url}&query=${q.split(' ').join('+')}`);
  const data = await response.json();
  return data;
};

const searchMovieID = async (id) => {
  const response = await fetch(`${urlID}${id}?api_key=${apiKey}`);
  const data = await response.json();
  return data;
};

export {searchMovieDB, searchMovieID};