import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const NoteList = ({notes, deleteNote}) => {
  return (
    <div> 
        <h2>Daftar Catatan</h2>
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
        </li>
      ))}
    </ul></div>
  )
}

export default NoteList