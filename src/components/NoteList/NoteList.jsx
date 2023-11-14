import React from 'react';
import NoteCard from '../noteCard/NoteCard';

function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={onDelete} />
        ))
      ) : (
        <p>Tidak ada catatan.</p>
      )}
    </div>
  );
}

export default NoteList;
