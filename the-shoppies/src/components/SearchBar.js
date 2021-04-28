import React, { useState } from 'react';
import SearchResult from './SearchResult';

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  async function searchBarOnChange(e) {
    if (e.key === 'Enter') {
      setQuery(e.target.value);
      fetchResultsWithPaging(e.target.value);
    }
  }

  async function fetchResultsWithPaging(query) {
    var pageNumber = 1;
    var searchResultsArray = [];

    const axios = require('axios');

    var response = await axios(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&page=${pageNumber}`);
    var totalSearchResults = response.data.totalResults;

    while (totalSearchResults > 0) {
      if (response.data.Response === "True") {        
        for (var i = 0; i < response.data.Search.length; i++) {
          if (response.data) {
            searchResultsArray.push({
              title: response.data.Search[i].Title,
              year: response.data.Search[i].Year,
            });
          }
        }
        totalSearchResults -= response.data.Search.length;
        pageNumber += 1;
        
        console.log(searchResultsArray);
        } else {
          // TODO: Show error message
          break;
        }
      response = await axios(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&page=${pageNumber}`);

    }
    setSearchResults(searchResultsArray);
  }

  return (
    <div >
        <div className="search-bar">
          <input onKeyPress={searchBarOnChange} type="text" name="search" placeholder="Enter a movie title"></input>
          <span className="material-icons md-dark">search</span>
        </div>
        <div className="search-results-container">
          {query === "" ? <div></div> : <div><h4>Search results for "{query}"</h4></div> }
          {searchResults.map(function(o, i) {
            return <SearchResult nominations={props.nominations} onNominated={props.onNominated} title={o.title} year={o.year} key={i}/>
          })}
        </div>
    </div>
  );
}

export default SearchBar;