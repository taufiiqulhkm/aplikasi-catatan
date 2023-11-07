import React from 'react';
import NoteCard from '../noteCard/NoteCard';

function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
    {notes.map((note) => (
      <NoteCard key={note.id} note={note} onDelete={onDelete} />
    ))}
  </div>
  );
}

export default NoteList;
