import React, { useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm/NoteForm';
import NoteList from './components/NoteList/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Aplikasi Catatan</h1>
      <NoteList notes={notes} deleteNote={deleteNote} />
      <NoteForm addNote={addNote} />
    </div>
  );
}

export default App;
