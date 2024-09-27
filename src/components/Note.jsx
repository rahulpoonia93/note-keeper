import React from "react";

function Note(props) {
  function handleClick(event) {
    props.deleteItem(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} value={props.id}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
