// NoteCard.js
import React from 'react';
import { showFormattedDate } from '../../utils/index'; // Adjust the path accordingly

function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <div className="custom-card">
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p>Tanggal: {showFormattedDate(note.createdAt)}</p>
        <button onClick={() => onDelete(note.id)}>Hapus</button>
      </div>
    </div>
  );
}

export default NoteCard;
