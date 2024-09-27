import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function addTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function addContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  function addNote(event) {
    const newNote = {
      title: title,
      content: content,
    };
    props.addItem(newNote);
    setTitle("");
    setContent("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={addTitle}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={addContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
