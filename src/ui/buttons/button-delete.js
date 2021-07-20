import React from 'react';
import './buttons.css';

export default function ButtonDelete() {

  function mouseDown(event) {
    let button = event.target.closest('button');
    button.style.color = '#AE1E3B';
  }

  function mouseUp(event) {
    let button = event.target.closest('button');
    button.style.color = '';
  }

  return (
    <button 
      className="button delete"
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <i class="fas fa-trash fa-md" />
      <p>Delete</p>
    </button>
  );
}
