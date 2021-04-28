import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import NominationListItem from './components/NominationListItem';

import './App.css';

function App() {
  const [nominations, setNominations] = useState([{title: "Legally Blonde", year: "2001"}, {title: "fhfhwjekfhwk je;fhwjekf hwkje;fhw jekfhwkj e;wjekf hwkje;f hw jekfhwkje;f nksdj ebfjw efuwquf isd uf hdjksf njdfnds jknfjsd", year: "1999"}]);

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
    if (newNominations.length < 5) {
      newNominations.push({
        title: title,
        year: year
      });
      setNominations(newNominations);
    }
  }

  return (
    <div className="app">
      <div className="noms-header mobile">
        <h1>Nominations</h1>
        {nominations.map(function(o, i) {
          return <NominationListItem deleteNomination={deleteNomination} title={o.title} year={o.year} key={i}/>
        })}
      </div>
      <div className="main-content">
        <h1>The Shoppies</h1>
        <SearchBar nominations={nominations} onNominated={onNominated}/>
      </div>
    </div>
  );
}

export default App;
