// src/NoteForm.js
import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(inputValue);
    setInputValue('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default NoteForm;
