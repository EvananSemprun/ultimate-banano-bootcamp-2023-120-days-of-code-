import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (event) => {
    event.preventDefault();
    const noteContent = event.target.noteContent.value;
    const newNote = { content: noteContent };
    setNotes([...notes, newNote]);
    event.target.reset();
  };

  const handleEditNote = (event, index) => {
    const editedNoteContent = event.target.value;
    const editedNote = { ...notes[index], content: editedNoteContent };
    const newNotes = [...notes];
    newNotes[index] = editedNote;
    setNotes(newNotes);
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <form onSubmit={handleAddNote}>
        <input type="text" name="noteContent" placeholder="Add a note" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <input
              type="text"
              value={note.content}
              onChange={(event) => handleEditNote(event, index)}
            />
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
