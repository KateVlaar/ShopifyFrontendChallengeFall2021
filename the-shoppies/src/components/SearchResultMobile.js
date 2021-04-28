
function SearchResultMobile(props) {

  function onNominateClicked() {
    props.onNominated(props.title, props.year);
  }

  return (
    <div className="search-result-mobile">
      <p className="movie-title-mobile"><b>{props.title}</b></p>
      <p className="movie-year-mobile"> ({props.year}) </p>
      {props.nominations.some(nomination => nomination.title === props.title && nomination.year === props.year) ?
        <span className="material-icons">star</span> :
        <span onClick={onNominateClicked} className="material-icons">star_border</span>}
    </div>
  );
}

export default SearchResultMobile;