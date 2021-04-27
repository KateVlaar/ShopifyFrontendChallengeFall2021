// import './App.css';
import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([{}]);
  
  async function searchBarOnChange(e) {
    const axios = require('axios');
    if (e.key === 'Enter') {
      setQuery(e.target.value);

      axios.get(`http://www.omdbapi.com/?s=${e.target.value}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
      .then(function (response) {
        console.log(response);
      })
    }
  }

  return (
    <div>
        <div className="search-bar">
          <input onKeyPress={searchBarOnChange} type="text" name="search" placeholder="Enter a movie title"></input>
          <span className="material-icons md-dark">search</span>
        </div>
        {query === "" ? <div></div> : <div><h4>Search results for "{query}"</h4></div> }
    </div>
  );
}

export default SearchBar;