
function SearchResultMobile(props) {

  return (
    <div className="search-result-mobile">
      <p className="movie-title-mobile"><b>{props.title}</b></p>
      <p className="movie-year-mobile"> ({props.year}) </p>
      <span className="material-icons">star_border</span>
    </div>
  );
}

export default SearchResultMobile;