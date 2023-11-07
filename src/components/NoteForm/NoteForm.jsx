import React, { useState } from 'react';

function AddNoteForm({ onAdd }) {
  const [newNote, setNewNote] = useState({ title: '', body: '' });

  const handleAddNote = () => {
    const newId = Date.now();
    const newNoteData = {
      id: newId,
      title: newNote.title,
      body: newNote.body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    onAdd(newNoteData);
    setNewNote({ title: '', body: '' });
  };

  return (
    <div>
      <h2>Tambah Catatan Baru</h2>
      <div>
        <input
          type="text"
          placeholder="Judul"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
      </div>
      <div>
        <textarea
          placeholder="Isi Catatan"
          value={newNote.body}
          onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
        />
      </div>
      <div>
        <button onClick={handleAddNote}>Tambah Catatan</button>
      </div>
    </div>
  );
}

export default AddNoteForm;
