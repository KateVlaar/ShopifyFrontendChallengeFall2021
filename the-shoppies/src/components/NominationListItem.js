
function NominationListItem(props) {

  function deleteNomination() {
    props.deleteNomination(props.title, props.year);
  }

  return (
    <div className="nominations-list fade-in-animation">
        <span onClick={deleteNomination} className="material-icons remove-button">remove_circle</span>
        <p className="nominations-title"><b>{props.title}</b> ({props.year}) </p>
    </div>
  );
}

export default NominationListItem;