import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <div className="noms-header mobile">
        <h1>Nominations</h1>
      </div>
      <div className="">
        <h1>The Shoppies</h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
