import React, { useState } from 'react';
import NoteList from '../src/components/NoteList/NoteList';
import AddNoteForm from '../src/components/NoteForm/NoteForm';
import { getInitialData, showFormattedDate } from './utils';
import './App.css';

function App() {
  const initialNotes = getInitialData();
  const [notes, setNotes] = useState(initialNotes);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div>
    <h1 className="text-center mt-3">Aplikasi Catatan Pribadi</h1>
    <div className="grid-container">
      <AddNoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  </div>
  );
}

export default App;
