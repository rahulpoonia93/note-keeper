import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote2(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addNote2} />
      <div>
        {notes.map((note, id) => {
          return (
            <Note
              deleteItem={deleteNote}
              key={id}
              id={id}
              title={note.title}
              content={note.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
