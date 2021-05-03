import React, { useState } from 'react';
import SearchResult from './SearchResult';

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorGettingResults, setErrorGettingResults] = useState(false);
  
  async function searchBarOnChange(e) {
    if (e.key === 'Enter') {
      setSearchResults([]);
      setErrorGettingResults(false);
      setQuery(e.target.value);
      fetchResultsWithPaging(e.target.value);
    }
  }

  async function fetchResultsWithPaging(query) {
    var pageNumber = 1;
    var searchResultsArray = [];

    const axios = require('axios');
    const OMDB_REQUEST = `https://www.omdbapi.com/?s=${query}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}&page=${pageNumber}`;

    var response = await axios(OMDB_REQUEST);
    console.log(response);
    var totalSearchResults = response.data.totalResults;

    if (response.data.Response === "False") {
      setErrorGettingResults(true);
      return;
    }

    while (totalSearchResults > 0) {
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
      response = await axios(OMDB_REQUEST);
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
          {errorGettingResults ? <h4>No results matching "{query}"</h4> : <div>{query !== "" && searchResults.length === 0 ? <div id="loader"></div> : <div>
              {query === "" ? <div></div> : <div><h4>Search results for "{query}"</h4></div> }
                {searchResults.map(function(o, i) {
                  return <SearchResult nominations={props.nominations} onNominated={props.onNominated} title={o.title} year={o.year} key={i}/>
              })}</div>}
          </div> }

        </div>
    </div>
  );
}

export default SearchBar;