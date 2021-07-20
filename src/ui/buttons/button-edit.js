import React from 'react';
import './buttons.css';

export default function ButtonEdit() {

  function mouseDown(event) {
    let button = event.target.closest('button');
    button.style.color = 'lightgray';
  }

  function mouseUp(event) {
    let button = event.target.closest('button');
    button.style.color = '';
  }

  return (
    <button 
      className="button edit"
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <i class="fas fa-pen fa-md" />
      <p>Edit</p>
    </button>
  );
}
