import { useMediaQuery } from 'react-responsive';

function SearchResult(props) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  function onNominateClicked() {
    props.onNominated(props.title, props.year);
  }

  return (
    <div >
      {isTabletOrMobile ? 
        <div className="search-result">
          <p className="movie-title"><b>{props.title}</b></p>
          <p className="movie-year"> ({props.year}) </p>
          {props.nominations.some(nomination => nomination.title === props.title && nomination.year === props.year) ?
            <span className="material-icons">star</span> :
            <span onClick={onNominateClicked} className="material-icons">star_border</span>}
        </div> :
        <div className="search-result">
          <p className="movie-title"><b>{props.title}</b></p>
          <p className="movie-year"> ({props.year}) </p>
          
          {props.nominations.some(nomination => nomination.title === props.title && nomination.year === props.year) ?
            <button disabled={true} className="nominate-button">
              <span className="material-icons">star</span>
              Nominated
            </button> :
            <button onClick={onNominateClicked} className="nominate-button">
              <span className="material-icons">star_border</span>
              Nominate
            </button>}
        </div>} 
    </div>
  );
}

export default SearchResult;