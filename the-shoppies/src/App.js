import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import NominationListItem from './components/NominationListItem';

import './App.css';

function App() {
  const [nominations, setNominations] = useState([]);
  const NUM_TOTAL_NOMINATIONS = 5;

  // https://www.w3schools.com/howto/howto_js_snackbar.asp
  function showSnackbar() {
    var snackbar = document.getElementById("noms-done-snackbar");
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
  }

  function deleteNomination(title, year) {
    var indexToDelete = -1;
    nominations.map(function(o, i) {
      if (o.title === title && o.year === year) {
        indexToDelete = i;
      }
    });
    const updatedNominations = [...nominations];
    updatedNominations.splice(indexToDelete, 1);
    setNominations(updatedNominations);
  }

  function onNominated(title, year) {
    const newNominations = [...nominations];
    if (newNominations.length < NUM_TOTAL_NOMINATIONS) {
      newNominations.push({
        title: title,
        year: year
      });
      setNominations(newNominations);
    }

    if (newNominations.length === NUM_TOTAL_NOMINATIONS) {
      showSnackbar();
    }
  }

  return (
    <div className="app">
      <div className="noms-header">
        <h1>Nominations</h1>
        {nominations.map(function(o, i) {
          return <NominationListItem deleteNomination={deleteNomination} title={o.title} year={o.year} key={i}/>
        })}
      </div>
      <div className="main-content">
        <div className="shoppies-title">
          <div className="shopify-logo"></div>
           <h1 className="shoppies-title-text">the shoppies</h1>
        </div>
        <h4 className="shoppies-subtitle-text">Search for movie titles and select 5 nominations</h4>
        <SearchBar nominations={nominations} onNominated={onNominated}/>
      </div>
      <div id="noms-done-snackbar">
        <span className="material-icons">done&nbsp;</span>
        Successfully nominated 5 films
    </div>
    </div>
  );
}

export default App;
