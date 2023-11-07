import React from 'react';

function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <div className="custom-card">
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p>Tanggal: {note.createdAt}</p>
        <button onClick={() => onDelete(note.id)}>Hapus</button>
      </div>
    </div>
  );
}

export default NoteCard;
