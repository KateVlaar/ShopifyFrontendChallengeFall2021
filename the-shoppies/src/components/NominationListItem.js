
function NominationListItem(props) {

  function deleteNomination() {
    props.deleteNomination(props.title, props.year);
  }

  return (
    <div className="nominations-list">
        <span onClick={deleteNomination} className="material-icons">remove_circle</span>
        <p className="nominations-title"><b>{props.title}</b> ({props.year}) </p>
    </div>
  );
}

export default NominationListItem;